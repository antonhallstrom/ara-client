import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as api from './api'
import { save, remove, insert, getPosts } from './store/reducers/posts'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onFetchPost}>Fetch posts</button>
        <button onClick={this.props.onCreatePost}>Post</button>
        {R.map(
          post => (
            <div key={post._id}>
              <li>{post._id}</li>
              <button onClick={() => this.props.onDeletePost(post._id)}>
                Delete
              </button>
            </div>
          ),
          this.props.posts
        )}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: getPosts(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onDeletePost: postId =>
        api.deletePost({ postId }, { success: () => remove(postId) }),
      onFetchPost: () => api.fetchPosts({ success: res => save(res.value) }),
      onCreatePost: () =>
        api.createPost(
          { title: 'Ara Client!', content: 'What a wonderful world.' },
          { success: res => insert(res.value) }
        ),
    },
    dispatch
  )
}

App.propTypes = {
  posts: PropTypes.array,
  onFetchPost: PropTypes.func.isRequired,
  onCreatePost: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
