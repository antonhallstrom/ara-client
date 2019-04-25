import * as R from 'ramda'
import React from 'react'
import { Flex, Space } from '../../components/elements'
import * as Layout from '../../components/layouts'
import styled from '@emotion/styled'

import { Timeline } from '../../components/composites'

// const Grid = styled.article`
//   display: grid;
//   height: 100px;
//   width: 100%;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: auto;
//   grid-gap: 8px;
//   ${props => `@media screen and (${props.theme.breakpoints.xs}) {
//     grid-template-columns: auto;
//   }`};
// `

const Constraint = styled.div`
  max-width: ${props => props.max}px;
  min-width: ${props => props.min}px;
`

const experiences = [
  {
    key: 0,
    label: 'Hero Gaming AB',
    timeStarted: 'Jul 2017',
    timeEnded: 'Present',
    location: 'Malmö, Sweden',
    occupation: 'work',
    description: 'Front End Developer',
    pointer: null,
  },
  {
    key: 1,
    label: 'KYH',
    timeStarted: '2016',
    timeEnded: '2018',
    location: 'Malmö, Sweden',
    occupation: 'student',
    description: 'Web Page, Digital/Multimedia and Information Resource Design',
    pointer: null,
  },
  {
    key: 2,
    label: 'Free Code Camp',
    timeStarted: '2016',
    timeEnded: '2017',
    location: 'Online course',
    occupation: 'student',
    description:
      'Full Stack Web Development Certificate, Computer Software Engineering',
    pointer: null,
  },
]

export function Biography() {
  return (
    <Layout.Default>
      <Flex column align="center">
        <Constraint max="600">
          <Space bottom="9">
            <section>
              <h1>About Me</h1>
              <br />
            </section>
            <p>
              My name is Anton Hallström, and I make stuff. Stuff like artwork,
              software and articles.
            </p>
            <br />
            <p>
              I’m interested in understanding how things work, may that be a
              library like <a href="https://reactjs.org/">React</a>, the
              processes of making a painting, or the way authors can connect and
              transmit their work to the reader.
            </p>
            <br />
            <p>
              You can email me at
              <a href="mailto:antonhallstrom@live.se">
                {' '}
                antonhallstrom@live.se
              </a>
              .
            </p>
          </Space>

          <aside>
            <h1>Experiences</h1>
            <Space y="2">
              <h2>Work</h2>
            </Space>
            <Space left="0">
              <Timeline
                experiences={R.filter(
                  R.propEq('occupation', 'work'),
                  experiences
                )}
              />
            </Space>
            <Space y="2">
              <h2>Education</h2>
            </Space>
            <Space left="0">
              <Timeline
                experiences={R.filter(
                  R.propEq('occupation', 'student'),
                  experiences
                )}
              />
            </Space>
          </aside>
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
