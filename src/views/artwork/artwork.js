import React, { useState, useEffect } from 'react'
import { Constraint, Flex, Space } from '../../components/elements'
import * as Layout from '../../components/layouts'
import * as composites from '../../components/composites'

// Make responsive images, so they take full width on small device,
// also center content
// make image previwer when hover or clicking the images.

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

  // TODO: React error, can't do state update on an unmounted component.
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
                <composites.Image
                  small="small-face.png"
                  large="face.jpg"
                  width="600"
                  height="600"
                />
              </Space>
              <Flex wrap="true">
                <Space bottom="0" right="0">
                  <composites.Image
                    small="small-background.png"
                    large="background.jpg"
                    width="290"
                  />
                </Space>
                <Space left="0" bottom="0">
                  <composites.Image
                    small="small-marsland.png"
                    large="marsland.jpg"
                    width="290"
                  />
                </Space>
                <Space top="0" right="0">
                  <composites.Image
                    small="small-figure.png"
                    large="figure.jpg"
                    width="290"
                  />
                </Space>
                <Space left="0" top="0">
                  <composites.Image
                    small="small-roboface.png"
                    large="roboface.jpg"
                    width="290"
                  />
                </Space>
              </Flex>
            </Flex>
          )}
          {layout === 'medium' && (
            <Flex justify="center" basis="400px">
              <Flex wrap="true">
                <Space all="0">
                  <composites.Image
                    small="small-face.png"
                    large="face.jpg"
                    width="288"
                    height="288"
                  />
                </Space>
                <Space all="0">
                  <composites.Image
                    small="small-background.png"
                    large="background.jpg"
                    width="288"
                    height="288"
                  />
                </Space>
                <Space all="0">
                  <composites.Image
                    small="small-marsland.png"
                    large="marsland.jpg"
                    width="288"
                    height="288"
                  />
                </Space>
                <Space all="0">
                  <composites.Image
                    small="small-figure.png"
                    large="figure.jpg"
                    width="288"
                    height="288"
                  />
                </Space>
                <Space all="0">
                  <composites.Image
                    small="small-roboface.png"
                    large="roboface.jpg"
                    width="288"
                    height="288"
                  />
                </Space>
              </Flex>
            </Flex>
          )}
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
