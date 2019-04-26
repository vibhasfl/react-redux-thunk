import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
const Counter = (props) => {
  return (
    <div>
      <h2>Total count : {props.count}</h2>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.incrementAsync}>incrementAsync</button>
      <button onClick={props.decrementAsync}>decrementAsync</button>
      {/* <button onClick={() => props.dispatch({ type: 'increment' })}>Increment</button> */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count
})

const asyncApi = () => {
  return (dispatch) => {
    return axios.get(`https://yesno.wtf/api`).then((res) => {
      dispatch({ type: 'decrement' })
    })
  }
}
/* Different way to dispatch */

// Way 1
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
    incrementAsync: () =>
      dispatch(() => {
        setTimeout(() => {
          dispatch({ type: 'increment' })
        }, 1000)
      }),
    decrementAsync: () => {
      dispatch(asyncApi())
    }
  }
}

// Way 2 // Here connect function automatically wraps function into dispatch
// const mapDispatchToProps = {
//   increment: () => ({ type: 'increment' }),
//   decrement: () => ({ type: 'decrement' })
// }

// Way 3 // Using bindactioncreators
// function mapDispatchToProps (dispatch) {
//   return bindActionCreators(
//     {
//       increment: () => ({ type: 'increment' }),
//       decrement: () => ({ type: 'decrement' })
//     },
//     dispatch
//   )
// }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

/*

Note :

1) mapStateToProps : Used to access state data as props in your component

2) mapDispatchToProps : 
  a) If you omit this argument your component would receive dispatch as argument and you can write something like below
    <button onClick={() => props.dispatch({ type: 'increment' })}>Increment</button>
  b)But if you don't omit it there are 3 ways to dispatchProps as explained above


Ref: https://react-redux.js.org/using-react-redux/connect-mapdispatch


Thunk :
Dispatch() recognizes plain object but with thunk it recognizes function that thereby returns an object
*/
