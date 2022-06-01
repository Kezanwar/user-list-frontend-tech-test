import { ALERT, USERS } from './types'
import axios from 'axios'
import { v4 } from 'uuid'
import { setAlert } from './alert'

// @action getsUsers
// @desc gets all users from db

export const getUsers = () => async (dispatch) => {
  try {
    const users = await axios({
      url: `http://localhost:3001/users`,
      method: 'GET',
    })
    dispatch({
      type: USERS.GET_USERS,
      payload: users.data,
    })
    // users.data.forEach((user) => {
    //   user.uuid = user.id
    // })
    // // console.log(users.data)
    // console.log(JSON.stringify(users.data))
  } catch (error) {
    console.log(error)
  }
}

export const newUser = (userDetails) => async (dispatch) => {
  const uid = v4()
  try {
    const newUserDetails = {
      ...userDetails,
      date_joined: new Date(),
      uuid: uid,
      id: uid,
    }
    const res = await axios({
      url: 'http://localhost:3001/users',
      method: 'POST',
      data: newUserDetails,
    })
    if (res?.data?.first_name) {
      dispatch(setAlert(`User ${res.data.first_name} successfully added! 🚀`))
      dispatch(getUsers())
    }
  } catch (error) {
    console.log(error.response.data)
  }
}

export const offboardUser = (user) => async (dispatch) => {
  const updatedUser = { ...user, date_left: new Date().toISOString() }
  try {
    console.log(updatedUser)

    const res = await axios({
      url: `http://localhost:3001/users/${user.id}`,
      method: 'PATCH',
      data: updatedUser,
    })
    console.log(res)
    if (res?.data) {
      dispatch(
        setAlert(`User ${res.data.first_name} successfully offboarded! 🚀`)
      )
      dispatch(getUsers())
    }
  } catch (error) {
    console.log(error)
  }
}
