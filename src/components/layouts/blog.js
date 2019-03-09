import styled from '@emotion/styled'
import { css } from '@emotion/core'

const blogStyle = props =>
  css`
    margin: ${props.theme.spacing[4]};
  `

export const Blog = styled.div`
  ${blogStyle}
`
