import React from 'react'
import './BooksMacket.css'
import image from '../../../img/Books/book.png'

let BooksMacket = (props) => {
    return (
        <div className='book_wrap' key={props.id}>
            <img className='book_img' src={image} alt='books_image' />
            <span className='book_title'>{props.title}</span>
            <span className="book_price">{props.price} rur</span>
        </div>
    )
}

export default BooksMacket;