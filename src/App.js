import React from 'react';
import './App.css';
import Header from './components/header';
import Subheader from './components/subheader';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <Header />
      <Subheader />
      <Content />
    </div>
  );
}

export default App;
