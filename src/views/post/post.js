import React, { useState } from 'react'
import showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'
import * as Layout from '../../components/layouts'
import { Constraint, Flex } from '../../components/elements'

/**
 * GitHub Gist Theme
 * Author : Louis Barranqueiro - https://github.com/LouisBarranqueiro
 */

import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const githubGistTheme = css`
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #abb2bf;
    background: #282c34;
    font-family: monospace;
  }

  .hljs-comment,
  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #c678dd;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e06c75;
  }

  .hljs-literal {
    color: #56b6c2;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #98c379;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }
`

const HtmlContent = styled.div`
  ${githubGistTheme}
`

function Markdown(props) {
  const converter = new showdown.Converter({
    ghCodeBlocks: true,
    extensions: [showdownHighlight],
  })
  showdown.setFlavor('github')
  const md = converter.makeHtml(props.md)

  return <HtmlContent dangerouslySetInnerHTML={{ __html: md }} />
}

export function Post(props) {
  const [markdown, setMarkdown] = useState('')

  function handleChange(event) {
    setMarkdown(event.target.value)
  }

  return (
    <Layout.Default>
      <Flex column align="center">
        <Constraint max="600">
          <textarea onChange={handleChange} value={markdown} />
          <Markdown md={markdown} />
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
