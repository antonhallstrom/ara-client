import * as R from 'ramda'
import React, { useState, useEffect } from 'react'
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
              <h1>Traded my brush for a keyboard</h1>
              <br />
            </section>
            <p>
              In my teens to mid-twenties, I chased the “I want to become an
              artist dream”. I studied, the abstract arts, graphical arts, the
              classical arts (you know nude models) both In my home country
              Sweden, but also Italy and US.
            </p>
            <br />
            <p>
              Studying art takes, immense amount of focus, studies, creativity,
              and though process. But no matter how good you are it doesn’t mean
              you have to succeed, and I meet millionaire painters and pay check
              to pay check artist, which can do the same thing probably, yet the
              other is successful and the other is “not”.
            </p>
            <br />
            <p>
              But if you don’t make it as an artist and can’t cope with that,
              something got to change right? That happened to me. I could no
              longer stand having someone else paying for me, when I couldn’t
              afford rent, because low-tier salary didin’t make the bill.
            </p>
            <br />
            <p>
              I burned my canvas and art material, and went through weeks and
              months of mind-shifts. These mind-shifts, came since I was no
              longer doing art, I suddenly could direct my focus elsewhere. I
              picked up training, reading, and listening to podcasts on subjects
              that I didin’t give much about before. I joined a different game.
            </p>
            <br />
            <p>
              Never written software or being deep into computers at all (gaming
              doesn’t count). But I did It anyways. I had the determination, and
              I must say all those years of immense focus and failures from
              doing art, was directly transferable.
            </p>
            <br />
          </article>
          <aside>
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
