import React from 'react'
import MenuCategory from '../../../MenuCategory'

let OtherCategory = (props) => {
    let menuList = MenuCategory.map((item) => {
        if (item.category === "Other") {
            return <li key={item.id} onClick={() => props.changeCategory(item.title)}>{item.title}</li>
        }
    })
    return menuList
}
export default OtherCategory