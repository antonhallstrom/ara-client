import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function Login(props) {
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
      <Link to="/blog">Blog page</Link>
      <button onClick={props.onFetchAdminStuff}>admin stuff</button>
    </div>
  )
}

Login.propTypes = {
  onUserLogin: PropTypes.func.isRequired,
  onFetchAdminStuff: PropTypes.func.isRequired,
}
