import React from 'react'
import './Header.css'
import header_logo from '../../img/Header/logo.png'
import HeaderWishListContainer from '../../containers/HeaderWishList'
import Search from './Search'
import ShoppingCartContainer from '../../containers/ShoppingCart'
import {Link} from 'react-router-dom';

let Header = () => {
    return (
        <header>
            <Link to='/'> <img className='header-logo' src={header_logo} alt='logo'/></Link>
            <Search />
            <ShoppingCartContainer />
            <HeaderWishListContainer />
        </header>
    )
}

export default Header