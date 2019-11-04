import React from 'react'
import WishListPageComponent from '../components/WishList/WishListPage'
import addToWishListComponent from '../actions/addBookToWishListAction'

class WishList extends React.Component {
    render() {
        return <WishListPageComponent />
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


export default connect(mapStateToProps,mapDispatchToProps)(SellPage)