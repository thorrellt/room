import { useState } from 'react'
import {
    TransitionGroup,
    SwitchTransition,
    CSSTransition
} from 'react-transition-group';
import '../styles/Navbar.css'
import roomLogo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'

export default function Navbar(props) {

    const {
        windowWidth,
        navActive,
        toggleNav
    } = props

    return (
        <nav>
            <img src={roomLogo} className='nav-logo' alt="" />

            {/* mobile menu toggle button animation logic */}
            {windowWidth <= 900 &&
                <SwitchTransition>
                    <CSSTransition
                        key={navActive}
                        classNames='nav-toggle-btn'
                        timeout={250}>
                        <button onClick={toggleNav} className='nav-toggle-btn'>
                            <img src={navActive ? close : hamburger} />
                        </button>

                    </CSSTransition>
                </SwitchTransition>
            }


            <ul className={navActive ? '' : 'hidden'}>
                <li>
                    <a href="#">home</a>
                </li>
                <li>
                    <a href="#">shop</a>
                </li>
                <li>
                    <a
                        href="https://github.com/thorrellt/room"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="github.com/thorrellt/room" title="github.com/thorrellt/room">
                        repo
                    </a>
                </li>
                <li>
                    <a
                        href="https://thorrellt.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="thorrellt.com" title="thorrellt.com">
                        author
                    </a>
                </li>
            </ul>
        </nav>
    )

}