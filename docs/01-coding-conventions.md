# Coding Conventions

Here you can read about our preferred ways of writing modern JavaScript.

## Classes

Use [ES2015 classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) instead of prototype-based inheritance. Having a single declarative form makes class patterns easier to use, and encourages interoperability.

```javascript
class Todo {
  constructor(text) {
    this.text = text
  }
}
```

## Class properties

Use instance properties to define initial values for class properties instead of defining them inside the [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor). Constructors are more useful when the class takes its initial values from the outside.

**Note:** You need to include the [transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/) Babel plugin in order to use class properties.

**Do**

```javascript
class Todo {
  text = 'Something to do'
}
```

```javascript
class Todo {
  constructor(text) {
    this.text = text
  }
}
```

**Do NOT do**

```javascript
class Todo {
  constructor() {
    this.text = 'Something to do'
  }
}
```

### Static keyword

Use [Static keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
instead of the traditional `Todo.staticMethod` syntax because it will allow you to contain all code related to particular class inside the class itself.

**Do**

```javascript
class Todo {
  static label = 'Todo'

  static staticMethod() {
    console.log('Static method has been called')
  }

  static anotherStaticMethod() {
    Todo.staticMethod()
  }
}
```

**Do NOT do**

```javascript
class Todo {}

Todo.label = 'Todo'

Todo.staticMethod = () => {
  console.log('Static method has been called')
}

Todo.anotherStaticMethod = () => {
  Todo.staticMethod()
}
```

## Arrow functions

Use [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) instead of traditional functions because they share the same lexical **this** (or scope) with the surrounding code, which is desirable in most cases.

### Class methods

Arrow functions are especially useful as class methods, because you do not need to bind every method to the scope separately.

**Do**

```javascript
class Todos {
  addTodo = (todo) => {
    // ...
  }
}
```

**Do NOT do**

```javascript
class Todos {
  constructor() {
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    // ...
  }
}
```

### Function expressions

Arrow functions (or function expressions) are more convenient than traditional functions, especially when [currying](https://www.sitepoint.com/currying-in-functional-javascript/), because you do not need to add a `return` statement for each nested function and you can even omit the curly brackets for one-line functions.

**Note:** Functions that are defined using the `function` keyword (also known as named functions) are [hoisted](https://www.sitepoint.com/back-to-basics-javascript-hoisting/) to the top of the scope, which means that you can invoke them even before they are defined. This can promote bad design and cause confusion.

**Do**

```javascript
const addTodo = () => {
  // ...
}
```

**Do NOT do**

```javascript
function addTodo() {
  // ...
}
```

### Resources

* [An Introduction to JavaScript ES6 Arrow Functions](https://strongloop.com/strongblog/an-introduction-to-javascript-es6-arrow-functions/)

## Async functions

Use [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) instead of [Promise.prototype.then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then).

**Do**

```javascript
try {
  const response = await fetch('https://example.com')
  const body = await response.json()
  console.log(body)
} catch (error) {
  console.error(error)
}
```

**Do NOT do**

```javascript
fetch('https://example.com')
  .then((response) => response.json())
  .then((body) => {
    console.log(body)
  })
  .catch((error) => {
    console.error(error)
  })
```

Use [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) when running multiple async functions in parallel.

**Do**

```javascript
const [orders, customers] = await Promise.all([
  getOrders(),
  getCustomers(),
])
console.log(orders, customers)
```

**Do NOT do**

```javascript
Promise.all([
  getOrders(),
  getCustomers(),
]).then(([orders, customers]) => {
  console.log(orders, customers)
})
```

## Template literals

Use [template literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals) instead of string concatenation. Template literals allow for embedded expressions and you can use them even with multi-line strings.

**Do**

```javascript
const hello = `Hello ${name}!
This syntax is so convenient.`
```

**Do NOT do**

```javascript
const hello = 'Hello ' + name + '!' +
'This syntax is not so convenient.'
```

## Destructing assignment

Use [destructing assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) wherever possible. Destructing allows for a shorter syntax that is easier to read.

**Do**

```javascript
const Todos = ({todos, onTodoClick}) =>
  <ul>
    {todos.map((todo) =>
      <li><a onClick={() => onTodoClick(todo)}>{todo.text}</a></li>
    )}
  </ul>
```

**Do NOT do**

```javascript
const Todos = (props) =>
  <ul>
    {props.todos.map((todo) =>
      <li><a onClick={() => props.onTodoClick(todo)}>{todo.text}</a></li>
    )}
  </ul>
```

## Spread syntax

Use [spread syntax](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator) instead of [Function.prototype.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply).

**Do**

```javascript
const myFunction = (x, y, z) => { /* ... */ }
const args = [0, 1, 2]
myFunction(...args)
```

**Do NOT do**

```javascript
const myFunction = (x, y, z) => { /* ... */ }
const args = [0, 1, 2]
myFunction.apply(null, args)
```

The spread syntax is also a better way to both copy and concatenate arrays and objects.

**Do**

```javascript
const arr = [0, 1, 2]
const arr2 = [...arr]
arr2.push(3)
```

```javascript
const obj = {x: 1}
const obj2 = {...object, y: 2}
const obj2.z = 3
```

**Do NOT do**

```javascript
const arr = [0, 1, 2]
const arr2 = arr.slice()
arr2.push(3)
```

```javascript
const obj = {x: 1}
const obj2 = Object.assign({y: 2}, obj)
const obj2.z = 2
```

## Variables

### Const

Use [const](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const) whenever possible. Note that you can use `const` even for arrays and objects as long as you do not assign a new reference to that variable.

**Do**

```javascript
const arr = [0, 1, 2]
arr.push(3)
```

**Do NOT do**

```javascript
let arr = [0, 1, 2]
arr.push(3)
```

### Let

Use [let](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let) when you need a non-constant local variable.

**Do**

```javascript
for (let i = 0; i < arr.length; i++) {
  // ...
}
```

**Do NOT do**

```javascript
for (var i = 0; i < arr.length; i++) {
  // ...
}
```

**Note:** The traditional [var](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/var) should be avoided at all cost.

## Functional style

Write [functional JavaScript](https://www.sitepoint.com/introduction-functional-javascript/) when possible, but keep in mind that some times you are better off with object-oriented JavaScript. Avoid writing imperative JavaScript at all cost.

**Do**

```javascript
const capitalize = (str) =>
  [str.charAt(0).toUpperCase(), str.substr(1)].join('')

const processWords = (fn, str) =>
  str.split(' ').map(fn).join(' ')

console.log(processWords(capitalize, 'The quick brown fox jumps over the lazy dog'))
```

**Do NOT do**

```javascript
const capitalizeWords = (str) => {
  let result = []
  const arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].charAt(0).toUpperCase() + arr[i].substring(1))
  }
  return result.join(' ')
}

console.log(capitalizeWords('The quick brown fox jumps over the lazy dog'))
```

## Modules

Use [ES6 modules](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export) instead of CommonJS or AMD modules because it is the standard way of defining modules.

**Do**

```javascript
export default () => 'Hello from an ES6 module'
```

**Do NOT do**

```javascript
module.exports = () => 'Hello from an old module'
```
