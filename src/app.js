import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import fetchPosts from './api/fetch-posts'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onFetch}>Fetch posts</button>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onFetch: () => fetchPosts({ success: res => console.log(res.value) }),
    },
    dispatch
  )
}

App.propTypes = {
  onFetch: PropTypes.func.isRequired,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
