import React from 'react';
import './App.css'
import AboveHeader from './components/Above_header/Above_header'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import CardInfo from './components/card_info/CardInfo'

function App() {
  return (
    <div className='app'>
      <AboveHeader />
      <Header />
      <Menu />
      <Main />
      <Footer />
      <CardInfo />
    </div>
  );
}

export default App;
