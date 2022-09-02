import { useState } from 'react'
import '../styles/Navbar.css'
import roomLogo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'

export default function Navbar(props) {

    const { windowWidth, navActive, toggleNav } = props
    console.log(navActive)


    return (
        <nav>
            <img src={roomLogo} className='nav-logo' alt="" />
            {windowWidth <= 900 &&
                <button onClick={toggleNav}>
                    <img src={navActive ? close : hamburger}
                        className='nav-toggle'
                    />
                </button>
            }

            {windowWidth > 900 &&
                <ul>
                    <li>
                        <a href="#">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            shop
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            about
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            contact
                        </a>
                    </li>
                </ul>}
        </nav>
    )

}