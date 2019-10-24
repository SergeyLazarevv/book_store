import React from 'react';
import './App.css'
import AboveHeader from './components/Above_header/Above_header'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import CardInfo from './components/card_info/CardInfo'
import {BrowserRouter,Route} from 'react-router-dom'
import SellPage from './components/SellPage/SellPage'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <AboveHeader />
      <Header />
        <Route exact path='/' component={Menu} />
        <Route exact path='/' component={Main} />
        <Route path='/SellPage' component={SellPage} />
      </BrowserRouter>
      <Footer />
      <CardInfo />
    </div>
  );
}

export default App;
