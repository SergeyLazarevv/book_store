import React from 'react'
import star from '../../img/Header/star.png'
import {Link} from 'react-router-dom';

let HeaderWishList = (props) => {
    return (
        <Link to='/wishListPage' className='wishList'>
                <img className='wishList-logo' src={star} alt='star'/>
                <span>Wish List</span>
                <div className='wishList-value' 
                     style={props.wishListValue.length<1 ? {display:'none'} : {display:'block'}}>
                        {props.wishListValue.length}
                </div>
        </Link>
    )
}

export default HeaderWishList