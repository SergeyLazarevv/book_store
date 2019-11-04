const addtoCartAction = (category) => {
    return {
        type: 'ADD_TO_CART',
        payload: category
    }
}

export default addtoCartAction