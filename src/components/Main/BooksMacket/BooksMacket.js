import React from 'react'
import './BooksMacket.css'
import image from '../../../img/Books/banditskiy_peterburg.jpg'

let BooksMacket = () => {
    return (
        <div className='book_wrap'>
            <img className='book_img' src={image} alt='books_image' />
            <span className='book_title'>Book name</span>
            <span className="book_price">750 rur</span>
        </div>
    )
}

export default BooksMacket;