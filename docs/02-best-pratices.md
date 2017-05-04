# Best Practices

Here you can read about how we build our React applications.

## React

[React](https://facebook.github.io/react/) is a widely-used library from Facebook for building user interfaces.

### Components

Use stateless functional components when possible. Class components are only necessary when you need a local state, e.g. input fields.

Logic should **not** be performed in the `render` method or in functional components, because it may have severe performance implications. The reason for this is that components may be rendered tens of times every second, which in turn means that the logic will be evaluated as many times. The easiest way to avoid this is to use [Redux](http://redux.js.org/) and move logic into [selectors](#Selectors).

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

Use [context](https://facebook.github.io/react/docs/context.html) together with [higher-order components](#Higher-Order Components) to pass props down the component tree when necessary. Context should be avoided when possible, because it makes the application more complex and harder to understand.

## State

Use [Redux](http://redux.js.org/) to manage the application state (also known as root state).

### Reducers

You should try to keep your application state [as flat as possible](http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html).

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

Use selectors to select data from the state. Selectors are functions that take the application state and an optional set of properties and returns some data from the state. This way you can separate your components from the state, which means that you can refactor one without breaking the other. Selectors are also the easiest way to avoid adding logic to your rendering logic.

**Do**

```javascript
const todosSelector = (state) => ({
  data: state.todos,
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

### Example

You can use [this very project](https://github.com/nordsoftware/react-boilerplate/) as a real-world example of how to combine all of this for your projects.

### Resources

* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
* [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
* [Redux side-effects and You](https://medium.com/javascript-and-opinions/redux-side-effects-and-you-66f2e0842fc3#.2z19w8rhk)
* [Troubleshooting](http://redux.js.org/docs/Troubleshooting.html)

## Routing

Use [React Router](https://github.com/ReactTraining/react-router) to create routes for your application.

## Utilities

Use [lodash](https://lodash.com/) (or a similar utility library) instead of writing your own utility functions. Even though you might think that you do not need an utility library at first, you will need it sooner or later.

Here are some useful utility functions:

- [debounce](https://lodash.com/docs/#debounce)
- [find](https://lodash.com/docs/#find)
- [flatten](https://lodash.com/docs/#flatten)
- [flow](https://lodash.com/docs/#flow)
- [keyBy](https://lodash.com/docs/#keyBy)
- [get](https://lodash.com/docs/#get)
- [mapValues](https://lodash.com/docs/#mapValues)
- [pick](https://lodash.com/docs/#pick)
- [pluck](https://lodash.com/docs/#pluck)
- [omit](https://lodash.com/docs/#omit)
- [reduce](https://lodash.com/docs/#reduce)
- [set](https://lodash.com/docs/#set)
- [throttle](https://lodash.com/docs/#throttle)

## Structure

Try keep your direction structure as flat as possible and group your code by feature, and not by type. Nothing is more frustrating than navigating the file tree every time you need to find the selector for the component you are working on or the reducer that you are writing a test for. It is much easier to place all files that are associated with each other under the same directory.

React components are an exception to this, because it is better to keep them separate for clarity.

**Note:** Your source code should always be placed in a `src` directory.

**Do**

```
src/
  todo/
    components/
      Todos.js
      Todo.css
    actions.js
    reducer.js
    selectors.js
    spec.js
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
    Todo.css
spec/
  todo.js
```

## Testing

You should write unit tests at least for the most important parts of your application, because it will make it easier to both develop and refactor the application. Having some unit tests will also make it easier for new developers to join project, as they can verify that everything still works as intended after making a change.

Focus on writing unit tests that ensure that your application is behaves correctly instead of testing every part of the application separately. Testing everything separately is time-consuming and it makes refactoring the application a nightmare, because you will spend a lot of time updating the test cases.

We have found [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) to be the best libraries for testing React applications.

**Protip:** You can use [Jest Snapshot Testing](https://facebook.github.io/jest/docs/snapshot-testing.html) to test your React components without writing complex test cases.

## Quality Assurance

Use [Husky](https://github.com/typicode/husky) to ensure that the code works before it is committed.

You should run at least the following tasks before each commit:

- Linting
- Unit tests
- Type-checking (if applicable)

**Protip:** Husky supports [all Git hooks](https://github.com/typicode/husky/blob/master/HOOKS.md). Simply add the corresponding `npm script` to your `package.json`.
