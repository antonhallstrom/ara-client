import React, { useState } from 'react'

function Test() {
  const [myState, setMyState] = useState('Initial state')

  const changeState = () => setMyState('State updated')

  return (
    <div>
      <p>{myState}</p>
      <button onClick={changeState}>Change</button>
    </div>
  )
}

export default Test
