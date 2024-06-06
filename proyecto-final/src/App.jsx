import { useState } from 'react'
import Register from './register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <Register/>
      </div>
    </>
  )
}

export default App
