import mainImg from '../pics/mainImg.jpg';
import '../App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  return (
    <img src={mainImg} style={{width: '100%', height: '100%'}}/>
  );
}

export default App;
