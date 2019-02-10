import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as api from './api'
import { setItem, STORAGE_TYPE } from 'redux-effects-localstorage'
import { Route } from 'react-router-dom'
import Login from './views/login'

import {
  save,
  update,
  remove,
  insert,
  getPosts,
  getDrafts,
} from './store/reducers/posts'

import * as session from './store/reducers/session'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Route path="/admin" component={Login} />
        <button onClick={this.props.onFetchAccessToken}>
          Fetch access token
        </button>
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
        {R.map(
          post => (
            <div key={post._id}>
              <li>{post._id}</li>
              <button onClick={() => this.props.onPublishDraft(post._id)}>
                Publish draft
              </button>
            </div>
          ),
          this.props.drafts
        )}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: getPosts(state),
    drafts: getDrafts(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onFetchAccessToken: () =>
        api.fetchAccessToken({
          success: res => [
            setItem('access_token', res.value, STORAGE_TYPE.session),
            session.save(res.value),
          ],
        }),
      onPublishDraft: postId =>
        api.publishDraft(
          postId,
          { shouldPublish: true },
          {
            success: () => update(postId, { published: new Date() }),
          }
        ),
      onDeletePost: postId =>
        api.deletePost({ postId }, { success: () => remove(postId) }),
      onFetchPost: () => api.fetchPosts({ success: res => save(res.value) }),
      onCreatePost: () =>
        api.createPost(
          {
            title: 'Ara Client!',
            content: 'What a wonderful world.',
            shouldPublish: false,
          },
          { success: res => insert(res.value) }
        ),
    },
    dispatch
  )
}

App.propTypes = {
  posts: PropTypes.array,
  drafts: PropTypes.array,
  onFetchPost: PropTypes.func.isRequired,
  onFetchAccessToken: PropTypes.func.isRequired,
  onCreatePost: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired,
  onPublishDraft: PropTypes.func.isRequired,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
