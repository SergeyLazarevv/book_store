import React from 'react'
import {connect} from 'react-redux'
import BookInfoComponent from '../components/SellPage/BookInfo/BookInfo'
import BuyBtns from '../components/SellPage/BuyBtns/BuyBtns'
import addToCartAction from '../actions/addToCartAction'

class SellPage extends React.Component {
    render() {
        return (
            <div>
                <BookInfoComponent currentBook={this.props.currentBook}/>
                <BuyBtns addBookToCart={this.props.addBookToCart} currentBook={this.props.currentBook}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentBook: state.currentBook,
        cart: state.cart
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addBookToCart: (book) => {
          dispatch(addToCartAction(book))  
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(SellPage)