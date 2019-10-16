const changeCategoryAction = (category) => {
    return {
        type: 'changeCategory',
        payload: category
    }
}

export default changeCategoryAction