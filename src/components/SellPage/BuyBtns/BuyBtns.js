import React from 'react'
import './BuyBtns.css'

let BuyBtns = (props) => {
    return (
        <div className='buyBtns_wrap'>
            <button type='button' 
                    className='addToCard'
                    onClick={() => props.addBookToCart(props.currentBook)}>Add To Card
            </button>
            <button type='button' 
                    className='addToWishList'
                    onClick={() => props.addBookToWishList(props.currentBook)}>Add To WishList
            </button>
        </div>
    )
}

export default BuyBtns