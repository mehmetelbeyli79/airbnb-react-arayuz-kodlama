import React from 'react'
import './hero.css'
import heroImage from '../img/Group.png'
function Hero() {
    return (
        <div className='Hero'>
            <img src={heroImage} alt="" />
            <h3>Online Experiences</h3>
            <p>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero
