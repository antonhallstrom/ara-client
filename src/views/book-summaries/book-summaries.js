import * as R from 'ramda'
import React, { useRef, useState, useEffect } from 'react'
import * as Layout from '../../components/layouts'
import { Constraint, Space, Flex } from '../../components/elements'
import styled from '@emotion/styled'

import * as composites from '../../components/composites'

const Scene = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: 250px;
  margin: 80px auto;
  perspective: 1000px;
`

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: ${props =>
    `translateZ(-${props.radius}px) rotateY(${props.deg}deg)`};
  transform-style: preserve-3d;
  transition: transform 1s;
`

const CarouselItem = styled.div`
  position: absolute;
  width: ${props => props.width - 20}px;
  left: 10px;
  top: 10px;
  height: 100%;
  background-color: ${props => props.color};
  transition: transform 1s, opacity 1s;
  transform: ${props =>
    `rotateY(${props.deg}deg) translateZ(${props.radius}px)`};
  opacity: ${props => (props.showcase ? 1 : 0.3)};
  background-color: white;
`
const Left = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.width / 2}px;
  left: 0;
  margin-left: -50%;
  z-index: 1;
  cursor: pointer;
`

const Right = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: ${props => props.width / 2}px;
  margin-right: -50%;
  z-index: 1;
  cursor: pointer;
`

const books = [
  {
    id: 0,
    imgSrc:
      'book-summaries/a-short-history-of-nearly-everything-bill-bryson.jpg',
    summary: 'Bill bryson',
    title: 'A Short History Of Nearly Everything',
  },
  {
    id: 1,
    imgSrc: 'book-summaries/digital-libido-bard-sorderqvist.jpg',
    summary: 'sorderqvist',
    title: 'Digital Libido',
  },
  {
    id: 2,
    imgSrc: 'book-summaries/to-mock-a-mockingbird-raymond-smullyan.jpg',
    summary: 'mock',
    title: 'To Mock A Mockingbird',
  },
]

const mapIndexed = R.addIndex(R.map)

function radius(width, degrees) {
  return Math.round(width / 2 / Math.tan(((degrees / 2) * Math.PI) / 180))
}

export function BookSummaries(props) {
  const [bookId, setBook] = useState(null)
  const [degree, setDegrees] = useState(0)
  const [index, setIndex] = useState(0)
  const booksCount = books.length
  const width = 150
  const itemRef = useRef(null)
  const degrees = n => {
    return 360 / n
  }

  useEffect(() => {
    setBook(R.head(books).id)
  }, [])

  function handleBook(left) {
    if (left) {
      setIndex(index + 1)
      const ids = [2, 1, 0]
      setBook(ids[Math.abs(index) % booksCount])
      return setDegrees(degree + degrees(booksCount))
    } else {
      setIndex(index - 1)
      const ids = [1, 2, 0]
      setBook(ids[Math.abs(index) % booksCount])
      return setDegrees(degree - degrees(booksCount))
    }
  }

  return (
    <Layout.BookSummaries>
      <Flex justify="center">
        <Constraint max="600" width={width}>
          <Space bottom="1">
            <h2>Books read in 2019</h2>
          </Space>
          <Scene width={width}>
            <Left width={width} onClick={() => handleBook(true)} />
            <Right width={width} onClick={() => handleBook()} />
            <Carousel deg={degree} radius={radius(width, degrees(booksCount))}>
              {mapIndexed(
                (book, idx) => (
                  <CarouselItem
                    key={book.id}
                    width={width}
                    ref={itemRef}
                    deg={degrees(booksCount) * idx}
                    showcase={book.id === bookId}
                    radius={radius(width, degrees(booksCount))}
                  >
                    <composites.Image
                      newWidth={width - 20}
                      large={book.imgSrc}
                    />
                  </CarouselItem>
                ),
                books
              )}
            </Carousel>
          </Scene>
          <p>bookId{bookId}</p>
          <p>index{index}</p>
          <p>degree{degree}</p>
        </Constraint>
      </Flex>
      <Flex column justify="center" align="center">
        {R.map(
          book =>
            book.id === bookId && (
              <div key={book.id}>
                <Space y="2">
                  <h3>{book.title}</h3>
                </Space>
                <Space x="2" y="2">
                  <p>{book.summary}</p>
                </Space>
              </div>
            ),
          books
        )}
      </Flex>
    </Layout.BookSummaries>
  )
}

BookSummaries.propTypes = {}
