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
                <h2>
                    ABOUT OUR FURNITURE
                </h2>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <div className="img-2">
                <img src={aboutLight} alt="about image" />
            </div>
        </section>
    )
}