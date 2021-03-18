import mainImg from '../pics/mainImg.jpg';
import '../App.css';
import React from 'react';
import { useState } from 'react';
import Explore from './Explore';
import ReactDOM from 'react-dom';


function App() {

  function handleExplore(){
    ReactDOM.render(
      <Explore />,
      document.getElementById('root')
    );
  }

  return (

    <div className="image">
    <img src={mainImg} style={{width: '100%', height: '100%'}}/>
    <div className="small-about">
      <h2 id="name">A R I N<br/>G R I G O R A S</h2>
      <p style={{fontSize: '15px'}}>Self-taugh programmer.<br/>Intermediate in C.<br/>Learning React.js</p>
      <div className="wrapper">
        <button onClick={handleExplore} className="explore" style={{color: 'black'}}>Explore</button>
      </div>
    </div>
  </div>

  );
}

export default App;
