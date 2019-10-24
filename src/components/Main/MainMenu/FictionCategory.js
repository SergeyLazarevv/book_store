import React from 'react'
import MenuCategory from '../../../MenuCategory'

let FictionCategory = (props) => {
    let menuList = MenuCategory.map((item,i) => {
        if (item.category === "Fiction & Literature") {
            return <li key={item.id} onClick={() => props.changeCategory(item.title)}>{item.title}</li>
        }
        
    })
    return menuList
}
export default FictionCategory