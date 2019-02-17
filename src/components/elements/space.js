import styled from '@emotion/styled'

export const Space = styled.div(props => ({
  paddingTop:
    props.theme.spacing[props.top] ||
    props.theme.spacing[props.y] ||
    props.theme.spacing[props.all],
  paddingBottom:
    props.theme.spacing[props.bottom] ||
    props.theme.spacing[props.y] ||
    props.theme.spacing[props.all],
  paddingRight:
    props.theme.spacing[props.right] ||
    props.theme.spacing[props.x] ||
    props.theme.spacing[props.all],
  paddingLeft:
    props.theme.spacing[props.left] ||
    props.theme.spacing[props.x] ||
    props.theme.spacing[props.all],
}))
