let initialState = {
    cart: [],
    wishList: [],
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
        return {
            ...state,
            cart: [...state.cart,action.payload]
        }
    }
    if (action.type === 'ADD_TO_WISH_LIST') {
        return {
            ...state,
            wishList: [...state.wishList,action.payload]
        }
    }
    return state
}
export default reducer