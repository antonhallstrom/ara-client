import * as R from 'ramda'
import React from 'react'
import * as Layout from '../../components/layouts'
import { Constraint, Space, Flex } from '../../components/elements'

import * as composites from '../../components/composites'

const books = [
  // {
  //   id: 0,
  //   imgSrc:
  //     'book-summaries/a-short-history-of-nearly-everything-bill-bryson.jpg',
  //   summary: 'Bill bryson',
  //   title: 'A Short History Of Nearly Everything',
  // },
  {
    id: '0',
    imgSrc: '/digital-libido-bard-sorderqvist.jpg',
    summary: 'sorderqvist',
    title: 'Digital Libido',
  },
  // {
  //   id: 2,
  //   imgSrc: 'book-summaries/to-mock-a-mockingbird-raymond-smullyan.jpg',
  //   summary: 'mock',
  //   title: 'To Mock A Mockingbird',
  // },
]

export function BookSummary(props) {
  const book = books[R.path(['match', 'params', 'bookId'], props)]

  return (
    <Layout.BookSummaries>
      <Flex justify="center">
        <Constraint max="600">
          <Flex column justify="center" align="center">
            <div key={book.id}>
              <composites.Image newWidth="200" large={book.imgSrc} />
              <Flex justify="center" align="center" column>
                <Space y="2">
                  <h3>{book.title}</h3>
                </Space>
                <Space x="2" y="2">
                  <p>{book.summary}</p>
                </Space>
              </Flex>
            </div>
          </Flex>
        </Constraint>
      </Flex>
    </Layout.BookSummaries>
  )
}

BookSummary.propTypes = {}
