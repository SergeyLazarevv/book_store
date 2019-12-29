import React from 'react'
import './WishListPage.css'
import BookImg from '../../img/Books/book.png'



let WishListPageBookList = (props) => {
    return (
        <li className='wishListItem'>
            <img className='wishListItem_img' src={props.image} />
            {props.title}
        </li>
    )
}

let WishListPage = (props) => {
    return (
        <div className='wishListPage_wrap'>
            <h2>Your wish list</h2>
            <ul className='wishList_wrap'>
                {props.wishList.length>0 ? props.wishList.map((book,index) => <WishListPageBookList key={index} title={book.title} image={book.image}/>) 
                : "Your wish list is empty yet"}
            </ul>
            <span className='wishListPage_price'>Summary price: {props.wishList.reduce((sum,book) => sum + parseInt(book.price),0)} $</span>
        </div>
    )
}
export default WishListPage