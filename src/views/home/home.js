import React from 'react'
import { Constraint, Flex, Space } from '../../components/elements'
import * as Layout from '../../components/layouts'

export function Home() {
  return (
    <Layout.Default>
      <Flex column align="center" wrap>
        <Constraint max="600">
          <Space y="1">
            <h1 />
          </Space>
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
