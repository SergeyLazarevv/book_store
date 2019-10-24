import React from 'react'
import MenuCategory from '../../../MenuCategory'

let AllCategory = (props) => {
    let menuList = MenuCategory.map((item) => {
        return <li key={item.id} onClick={() => props.changeCategory(item.title)}>{item.title}</li>
    })
    return menuList
}
export default AllCategory