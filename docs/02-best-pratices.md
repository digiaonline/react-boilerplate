# Best Practices

Here you can read about how we build our React applications.

## Code Style

Use [ESLint](http://eslint.org/) to enforce a code style. The code style should be consistent across each project. We provide a [default style](../.eslintrc), but each team is free to customize it to their needs.

## React

[React](https://facebook.github.io/react/) is a library from Facebook for building user interfaces.

### Components

Use stateless (or functional) components whenever possible. Class components are only necessary when you need a local state, e.g. input fields.

**Do**

```javascript
const Hello = ({message}) =>
  <h1>Hello World</h1>
```

**Do NOT do**

```javascript
class Hello extends Component {
  render() {
    return <h1>Hello World</h1>
  }
}
```

### Higher-Order Components

Use [higher-order components](https://facebook.github.io/react/docs/higher-order-components.html) (or decorators) to reuse component logic. A higher-order component is a function that takes a component and returns a new component.

### Context

Use [context](https://facebook.github.io/react/docs/context.html) together with higher-order components to pass props down the component tree when necessary. Context should be avoided when possible, because it makes the application more complex and harder to understand.

## State

Use [Redux](http://redux.js.org/) to manage the application state (also known as root state).

### Reducers

You should try to keep your application state as flat as possible.

**Do**

```javascript
const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
  }
}

combineReducers({
  list: listReducer,
})
```

**Do NOT do**

```javascript
const todoReducer = (state = {todos: []}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        list: [...state.list, action.payload],
      }
  }
}
```

**Protip:** You can use the [handleActions](https://github.com/acdlite/redux-actions#handleactionsreducermap-defaultstate) method from [Redux Actions](https://github.com/acdlite/redux-actions) to create your reducers.

### Action Creators

Use [FSAs]((https://github.com/acdlite/flux-standard-action)) (short for Flux Standard Actions) to define more human-friendly, useful and simple actions. Another benefit from using FSAs is that you can deal with errors more easily because they are treated as a first class concept.

**Do**

```javascript
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
})
```

**Do NOT do**

```javascript
const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
})
```

**Protip:** You can use the [createAction](https://github.com/acdlite/redux-actions#createactiontype-payloadcreator--identity-metacreator) method from [Redux Actions](https://github.com/acdlite/redux-actions) to create your actions creators.

### Selectors

Use selectors to select data from the state. Selectors are functions that take the application state and an optional set of properties and returns some data from the state. This way you can separate your components from the state, which means that you can refactor one without breaking the other.

**Do**

```javascript
const todosSelector = (state) => ({
  data: state.todos
})

connect(todosSelector)(Todos)
```

**Do NOT do**

```javascript
connect((state) => ({
  data: state.todos,
}))(Todos)
```

**Protip:** You can use [Reselect](https://github.com/reactjs/reselect) to create memorized selectors if your need to increase the performance of your selectors.

### Side-effects

Use [Redux Saga](https://redux-saga.github.io/redux-saga/) and its [side-effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) to separate your components from your application state in complex applications. This will allow you to simplify more complex applications, because your components can dispatch actions that will be handled by the side-effects.

### Learn more

* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
* [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
* [Redux side-effects and You](https://medium.com/javascript-and-opinions/redux-side-effects-and-you-66f2e0842fc3#.2z19w8rhk)

## Routing

Use [React Router](https://github.com/ReactTraining/react-router) to define the routes for your application.

**Protip:** You can use [React Router Redux](https://github.com/reactjs/react-router-redux) to connect React Router to Redux. It provides a reducer for the routing state and action creators for updating that state.

**Note:** At the time of writing this [React Router v4](https://github.com/ReactTraining/react-router/tree/v4) is in beta. The major difference from v3 is that it embraces *declarative composability*. New projects should switch to v4 once it is stable. However if you are using v3 and it is getting the job done, do not worry about switching.

## Utilities

Use [lodash](https://lodash.com/) or a similar utility library so that you do not need to write your own utility functions. Even though you might think that you do not need an utility library at first, you will need it sooner or later.

## Structure

Try keep your direction structure as flat as possible and group your code by feature and not by type. It is frustrating to navigate the file tree every time you need to find the selector for the component you are working on or the reducer that you are writing a test for. It is much easier to place all files that are associated with each other under the same directory.

**Note:** Your source code should always be placed in a `src` directory.

**Do**

```
src/
  todo/
    actions.js
    reducer.js
    selectors.js
    spec.js
    Todos.js
    todo.css
  index.js
  test.js
```

**Do NOT do**

```
src/
  actions/
    todo.js
  components/
    Todos.js
  reducers/
    todo.js
  selectors/
    todo.js
  styles
    todo.css
spec/
  todo.js
```

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

## Scripts

Use [npm scripts](https://docs.npmjs.com/misc/scripts) to define scripts for your application. The `start` script should start your application and the `test` script should run your test suite. You should also define a `dev` script that runs the application in development mode. Feel free to define additional scripts if necessary.

Traditional task runners such as [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com/) should be avoided at all cost, because they are usually unnecessary.

## Testing

You should write unit tests at least for the most important parts of your application, because it will make it easier to both develop and refactor the application. Having some unit tests will also make it easier for new developers to join project, as they can verify that everything still works as intended after making a change.

Focus on writing unit tests that ensure that your application is behaves correctly instead of testing every part of the application separately. Testing everything separately is time-consuming and it makes refactoring the application a nightmare, because you will spend a lot of time updating the test cases.

We have found [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) and [Enzyme](https://github.com/airbnb/enzyme) to be the best libraries for testing React applications.

## Quality Assurance

Use [Husky](https://github.com/typicode/husky) to ensure that the code works before it is committed.

You should run at least the following tasks before each commit:

- Linting
- Unit tests
- Type checking (if applicable)

**Protip:** Husky supports [all Git hooks](https://github.com/typicode/husky/blob/master/HOOKS.md). Simply add the corresponding `npm script` to your `package.json`.
