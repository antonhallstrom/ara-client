import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as api from '../../api'
import * as posts from '../../store/reducers/posts'

function mapStateToProps(state) {
  return {
    posts: posts.getPosts(state),
    drafts: posts.getDrafts(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onPublishDraft: postId =>
        api.publishDraft(
          postId,
          { shouldPublish: true },
          {
            success: () => posts.update(postId, { published: new Date() }),
          }
        ),
      onDeletePost: postId =>
        api.deletePost({ postId }, { success: () => posts.remove(postId) }),
      onFetchPost: () =>
        api.fetchPosts({ success: res => posts.save(res.value) }),
      onCreatePost: () =>
        api.createPost(
          {
            title: 'Ara Client!',
            content: 'What a wonderful world.',
            shouldPublish: false,
          },
          { success: res => posts.insert(res.value) }
        ),
    },
    dispatch
  )
}

export const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
