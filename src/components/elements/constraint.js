import styled from '@emotion/styled'

export const Constraint = styled.div`
  max-width: ${props => props.max}px;
  min-width: ${props => props.min || 100}px;
  width: 100%;
`
