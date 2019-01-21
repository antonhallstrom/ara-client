# Terminology

- **Elements** are single elements, e.g `Button`, `Input` or `Image` would qualify to the elements directory.
- **Composites** are 2 or more elements put together, e.g `Card` with a `Button` would qualify to the composites directory. A more complex composite could be a `DatePicker` or `DataTable`.
- **Layouts** are used to align elements and composities.
- **Views** are made up by elements, composities, and layouts.

# Core structure

- **React** library for writing declarative and composable UI.
- **Ramda** functional programming utility belt.
- **Redux** state manager.
- **Emotion** is used to create UI.
- **Xstate**
- **Jest** is for testing our handlers of bussines logic and UI.
- **Enzyme** Testing React components.

# JSX

Syntax extension to JavaScript, which provides syntactic sugar for the

```js
React.createElement(component, props, ...children)
```

function.

```jsx
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

compiles to:

```js
React.createElement(
  MyButton,
  { color: 'blue', shadowSize: 2 },
  'Click Me' // or null of no children
)
```

# React components

Are JavaScript functions that accepts props as input and return a React element.

With those you can compose components, extract components.
Props are Read-Only, treat react function and class components as pure functions, they should not modify props.
State allows for change over time.

Function component:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

Class component:

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

Element Variables, props that you use for conditional rendering.

# Controlled Component

An input form element whose value is controlled by React in this way is called a “controlled component”.
So the top React component is the Controlled Component.

# Unctrolled Component

Since an uncontrolled component keeps the source of truth in the DOM. Not recommended.

# Lifting state

As the deal with the single source of truth, a top-down data flow. Reduces bugs, and easier to reason about.

Specific components, builds of generic components.

# Approach

- Mock
- Test
- Build component by the single responsibility principle. Do one thing and do it well.

# Principles

## SOLID:

- Seperation of concerns, seperate your application structure and code, enough to that you can easily diffirenciate modules purpose.

Open/closed principle, A module will be said to be open if it is still available for extension.
A module will be said to be closed if [it] is available for use by other modules.
Use case to always keep them open is by using versioning.

- Interface segregation principle, states that no client should be forced to depend on methods it does not use.
  ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them. Role interfaces.
- Liskov substitution, states that:
  Liskov's notion of a behavioural subtype defines a notion of substitutability for objects; that is, if S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.

- Dependency inversion principle,
  The principle states:
  - A. High-level modules should not depend on low-level modules. Both should depend on abstractions.
  - B. Abstractions should not depend on details. Details should depend on abstractions.

# Patterns

- High cohesion is a pattern that attempts to keep objects appropriately focused, manageable and understandable. Elements with low cohesion often suffer from being hard to comprehend, hard to reuse, hard to maintain and averse to change.
- Low Coupling, coupling is a measure of how strongly one element is connected to, has knowledge of, or relies on other elements. Benefits:
  - lower dependency between the classes,
  - change in one class having lower impact on other classes,
  - higher reuse potential.

# Code-splitting in React

The dynamic `import()` syntax.

React.Lazy and Suspense.

React.Lazy - lazy load components,
Suspense - if React.Lazt is still pending will use fallback,
where we can show a Loader.
ErrorBoundry catches the error if any.

```js
import MyErrorBoundary from './MyErrorBoundary'
const MyComponent = React.Lazy(() => import('./MyComponent'))

