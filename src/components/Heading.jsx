import { useState } from 'react'
import '../styles/Heading.css'
import heroImg0 from '../assets/desktop-image-hero-1.jpg'
import heroImg1 from '../assets/desktop-image-hero-2.jpg'
import heroImg2 from '../assets/desktop-image-hero-3.jpg'
import aboutDark from '../assets/image-about-dark.jpg'
import aboutLight from '../assets/image-about-light.jpg'
import arrow from '../assets/icon-arrow.svg'
import leftAngle from '../assets/icon-angle-left.svg'
import rightAngle from '../assets/icon-angle-right.svg'


export default function Header(props) {
    const {title, content, id} = props
    let heroImg
    switch(id){
        case 0:{
            heroImg = heroImg0;
            break;
        }
        case 1:{
            heroImg = heroImg1;
            break;
        }
        default:{
            heroImg = heroImg2;
            break;
        }
    }


    return (
        <section className = {`Heading heading${id}`}>
            <div className="img">
                <img src={heroImg} alt="hero image" />
            </div>
            <div className="content">
                <h1>
                    {title}
                </h1>
                <p>
                    {content}
                </p>
                <a href="#">
                    <h3>
                        shop now
                    </h3>
                    <img className='arrow' src={arrow} alt="" />
                </a>
                <div className="angle-box">
                    <button href="#">
                    <img src={leftAngle} alt="" />
                    </button>
                    <button href="#">
                    <img src={rightAngle} alt="" />
                    </button>
                </div>


            </div>

        </section>
    )
}