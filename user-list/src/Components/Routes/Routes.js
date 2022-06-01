import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllUsers from './AllUsers/AllUsers'
import NewUser from './NewUser/NewUser'
import UserProfile from './UserProfile/UserProfile'

const UserListRoutes = (props) => {
  const { location } = props
  return (
    <Routes location={location} key={location.pathname}>
      <Route index element={<AllUsers />} />
      <Route path="/user/:id" element={<UserProfile location={location} />} />
      <Route path="/user/create" element={<NewUser />} />
    </Routes>
  )
}

export default UserListRoutes
