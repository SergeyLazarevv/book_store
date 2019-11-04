import React from 'react';
import './App.css'
import AboveHeader from './components/Above_header/Above_header'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import CardInfo from './components/card_info/CardInfo'
import {BrowserRouter,Route} from 'react-router-dom'
import SellPage from './containers/SellPage'
import {connect} from 'react-redux'
import CartPage from './containers/CartPage'
import {Redirect} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
        <AboveHeader />
        <Header />
          <Route exact path='/' component={Menu} />
          <Route exact path='/' component={Main} />
          {/* this.props.currentBook ?
                  <Route path='/SellPage' component={SellPage} />
                  : <Redirect from="/SellPage" to="/" />
          */}
          <Route exact path='/SellPage' component={SellPage} />
          <Route exact path='/CartPage' component={CartPage} />
        </BrowserRouter>
        <Footer />
        <CardInfo />
      </div>
    );
  }
}
  
let mapStateToProps = (state) => {
  return {
      currentBook: state.currentBook
  };
}

export default connect(mapStateToProps)(App);
