import * as R from 'ramda'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as posts from '../../store/reducers/posts'

function mapStateToProps(state, props) {
  const postId = R.path(['match', 'params', 'id'], props)
  const post = posts.getPost(state, { postId })

  return {
    title: post.title,
    subtitle: post.subtitle,
    content: post.content,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
