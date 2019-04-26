import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Redux related
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { rootReducer } from './reducers/rootreducer'

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

// store.subscribe(() => console.log('Store updated', store.getState()))

// Using below line in each component is considered as anti pattern instead we use mapDispatchtoProps
// store.dispatch({ type: 'increment' })

// redux-logger will only work once I call dispatch

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
