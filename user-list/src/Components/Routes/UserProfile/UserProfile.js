import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UserAvatar from '../../../images/user-avatar.png'
import {
  capitalizeFirstLetter,
  createDate,
  returnNA,
} from '../../../utilities/utilities'
import { offboardUser } from '../../../actions/users'

function UserProfile({ location, users, offboardUser }) {
  const searchUserID = location.pathname.split('/')[2]
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (users) {
      const user = users.filter((user) => user.id === searchUserID)
      setUser(user[0])
    }
  }, [users])

  const handleOffboard = () => {
    offboardUser(user)
    navigate('/')
  }

  if (!user) return <div>Loading</div>
  else {
    console.log(user)
    const {
      id,
      first_name,
      last_name,
      email,
      is_surgeon,
      city,
      country,
      job_title,
      date_joined,
      date_left,
    } = user

    const startDate = createDate(new Date(date_joined)).getShortDate()
    const endDate = date_left
      ? createDate(new Date(date_left)).getShortDate()
      : null

    return (
      <div className="userProfile">
        <div className="userTitleContainer">
          <img className="user-img" src={UserAvatar} alt="" />
          <div className="nameContainer">
            <h3 className="name">
              {' '}
              {/* {capitalizeFirstLetter(returnNA(first_name)) +
                ' ' +
                returnNA(capitalizeFirstLetter(last_name))} */}
              {returnNA(first_name) + ' ' + returnNA(last_name)}
              {!endDate && (
                <button onClick={handleOffboard} className="offBoard">
                  Offboard <i class="fa-solid fa-user-xmark"></i>
                </button>
              )}
            </h3>
            <p className="job-title">
              <i class="fa-solid fa-briefcase"></i>{' '}
              {job_title ? job_title : 'N/A'}
            </p>
            <p className="country">
              <i class="fa-solid fa-earth-europe"></i>{' '}
              {country ? country : 'N/A'}
            </p>
          </div>
        </div>
        <UserDetailContainer
          icon={<i class="fa-solid fa-at"></i>}
          detail={email}
          cta={
            <a className="cta" href={`mailto:${email}`}>
              Send email <i class="fa-solid fa-paper-plane"></i>
            </a>
          }
        />
        <UserDetailContainer
          icon={<i class="fa-solid fa-user-doctor"></i>}
          detail={is_surgeon ? 'Surgeon' : 'Non-surgeon'}
        />
        <UserDetailContainer
          icon={<i class="fa-regular fa-calendar-plus"></i>}
          detail={`Start date: ${startDate}`}
        />
        {endDate && (
          <UserDetailContainer
            icon={<i class="fa-regular fa-calendar-xmark"></i>}
            detail={`Leave date: ${endDate}`}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
})

// export default UserList
export default connect(mapStateToProps, { offboardUser })(UserProfile)

const UserDetailContainer = (props) => {
  const { detail, icon, cta } = props
  console.log(detail)
  return (
    <div className="userDetailContainer">
      {' '}
      {icon}{' '}
      <p className="detail">
        {detail ? detail : <span style={{ color: 'lightgray' }}>N/A</span>}{' '}
        {detail && cta}
      </p>
    </div>
  )
}
