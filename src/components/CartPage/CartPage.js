import React from 'react'
import './CartPage.css'
import BookImg from '../../img/Books/book.png'

let CartPageBookList = (props) => {
    return (
        <li className='bookList'>
            <img className='bookListItem_img' src={props.image} />
            {props.title}
        </li>
    )
}

let CartPage = (props) => {
    return (
        <div className='cartPage_wrap'>
            <h2>Your cart</h2>
            <ul className='bookList_wrap'>
                {props.cart.length>0 ? props.cart.map((book,index) => <CartPageBookList key={index} title={book.title} image={book.image}/>) 
                : "Your cart is empty yet"}
            </ul>
            <span className='cartPage_price'>Summary price: {props.cart.reduce((sum,book) => sum + parseInt(book.price),0)} $</span>
        </div>
    )
}
export default CartPage