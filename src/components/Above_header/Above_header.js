import React from 'react'
import './Above_header.css'

let Above_header = () => {
    return (
        <div className='above_header'>
            <ul className='above_header-list'>
                <li className='above_header-item'>Sign in</li>
                <li className='above_header-item'>My Account</li>
                <li className='above_header-item'>Order Status</li>
                <li className='above_header-item'>Help</li>
            </ul>
        </div>
    )
}

export default Above_header