import React from 'react'
import * as R from 'ramda'

import { Bar, Space, Flex } from '../../components/elements'
import { NavLink } from '../../components/composites'

const PAGES = [
  { key: 0, path: '/admin', label: 'Admin' },
  { key: 1, path: '/blog', label: 'Blog' },
  { key: 2, path: '/', label: 'Home' },
]

export function TopBar() {
  return (
    <Bar>
      <Space y="1" x="0">
        <Flex justify="flex-end">
          {R.map(
            data => (
              <Space all="1" key={data.key}>
                <NavLink to={data.path}>{data.label}</NavLink>
              </Space>
            ),
            PAGES
          )}
        </Flex>
      </Space>
    </Bar>
  )
}
