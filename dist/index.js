/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 477:
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nccwpck_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__nccwpck_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__nccwpck_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__nccwpck_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__nccwpck_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__nccwpck_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__nccwpck_require__.f).reduce((promises, key) => {
/******/ 				__nccwpck_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__nccwpck_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__nccwpck_require__.o(moreModules, moduleId)) {
/******/ 					__nccwpck_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__nccwpck_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__nccwpck_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __nccwpck_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const component = process.env.INPUT_COMPONENT;
let versionname = process.env.INPUT_VERSIONNAME.replace(/ /g, "_");
const description = process.env.INPUT_DESCRIPTION;
const link = process.env.INPUT_LINK;

const hostname = process.env.INPUT_HOSTNAME;
const username = process.env.INPUT_USERNAME;
const password = process.env.INPUT_PASSWORD;
const authToken = process.env.INPUT_AUTHTOKEN;
const disableSSLVerification = process.env.INPUT_DISABLESSLVERIFICATION === 'true';
const port = process.env.INPUT_PORT;
const https = __nccwpck_require__(687);
const date = new Date();
const currentDateTime = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + "." + date.getHours() + "." + date.getMinutes() + "." + date.getSeconds();

versionname = versionname.length > 0 ? versionname.substring(0,59) : currentDateTime;

__nccwpck_require__.e(/* import() */ 460).then(__nccwpck_require__.t.bind(__nccwpck_require__, 460, 23))
  .then((module) => {
    const fetch = module.default;
    const apiUrl = 'https://' + hostname + ':' + port + '/cli/version/createVersion?component=' + component + '&name=' + versionname + '&description=' + description + '&importing=true';
    
    console.log("Triggering creation of new DevOps Deploy component version with " + apiUrl);

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







})();

module.exports = __webpack_exports__;
/******/ })()
;
