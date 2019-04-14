import * as R from 'ramda'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as Layout from '../../components/layouts'
import { Constraint, Flex } from '../../components/elements'

import { BlogPostCard } from '../../components/composites'

export function Blog(props) {
  useEffect(
    () => {
      if (R.isEmpty(props.posts)) {
        props.onFetchPost()
      }
    },
    [props.onFetchPost, props.posts]
  )

  return (
    <Layout.Blog>
      <Flex column align="center">
        <Constraint max="600">
          {R.map(
            blogPost => (
              <BlogPostCard
                key={blogPost._id}
                postId={blogPost._id}
                title={blogPost.title}
                subtitle={blogPost.subtitle}
                categories={blogPost.categories}
                published={blogPost.published}
              />
            ),
            props.posts
          )}
        </Constraint>
      </Flex>
    </Layout.Blog>
  )
}

Blog.propTypes = {
  posts: PropTypes.array,
  onFetchPost: PropTypes.func.isRequired,
}
