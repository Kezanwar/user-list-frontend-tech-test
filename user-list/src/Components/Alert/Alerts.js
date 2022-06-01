import React from 'react'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types'

const Alerts = ({ alerts }) => {
  // console.log(alerts)

  return (
    <div className="alertsContainer">
      {alerts &&
        alerts.length > 0 &&
        alerts.map((alert) => {
          return <p className="alert">{alert.msg}</p>
        })}
    </div>
  )
}

Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  alerts: state.alert,
})

// export default UserList
export default connect(mapStateToProps, { setAlert })(Alerts)
