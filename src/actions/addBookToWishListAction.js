const addBookToWishListAction = (category) => {
    return {
        type: 'ADD_TO_WISH_LIST',
        payload: category
    }
}

export default addBookToWishListAction