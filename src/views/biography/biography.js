import React, { useState, useEffect } from 'react'
import { Flex } from '../../components/elements'
import * as Layout from '../../components/layouts'
import styled from '@emotion/styled'

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

export function Biography() {
  const [age, setAge] = useState(1989)

  useEffect(() => {
    const date = new Date()
    setAge(date.getFullYear() - age)
  }, [])

  return (
    <Layout.Default>
      <Flex>
        <Grid>
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
          <p>das</p>
        </Grid>
      </Flex>
    </Layout.Default>
  )
}
