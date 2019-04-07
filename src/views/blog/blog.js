import * as R from 'ramda'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as Layout from '../../components/layouts'
import { Constraint, Flex } from '../../components/elements'

import { BlogPostCard } from '../../components/composites'

const data = [
  {
    id: 0,
    title: 'In pure functions we trust',
    category: 'Life',
    subtitle: 'Functional programming for the win baby!',
    published: 'Feb 18',
  },
  {
    id: 1,
    title: 'Traded My Brush For A Keyboard',
    category: 'Life',
    subtitle: 'How a colossal mind shift will get you rekindled',
    published: 'Feb 18',
  },
  {
    id: 2,
    title: 'Effectively Naming Software Thingies',
    category: 'Programming',
    subtitle: `CSS previous sibling selectors don’t exist, but that doesn’t mean
    you shouldn’t use them. As with most CSS limitations, we can fake
    them!`,
    published: 'Feb 18',
  },
  {
    id: 3,
    title: 'Everything You Wanted To Know About package-lock.json',
    category: 'Programming',
    subtitle: `But Were Too Afraid To Ask`,
    published: 'Feb 18',
  },
]

export function Blog(props) {

  useEffect(() => {
    props.onFetchPost()
  }, [props.onFetchPost])

  return (
    <Layout.Blog>
      <Flex column align="center">
        <Constraint max="600">
          {R.map(
            blogPost => (
              <BlogPostCard
                key={blogPost.id}
                postId={blogPost.id}
                title={blogPost.title}
                subtitle={blogPost.subtitle}
                category={blogPost.category}
                published={blogPost.published}
              />
            ),
            data
          )}
        </Constraint>
      </Flex>
    </Layout.Blog>
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
