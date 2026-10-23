# PHPurs package mappings

`packages.json` maps PureScript package names to registry releases or PHPurs
Git forks. Each Git entry records its repository, revision and declared
dependencies. This repository contains package metadata, with no runtime source
or standalone test suite.

When updating an entry, check the target package's public name, revision and
dependency list. Validate the JSON and build a consuming project's locked Spago
configuration with the TAST compiler and PHPurs. Do not infer that a registry
package with JavaScript FFI is PHP-compatible from its name alone.

See the [PHP library development guide](https://github.com/0x000000000000000000001/phpurs/blob/main/docs/libraries.md)
for the checkout layout, toolchain and library validation commands.
