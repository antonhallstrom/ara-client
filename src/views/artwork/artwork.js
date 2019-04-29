import React, { useState, useEffect } from 'react'
import { Constraint, Flex, Space } from '../../components/elements'
import * as Layout from '../../components/layouts'
import styled from '@emotion/styled'

// Make responsive images, so they take full width on small device,
// also center content
// make image previwer when hover or clicking the images.

const Image = styled.img`
  height: ${props => (props.height ? `${props.height}px` : `100%`)};
  width: ${props => props.width}px;
`

const BackgroundImage = styled.div`
  background-image: url(${props => props.filename});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 288px;
  height: 100%;
  min-height: 288px;
`

export function Artwork() {
  const [layout, setLayout] = useState(null)
  useEffect(() => {
    window.document.title = 'Ara - Artwork'

    return () => (window.document.title = 'Ara')
  }, [])

  useEffect(() => {
    if (window.innerWidth < 600 && !(window.innerWidth > 768)) {
      return setLayout('medium')
    }

    if (window.innerWidth > 600 && window.innerWidth < 1300) {
      setLayout('medium')
    }

    if (window.innerWidth > 1300) {
      setLayout('large')
    }
  }, [])

  useEffect(
    () => {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 600 && window.innerWidth < 1315) {
          setLayout('medium')
        }

        if (window.innerWidth > 1315) {
          setLayout('large')
        }
      })
    },
    [window.resize, window.innerWidth]
  )

  return (
    <Layout.Default>
      <Flex justify="center">
        <Constraint max="1200">
          {layout === 'large' && (
            <Flex style={{ height: '600px' }}>
              <Space right="1">
                <Image src="face.jpg" width="600" />
              </Space>
              <Flex wrap="true">
                <Space bottom="0" right="0">
                  <BackgroundImage filename="background.jpg" />
                </Space>
                <Space left="0" bottom="0">
                  <BackgroundImage filename="marsland.jpg" />
                </Space>
                <Space top="0" right="0">
                  <BackgroundImage filename="figure.jpg" />
                </Space>
                <Space left="0" top="0">
                  <BackgroundImage filename="roboface.jpg" />
                </Space>
              </Flex>
            </Flex>
          )}
          {layout === 'medium' && (
            <Flex justify="center" basis="400px">
              <Flex wrap="true">
                <Space all="0">
                  <BackgroundImage filename="face.jpg" />
                </Space>
                <Space all="0">
                  <BackgroundImage filename="background.jpg" />
                </Space>
                <Space all="0">
                  <BackgroundImage filename="marsland.jpg" />
                </Space>
                <Space all="0">
                  <BackgroundImage filename="figure.jpg" />
                </Space>
                <Space all="0">
                  <BackgroundImage filename="roboface.jpg" />
                </Space>
              </Flex>
            </Flex>
          )}
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
