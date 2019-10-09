import React from 'react'
import './Main.css'
import MainMenu from './MainMenu/MainMenu'
import Content from './Content/Content'

let Main = () => {
    return (
        <main>
            <MainMenu />
            <Content />
        </main>
    )
}

export default Main