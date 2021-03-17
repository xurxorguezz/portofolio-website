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
      <h2>Arin Grigoras
      <p style={{fontSize: '15px'}}>Selft-taugh programmer.<br/>Intermediate in C.<br/>Learning React.js</p></h2>
      <div className="wrapper">
        <button onClick={handleExplore} className="explore" style={{color: 'black'}}>Explore</button>
      </div>
    </div>
  </div>

  );
}

export default App;
