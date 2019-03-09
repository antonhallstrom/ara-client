import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as Layout from '../../components/layouts'
import {
  Constraint,
  Flex,
  Space,
  Title,
  Subtitle,
} from '../../components/elements'
import { Markdown } from 'react-showdown'

import { BlogPostCard } from '../../components/composites'

const md = `
Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io). 


# Installation

## Download tarball

You can download the latest release tarball directly from [releases][releases]

## Bower

    bower install showdown

## npm (server-side)

    npm install showdown

## CDN

You can also use one of several CDNs available: 
`

const data = [
  {
    id: 1,
    title: 'Traded my brush for a keyboard',
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
]

export function Blog(props) {
  return (
    <Layout.Blog>
      <Flex column align="center">
        <Constraint max="600">
          {R.map(
            blogPost => (
              <BlogPostCard
                key={blogPost.id}
                title={blogPost.title}
                subtitle={blogPost.subtitle}
                category={blogPost.category}
                published={blogPost.published}
              />
            ),
            data
          )}
          {/* <Markdown markup={md} /> */}
          {/* <button onClick={props.onFetchPost}>Fetch posts</button>
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
      )} */}
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
