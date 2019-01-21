import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Route, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { withTheme } from 'emotion-theming'
import LogComponent from './components/hoc/log-props'
import Modal from './components/elements/Modal'
import MyErrorBoundary from './components/elements/MyErrorBoundary'
import Greet from './components/hoc/greet'
import CustomTextField from './components/composites/CustomTextField'
import MouseProvider from './components/elements/MouseProvider'
import MouseCoords from './components/elements/MouseCoords'
import MouseTracker from './components/composites/MouseTracker'
import useFriendStatus from './components/hooks/use-friend-status'
import fetchPosts from './api/fetch-posts'
import R from 'ramda'

const Foo = props => {
  return <p style={{ color: props.theme.dark.background }}>Foo</p>
}

const theme = {
  dark: {
    foreground: '#ffffff',
    background: 'red',
  },
}

const ThemeContext = React.createContext({
  dark: {
    foreground: '#ffffff',
    background: 'red',
  },
})

const MyComponent = () => {
  return (
    <div>
      <ThemeContext.Consumer>
        {theme => {
          return <p style={{ color: theme.background }}>Bar</p>
        }}
      </ThemeContext.Consumer>
    </div>
  )
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}

function MyClone(props) {
  return React.Children.map(props.children, child => {
    if (!React.isValidElement(child)) return props.children
    return React.cloneElement(
      child,
      { cloned: 'true' },
      React.createElement('h3', {}, 'I`m a child of MyClone')
    )
  })
}

function MyChild(props) {
  return (
    <div>
      <h1>Status cloned: {props.cloned}</h1>
      {props.children}
    </div>
  )
}

const friends = {
  friend: {
    id: 12323,
    name: 'Bob',
  },
}

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id)

  if (isOnline === null) {
    return 'Loading...'
  }

  return isOnline ? 'Online' : 'Offline'
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id)
  return <li>{props.friend.name}</li>
}

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`

    return () => (document.title = 'Grail')
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

const ref = React.createRef()

const items = [
  { id: 33, term: 'A', description: 'Foo' },
  { id: 40, term: 'B', description: 'Gnu' },
]

const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
]

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1)
  const isRecipientOnline = useFriendStatus(recipientID)

  return (
    <>
      <div style={{ color: isRecipientOnline ? 'green' : 'red' }} />
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {friendList.map(friend => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  )
}

function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ]
    default:
      return state
  }
}

function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)

  function dispatch(action) {
    const nextState = reducer(state, action)
    setState(nextState)
  }

  return [state, dispatch]
}

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, [])

  function handleAddTodo(text) {
    dispatch({ type: 'add', text })
  }

  return (
    <div>
      {todos.map((todo, i) => (
        <li key={i}>{todo.text}</li>
      ))}
      <button onClick={() => handleAddTodo('Waaah! A new todo!')}>
        Add Todo
      </button>
    </div>
  )
}

function Counter(props) {
  function someExpensiveComputation(data) {
    return data
  }
  const [count, setCount] = useState(() => {
    const initialState = someExpensiveComputation(props.initialState)
    return initialState
  })

  function handleSetCount(value) {
    setCount(value)
  }

  return (
    <>
      Count: {count}
      <button onClick={() => handleSetCount(0)}>Rest</button>
      <button onClick={() => handleSetCount(prevProps => prevProps + 1)}>
        +
      </button>
      <button onClick={() => handleSetCount(prevProps => prevProps - 1)}>
        -
      </button>
    </>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'black',
      showModal: false,
    }
  }

  render() {
    return (
      <React.Fragment>
        <ThemeContext.Provider value={theme.dark}>
          <button onClick={this.props.onFetch}>Fetch posts</button>
          <Foo theme={this.context} />
          <MyComponent />
          <LogComponent color={this.state.color} ref={ref} />
          <button
            onClick={() => this.setState({ showModal: !this.state.showModal })}
          >
            Show modal
          </button>
          <button onClick={() => this.setState({ color: 'red' })}>
            change color
          </button>
          <Glossary items={items} />
          <CustomTextField />
          <Example />
          <MouseTracker />
          <Counter initialState="5" />
          <MouseCoords>
            {data => (
              <p>
                The mouse position is {data.x}, {data.y}
              </p>
            )}
          </MouseCoords>
          <MouseProvider
            render={mouse => (
              <div>
                <h1>
                  ({mouse.x} {mouse.y})
                </h1>
              </div>
            )}
          />
          <MyClone>
            <MyChild />
          </MyClone>
          <FriendStatus friend={friends} />
          <ChatRecipientPicker />
          <Todos />
          {this.state.showModal && (
            <Modal>
              render in modal
              <Greet />
            </Modal>
          )}
        </ThemeContext.Provider>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onFetch: () => fetchPosts({ success: res => console.log(res.value) }),
    },
    dispatch
  )
}

App.contextType = ThemeContext

App.propTypes = {}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
