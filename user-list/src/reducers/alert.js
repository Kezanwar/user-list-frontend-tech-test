import { ALERT } from '../actions/types'

const initialState = []

function alertReducer(state = initialState, action) {
  const { type, payload } = action
  // console.log(payload)
  switch (type) {
    case ALERT.SET_ALERT:
      if (state.length > 0 && state[0].msg === payload.msg) return
      else return [...state, payload]
    case ALERT.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload)
    default:
      return state
  }
}

export default alertReducer
