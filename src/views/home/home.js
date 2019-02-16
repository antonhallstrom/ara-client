import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../components/elements'

export function Home() {
  const [hi, setHi] = useState('hi')

  return (
    <Card>
      <button onClick={() => setHi(hi + ' hi')}>Greet</button>
      <h1>Rr</h1>
      <h2>Rr</h2>
      <h3>Rr</h3>
      <h4>Rr</h4>
      <h5>Rr</h5>
      <h6>Rr</h6>
      <p>Hello</p>
      <Link to="/admin">Admin page</Link>
    </Card>
  )
}
