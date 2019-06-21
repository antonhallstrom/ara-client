import React from 'react'
import * as R from 'ramda'
import * as Layout from '../../components/layouts'
import { Constraint, Flex, Space } from '../../components/elements'

// {
//   id: 1,
//   project: '8-bit Computer',
//   info: 'A hobby project',
//   tools: ['See full list', 'Ben eater tutorial'],
//   articles: links to my articles about this or one
//   view: project
//   link: '#',
// },

const items = [
  {
    id: 0,
    project: 'PSU Calculator',
    info:
      'PSU calculator will calculate the required power supply wattage and amperage for your PC',
    tools: ['Svelte'],
    link: '#',
  },
  {
    id: 1,
    project: '8-bit Computer',
    info: 'A hobby project',
    tools: ['See full list', 'Ben eater tutorial'],
    link: '#',
  },
]

export function Portfolio(props) {
  return (
    <Layout.Default>
      <Flex justify="center">
        <Constraint max="600">
          {R.map(
            item => (
              <Flex column key={item.id}>
                <Space y="1">
                  <Space y="1">
                    <h1>{item.project}</h1>
                    <h2>{item.info}</h2>
                  </Space>
                  <Space y="0">
                    <p>{R.join(' ', item.tools)}</p>
                  </Space>
                  <Space bottom="1">
                    <a href={item.link}>View on github</a>
                  </Space>
                </Space>
              </Flex>
            ),
            items
          )}
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
