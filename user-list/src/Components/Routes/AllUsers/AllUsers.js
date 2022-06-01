import React from 'react'
import { connect } from 'react-redux'
import UserList from '../../UserList'

function AllUsers({ users }) {
  const activeUsers = users ? users.filter((user) => !user.date_left) : []
  const offboardedUsers = users ? users.filter((user) => user.date_left) : []
  return (
    <>
      <UserList
        listTitle={'Active Users'}
        offBoarded={false}
        users={activeUsers}
      />
      <UserList
        listTitle={'Offboarded Users'}
        offBoarded={true}
        users={offboardedUsers}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.users,
})

// export default UserList
export default connect(mapStateToProps, null)(AllUsers)
