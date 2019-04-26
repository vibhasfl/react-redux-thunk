import axios from 'axios'

export const increment = () => {
  return { type: 'increment' }
}

export const decrement = () => {
  return { type: 'decrement' }
}

// Since we use thunk we can now pass function to dispatch rather than objects contrary to above
export const incrementAsync = () => {
  return (dispatch) => {
    return setTimeout(() => {
      dispatch({ type: 'increment' })
    }, 2000)
  }
}

export const decrementAsync = () => {
  return (dispatch) => {
    return axios.get(`https://yesno.wtf/api`).then((res) => {
      dispatch({ type: 'decrement' })
    })
  }
}