function App() {
  return (
    <div>
      <MyErrorBoundry>
        <Suspense fallback={<div>...Loading</div>}>
          <MyComponent />
        </Suspense>
      </MyErrorBoundry>
    </div>
  )
}
```

# Higher-Order Component

A higher-order component is a function that takes a component and returns a new component.

```js
const EnchancedComponent = higherOrderComponent(WrappedComponent)
```

Higher-order Component for cross-cutting concerns.

# React.PureComponent

Is suited for components that have simple props and would return the same result on every render, e.g when using class component:

```js
class Greeting extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // ... do something predicatble here
  }

  render() {
    return <div>{this.props.name}</div>
  }
}
```

But when using function components use **React.memo**:

```js
/*
  Export the component wrapped with the HoC, React.memo, to skip a rerender, and use the last result instead, the memoized result of this wrapped component. Performance
  optimization.
*/
export default React.memo(
  MyComponent,
  customComparisonFunctionForDeeperComparison
)
```

# The Power Of Not Mutating Data

By muting data, react can't tell the difference is the object has changed or not; instead clone and update.

Immutable vs Mutable.

Immutable objects can't be modified, the only way to change them is to create a new object, and replace the immutable object. Mutable objects are those you can modify directly, but also you are not enabling e.g time travel, or any backup or any old reference on the changes u just did.

```js
shoulComponentUpdate
```

Is what React uses to check if any props or state has changed. When you mutating an array, that will not be detected as a change; and nothing will be rerendered.

Immutable data structures provide you with a cheap way to track changes on objects, which is all we need to implement shouldComponentUpdate. This can often provide you with a nice performance boost.

# The React Diffing Algotithm

When the root element have diffrence type, e.g `<div><Paragraph/></div>` -> `<section><Paragraph/></<section>`, all component instances receives `componentWillUnmount()`, and old DOM nodes are destroyed.

When building up a new tree, new DOM nodes are inserted into the DOM. Component instances will receive `componentDidMount()`, any state association with the tree is lost.

When a component updates, instance stays the same, so states are mainted across renders.
React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance.

Next, the render() method is called and the diff algorithm recurses on the previous result and the new result.

## Keys

Avoid unstable keys, e.g Math.random() or uniqId(), keys should be stable, predictable, and unique. Else it will cause many component instances and DOM nodes to be unnecessarily recreated, which is a performance degradation.

# Render Props

The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.

```js
<DataProvider render={data => <h1>{data.title}</h1>} />
```

## Use Render Props For Cut-Crossing Concerns

Share state, data, or behavior from one components encapsulation.

We want to encapsulate the behevior of a component, so it can be reused.

With a render prop we can dynamically determine what to render, a render prop is a
function prop that a component uses to know what to render.

# Hooks

Hooks are a feature that lets you use state and other React features without writing
a class.

Motivation; avoid the "wrapper hell", like providers, consumers, higher-order components,render props, and other abstractions, that we are currently using to attach resuable behavior to a component.

So React needed a better primitive for sharing stateful logic.

Complex components; also happened, when we did 100 things in componentDidMount, and where most of the are a mix of unrelated logic, but has to happen there.
So the stateful logic has to be there. (Well the connector pattern solved that).

**Hooks let you split one component into smaller functions based on what pieces are related, rather than forcing a split based on lifecycle methods**

Ahead-of-time complilation (AOT), is when you complile JS code a head of time, so it's not needed to be interpertet at run time; So they will be pre-complied at build time instead of run time. If your not using AOT then it's Just-in-Time (JIT) complied.

```js
import { useState } from 'react
```

`useState` is a hook. State Hook, which is a built-in Hooks.

Here `useState` takes various initial states, that can be anything from number -> an object. The initial state arguments is only used during the first render.

```js
useState(0)
useState({})
useState('')
useState(null)
useState([])
```

You can use the State Hook more than once in a compnent.

```js
const [age, setAge] = useState(42)
const [fruit, setFruit] = useState('orange')
```

The first arguments it's the key, and the second is the setter function. state and setter.

The array destructuring syntax lets us give different names to the state variables we declared by calling useState.

Hooks are functions that let you “hook into” React state and lifecycle features from function components

## Effect Hook

The Effect Hook, `useEffect`, serve the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` which are used to perform side effects.

When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM.

- Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

The `useEffect` Effect Hook is called after every `render`.

If your effect returns a function, React will run it when it is time to clean up, as
we do on `componentDidUnmount` in a class component.

## Rules of React Hooks

Only Call Hooks at the Top Level, not in loops, conditions, nested functions, so only
top level of your react function component. And are called by react in the same order
every time.

# OOP

## Abstraction (hides internal implementation details. It should only reveal operations relevant for the other objects)

Builds of encapsulation; e.g a cellphone is complex but using it is simple.

It aids removing overhead, it's easier to think in abstractions e.g "take all this list and sort it". call sortListFromAtoZ(), the abstraction is that you don't have to know how it performs the sorts internally, it's been abstracted away, so you can only care about calling the function / method and provide the list you like have sorted.

## Inheritance (object can borrow features from other objects)

Parent class and a child class, the child inherits from it's parent class, in turn the child can intherit from the child and so on; and only take what they need from the parent class.

## Polymorphism (objects can share the same interface—how they are accessed and used—while their underlying implementation of the interface may differ)

Simply put, polymorphism gives a way to use a class exactly like its parent so there’s no confusion with mixing types. But each child class keeps its own methods as they are.

E.g circle, triangle, and square (figures) share a common interface, calculate surface area, they can keep other other methods that they don't have incommon for themself but can inherit from a Figure class and share common traits, that any figure can use.

Parametric polymorphism

## Encapsulation (each object is responsible for a specific task)

Object with private state, and methods to work on that state.
And it can expose public methods for the consumer to use, but those can't
alter the private state.

e.g a dog, can have a private method name `mood()`, the only way to change the dogs mood,
is through the public methods, one can be `play()`, irl, play with the dog and the dog
gets happy, so we changed it's mood with a public methods. But we didn't go into his brain and
modified his amygdala (controls emotions), that would be unethical.

That is encapsulation.

Dynamically typed does type checking at run-time opposed to compile time, vs staically typed
languages do types checking at compile-time as opposed to run-time.

static typed (compile-time)

```js
declare function greet(greeting: string): void
```

dynamic typed (run-time)

```js
function greet(greeting)
```
