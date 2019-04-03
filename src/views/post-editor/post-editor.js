import * as R from 'ramda'
import React, { useState, useRef } from 'react'
import * as Layout from '../../components/layouts'
import { Constraint, Flex, Space } from '../../components/elements'
import { Markdown, Chip } from '../../components/composites'
import styled from '@emotion/styled'

const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  min-height: 300px;
  border-width: 1px;
  border-radius: 4px;
  font-size: ${props => props.theme.fonts.sizes[4]};
  color: ${props => props.theme.colors.secondary.dark};
  border-color: ${props => props.theme.colors.secondary.dark};
  padding: 16px;
  box-sizing: border-box;
  caret-color: ${props => props.theme.colors.purple.light};
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.purple.light};
  }
`

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
  const [cursorStart, setCursorStart] = useState(null)
  const markdownRef = useRef(null)

  function handleChange(event) {
    setMarkdown(event.target.value)
  }

  function handleKeyDown(event) {
    switch (event.keyCode) {
      case 9: {
        event.preventDefault()
        setCursorStart(markdownRef.current.selectionStart)
        setMarkdown(
          R.join(
            '',
            R.insert(
              markdownRef.current.selectionStart,
              ' '.repeat(2),
              markdown
            )
          )
        )
        break
      }
      default:
        return
    }
  }

  function handleKeyUp(event) {
    switch (event.keyCode) {
      case 9: {
        event.preventDefault()
        // focus cursor on the end of the inserted tab
        markdownRef.current.focus()
        markdownRef.current.selectionEnd = cursorStart + 2
        break
      }
      default:
        return
    }
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
          <h4>Markdown editor</h4>
          <Space top="2" bottom="3">
            <TextArea
              ref={markdownRef}
              value={markdown}
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              onChange={handleChange}
            />
          </Space>
          <h4>Editor output</h4>
          <Space top="2" bottom="3">
            <Markdown markdown={markdown} />
          </Space>
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
