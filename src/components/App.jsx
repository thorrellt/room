import { useState } from 'react'
import '../styles/App.css'
import Header from './Heading'
import Footer from './Footing'
import Navbar from './Navbar'
import data from '../data.js'

function App() {
  const [currId, setCurrId] = useState(0)
  const id = 0

  const nextHeading = () =>{
    setCurrId(prevId => (prevId + 1) % 3)
  }

  const prevHeading = () =>{
    const newId = currId === 0 ? 2 : currId -1
    setCurrId(newId)
  }

  return (
    <div id="App">
      <Navbar/>
      <Header
      title = {data[currId].title}
      content = {data[currId].content}
      id = {data[currId].id}
      nextHeading = {nextHeading}
      prevHeading = {prevHeading}

      />
      <Footer/>
    </div>
  )
}

export default App
