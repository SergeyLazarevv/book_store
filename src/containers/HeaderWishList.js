import React from 'react'
import HeaderWishListComponent from '../components/Header/HeaderWishList'
import addToWishList from '../actions/addBookToWishListAction'
import addToCartAction from '../actions/addToCartAction'
import {connect} from 'react-redux'

class HeaderWishList extends React.Component {
    render() {
        return <HeaderWishListComponent wishListValue={this.props.wishList} />
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


export default connect(mapStateToProps,mapDispatchToProps)(HeaderWishList)