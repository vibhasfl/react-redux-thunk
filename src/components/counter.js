import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increment, decrement, incrementAsync, decrementAsync } from '../actions/counteractions'

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

// Way 1
// mapDispatchToProps as function
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     incrementAsync: () => dispatch(incrementAsync()),
//     decrementAsync: () => dispatch(decrementAsync())
//   }
// }

// Way 2
// Using bind action creators
function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      increment,
      decrement,
      incrementAsync,
      decrementAsync
    },
    dispatch
  )
}

// Way 3
// connect will automatically call bindActionCreators for you internally
// const mapDispatchToProps = {
//   increment,
//   decrement,
//   incrementAsync,
//   decrementAsync
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
