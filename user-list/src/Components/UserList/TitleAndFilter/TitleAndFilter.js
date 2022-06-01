import React from 'react'
import InputWrapper from '../../UI/InputWrapper/InputWrapper'
import PropTypes from 'prop-types'

const TitleAndFilter = ({
  listTitle,
  length,
  nameFilter,
  emailFilter,
  handleFilterInput,
  sort,
  setSort,
}) => {
  return (
    <div className="__titleFilterContainer">
      <h4 className="list-title">
        {listTitle} <span className="userCount">({length})</span>
      </h4>
      <div className="searchContainer">
        {/* name input */}
        <InputWrapper
          className={'name-input'}
          icon={<i class="fa-solid fa-user-pen"></i>}
          cursor="text"
        >
          <input
            placeholder="Filter by name"
            type="text"
            className="name-input"
            value={nameFilter}
            onChange={(e) => {
              handleFilterInput(e, 'name')
            }}
          />
        </InputWrapper>

        {/* email input */}
        <InputWrapper
          className={'name-input'}
          icon={<i class="fa-solid fa-at"></i>}
          cursor="text"
        >
          <input
            placeholder="Filter by email"
            type="text"
            className="email-input"
            value={emailFilter}
            onChange={(e) => {
              handleFilterInput(e, 'email')
            }}
          />
        </InputWrapper>

        <InputWrapper
          className={'sort-input'}
          icon={<i class="fa-solid fa-sort"></i>}
          cursor="pointer"
        >
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            name=""
            id=""
            className={sort === '' ? 'noSelection' : ''}
          >
            <option value="">Sort by</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest</option>
          </select>
        </InputWrapper>
      </div>
    </div>
  )
}

TitleAndFilter.propTypes = {
  listTitle: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  nameFilter: PropTypes.string.isRequired,
  emailFilter: PropTypes.string.isRequired,
  handleFilterInput: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
}

export default TitleAndFilter
