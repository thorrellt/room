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
  
  /********
    STATES
   ********/
  //Mobile NavBar is active or hidden
  const [navActive, setNavActive] = useState(false);

  //Used to implement mobile design features
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setNavActive(prevNav => !prevNav)
  }

  /**
   * Manages the slide
   * currId is which slide is currently showing
   * direction is which way the prevSlide should exit
   */
  const [slideState, setSlideState] = useState(() => ({
    currId: 0,
    direction: 'slide-right'
  }))


  /***********************
    FUNCTIONS & LISTENERS
   ***********************/
  //Update windowWidth State on width Change
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth)

    return function () {
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

  //mouse wheel scroll slides main right & left
  const handleWheel = (event) => {
    if (windowWidth > 900)
    event.deltaY < 0 ? slideLeft() : slideRight()
  }


  //onClick function to slide right
  const slideRight = () => {
    const prevId = slideState.currId
    setSlideState(() => ({
      currId: (prevId + 1) % 3,
      direction: 'slide-right'
    }))
  }

  //onClick function to slide left
  const slideLeft = () => {
    const newId = slideState.currId === 0 ? 2 : slideState.currId - 1
    setSlideState(() => ({
      currId: newId,
      direction: 'slide-left'
    }))
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
