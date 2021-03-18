import React from 'react';
import '../css/top.css';
import ARIN from '../pics/arin_black.png';
import VRIN from '../pics/VRIN.png';
import App from './App';
import ReactDOM from 'react-dom';
import Explore from './Explore';

export default function Top(){

    function handleClick(){
        ReactDOM.render(
            <Explore />,
            document.getElementById('root')
        );
    }

    return(
        <div className="top-left">
            <img id="logo" src={VRIN}
                onMouseOver={e => (e.currentTarget.src = ARIN)}
                onMouseOut={e => (e.currentTarget.src = VRIN)}
                onClick={handleClick}
            />
        </div>
    );
}