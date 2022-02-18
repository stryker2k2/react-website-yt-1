import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className = "footer-container">
            <div className = "footer-links">
                <div className = "footer-link-wrapper">
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                            <Link to='/about'>Strykersoft</Link>
                            <Link to='/'>Resume</Link>
                            <Link to='/'>Join the Team</Link>
                            <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                            <Link to='/'>Contact Info</Link>
                            <Link to='/'>Minecraft Support</Link>
                            <Link to='/'>Cyber Security Q&amp;A</Link>
                            <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Links</h2>
                            <Link to='/'>Black Lantern Security</Link>
                            <Link to='/'>GitHub</Link>
                            <Link to='/'>Ghidra</Link>
                            <Link to='/'>Minecraft</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                            <Link to='/youtube'>Youtube</Link>
                            <Link to='/twitter'>Twitter</Link>
                            <Link to='/linkedin'>LinkedIn</Link>
                            <Link to='/paypal'>PayPal</Link>
                    </div>
                </div>
            </div>
            <small className = "website-rights">Created using ReactJS <i className = "fab fa-react"></i></small>
            
            <section className = "social-media">
                <div className = "social-media-wrap">
                    <div className = "footer-logo">
                        <Link className = "social-logo">
                            <img className = 'navbar-logo-img' alt = "navbar-logo" src = {require('../logos/s-icon-ribbon-solid-white-32x32.png').default}/>
                        </Link>
                    </div>
                    <small className = "website-rights">Strykersoft © 2022</small>                    
                    <div className = "social-icons">
                        <Link className = "social-icon-link facebook"
                            to = "/"
                            target = "_blank"
                            aria-label = "Facebook">
                            <i className = "fab fa-facebook-f"></i>
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'>
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                            >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'>
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Footer
