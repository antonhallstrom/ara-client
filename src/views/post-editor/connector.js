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
      onCreatePost: payload =>
        api.createPost(
          {
            title: payload.title,
            subtitle: payload.subtitle,
            categories: payload.categories,
            content: payload.content,
            imageId: payload.imageId,
            shouldPublish: payload.shouldPublish,
          },
          {
            success: () =>
              posts.insert({
                title: payload.title,
                subtitle: payload.subtitle,
                categories: payload.categories,
                content: payload.content,
                imageId: payload.imageId,
                shouldPublish: payload.shouldPublish,
              }),
            failure: err => console.log(err),
          }
        ),
    },
    dispatch
  )
}

export const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)
