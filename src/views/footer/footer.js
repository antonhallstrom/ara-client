import React from 'react'
import { Constraint, Space, Flex } from '../../components/elements'
import styled from '@emotion/styled'

const Bar = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.theme.spacing[4]};
`

export function Footer() {
  return (
    <Bar>
      <Constraint max="600">
        <Space y="2">
          <a href="https://github.com/antonhallstrom">github</a> |{' '}
          <a href="mailto:antonhallstrom@live.se">email</a>
        </Space>
      </Constraint>
    </Bar>
  )
}
