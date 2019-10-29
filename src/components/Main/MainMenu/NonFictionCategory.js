import React from 'react'
import MenuCategory from '../../../MenuCategory'

let NonFictionCategory = (props) => {
    let menuList = MenuCategory.map((item) => {
        if (item.category === "Non Fiction") {
            return <li key={item.id} onClick={() => props.changeCategory(item.title)}>{item.title}</li>
        }
        
    })
    return menuList
}
export default NonFictionCategory