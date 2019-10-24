import React from 'react'
import './Header.css'
import header_logo from '../../img/Header/logo.png'
import star from '../../img/Header/star.png'
import Search from './Search'
import ShoppingCartContainer from '../../containers/ShoppingCart'
import {Link} from 'react-router-dom';

let Header = () => {
    return (
        <header>
            <Link to='/'> <img className='header-logo' src={header_logo} alt='logo'/></Link>
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