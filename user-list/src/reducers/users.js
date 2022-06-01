import { USERS } from '../actions/types'

const initialState = []

function usersReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case USERS.GET_USERS:
      return [...payload]
    default:
      return state
  }
}

export default usersReducer
