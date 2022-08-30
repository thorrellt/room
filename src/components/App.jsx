import { useState } from 'react'
import '../styles/App.css'
import Header from './Heading'
import Footer from './Footing'
import Navbar from './Navbar'

function App() {

  return (
    <div id="App">
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
