import { useState } from 'react'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hey look at me. I am an H1 TAG.</h1>
      <h2>Hey look at me. I am an H2 TAG.</h2>
      <h3>Hey look at me. I am an H3 TAG.</h3>
      <p>Hey look at me. I am an p TAG.</p>
    </div>
  )
}

export default App
