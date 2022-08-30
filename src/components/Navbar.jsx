import { useState } from 'react'
import '../styles/Navbar.css'
import roomLogo from '../assets/logo.svg'

export default function Navbar() {
    return(
        <nav>
            <img src={roomLogo} alt="" />
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
            </ul>
        </nav>
    )

}