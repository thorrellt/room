import { useState } from 'react'
import '../styles/Heading.css'
import mainImg1 from '../assets/desktop-image-hero-1.jpg'
import aboutDark from '../assets/image-about-dark.jpg'
import aboutLight from '../assets/image-about-light.jpg'
import arrow from '../assets/icon-arrow.svg'


export default function Header() {

    return (
        <section id="Heading">
            <div className="img">
                <img src={mainImg1} alt="main image" />
            </div>
            <div className="content">
                <h1>
                    Discover innovative
                </h1>
                <p>
                    We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
                </p>
                <a href="#">
                    <h3>
                        shop now
                    </h3>
                    <img className='arrow' src={arrow} alt="" />
                </a>


            </div>

        </section>
    )
}