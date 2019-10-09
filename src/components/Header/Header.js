import React from 'react'
import './Header.css'
import header_logo from '../../img/Header/logo.png'
import star from '../../img/Header/star.png'
import Search from './Search'
//import ShoppingCart from './ShoppingCart'
import ShoppingCartContainer from '../../containers/ShoppingCart'

let Header = () => {
    return (
        <header>
            <img className='header-logo' src={header_logo} />
            <Search />
            <ShoppingCartContainer />
            <div className='wishList'>
                <img className='wishList-logo' src={star} alt='star'/>
                <div>Wish List</div>
            </div>
        </header>
    )
}

export default Header