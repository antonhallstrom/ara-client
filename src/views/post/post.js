import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import * as Layout from '../../components/layouts'
import { Constraint, Flex, Space } from '../../components/elements'
import { Markdown } from '../../components/composites'

export function Post(props) {
  useEffect(() => {
    window.document.title = props.title

    return () => (window.document.title = 'Ara')
  }, [])

  return (
    <Layout.Default>
      <Flex column align="center">
        <Constraint max="600">
          <Space bottom="1">
            <h1>{props.title}</h1>
          </Space>
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
