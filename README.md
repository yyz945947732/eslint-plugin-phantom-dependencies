# eslint-plugin-phantom-dependencies

Make sure no 👻 [phantom dependencies](https://datacadamia.com/code/shipping/phantom) are used in your project.

![CI](https://github.com/yyz945947732/eslint-plugin-phantom-dependencies/actions/workflows/test.yml/badge.svg)
[![NPM version](https://img.shields.io/npm/v/eslint-plugin-phantom-dependencies.svg?logo=npm&logoColor=fff)](https://npmjs.org/package/eslint-plugin-phantom-dependencies)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/yyz945947732/eslint-plugin-phantom-dependencies/pulls)
[![License](https://img.shields.io/github/license/yyz945947732/eslint-plugin-phantom-dependencies.svg?style=flat)](https://github.com/yyz945947732/eslint-plugin-phantom-dependencies/blob/master/LICENSE)

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-phantom-dependencies`:

```sh
npm install eslint-plugin-phantom-dependencies --save-dev
```

## Usage

On your `.eslintrc` file extend the plugin's recommended configuration:

```json
{
  "extends": ["plugin:phantom-dependencies/recommended"]
}
```

If you want to use your own configuration, you can do so by adding the plugin to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["phantom-dependencies"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "phantom-dependencies/no-phantom-dependencies": "error"
  }
}
```

## Rules

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.

| Name                                                             | Description                                                 | 💼  |
| :--------------------------------------------------------------- | :---------------------------------------------------------- | :-- |
| [no-phantom-dependencies](docs/rules/no-phantom-dependencies.md) | Make sure no phantom dependencies are used in your project. | ✅  |

## LICENSE

[MIT](https://github.com/yyz945947732/eslint-plugin-phantom-dependencies/blob/master/LICENSE)
