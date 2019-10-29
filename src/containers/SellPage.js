import React from 'react'
import {connect} from 'react-redux'
import SellPageComponent from '../components/SellPage/SellPage'

class SellPage extends React.Component {
    render() {
        return <SellPageComponent currentBook={this.props.currentBook}/>
    }
}

let mapStateToProps = (state) => {
    return {
        currentBook: state.currentBook
    };
}
/*
let mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentBook: (book) => {
          dispatch(changeCurrentBook(book))  
        }
    }
}*/



export default connect(mapStateToProps)(SellPage)