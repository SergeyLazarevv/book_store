import React from 'react'
import './MainMenu.css'
import {connect} from 'react-redux'
import changeCategoryAction from '../../../actions/changeCategoryAction'
import AllCategory from './AllCategory'
import OtherCategory from './OtherCategory'
import NonFictionCategory from './NonFictionCategory'
import FictionCategory from './FictionCategory'
import MenuCategory from '../../../MenuCategory'

class MainMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen_All: false,
            isOpen_Fiction: false,
            isOpen_NonFiction: false,
            isOpen_Other: false
        }
    }
    DropMenuToggle = (some) => {
        switch (some) {
            case 'all': this.setState({isOpen_All: !this.state.isOpen_All});
                break;
            case 'Fiction': this.setState({isOpen_Fiction: !this.state.isOpen_Fiction});
                break;
            case 'NonFiction': this.setState({isOpen_NonFiction: !this.state.isOpen_NonFiction});
                break;
            case 'Other': this.setState({isOpen_Other: !this.state.isOpen_Other});
                break;
            default:
                break; 
        }
    } 
    render() {
    return (
        <aside className='MainMenu-wrap'>
            <h2>Categories</h2>
            <h3 onClick={()=>this.DropMenuToggle('all')}>All</h3> 
            <ul className='mainMenuList'style={{display: this.state.isOpen_All ? 'block' : 'none'}}>
                <AllCategory changeCategory={this.props.changeCategory}/>
            </ul>
            <h3 onClick={()=>this.DropMenuToggle('Fiction')}>Fiction & Literature</h3>
            <ul className='mainMenuList' style={{display: this.state.isOpen_Fiction ? 'block' : 'none'}}>
            <FictionCategory changeCategory={this.props.changeCategory}/>
            </ul>
            <h3 onClick={()=>this.DropMenuToggle('NonFiction')}>Non Fiction</h3>
            <ul className='mainMenuList' style={{display: this.state.isOpen_NonFiction ? 'block' : 'none'}}>
                <NonFictionCategory changeCategory={this.props.changeCategory} />
            </ul>
            <h3 onClick={()=>this.DropMenuToggle('Other')}>Other</h3>
            <ul className='mainMenuList' style={{display: this.state.isOpen_Other ? 'block' : 'none'}}>
                <OtherCategory changeCategory={this.props.changeCategory}/>
            </ul>
        </aside>
    )
}
}

let mapStateToProps = (state) => {
    return {
        state: state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeCategory: (category) => {
            dispatch(changeCategoryAction(category))
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainMenu)