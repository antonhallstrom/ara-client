import React from 'react'
import * as R from 'ramda'

import { Bar, Constraint, Space, Flex } from '../../components/elements'
import { NavLink } from '../../components/composites'

// const PAGES = [
//   {
//     key: 0,
//     path: '/editor',
//     label: 'Post editor',
//   },
//   { key: 1, path: '/blog', label: 'Blog', subPaths: ['post'] },
//   { key: 2, path: '/biography', label: 'Biography' },
//   { key: 3, path: '/', label: 'Home' },
//   { key: 4, path: '/portfolio', label: 'Portfolio' },
//   { key: 5, path: '/book-reviws', label: 'Book reviews' },
//   { key: 6, path: '/videos', label: 'Videos' },
//   { key: 7, path: '/art', label: 'Artwork' },
// ]

const PAGES = [
  { key: 1, path: '/', label: 'Biography' },
  { key: 2, path: '/blog', label: 'Blog', subPaths: ['post'] },
  { key: 3, path: '/portfolio', label: 'Portfolio' },
  // { key: 4, path: '/artwork', label: 'Artwork' },
  {
    key: 5,
    path: '/book-summaries',
    label: 'Book Summaries',
    subPaths: ['book'],
  },
]

function Component() {
  return (
    <Bar>
      <Constraint max="600">
        <Space y="1">
          <Flex wrap="true">
            {R.map(
              data => (
                <Space right="2" y="1" key={data.key}>
                  <NavLink to={data.path} subPaths={data.subPaths}>
                    {data.label}
                  </NavLink>
                </Space>
              ),
              PAGES
            )}
          </Flex>
        </Space>
      </Constraint>
    </Bar>
  )
}

export const TopBar = Component
