import React from 'react'
import './MainMenu.css'
import {connect} from 'react-redux'
import changeCategoryAction from '../../../actions/changeCategoryAction'

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
                <li>Children</li>
                <li>Science </li>
                <li onClick={() => this.props.changeCategory('Fantasy')}>Fantasy</li>
                <li>Mystery</li>
                <li>Romance</li>
                <li onClick={() => this.props.changeCategory('Horror')}>Horror</li>
                <li>Poetry</li>
                <li>Literature</li>
                <li>Crime</li>
                <li>Comic</li>
                <li>Cook</li>
                <li>Psychology</li>
                <li>Medical</li>
                <li>Art</li>
                <li>Photography</li>
                <li>Law</li>
                <li>History</li>
                <li>Business</li>
                <li>Computer</li>
                <li>Baby</li>
                <li>Sex</li>
                <li>Travel</li>
                <li>Science</li>
                <li>Sports</li>
            </ul>
            <h3 onClick={()=>this.DropMenuToggle('Fiction')}>Fiction & Literature</h3>
            <ul className='mainMenuList' style={{display: this.state.isOpen_Fiction ? 'block' : 'none'}}>
                <li>Children</li>
                <li>Science </li>
                <li>Fantasy</li>
                <li>Mystery</li>
                <li>Romance</li>
                <li>Horror</li>
                <li>Poetry</li>
                <li>Literature</li>
                <li>Crime</li>
            </ul>
            <h3 onClick={()=>this.DropMenuToggle('NonFiction')}>Non Fiction</h3>
            <ul className='mainMenuList' style={{display: this.state.isOpen_NonFiction ? 'block' : 'none'}}>
                <li>Comic</li>
                <li>Cook</li>
                <li>Psychology</li>
                <li>Medical</li>
                <li>Art</li>
                <li>Photography</li>
                <li>Law</li>
                <li>History</li>
                <li>Business</li>
                <li>Computer</li>
            </ul>
            <h3 onClick={()=>this.DropMenuToggle('Other')}>Other</h3>
            <ul className='mainMenuList' style={{display: this.state.isOpen_Other ? 'block' : 'none'}}>
                <li>Baby</li>
                <li>Sex</li>
                <li>Travel</li>
                <li>Science</li>
                <li>Sports</li>
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