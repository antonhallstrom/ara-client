import React from 'react'
import * as R from 'ramda'

import { Bar, Space, Flex } from '../../components/elements'
import { NavLink } from '../../components/composites'

const PAGES = [
  {
    key: 0,
    path: '/editor',
    label: 'Post editor',
  },
  { key: 1, path: '/blog', label: 'Blog', subPaths: ['post'] },
  { key: 2, path: '/biography', label: 'Biography' },
  { key: 3, path: '/', label: 'Home' },
  { key: 4, path: '/portfolio', label: 'Portfolio' },
]

function Component() {
  return (
    <Bar>
      <Space y="1" x="0">
        <Flex justify="center">
          {R.map(
            data => (
              <Space all="1" key={data.key}>
                <NavLink to={data.path} subPaths={data.subPaths}>
                  {data.label}
                </NavLink>
              </Space>
            ),
            PAGES
          )}
        </Flex>
      </Space>
    </Bar>
  )
}

export const TopBar = Component
