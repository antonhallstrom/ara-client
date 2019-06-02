import styled from '@emotion/styled'
import { css } from '@emotion/core'

const bookSummariesStyle = props =>
  css`
    margin: ${props.theme.spacing[4]};
  `

export const BookSummaries = styled.div`
  ${bookSummariesStyle}
`
