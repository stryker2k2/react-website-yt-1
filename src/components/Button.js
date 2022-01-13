import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, linkTo}) => 
{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    if (linkTo === 'about')
    {
        return (
            <Link to='/about' className = 'btn-mobile'>
                <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
                    {children}
                </button>
            </Link>
        )
    }

    else
    return (
        <a href = {linkTo} className = 'btn-mobile'>
            <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
                {children}
            </button>
        </a>
    )
    
};