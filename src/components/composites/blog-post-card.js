import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { Link } from 'react-router-dom'

import {
  Flex,
  Constraint,
  Space,
  Title,
  Subtitle,
} from '../../components/elements'

import { format } from 'date-fns'

const Category = styled.h6`
  text-transform: uppercase;
`

// const Image = styled.img`
//   border-radius: 4px;
//   height: 100%;
//   width: 100px;
// `

export function BlogPostCard(props) {
  return (
    <Link to={`/blog/post/${props.postId}`}>
      <Space y="4">
        <Flex justify="center">
          <Constraint max="600">
            <Category>{R.join(', ', props.categories)}</Category>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
            <Space y="1">
              <small>{format(props.published, 'MMM DD YYYY')}</small>
            </Space>
          </Constraint>
        </Flex>
      </Space>
    </Link>
  )
}

BlogPostCard.propTypes = {
  postId: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
}
