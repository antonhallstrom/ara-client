import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as Layout from '../../components/layouts'

export function Login(props) {
  return (
    <Layout.Default>
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
    </Layout.Default>
  )
}

Login.propTypes = {
  onUserLogin: PropTypes.func.isRequired,
  onFetchAdminStuff: PropTypes.func.isRequired,
}
