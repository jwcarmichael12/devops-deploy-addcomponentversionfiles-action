const component = process.env.INPUT_COMPONENT;
let versionname = process.env.INPUT_VERSIONNAME.replace(/ /g, "_");
const base = process.env.INPUT_BASE;
const offset = process.env.INPUT_OFFSET;
const include = process.env.INPUT_INCLUDE;
const exclude = process.env.INPUT_EXCLUDE;
const saveExecuteBits = process.env.INPUT_SAVEEEXECUTEBITS === 'true';

const hostname = process.env.INPUT_HOSTNAME;
const username = process.env.INPUT_USERNAME;
const password = process.env.INPUT_PASSWORD;
const authToken = process.env.INPUT_AUTHTOKEN;
const disableSSLVerification = process.env.INPUT_DISABLESSLVERIFICATION === 'true';
const port = process.env.INPUT_PORT;
const https = require('https');
const date = new Date();
const currentDateTime = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "." + date.getHours() + "." + date.getMinutes() + "." + date.getSeconds();

versionname = versionname.length > 0 ? versionname.substring(0,59) : currentDateTime;

import('node-fetch')
  .then((module) => {
    const fetch = module.default;
    const apiUrl = 'https://' + hostname + ':' + port + '/cli/version/addVersionFiles?';
    
    if(component !== ""){
    	apiURL = apiURL + 'component=' + component + '&name=' + versionname + '&base=' + base;
    } else {
    	apiURL = apiURL + 'name=' + versionname + '&base=' + base;
    }
    
    if(include !== ""){
    	apiURL = apiURL + '&include=' + include;
    }
    
    if(exclude != "") {
    	apiURL = apiURL + '&exclude=' + exclude;
    }
    
    apiURL = apiURL + '&saveExecuteBits=' + saveExecuteBits;
    
    console.log("Adding files to existing DevOps Deploy component version with " + apiUrl);

    let authHeader;
    if(authToken !== ""){
      authHeader = 'Basic ' + Buffer.from('PasswordIsAuthToken:' + authToken).toString('base64');
    } else if(password !== ""){
      authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    } else if (authToken == "" && password == "") {
      throw new Error("Authentication unsuccessful!, Please provide either DevOps Deploy password or DevOps Deploy auth token ");
    }


    const httpsAgent = new https.Agent({
      rejectUnauthorized: disableSSLVerification === 'true'
    });

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': authHeader // Include the basic authentication header
      },
      agent: httpsAgent
    })
      .then(response => response.json())
      .then(result => {
        console.log('API response:', result);
        versionId = result.id;
        console.log('Component Version ID:', versionId);
      })
      .catch(error => {
        console.error('Unable to create component version in DevOps Deploy : ', error);
        throw new Error("Terminating!! ");
      })
      .then(() => {
        // Mark the component version creation/import as 'finished' so any
        // configured Deployment Triggers will fire.
        const finishUrl = 'https://' + hostname + ':' + port + '/cli/version/finishedImporting?component=' + component + '&version=' + versionname;

        console.log("Finishing creation of new DevOps Deploy component version with " + finishUrl);
        fetch(finishUrl, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': authHeader // Include the basic authentication header
          },
          agent: httpsAgent
        })
        .catch(error => {
          console.error('Unable to mark component version as finished : ', error);
          throw new Error("Terminating!! ");
        })
        .then(() => {
          // Add link to the new component version if one was given
          if (link != "") {
            const linkUrl = 'https://' + hostname + ':' + port + '/cli/version/addLinkWithName?component=' + component + '&version=' + versionname;
            const data = {
              "isPriority": "true",
              "link": link,
              "name": "Git commit",
            };

            console.log("Adding link to new DevOps Deploy component version with " + linkUrl);
            fetch(linkUrl, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authHeader // Include the basic authentication header
              },
              body: JSON.stringify(data),
              agent: httpsAgent
            })
            .then(response => response.text())
            .then(result => {
              console.log('Create link response:', result);
            })
            .catch(error => {
              console.error('Unable to add link to component version : ', error);
              throw new Error("Terminating!! ");
            });
          }
        });
      });
  })
  .catch((error) => {
    console.error('Error:', error);
  });






