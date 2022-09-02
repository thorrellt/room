import { useState, useRef, useEffect } from 'react'
import {
  TransitionGroup,
  SwitchTransition,
  CSSTransition
} from 'react-transition-group';
import '../styles/App.css'
import Header from './Heading'
import Footer from './Footing'
import Navbar from './Navbar'
import data from '../data.js'

function App() {
  
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    setNavActive(prevNav => !prevNav)
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth)

    return function () {
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

  const [slideState, setSlideState] = useState(() => ({
    currId: 1,
    direction: 'slide-right'
  }))

  const slideRight = () => {
    const prevId = slideState.currId
    setSlideState(() => ({
      currId: (prevId + 1) % 3,
      direction: 'slide-right'
    }))
  }

  const slideLeft = () => {
    const newId = slideState.currId === 0 ? 2 : slideState.currId - 1
    console.log("slideState.currId:: " + slideState.currId)
    console.log("newId:: " + newId)
    setSlideState(() => ({
      currId: newId,
      direction: 'slide-left'
    }))
  }

  const handleWheel = (event) => {
    if (windowWidth > 900)
    event.deltaY < 0 ? slideLeft() : slideRight()
  }

  return (
    <div id="App" onWheel={handleWheel}>
      <Navbar 
      windowWidth={windowWidth}
      navActive = {navActive}
      toggleNav = {toggleNav}
      />

      <Header
        slideState={slideState}
        slideLeft={slideLeft}
        slideRight={slideRight}
        windowWidth = {windowWidth}
      />
      <Footer />
    </div>
  )
}

export default App
