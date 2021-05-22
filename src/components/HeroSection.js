import React from 'react'
// import '../App.css';
import {Button} from './Button'
import './HeroSection.css';
import HeroVideo from '../videos/video-2.mp4'


function HeroSection() {
    return (
        <div className = "hero-container">
            {/* <video src = {HeroVideo} autoPlay loop muted/> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className = "hero-btns">
                <Button className = "hero-btns" buttonStyle = "btn--outline"
                buttonSize = "btn--large">GET STARTED</Button>

                <Button className = "hero-btns" buttonStyle = "btn--primary"
                buttonSize = "btn--large">Watch Trailer <i className="far fa-play-circle"/></Button>
            </div>
        </div>
    )
}

export default HeroSection
