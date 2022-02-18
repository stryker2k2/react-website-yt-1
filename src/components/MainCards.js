import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function MainCards() {
    return (
        <div className = "cards">
            <h1> Game, Blog, Eat, Rinse &amp; Repeat!</h1>
            <div className = "cards__container">
                <div className = "cards__wrapper">
                    <ul className = "cards__items">
                        <CardItem src = {require('../images/mc-boatdock.png').default}
                            text = "Explore our Minecraft Survival and Parkour Worlds"
                            label = "Minecraft"
                            path = "/minecraft"
                        />
                        <CardItem src = {require('../images/hxd-crackme.png').default}
                            text = "Dive in Deep with our Cyber Security Blogs"
                            label = "Cyber Security"
                            path = "/cyber"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src = {require('../images/plex-library.png').default}
                        text='Request Access to our Plex Server with over 1,500+ Movies and Shows'
                        label='Entertainment'
                        path='/underconstruction'
                        />
                        <CardItem
                        src = {require('../images/under-contruction.png').default}
                        text='More cool things are yet to come!'
                        label='Under Construction'
                        path='/underconstruction'
                        />
                        <CardItem
                        src = {require('../images/under-contruction.png').default}
                        text='More cool things are yet to come!'
                        label='Under Construction'
                        path = "/underconstruction"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default MainCards