import React from 'react'
// import '../App.css';
import {Button} from './Button'
import './HeroSection.css';
// import HeroVideo from '../videos/video-2.mp4'


function HeroSection() {
    return (
        <div className = "hero-container">
            {/* <video src = {HeroVideo} autoPlay loop muted/> */}
            <h1>STRYKERSOFT</h1>
            <p>Minecraft Host and Cyber Security Blog</p>
            <div className = "hero-btns">
                <Button className = "hero-btns" buttonStyle = "btn--outline"
                buttonSize = "btn--large" linkTo = "about">Cyber Security Blog</Button>

                <Button className = "hero-btns" buttonStyle = "btn--primary"
                buttonSize = "btn--large" linkTo = "https://youtu.be/VFwLAshD3Nc">Watch Minecraft Trailer<i className="far fa-play-circle"/></Button>
            </div>
        </div>
    )
}

export default HeroSection
