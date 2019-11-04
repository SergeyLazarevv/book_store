//import LOG_IN from '../actions/logIn'

let initialState = {
    cart: [],
    currentCategory: 'Horror',
    currentBook: {}
}

const reducer = (state = initialState,action) => {
    if (action.type === 'changeCategory') {
        return {
            ...state,
            currentCategory: action.payload
        }
    }
    if (action.type === 'changeCurrentBook') {
        return {
            ...state,
            currentBook: action.payload
        }
    }
    if (action.type === 'ADD_TO_CART') {
        console.log(action.payload)
        return {
            ...state,
            cart: [...state.cart,action.payload]
        }
    }
    console.log(state)
    return state
}
export default reducer