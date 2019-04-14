import PropTypes from 'prop-types'
import React from 'react'
import * as Layout from '../../components/layouts'
import { Constraint, Flex, Space } from '../../components/elements'
import { Markdown } from '../../components/composites'

export function Post(props) {
  return (
    <Layout.Default>
      <Flex column align="center">
        <Constraint max="600">
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
          <Space y="2">
            <Markdown markdown={props.content} />
          </Space>
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
}
