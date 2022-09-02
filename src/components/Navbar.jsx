import { useState } from 'react'
import '../styles/Navbar.css'
import roomLogo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'

export default function Navbar(props) {

    const windowWidth = props.windowWidth

    return (
        <nav>
            <img src={roomLogo} className='nav-logo' alt="" />
            {windowWidth <= 900 &&
                <img src={hamburger}
                    className='nav-toggle'
                />}

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