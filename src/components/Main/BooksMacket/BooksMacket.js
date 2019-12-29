import React from 'react'
import './BooksMacket.css'
//import image from '../../../img/Books/book.png'
import {Link} from 'react-router-dom';


let BooksMacket = (props) => {
    console.log(props.image)
    //let addr = require(); //   '../../../img/Books/ege.jpg'
   //console.log(addr)
    return (
        <Link to='/SellPage' className='book_wrap' key={props.id} onClick={()=>props.changeCurrentBook(props.currentBook)}>
            <img className='book_img' src={props.image} alt='books_image' />
            <span className='book_title'>{props.title}</span>
            <span className="book_price">{props.price} $</span>
        </Link>
    )
}

export default BooksMacket;