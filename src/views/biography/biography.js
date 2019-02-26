import * as R from 'ramda'
import React, { useState, useEffect } from 'react'
import { Flex, Space } from '../../components/elements'
import * as Layout from '../../components/layouts'
import styled from '@emotion/styled'

import { Timeline } from '../../components/composites'

const Grid = styled.article`
  display: grid;
  height: 100px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 8px;
  ${props => `@media screen and (${props.theme.breakpoints.xs}) {
    grid-template-columns: auto;
  }`};
`

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
  const [age, setAge] = useState(1989)

  useEffect(() => {
    const date = new Date()
    setAge(date.getFullYear() - age)
  }, [])

  return (
    <Layout.Default>
      <Flex column align="center">
        <Constraint max="600">
          <article>
            <section>
              <h1>Biography</h1>
              <p>lets see where this goes</p>
              <br />
            </section>
            <p>
              Born in 1989; a simple subtraction and boom, I`m {age} years of
              age. And you think perhaps,{' '}
              <q>Okay? So what? What was the point stating your age.</q>
              <br />
              My awenser to that: nothing really.
            </p>
          </article>
          <aside>
            <Space y="2">
              <h2>Work</h2>
            </Space>
            <Timeline
              experiences={R.filter(
                R.propEq('occupation', 'work'),
                experiences
              )}
            />
            <Space y="2">
              <h2>Education</h2>
            </Space>
            <Timeline
              experiences={R.filter(
                R.propEq('occupation', 'student'),
                experiences
              )}
            />
          </aside>
        </Constraint>
      </Flex>
    </Layout.Default>
  )
}
