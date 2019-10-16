import React from 'react'
import ShoppingCart from '../components/Header/ShoppingCart'
import {connect} from 'react-redux'

class ShoppingCartContainer extends React.Component {
    /*constructor() {
        super()
    }*/
    render() {
        return (
            <ShoppingCart booksValue={this.props.booksValue} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        booksValue: state.cart
    };
}
/*
let mapDispatchToProps = (dispatch) => {
    return {
        addProfilePhoto: (file,imageUrl) => {
          dispatch(addUserPhoto(file,imageUrl))  
        }
    }
}

*/

export default connect(mapStateToProps)(ShoppingCartContainer)