import styled from '@emotion/styled'

export const Card = styled.div(props => ({
  backgroundColor: props.theme.colors.secondary.default,
  borderRadius: props.theme.radiuses[0],
  boxShadow: props.theme.shadows[1],
}))
