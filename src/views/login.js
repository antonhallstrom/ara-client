import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as api from '../api'
import * as session from '../store/reducers/session'

function Login(props) {
  return (
    <div>
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button
        onClick={() =>
          props.onUserLogin({
            username: 'admin',
            password: process.env.PW,
          })
        }
      >
        Sign in
      </button>
      <button onClick={props.onFetchAdminStuff}>admin stuff</button>
    </div>
  )
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onFetchAdminStuff: () =>
        api.admin({
          success: res => console.log(res.value),
          failure: err => console.log(err),
        }),
      onUserLogin: payload =>
        api.login(
          {
            username: payload.username,
            password: payload.password,
          },
          {
            success: res => [session.save(res.value)],
            failure: err => console.log(err),
          }
        ),
    },
    dispatch
  )
}

Login.propTypes = {
  onUserLogin: PropTypes.func.isRequired,
  onFetchAdminStuff: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
