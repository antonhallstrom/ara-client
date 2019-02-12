import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function Blog(props) {
  return (
    <React.Fragment>
      <Link to="/">Home page</Link>
      <button onClick={props.onFetchPost}>Fetch posts</button>
      <button onClick={props.onCreatePost}>Post</button>
      {R.map(
        post => (
          <div key={post._id}>
            <li>{post._id}</li>
            <button onClick={() => props.onDeletePost(post._id)}>Delete</button>
          </div>
        ),
        props.posts
      )}
      {R.map(
        post => (
          <div key={post._id}>
            <li>{post._id}</li>
            <button onClick={() => props.onPublishDraft(post._id)}>
              Publish draft
            </button>
          </div>
        ),
        props.drafts
      )}
    </React.Fragment>
  )
}

Blog.propTypes = {
  posts: PropTypes.array,
  drafts: PropTypes.array,
  onFetchPost: PropTypes.func.isRequired,
  onCreatePost: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired,
  onPublishDraft: PropTypes.func.isRequired,
}
