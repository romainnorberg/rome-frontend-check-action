# Rome frontend action

Run [Rome](https://romefrontend.dev/) checks in your Github Actions.

For examples on how to use this, check out the [rome-frontend-check-action-demo](https://github.com/romainnorberg/rome-frontend-check-action-demo) repository

## Usage

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

***

## Action Spec:

### Environment variables
- None

### Inputs

- `version` _[optional]_ -  Package version. Default: `latest stable`
- `check-flags` _[optional]_ - Global Flags for check command _(rome check [flags])_. Default: empty

### Outputs
- None

***

<p align="left">
    <img src=".github/media/action-preview.jpg?raw=true" width="600" alt="Action preview">
</p>

***

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email romainnorberg@gmail.com instead of using the issue tracker.

## Credits

- [Romain Norberg](https://github.com/romainnorberg)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.