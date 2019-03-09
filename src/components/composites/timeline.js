import * as R from 'ramda'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

import { Flex, Space, Constraint } from '../elements'

const Circle = styled.div`
  border-radius: 50%;
  background-color: ${props => props.theme.colors.secondary.dark};
  height: ${props => props.theme.sizes[3]};
  width: ${props => props.theme.sizes[3]};
`

const LineWrapper = styled.div`
  width: ${props => props.theme.sizes[3]};
`

const Line = styled.div`
  margin-top: ${props => props.theme.spacing[1]};
  margin-bottom: ${props => props.theme.spacing[1]};
  background-color: ${props => props.theme.colors.secondary.dark};
  width: ${props => props.theme.sizes[1]};
  min-height: ${props => props.theme.sizes[3]};
`

export function Timeline(props) {
  return (
    <Constraint>
      {R.map(
        item => (
          <div key={item.key}>
            <Flex align="center">
              <Circle />
              <Space left="4">
                <h5>
                  <b>{item.label}</b>
                </h5>
              </Space>
            </Flex>
            <Flex>
              <LineWrapper as={Flex} justify="center">
                <Line />
              </LineWrapper>
              <Flex wide>
                <Space left="4" top="0" bottom="2">
                  <h6>{item.description}</h6>
                  <p>
                    {item.timeStarted} - {item.timeEnded}
                  </p>
                  <p>{item.location}</p>
                </Space>
              </Flex>
            </Flex>
          </div>
        ),
        props.experiences
      )}
      <Space top="1">
        <Circle />
      </Space>
    </Constraint>
  )
}

Timeline.propTypes = {
  experiences: PropTypes.array,
}
