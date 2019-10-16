import React from 'react'
import Biography from './Biography'
import Earth from './Earth'
import Mathematics from './Mathematics'
import Professional from './Professional'
import './Footer.css'

let Footer = () => {
    return (
        <footer>
            <Biography />
            <Earth />
            <Mathematics />
            <Professional />
        </footer>
    )
}
export default Footer