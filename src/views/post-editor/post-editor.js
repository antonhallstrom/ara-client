import * as R from 'ramda'
import React, { useState } from 'react'
import * as Layout from '../../components/layouts'
import { Constraint, Flex, Space } from '../../components/elements'
import { Markdown, Chip } from '../../components/composites'

const data = [
  {
    label: 'Programming',
    value: 'Programming',
  },
  {
    label: 'Food',
    value: 'Food',
  },
  {
    label: 'Gaming',
    value: 'Gaming',
  },
  {
    label: 'Art',
    value: 'Art',
  },
  {
    label: 'Health',
    value: 'Health',
  },
]

export function PostEditor() {
  const [markdown, setMarkdown] = useState('')
  const [categories, setCategory] = useState([])

  function handleChange(event) {
    setMarkdown(event.target.value)
  }

  function handleCategoriesChange(category) {
    if (R.includes(category, categories)) {
      setCategory(R.reject(c => c === category, categories))
    } else {
      setCategory(R.append(category, categories))
    }
  }

  return (
    <Layout.Default>
      <Flex column align="center">
        <Constraint max="600">
          <h4>Select category</h4>
          <Space top="2" bottom="3">
            <Flex wrap="true">
              {R.map(
                x => (
                  <Space right="1" top="1" key={x.value}>
                    <Chip
                      label={x.label}
                      value={x.value}
                      selected={categories}
                      onChange={handleCategoriesChange}
                    />
                  </Space>
                ),
                data
              )}
            </Flex>
          </Space>
          <textarea onChange={handleChange} value={markdown} />
          <Markdown markdown={markdown} />
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
