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
  const [currId, setCurrId] = useState(() => 0)

  const [inProp, setInProp] = useState(false);
  const id = 0

  const nextHeading = () => {
    setCurrId(prevId => (prevId + 1) % 3)
  }

  const prevHeading = () => {
    const newId = currId === 0 ? 2 : currId - 1
    setCurrId(newId)
  }
  // const useEffect(() =>{
  //   setInProp(prevInProp =>{
  //     return prevInProp.map(inProp, i =>{
  //       return i === currId ? true : false
  //     })
  //   })
  // },[currId])

  return (
    <div id="App">
      <Navbar />
      <TransitionGroup>
        {currId === 0 &&
          <CSSTransition
            in={inProp}
            timeout={1000}
            mountOnEnter
            unmountOnExit
            classNames="heading-container">

            <Header
              title={data[0].title}
              content={data[0].content}
              id={data[0].id}
              nextHeading={nextHeading}
              prevHeading={prevHeading}
            />
          </CSSTransition>
        }
        {currId === 1 &&
          <CSSTransition
            in={inProp}
            timeout={1000}
            mountOnEnter
            unmountOnExit
            classNames="heading-container">
            <Header
              title={data[1].title}
              content={data[1].content}
              id={data[1].id}
              nextHeading={nextHeading}
              prevHeading={prevHeading}
            />
          </CSSTransition>
        }
        {currId === 2 &&
          <CSSTransition
            in={inProp}
            timeout={1000}
            mountOnEnter
            unmountOnExit
            classNames="heading-container">
            <Header
              title={data[2].title}
              content={data[2].content}
              id={data[2].id}
              nextHeading={nextHeading}
              prevHeading={prevHeading}
            />
          </CSSTransition>
        }
      </TransitionGroup>
      <Footer />
    </div>
  )
}

export default App
