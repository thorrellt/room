import { useState, useRef, useEffect } from 'react'
import {
    TransitionGroup,
    SwitchTransition,
    CSSTransition
} from 'react-transition-group';
import '../styles/Heading.css'
import heroImg0 from '../assets/desktop-image-hero-1.jpg'
import heroImg1 from '../assets/desktop-image-hero-2.jpg'
import heroImg2 from '../assets/desktop-image-hero-3.jpg'
import aboutDark from '../assets/image-about-dark.jpg'
import aboutLight from '../assets/image-about-light.jpg'
import arrow from '../assets/icon-arrow.svg'
import leftAngle from '../assets/icon-angle-left.svg'
import rightAngle from '../assets/icon-angle-right.svg'
import data from '../data.js'


export default function Header(props) {


    const { windowWidth, slideState, slideLeft, slideRight } = props

    const [usedId, setUsedId] = useState(1)


    useEffect(() => {
        if (usedId !== slideState.currId) setUsedId(slideState.currId)
    }, [slideState])

    let heroImg
    switch (usedId) {
        case 0: {
            heroImg = heroImg0;
            break;
        }
        case 1: {
            heroImg = heroImg1;
            break;
        }
        default: {
            heroImg = heroImg2;
            break;
        }
    }




    return (

        <section className={`Heading`}>
            <div className="img">
                <TransitionGroup>
                    <CSSTransition
                        key={usedId}
                        timeout={700}
                        mountOnEnter
                        unmountOnExit
                        classNames={slideState.direction}>


                        <img src={heroImg} alt="hero image" />

                    </CSSTransition>
                </TransitionGroup>
                {windowWidth <= 900 &&
                    <div className="angle-box">
                        <button onClick={slideLeft} href="#">
                            <img src={leftAngle} alt="" />
                        </button>
                        <button onClick={slideRight} href="#">
                            <img src={rightAngle} alt="" />
                        </button>
                    </div>}
            </div>



            <div className="content-wrapper">
                <TransitionGroup>
                    <CSSTransition
                        key={usedId}
                        timeout={700}
                        mountOnEnter
                        unmountOnExit
                        classNames={slideState.direction}>
                        <div className="content">
                            <h1>
                                {data[usedId].title}
                            </h1>
                            <p>
                                {data[usedId].content}
                            </p>
                            <a href="#">
                                <h3>
                                    shop now
                                </h3>
                                <img className='arrow' src={arrow} alt="" />
                            </a>
                        </div>

                    </CSSTransition>

                </TransitionGroup>
                {windowWidth > 900 &&
                    <div className="angle-box">
                        <button onClick={slideLeft} href="#">
                            <img src={leftAngle} alt="" />
                        </button>
                        <button onClick={slideRight} href="#">
                            <img src={rightAngle} alt="" />
                        </button>
                    </div>}
            </div>



        </section>
    )


}