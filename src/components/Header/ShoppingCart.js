import React from 'react'
import shopping_cart from '../../img/Header/cart.png'

let ShoppingCart = (props) => {
    return  (
        <div className='shopping_cart-wrap'>
            <div>
                <img className='shopping_cart-logo' src={shopping_cart} alt='cart'/>
                <span>Your Cart 
                    <span className='itemsValue'>

                    ({props.booksValue.length} {props.booksValue.length > 1 ? 'items' : 'item'}){/*add items*/}
                    </span>
                </span>
            </div>
            <div className='checkout-wrap'><span className='buySum'>125 ${/*Add summ*/}</span> <span className='checkout'>checkout</span></div>
        </div>
    )
}

export default ShoppingCart;