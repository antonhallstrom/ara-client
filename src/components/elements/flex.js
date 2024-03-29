import styled from '@emotion/styled'

export const Flex = styled.div(props => ({
  display: props.inline ? 'inline-flex' : 'flex',
  alignItems: props.align,
  flexDirection: props.column ? 'column' : 'row',
  justifyContent: props.justify,
  flexWrap: props.wrap === 'true' ? 'wrap' : 'nowrap',
  width: props.wide ? '100%' : 'auto',
  flexBasis: props.basis,
}))
