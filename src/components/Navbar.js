import React, {useEffect, useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {Button} from './Button'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => 
    {
        if (window.innerWidth <= 1090)
        {   setButton(false);   }
        else
        {   setButton(true);    }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className = 'navbar'>
                <div className = 'navbar-container'>
                    <Link to = '/' className = 'navbar-logo' onClick={closeMobileMenu}>
                        {/* TRVL <i className = 'fab fa-typo3'/> */}
                        STRYKERSOFT<img className = 'navbar-logo-img' alt = "navbar-logo" src = {require('../logos/s-icon-ribbon-solid-white-32x32.png').default}/>
                    </Link>
                    <div className = 'menu-icon' onClick={handleClick}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/minecraft' className = 'nav-links' onClick = {closeMobileMenu}>
                                Minecraft
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/cyber' className = 'nav-links' onClick = {closeMobileMenu}>
                                Cyber
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/about' className = 'nav-links-mobile' onClick = {closeMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' linkTo = "/about">About</Button>}
                </div>
            </nav> 
        </>
    )
}

export default Navbar
