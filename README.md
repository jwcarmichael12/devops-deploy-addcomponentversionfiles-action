# GitHub Action: Add files to an existing DevOps Deploy component version

This GitHub Action automates the process of adding files to an existing DevOps Deploy component version based on the provided inputs.

## Inputs

* `component` (optional): Name/ID of the component (Only required if not using version ID)
* `versionname` (required): Name/ID of the version
* `base` (required): Local base directory for upload.  All files inside this directory will be uploaded.
* `offet` (optional): Target path offset (the directory in the version files to which these files should be added)
* `include` (optional):  An include file pattern for selecting files to add (may be repeated)
* `exclude` (optional): An exclude file pattern for excluding files (may be repeated). Overrides includes.
* `saveExecuteBits` (optional): Saves execute bits for files. 
* `hostname` (required): Hostname or IP of the DevOps Deploy server.
* `port` (required): Port number of the DevOps Deploy server. Defaults to 8443.
* `username` (username:password or authToken is required): Username used to authenticate with the DevOps Deploy server.
* `password` (username:password or authToken is required): Password used to authenticate with the DevOps Deploy server.
* `authToken` (username:password or authToken is required): Authentication token used to authenticate with the DevOps Deploy server.  This will override the username:password if specified.
* `disableSSLVerification` (optional): A boolean value indicating whether to skip SSL certificate validation when making HTTPS requests. Default is `false`.

## Example Usage

```yaml
name: Add files to an existing DevOps Deploy Component Version

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Add files to existing DevOps Deploy Component Version
      uses: jwcarmichael12/devops-deploy-addcomponentversionfiles-action@v1.0
      with:
        component: 'MyComp'
        versionname: '1.1'
        base: 'dist'
        hostname: 'DevOps_Deploy_Server_hostname'
        port: '8443'
        authToken: '${{ secrets.DEVOPS_DEPLOY_AUTHTOKEN }}'
```
