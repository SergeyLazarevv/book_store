//import LOG_IN from '../actions/logIn'

let initialState = {
    cart: [],
    currentCategory: 'Horror'
}

const reducer = (state = initialState,action) => {
    if (action.type === 'changeCategory') {
        return {
            ...state,
            currentCategory: action.payload
        }
    }
    return state
}
export default reducer