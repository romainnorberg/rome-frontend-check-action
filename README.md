# Rome frontend action

Run [Rome](https://romefrontend.dev/) checks in your Github Actions.

## Inputs

### `version` _[optional]_

Package version. Default: `latest stable`

### `check-flags` _[optional]_

Global Flags for check command _(rome check [flags])_. Default: empty

## Example usage

```
on: [push]

jobs:
  rome-frontend-check:
    runs-on: ubuntu-latest

    name: A job to test action

    steps:
    - uses: actions/checkout@v1

    - name: Install node v12
      uses: actions/setup-node@v1
      with:
        node-version: 12

    - name: Run Rome check
      id: check
      uses: romainnorberg/rome-frontend-check-action@v1
      with:
        version: 10.0.3-beta # optional
        #check-flags: '--log-path <path>' # optional
        check-flags: '--verbose-diagnostics' # optional
```