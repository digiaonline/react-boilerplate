# Tools

Here you can read about the tools we prefer.

## Type-checking

Use [Flow](https://flowtype.org/) to perform type-checking on your code when possible.

Flow is so much more than simple type definitions for your classes, functions and variables. The real value is the fact that it can spot hard-to-miss errors in your code while you are writing it. In fact, if your have type definitions for all of your project, it will most likely work as intended. It will also make your code easier to read, because you do not need to perform null checks all around.

For building [React](https://facebook.github.io/react/) application we prefer Flow over [Typescript](https://www.typescriptlang.org/), because it has better [type definitions for React](https://flowtype.org/docs/react.html).

### Resources

- [Getting started with Flow](https://flowtype.org/docs/getting-started.html#_)

## Code style

Use [ESLint](http://eslint.org/) to enforce a code style. The code style should be consistent across each project. Our [default style](../.eslintrc) includes rules that will help you to produce code that is easy to read, write and review. You do not have to use the default style, feel free to customize the style to meet needs of your project.

**Protip:** Use the [--fix](http://eslint.org/docs/user-guide/command-line-interface#fix) flag to update code to match your code style. However, note that all problems are not fixable by using this option.

### Resources

- [List of available rules](http://eslint.org/docs/rules/)

## Compiler

Use [Babel](https://babeljs.io/) to transform your code from modern JavaScript to traditional JavaScript that will run in any browser.

### Presets

Babel does not do anything out of the box, you need to add some plugins for it to do anything.
You are usually best off with the [official presets](https://babeljs.io/docs/plugins/). We recommend that you use the [Stage 2 preset](https://babeljs.io/docs/plugins/preset-stage-2/) (also known as Draft: initial spec), because it includes pretty much everything worth including. We prefer this particular preset because it allows to write code that is easier to both read and write.

### Learn more

* [The Super Tiny Compiler](https://github.com/thejameskyle/the-super-tiny-compiler)

## Bundling

Use [Webpack](https://webpack.js.org/) to package your application for the browser. Webpack has four core concepts: entry, output, loaders and plugins.

### Entry

Webpack create bundle for your application based on a dependency graph. The root of this graph is know as an entry point. Webpack starts from the entry point and follows the dependency graph to know what to include in the the bundle. Entry is defined using the [entry](https://webpack.js.org/configuration/entry-context/#entry) property in the configuration.

### Output

You can tell Webpack what do with your application bundle by configuring its output. Output is defined using the [output](https://webpack.js.org/configuration/output) property in the configuration.

### Loaders

Loaders in Webpack transform files into modules as they are added to the dependency graph. Loaders can be used to include any type of files in your bundle, because they transform those files into JavaScript. Loaders are defined using the [module.rules](https://webpack.js.org/configuration/module/#module-rules) property in the configuration.

### Plugins

Plugins are most commonly used for manipulating your application bundle. Plugins are defined using the [plugins](https://webpack.js.org/configuration/plugins/) array in the configuration and most plugins are customizable via its own options. Since plugins can be used multiple times in the same configuration, you need to create an instance of it by calling it with `new`.

### Learn more

* [Webpack Guides](https://webpack.js.org/guides/)

## Dependencies

Use [Yarn](https://yarnpkg.com/en/) to manage the dependencies in your project instead of [NPM](https://www.npmjs.com/). Yarn allow you to get consistent installs across all systems thanks to its [lock-file](https://yarnpkg.com/en/docs/yarn-lock). Yarn's lock-file is superior to NPM's `npm-shrinkwrap.json` because it actually locks the dependencies, while shrinkwrap does not.

### Different type of dependencies

There are three different type of dependencies: `dependencies`, `devDependencies` and `peerDependencies`. Of these three you mainly use the first two. The libraries that are required to build your application for production use should be added under `dependencies` and the libraries that are only required during development goes under `devDependencies`. The third type, `peerDependencies` are reserved for libraries that may be required, but are not automatically installed. An example of this would be that `react` has `react-dom` as its peer dependency.

**Note:** When you are using Webpack this can get really confusing because you need a lot of libraries to build your application for production, which means that you need to add those to your `dependencies`.

## Scripts

Use [npm scripts](https://docs.npmjs.com/misc/scripts) instead of task runners like [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com/) to define scripts in your `package.json` file.

You should define at least the following scripts:

- `start` runs the application in development mode
- `test` runs the test suite
- `build` compiles the application for production

**Note:** Remember to test your production build every now and then to make sure that it works.
