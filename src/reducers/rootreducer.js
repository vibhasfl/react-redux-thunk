export const rootReducer = (state = { count: 0 }, action) => {
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
