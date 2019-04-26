import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Redux related
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      state = { ...state, count: state.count + 1 }
      return state
    case 'decrement':
      state = { ...state, count: state.count - 1 }
      return state
    default:
      return state
  }
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

// store.subscribe(() => console.log('Store updated', store.getState()))

// Using below line in each component is considered as anti pattern instead we use mapDispatchtoProps
// store.dispatch({ type: 'increment' })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()

// redux-logger will only work once I call dispatch
