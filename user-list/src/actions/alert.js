import { ALERT } from './types'
import { v4 } from 'uuid'

// @action setAlert
// @desc Sets an alert

export const setAlert = (msg) => (dispatch) => {
  const id = v4()
  dispatch({
    type: ALERT.SET_ALERT,
    payload: { msg, id },
  })

  setTimeout(() => {
    dispatch({
      type: ALERT.REMOVE_ALERT,
      payload: id,
    })
  }, 3000)
}

// @action removeAlert
// @desc removes an alert by ID

export const removeAlert = (id) => (dispatch) => {
  dispatch({
    type: ALERT.REMOVE_ALERT,
    payload: id,
  })
}
