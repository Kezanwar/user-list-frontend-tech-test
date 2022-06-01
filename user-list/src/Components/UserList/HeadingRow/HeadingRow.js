import React from 'react'
import PropTypes from 'prop-types'

// import './HeadingRow.scss'

const HeadingRow = ({ headings }) => {
  const { _name, email, date, is_surgeon } = headings
  return (
    <div className="headingRow">
      <HeadingCell>{_name}</HeadingCell>
      <HeadingCell>{email}</HeadingCell>
      <HeadingCell className="date">{date}</HeadingCell>
      <HeadingCell>{is_surgeon}</HeadingCell>
    </div>
  )
}

HeadingRow.propTypes = {
  headings: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    date_joined: PropTypes.string,
    date_left: PropTypes.string,
    isSurgeon: PropTypes.string,
  }).isRequired,
}

export default HeadingRow

const HeadingCell = ({ className, children }) => {
  return (
    <span className={className ? `headingCell ${className}` : 'headingCell'}>
      {children}
    </span>
  )
}
