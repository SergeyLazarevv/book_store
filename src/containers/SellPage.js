import React from 'react'
import {connect} from 'react-redux'
import BookInfoComponent from '../components/SellPage/BookInfo/BookInfo'
import BuyBtns from '../components/SellPage/BuyBtns/BuyBtns'
import addToCartAction from '../actions/addToCartAction'
import addToWishList from '../actions/addBookToWishListAction'

class SellPage extends React.Component {
    render() {
        return (
            <div>
                <BookInfoComponent currentBook={this.props.currentBook}/>
                <BuyBtns addBookToCart={this.props.addBookToCart}
                         addBookToWishList={this.props.addBookToWishList} 
                         currentBook={this.props.currentBook} />
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
        },
        addBookToWishList: (book) => {
            dispatch(addToWishList(book))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SellPage)