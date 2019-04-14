import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as api from '../../api'
import * as posts from '../../store/reducers/posts'
import * as session from '../../store/reducers/session'

function mapStateToProps(state) {
  return {
    posts: posts.getPosts(state),
    drafts: posts.getDrafts(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onUserLogin: () =>
        api.login(
          {
            username: 'admin',
            password: process.env.PW,
          },
          {
            success: res => [session.save(res.value)],
            failure: err => console.log(err),
          }
        ),
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
      onFetchPosts: () =>
        api.fetchPosts({ success: res => posts.save(res.value) }),
      onCreatePost: payload =>
        api.createPost(
          {
            title: payload.title,
            subtitle: payload.subtitle,
            categories: payload.categories,
            content: payload.content,
            shouldPublish: payload.shouldPublish,
          },
          {
            success: () =>
              posts.insert({
                title: payload.title,
                subtitle: payload.subtitle,
                categories: payload.categories,
                content: payload.content,
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
