import React from 'react'
import MainMenuComponent from '../components/Main/MainMenu/MainMenu'
import {connect} from 'react-redux'

class BooksMacket extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <BooksMacketComponent image={this.props} 
                                  title={this.props}
                                  price={this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isOpen: state.cart
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

export default connect(mapStateToProps,mapDispatchToProps)(MainMenu)