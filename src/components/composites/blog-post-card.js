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

const Category = styled.h6`
  text-transform: uppercase;
`

export function BlogPostCard(props) {
  return (
    <Link to={`/blog/post/${props.postId}`}>
      <Space y="4">
        <Flex justify="center">
          <Constraint max="600">
            <Category>{props.category}</Category>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
            <Space y="1">
              <small>{props.published}</small>
            </Space>
          </Constraint>
        </Flex>
      </Space>
    </Link>
  )
}

BlogPostCard.propTypes = {
  postId: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
}
