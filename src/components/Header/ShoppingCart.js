import React from 'react'
import shopping_cart from '../../img/Header/cart.png'
import {Link} from 'react-router-dom'

let ShoppingCart = (props) => {
    return  (
        <Link to='/CartPage' className='shopping_cart-wrap'>
            <div>
                <img className='shopping_cart-logo' src={shopping_cart} alt='cart'/>
                <span>Your Cart 
                    <span className='itemsValue'>

                    ({props.booksValue.length} {props.booksValue.length > 1 ? 'items' : 'item'})
                    </span>
                </span>
            </div>
            <div className='checkout-wrap'>
                <span className='buySum'>
                 $ {
                    !props.booksValue.length>=1 ? '0' :
                       props.booksValue.reduce((priceSum,book) => priceSum + parseInt(book.price),0)
                 }
                 </span> 
                 <span className='checkout'>checkout</span>
                 </div>
            </Link>
    )
}
export default ShoppingCart;