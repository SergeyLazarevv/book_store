//import LOG_IN from '../actions/logIn'

let initialState = {
    cart: [],
    currentCategory: 'Horror',
    currentBook: 'some book'
}

const reducer = (state = initialState,action) => {
    if (action.type === 'changeCategory') {
        console.log('change Category')
        return {
            ...state,
            currentCategory: action.payload
        }
    }
    if (action.type === 'changeCurrentBook') {
        console.log('changed book')
        return {
            ...state,
            currentBook: action.payload
        }
    }
    return state
}
export default reducer