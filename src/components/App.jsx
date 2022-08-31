import { useState } from 'react'
import '../styles/App.css'
import Header from './Heading'
import Footer from './Footing'
import Navbar from './Navbar'
import data from '../data.js'

function App() {
  const id = 2

  return (
    <div id="App">
      <Navbar/>
      <Header
      title = {data[id].title}
      content = {data[id].content}
      id = {data[id].id}

      />
      <Footer/>
    </div>
  )
}

export default App
