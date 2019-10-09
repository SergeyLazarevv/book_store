import React from 'react'
import MainMenuComponent from '../components/Main/MainMenu/MainMenu'
import {connect} from 'react-redux'

class MainMenu extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <MainMenuComponent isOpen={this.props} />
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