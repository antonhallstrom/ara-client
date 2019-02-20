import styled from '@emotion/styled'

export const Card = styled.div(props => ({
  borderRadius: props.theme.radiuses[2],
  boxShadow: props.theme.shadows[0],
}))
