import { useState, useRef } from 'react'
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

    const { title, content, id } = props
    const [currId, setCurrId] = useState(() => 0)
    const [inProp, setInProp] = useState(true);
    let heroImg
    switch (currId) {
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

    const nextHeading = () => {
        setCurrId(prevId => (prevId + 1) % 3)
    }

    const prevHeading = () => {
        const newId = currId === 0 ? 2 : currId - 1
        setCurrId(newId)
    }

    return (

        <div className="main">
            <TransitionGroup>
                {currId === 0 &&
                    <CSSTransition
                        in={inProp}
                        timeout={1000}
                        mountOnEnter
                        unmountOnExit
                        classNames="heading-container">
                        <section className={`Heading heading${currId}`}>
                            <div className="img">
                                <img src={heroImg} alt="hero image" />
                            </div>
                            <div className="content">
                                <h1>
                                    {data[currId].title}
                                </h1>
                                <p>
                                    {data[currId].content}
                                </p>
                                <a href="#">
                                    <h3>
                                        shop now
                                    </h3>
                                    <img className='arrow' src={arrow} alt="" />
                                </a>
                            </div>
                        </section>
                    </CSSTransition>
                }
                {currId === 1 &&
                    <CSSTransition
                        in={inProp}
                        timeout={1000}
                        mountOnEnter
                        unmountOnExit
                        classNames="heading-container">
                        <section className={`Heading heading${currId}`}>
                            <div className="img">
                                <img src={heroImg} alt="hero image" />
                            </div>
                            <div className="content">
                                <h1>
                                    {data[currId].title}
                                </h1>
                                <p>
                                    {data[currId].content}
                                </p>
                                <a href="#">
                                    <h3>
                                        shop now
                                    </h3>
                                    <img className='arrow' src={arrow} alt="" />
                                </a>
                            </div>
                        </section>
                    </CSSTransition>
                }
                {currId === 2 &&
                    <CSSTransition
                        in={inProp}
                        timeout={1000}
                        mountOnEnter
                        unmountOnExit
                        classNames="heading-container">
                        <section className={`Heading heading${currId}`}>
                            <div className="img">
                                <img src={heroImg} alt="hero image" />
                            </div>
                            <div className="content">
                                <h1>
                                    {data[currId].title}
                                </h1>
                                <p>
                                    {data[currId].content}
                                </p>
                                <a href="#">
                                    <h3>
                                        shop now
                                    </h3>
                                    <img className='arrow' src={arrow} alt="" />
                                </a>
                            </div>
                        </section>
                    </CSSTransition>
                }

            </TransitionGroup>
            <div className="angle-box">
                <button onClick={prevHeading} href="#">
                    <img src={leftAngle} alt="" />
                </button>
                <button onClick={nextHeading} href="#">
                    <img src={rightAngle} alt="" />
                </button>
            </div>
        </div>

    )
}