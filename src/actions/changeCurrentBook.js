const changeCurrentBook = (book) => {
    return {
        type: 'changeCurrentBook',
        payload: book
    }
}

export default changeCurrentBook