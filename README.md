# React Boilerplate

[![Build Status](https://travis-ci.org/nordsoftware/react-boilerplate.svg?branch=master)](https://travis-ci.org/nordsoftware/react-boilerplate)
[![Test Coverage](https://lima.codeclimate.com/github/nordsoftware/react-boilerplate/badges/coverage.svg)](https://lima.codeclimate.com/github/nordsoftware/react-boilerplate/coverage)
[![Code Climate](https://codeclimate.com/github/nordsoftware/react-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/nordsoftware/react-boilerplate)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Gitter](https://img.shields.io/gitter/room/norsoftware/open-source.svg?maxAge=2592000)](https://gitter.im/nordsoftware/open-source)

[React Boilerplate](https://github.com/nordsoftware/react-boilerplate/) by [Nord Software](https://github.com/nordsoftware/).

## Why do I want this?

As you probably know, there are numerous boilerplates avaliable for [React](https://facebook.github.io/react/), so you might be wondering why you would want to use ours. Most of the boilerplate projects come with a lot of code that you rarely need. Our boilerplate provides you with a great starting point for any React project with as few lines of code as possible, especially if you want to use [Flowtype](https://flowtype.org/). We strive to remove any code that turns out to be unnecessary.

## How do I use this?

You can find our documentation [here](./docs/README.md).

## What's in the box?

- [Flowtype](https://flowtype.org/) Type checker
- [Yarn](https://yarnpkg.com/) Dependency manager
- [React](https://facebook.github.io/react/) User interface components
- [Redux](http://redux.js.org/) Predictable state container
- [Lodash](https://lodash.com/) Utility library
- [PostCSS](http://postcss.org/) CSS plugins
- [Babel](https://babeljs.io/) ES.Next transpiler
- [ESLint](http://eslint.org/) Linting utility
- [Webpack](https://webpack.js.org/) Module bundler
- [Mocha](https://mochajs.org/) Testing framework
- [Chai](http://chaijs.com/) Assertion library
- [Enzyme](https://github.com/airbnb/enzyme) React testing utilities
- And more...

## Usage

### Create project

Install [create-project](https://www.npmjs.com/package/create-project) and create your project.

```bash
npm i -g create-project
create-project my-project nordsoftware/react-boilerplate
```

### Install dependencies

Install the project dependencies using Yarn.

```bash
yarn
```

### Development server

You can start the development server with the `start` script.

```bash
yarn start
```

### Distribution build

You can compile the distribution build with the `compile` script.

```bash
yarn run compile
```
## Test

### Test suite

You can run the test suite with the `test` script.

```bash
yarn test
```

**Protip:** You can also run the test suite in watch mode with the `test:watch` script.

### Coverage report

You can generate the test coverage report with the `test:coverage` script.

```
yarn run test:coverage
```

**Protip:** You can also generate the test coverage report in HTML with the `test:coverage-html` script.

## License

[MIT](LICENSE)
