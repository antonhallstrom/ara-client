import * as R from 'ramda'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as api from '../../api'
import * as posts from '../../store/reducers/posts'

function mapStateToProps(state) {
  const sorted =
    posts &&
    R.sort(
      (a, b) => new Date(b.published) - new Date(a.published),
      posts.getPosts(state)
    )

  return {
    posts: sorted,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onFetchPost: () =>
        api.fetchPosts({ success: res => posts.save(res.value) }),
    },
    dispatch
  )
}

export const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
