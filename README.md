# React Boilerplate

[![Build Status](https://travis-ci.org/nordsoftware/react-boilerplate.svg?branch=master)](https://travis-ci.org/nordsoftware/react-boilerplate)
[![Test Coverage](https://lima.codeclimate.com/github/nordsoftware/react-boilerplate/badges/coverage.svg)](https://lima.codeclimate.com/github/nordsoftware/react-boilerplate/coverage)
[![Code Climate](https://codeclimate.com/github/nordsoftware/react-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/nordsoftware/react-boilerplate)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Gitter](https://img.shields.io/gitter/room/norsoftware/open-source.svg?maxAge=2592000)](https://gitter.im/nordsoftware/open-source)

A [Nord Software](https://github.com/nordsoftware/) project.

## Why do I want this?

As you probably know, there are numerous boilerplates available for [React](https://facebook.github.io/react/), so you might be wondering why you would want to use ours. Most of the boilerplate projects come with a lot of code that you rarely need. Our boilerplate was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and provides you with a great starting point for any React project with as few lines of code as possible, especially if you want to use [Flowtype](https://flowtype.org/).

## What do I need to get started?

- [Node](https://nodejs.org/en/download/) (version 6 or later)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## What's in the box?

- [Flowtype](https://flowtype.org/) Type checker
- [React](https://facebook.github.io/react/) User interface components
- [Redux](http://redux.js.org/) Predictable state container
- [Lodash](https://lodash.com/) Utility library
- [PostCSS](http://postcss.org/) CSS transformer
- [Babel](https://babeljs.io/) JavaScript transpiler
- [ESLint](http://eslint.org/) JavaScript Linter
- [Stylelint](https://stylelint.io/) CSS Linter
- [Webpack](https://webpack.js.org/) Module bundler
- [Jest](https://facebook.github.io/jest/) Testing solution

## How do I use this?

You can find our documentation [here](./docs/README.md).

## Usage

### Create project

Install [create-project](https://www.npmjs.com/package/create-project) and create your project.

```bash
yarn global add create-project
create-project my-project nordsoftware/react-boilerplate && cd my-project
```

### Install dependencies

Install the project dependencies using Yarn.

```bash
yarn
```

### Create the environment

Create your environment by copying the example environment.

```bash
cp .env.example .env
```

### Development server

You can start the development server with the `start` script.

```bash
yarn start
```

### Distribution build

You can compile the distribution build with the `build` script.

```bash
yarn build
```
## Test

### Test suite

You can run the test suite with the `test` script.

```bash
yarn test
```

## License

[MIT](LICENSE)
