import { useState } from 'react'
import '../styles/Footer.css'
import aboutDark from '../assets/image-about-dark.jpg'
import aboutLight from '../assets/image-about-light.jpg'


export default function Footer() {

    return (
        <section id="Footer">
            <div className="img-1">
            <img src={aboutDark} alt="about image" />
            </div>
            <div className="content">
                <h1>Im the Content</h1>
            </div>
            <div className="img-2">
                <img src={aboutLight} alt="about image" />
            </div>
        </section>
    )
}