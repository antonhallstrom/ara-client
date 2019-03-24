import React, { useState } from 'react'
import * as Layout from '../../components/layouts'
import { Constraint, Flex } from '../../components/elements'
import { Markdown } from '../../components/composites'

export function PostEditor() {
  const [markdown, setMarkdown] = useState('')

  function handleChange(event) {
    setMarkdown(event.target.value)
  }

  return (
    <Layout.Default>
      <Flex column align="center">
        <Constraint max="600">
          <textarea onChange={handleChange} value={markdown} />
          <Markdown markdown={markdown} />
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
