import { useState } from 'react'
import '../styles/Heading.css'


export default function Header() {

    return (
        <section id="Heading">
            <div className="img">
                <h1>Im the Image</h1>
            </div>
            <div className="content">
                <h1>Im the Content</h1>
            </div>

        </section>
    )
}