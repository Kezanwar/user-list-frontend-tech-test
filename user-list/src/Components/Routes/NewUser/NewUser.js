import React, { useState } from 'react'
import { connect } from 'react-redux'
import InputWrapper from '../../UI/InputWrapper/InputWrapper'
import { setAlert } from '../../../actions/alert'
import { newUser } from '../../../actions/users'
import { useNavigate } from 'react-router-dom'

function NewUser({ setAlert, newUser }) {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    job_title: '',
    email: '',
    user_type: '',
    country: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(inputs).some((input) => input === '')) {
      setAlert('Please fill all required fields to create a new user...👍🏾')
      return
    }
    newUser(inputs)
    navigate('/')
  }

  const getInputDetails = (input) => {
    let icon
    let cursor
    const title = input.replace(/_/g, ' ')
    switch (input) {
      case 'first_name':
      case 'last_name':
        icon = <i class="fa-solid fa-user-pen"></i>
        cursor = 'text'
        break
      case 'email':
        icon = <i class="fa-solid fa-at"></i>
        cursor = 'text'
        break
      case 'user_type':
        icon = <i class="fa-solid fa-sort"></i>
        cursor = 'pointer'
        break
      case 'job_title':
        icon = <i class="fa-solid fa-briefcase"></i>
        cursor = 'text'
        break
      case 'country':
        icon = <i class="fa-solid fa-earth-europe"></i>
        cursor = 'text'
      default:
        break
    }

    return { icon, cursor, title }
  }

  return (
    <div className="newUserContainer">
      <h3 className="title"> Add a new user</h3>
      <form onSubmit={handleSubmit} action="">
        {Object.keys(inputs).map((input) => {
          const { icon, cursor, title } = getInputDetails(input)
          return (
            <InputWrapper icon={icon} cursor={cursor}>
              {input !== 'user_type' ? (
                <input
                  placeholder={`Add ${title}`}
                  type="text"
                  value={inputs[input]}
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      [input]: e.target.value,
                    }))
                  }}
                />
              ) : (
                <select
                  onChange={(e) => {
                    setInputs((prev) => ({
                      ...prev,
                      [input]: e.target.value,
                    }))
                  }}
                  type={'text'}
                  value={inputs[input]}
                  className={inputs[input] === '' ? 'noSelection' : ''}
                >
                  <option value="">{`Add ${title}`}</option>
                  <option value="surgeon">Surgeon</option>
                  <option value="non_surgeon">Non surgeon</option>
                </select>
              )}
            </InputWrapper>
          )
        })}
        <button type="submit" className="submit">
          Create user <i class="fa-solid fa-user-plus"></i>
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  alerts: state.alert,
})

// export default UserList
export default connect(mapStateToProps, { setAlert, newUser })(NewUser)
