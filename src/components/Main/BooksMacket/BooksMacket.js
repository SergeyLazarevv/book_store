import React from 'react'
import './BooksMacket.css'
import image from '../../../img/Books/book.png'
import {Link} from 'react-router-dom';


let BooksMacket = (props) => {
    return (
        <Link to='/SellPage' className='book_wrap' key={props.id}>
            <img className='book_img' src={image} alt='books_image' />
            <span className='book_title'>{props.title}</span>
            <span className="book_price">{props.price} rur</span>
        </Link>
    )
}

export default BooksMacket;