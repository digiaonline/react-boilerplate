# Best Practices

Here you can read about how we build our React applications.

## Code Style

Use [ESLint](http://eslint.org/) to enforce a code style. The code style should be consistent across each project. We provide a [default style](../.eslintrc), but each team is free to customize it as they see fit.

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
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
  }
}
```

**Do NOT do**

```javascript
const todoReducer = (state = {todos: []}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
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
  text,
})
```

**Do NOT do**

```javascript
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
})
```

**Protip:** You can use the [createAction](https://github.com/acdlite/redux-actions#createactiontype-payloadcreator--identity-metacreator) method from [Redux Actions](https://github.com/acdlite/redux-actions) to create your actions creators.

### Selectors

TODO

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

## Packaging

TODO

## Tasks

TODO

## Quality Assurance

TODO

## Testing

TODO
