import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import UserRow from './UserRow'
import HeadingRow from './HeadingRow'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import TitleAndFilter from './TitleAndFilter/TitleAndFilter'

const UserList = ({ users, offBoarded, listTitle }) => {
  // filter from user input
  const [filters, setFilters] = useState({
    name: '',
    email: '',
  })
  const [sort, setSort] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    if (users) {
      setFilteredUsers(users)
    }
  }, [users])

  const handleFilterInput = (e, filterName) => {
    const val = e.target.value
    setFilters((prev) => ({
      ...prev,
      [filterName]: val,
    }))
  }

  const checkFilter = (userValCheck, filter) => {
    if (userValCheck && filter) {
      const filtNameLength = filter.length
      const filterArr = filter.split('')
      const userValLength = userValCheck.length
      const userValCheckArr = userValCheck.split('')

      let matchCount = 0

      filterArr.forEach((letter, index) => {
        if (
          userValLength >= filtNameLength &&
          letter.toLowerCase() === userValCheckArr[index].toLowerCase()
        )
          matchCount = matchCount + 1
      })

      return matchCount === filtNameLength ? true : false
    }
  }

  useEffect(() => {
    if (filteredUsers) {
      if (!filters.name && !filters.email) {
        setFilteredUsers(users)
        return
      }
      setFilteredUsers(
        users.filter((user) => {
          const userName = user.first_name + ' ' + user.last_name
          if (filters.name && !filters.email)
            return checkFilter(userName, filters.name)
          if (!filters.name && filters.email)
            return checkFilter(user.email, filters.email)
          if (filters.name && filters.email)
            return (
              checkFilter(userName, filters.name) &&
              checkFilter(user.email, filters.email)
            )
        })
      )
      return
    }
  }, [filters])

  const handleSort = (arr) => {
    let sorted = [...arr]

    switch (sort) {
      case 'oldest':
        sorted.sort(
          (a, b) =>
            new Date(a.date_joined).getTime() -
            new Date(b.date_joined).getTime()
        )
        return sorted
      case 'recent':
        sorted.sort(
          (a, b) =>
            new Date(b.date_joined).getTime() -
            new Date(a.date_joined).getTime()
        )
        return sorted
      case 'a-z':
        sorted.sort((a, b) =>
          a.first_name.toLowerCase() < b.first_name.toLowerCase() ? -1 : 1
        )
        return sorted
      case 'z-a':
        sorted.sort((a, b) =>
          b.first_name.toLowerCase() < a.first_name.toLowerCase() ? -1 : 1
        )
        return sorted
      default:
        return sorted
    }
  }

  let finalArr = filteredUsers
  if (sort) {
    finalArr = handleSort(finalArr)
  }

  return (
    <div className="list">
      <TitleAndFilter
        nameFilter={filters.name}
        emailFilter={filters.email}
        handleFilterInput={handleFilterInput}
        listTitle={listTitle}
        length={filteredUsers.length}
        sort={sort}
        setSort={setSort}
        handleSort={handleSort}
      />
      <HeadingRow
        headings={{
          _name: 'Name',
          email: 'Email',
          date: offBoarded ? 'Start - End Dates' : 'Start Date',
          is_surgeon: 'User Type',
        }}
      />
      {finalArr.length > 0 &&
        finalArr.map((user) => (
          <UserRow
            setFilters={setFilters}
            offBoarded={offBoarded}
            key={user.id}
            user={user}
          />
        ))}
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      date_joined: PropTypes.string,
      date_left: PropTypes.string,
      isSurgeon: PropTypes.bool,
    })
  ),
  listTitle: PropTypes.string.isRequired,
  offBoarded: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  alerts: state.alert,
})

// export default UserList
export default connect(mapStateToProps, { setAlert })(UserList)
