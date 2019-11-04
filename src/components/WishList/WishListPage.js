import React from 'react'
import './WishListPage.css'

let WishListPageBookList = (props) => {
    return (
        <li className='wishListPage'>{props.title}</li>
    )
}

let WishListPage = (props) => {
    return (
        <div className='wishListPage_wrap'>
            <h2>Your cart</h2>
            <ul className='wishListPage_wrap'>
                {props.wishList.length>0 ? props.wishList.map((book) => <WishListPageBookList title={book.title}/>) 
                : "Your wish list is empty yet"}
            </ul>
            <span className='wishListPage_price'>Summary price: {props.wishList.reduce((sum,book) => sum + parseInt(book.price),0)} $</span>
        </div>
    )
}
export default WishListPage