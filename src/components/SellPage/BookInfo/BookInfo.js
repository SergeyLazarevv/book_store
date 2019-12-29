import React from 'react'
import BookImg from './book.png'
import './BookInfo.css'

let BookInfo = (props) => {
    return (
        <div className='bookInfo_wrap'>
            <img className='bookImage' src={props.currentBook.image} />
            {console.log(BookImg)}
            <div className='bookInfo_textWrap'>
            <h2>{props.currentBook.title}</h2>
            <h3 className='bookInfo_price'>{props.currentBook.price} $</h3>
            <p className='bookInfo_description'>Old education him departure any arranging one prevailed. 
                Their end whole might began her. Behaved the comfort another fifteen eat. 
                Partiality had his themselves ask pianoforte increasing discovered. 
                So mr delay at since place whole above miles. He to observe conduct at detract because. 
                Way ham unwilling not breakfast furniture explained perpetual. Or mr surrounded 
                conviction so astonished literature. Songs to an blush woman be sorry young. 
                We certain as removal attempt. 
                Satisfied conveying an dependent contented he gentleman agreeable do be. 
                Warrant private blushes removed an in equally totally if. Delivered dejection 
                necessary objection do mr prevailed. Mr feeling do chiefly cordial in do. Water 
                timed folly right aware if oh truth. Imprudence attachment him his for sympathize. 
                Large above be to means. Dashwood do provided stronger is. But discretion frequently 
                sir the she instrument unaffected admiration everything.
            </p>
            </div>
        </div>
    )
}
export default BookInfo