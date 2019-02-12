import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../components/elements'

export function Home() {
  const [hi, setHi] = useState('hi')

  return (
    <Card>
      <button onClick={() => setHi(hi + ' hi')}>Greet</button>
      <p>{hi} Anton</p>
      <Link to="/admin">Admin page</Link>
    </Card>
  )
}
