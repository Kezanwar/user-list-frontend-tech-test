import { combineReducers } from 'redux'
import alert from './alert'
import users from './users'

export default combineReducers({
  alert,
  users,
})
