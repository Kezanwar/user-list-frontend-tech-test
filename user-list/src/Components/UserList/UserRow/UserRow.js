import React from 'react'
import PropTypes from 'prop-types'
import UserAvatar from '../../../images/user-avatar.png'
import { connect } from 'react-redux'
import { offboardUser } from '../../../actions/users'
import { Link } from 'react-router-dom'
import { createDate, returnNA } from '../../../utilities/utilities'

const UserRow = ({ user, offBoarded, offboardUser, setFilters }) => {
  const {
    first_name,
    last_name,
    date_joined,
    date_left,
    is_surgeon,
    email,
    id,
  } = user

  const dateJoined = createDate(new Date(date_joined))
  const dateLeft = date_left ? createDate(new Date(date_left)) : false

  const handleOffBoard = (e) => {
    e.preventDefault()
    offboardUser(user)
    setFilters({ name: '', email: '' })
  }

  return (
    <div className="userRowWrapper">
      <Link className="userRow" to={`/user/${id}`}>
        <UserCell className={'name'}>
          <img src={UserAvatar} alt="" />
          {returnNA(first_name) + ' ' + returnNA(last_name)}
        </UserCell>
        <UserCell> {email ? email : 'N/A'}</UserCell>
        <UserCell className={'date'}>
          {dateLeft
            ? dateJoined.getShortDate() + ' - ' + dateLeft.getShortDate()
            : dateJoined.getShortDate()}
        </UserCell>
        <UserCell>{is_surgeon ? 'Surgeon' : 'Non Surgeon'}</UserCell>
      </Link>
      {!offBoarded && (
        <button onClick={handleOffBoard} className="offboard-user">
          <span className="text">Offboard</span>{' '}
          <i class="fa-solid fa-user-xmark"></i>
        </button>
      )}
    </div>
  )
}

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    date_joined: PropTypes.string,
    date_left: PropTypes.string,
    isSurgeon: PropTypes.bool,
  }).isRequired,
  offBoarded: PropTypes.bool,
  setFilters: PropTypes.func.isRequired,
  offboardUser: PropTypes.func.isRequired,
}

export default connect(null, { offboardUser })(UserRow)

const UserCell = ({ className, children }) => {
  return (
    <span className={className ? `userCell ${className}` : 'userCell'}>
      {children}
    </span>
  )
}
