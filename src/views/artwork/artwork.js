import React, { useState, useEffect } from 'react'
import { Constraint, Flex, Space } from '../../components/elements'
import * as Layout from '../../components/layouts'
import * as composites from '../../components/composites'

// also center content
// make image previwer when hover or clicking the images.

export function Artwork() {
  const [layout, setLayout] = useState(null)
  const [imageWidth, setImageWidth] = useState('')

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

  // TODO: React error, can't do state update on an unmounted component.
  useEffect(
    () => {
      const width = window.innerWidth - 64
      setImageWidth(width > 424 ? 424 : width)

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
                <composites.ImagePreviewer image="face.jpg" newWidth="600">
                  <composites.Image
                    small="small-face.png"
                    large="face.jpg"
                    fixedWidth="600"
                    fixedHeight="600"
                  />
                </composites.ImagePreviewer>
              </Space>
              <Flex wrap="true">
                <Space bottom="0" right="0">
                  <composites.ImagePreviewer
                    image="background.jpg"
                    newWidth="800"
                  >
                    <composites.Image
                      small="small-background.png"
                      large="background.jpg"
                      fixedWidth="290"
                      fixedHeight="296"
                    />
                  </composites.ImagePreviewer>
                </Space>
                <Space left="0" bottom="0">
                  <composites.ImagePreviewer
                    image="marsland.jpg"
                    newWidth="600"
                  >
                    <composites.Image
                      small="small-marsland.png"
                      large="marsland.jpg"
                      fixedWidth="290"
                      fixedHeight="296"
                    />
                  </composites.ImagePreviewer>
                </Space>
                <Space top="0" right="0">
                  <composites.ImagePreviewer image="figure.jpg" newWidth="600">
                    <composites.Image
                      small="small-figure.png"
                      large="figure.jpg"
                      fixedWidth="290"
                      fixedHeight="296"
                    />
                  </composites.ImagePreviewer>
                </Space>
                <Space left="0" top="0">
                  <composites.ImagePreviewer
                    image="roboface.jpg"
                    newWidth="600"
                  >
                    <composites.Image
                      small="small-roboface.png"
                      large="roboface.jpg"
                      fixedWidth="290"
                      fixedHeight="296"
                    />
                  </composites.ImagePreviewer>
                </Space>
              </Flex>
            </Flex>
          )}
          {layout === 'medium' && (
            <Flex justify="center" basis="400px">
              <Flex wrap="true">
                <Space all="0">
                  <composites.ImagePreviewer image="face.jpg" newWidth="400">
                    <composites.Image
                      small="small-face.png"
                      large="face.jpg"
                      newWidth={imageWidth}
                    />
                  </composites.ImagePreviewer>
                </Space>
                <Space all="0">
                  <composites.ImagePreviewer
                    image="background.jpg"
                    newWidth="400"
                  >
                    <composites.Image
                      small="small-background.png"
                      large="background.jpg"
                      newWidth={imageWidth}
                    />
                  </composites.ImagePreviewer>
                </Space>
                <Space all="0">
                  <composites.ImagePreviewer
                    image="marsland.jpg"
                    newWidth="400"
                  >
                    <composites.Image
                      small="small-marsland.png"
                      large="marsland.jpg"
                      newWidth={imageWidth}
                    />
                  </composites.ImagePreviewer>
                </Space>
                <Space all="0">
                  <composites.ImagePreviewer image="figure.jpg" newWidth="400">
                    <composites.Image
                      small="small-figure.png"
                      large="figure.jpg"
                      newWidth={imageWidth}
                    />
                  </composites.ImagePreviewer>
                </Space>
                <Space all="0">
                  <composites.ImagePreviewer
                    image="roboface.jpg"
                    newWidth="400"
                  >
                    <composites.Image
                      small="small-roboface.png"
                      large="roboface.jpg"
                      newWidth={imageWidth}
                    />
                  </composites.ImagePreviewer>
                </Space>
              </Flex>
            </Flex>
          )}
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
