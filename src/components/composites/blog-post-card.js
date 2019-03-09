import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import {
  Flex,
  Constraint,
  Space,
  Title,
  Subtitle,
} from '../../components/elements'

export const Image = styled.div(props => ({
  height: '100%',
  minHeight: '100px',
  width: '120px',
  backgroundColor: props.theme.colors.yellow.default,
}))

const Category = styled.h6`
  text-transform: uppercase;
`

export function BlogPostCard(props) {
  return (
    <Constraint max="600">
      <Space y="2">
        <Flex justify="space-between">
          <Constraint max="400">
            <Category>{props.category}</Category>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
            <Space y="1">
              <small>{props.published}</small>
            </Space>
          </Constraint>
          <Image />
        </Flex>
      </Space>
    </Constraint>
  )
}

BlogPostCard.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  published: PropTypes.string,
}
