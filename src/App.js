import React from 'react';
import './App.css'
import Above_header from './components/Above_header/Above_header'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Main from './components/Main/Main'

function App() {
  return (
    <div className='app'>
      <Above_header />
      <Header />
      <Menu />
      <Main />
    </div>
  );
}

export default App;
