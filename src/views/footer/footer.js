import PropTypes from 'prop-types'
import React from 'react'
import { Constraint, Space } from '../../components/elements'
import styled from '@emotion/styled'

const HighLight = styled.span`
  color: ${props => props.theme.colors.purple.light};
`

const Bar = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.theme.spacing[4]};
`

export function Footer(props) {
  return (
    <Bar>
      <Constraint max="600">
        <Space y="2">
          <p>&copy; 2019 Anton Hallström.</p>
          <p>
            This page loaded in <HighLight>{props.loadTime}</HighLight> seconds.
          </p>
        </Space>
      </Constraint>
    </Bar>
  )
}

Footer.propTypes = {
  loadTime: PropTypes.number,
}
