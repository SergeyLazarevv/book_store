import React from 'react'
import './Content.css'
import jsonData from '../../../Data.json'
import BooksMacket from '../BooksMacket/BooksMacket'
import {connect} from 'react-redux'
import changeCurrentBook from '../../../actions/changeCurrentBook'

class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let book = jsonData.map((item) => {
                return item.category === this.props.currentCategory && <BooksMacket key={item.id} 
                                image={item.image} 
                                price={item.price} 
                                title={item.title} 
                                currentBook={item}
                                changeCurrentBook={this.props.changeCurrentBook} />
            })
        return (
            <div className='content'>
                <h2>{this.props.currentCategory}</h2>
                <div className='content_books_wrap'>
                    {book}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentCategory: state.currentCategory
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentBook: (book) => {
          dispatch(changeCurrentBook(book))  
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Content)