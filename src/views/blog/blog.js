import * as R from 'ramda'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as Layout from '../../components/layouts'
import { Constraint, Flex } from '../../components/elements'

import { BlogPostCard, SkeletonBlogPostCard } from '../../components/composites'

export function Blog(props) {
  const fetching = R.isEmpty(props.posts)

  useEffect(() => {
    window.document.title = 'Ara - Articles'

    return () => (window.document.title = 'Ara')
  }, [])

  useEffect(
    () => {
      if (fetching) {
        props.onFetchPost()
      }
    },
    [props.onFetchPost]
  )

  return (
    <Layout.Blog>
      <Flex column align="center">
        <Constraint max="600">
          {fetching ? (
            <React.Fragment>
              <SkeletonBlogPostCard />
              <SkeletonBlogPostCard />
              <SkeletonBlogPostCard />
              <SkeletonBlogPostCard />
              <SkeletonBlogPostCard />
            </React.Fragment>
          ) : (
            R.map(
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
            )
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
