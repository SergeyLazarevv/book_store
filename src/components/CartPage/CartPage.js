import React from 'react'
import './CartPage.css'

let CartPageBookList = (props) => {
    return (
        <li className='bookList'>{props.title}</li>
    )
}

let CartPage = (props) => {
    return (
        <div className='cartPage_wrap'>
            <h2>Your cart</h2>
            <ul className='bookList_wrap'>
                {props.cart.length>0 ? props.cart.map((book) => <CartPageBookList title={book.title}/>) 
                : "Your cart is empty yet"}
            </ul>
            <span className='cartPage_price'>Summary price: {props.cart.reduce((sum,book) => sum + parseInt(book.price),0)} $</span>
        </div>
    )
}
export default CartPage