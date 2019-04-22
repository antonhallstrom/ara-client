import styled from '@emotion/styled'
import { css } from '@emotion/core'

const defaultStyle = props =>
  css`
    margin: ${props.theme.spacing[4]};
    padding-bottom: ${props.theme.spacing[4]};
  `

export const Default = styled.div`
  ${defaultStyle}
`
