import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as api from '../../api'
import * as posts from '../../store/reducers/posts'

function mapStateToProps(state) {
  return {
    posts: posts.getPosts(state),
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
