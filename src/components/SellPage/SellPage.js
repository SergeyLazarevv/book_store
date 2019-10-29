import React from 'react'
import './SellPage.css'
import BookInfo from './BookInfo/BookInfo'

let SellPage = (props) => {
    return (
        <div className='sellPage'>
            <BookInfo currentBook={props.currentBook}/>
        </div>
    )
}
export default SellPage