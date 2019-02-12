import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const [hi, setHi] = useState('hi')

  return (
    <div>
      <button onClick={() => setHi(hi + ' hi')}>Greet</button>
      <p>{hi} Anton</p>
      <Link to="/admin">Admin page</Link>
    </div>
  )
}
