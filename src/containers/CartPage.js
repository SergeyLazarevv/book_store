import React from 'react'
import {connect} from 'react-redux'
import CartPageComponent from '../components/CartPage/CartPage'

class CartPage extends React.Component {
    render() {
        return (
            <CartPageComponent cart={this.props.cart}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
}



export default connect(mapStateToProps)(CartPage)