import React from 'react'
import WishListPageComponent from '../components/WishList/WishListPage'
import addToWishList from '../actions/addBookToWishListAction'
import addToCartAction from '../actions/addToCartAction'
import {connect} from 'react-redux'

class WishList extends React.Component {
    render() {
        return <WishListPageComponent addBookToWishList={this.props.addBookTooWishList} 
                                      addBookToCart={this.props.addBookTooCart}
                                      wishList={this.props.wishList} />
    }
}

let mapStateToProps = (state) => {
    return {
        wishList: state.wishList
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


export default connect(mapStateToProps,mapDispatchToProps)(WishList)