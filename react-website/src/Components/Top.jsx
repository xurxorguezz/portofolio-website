import React from 'react';
import '../css/top.css';
import ARIN from '../pics/arin_black.png';
import VRIN from '../pics/VRIN.png';
import About from './About';
import ReactDOM from 'react-dom';

export default function Top(){

    function handleClick(){
        ReactDOM.render(
            <About />,
            document.getElementById('root')
        );
    }

    return(
        <div className="top-left">
            <img id="logo" src={ARIN} alt="VRINLOGO"
                onMouseOver={e => (e.currentTarget.src = VRIN)}
                onMouseOut={e => (e.currentTarget.src = ARIN)}
                onClick={handleClick}
            />
        </div>
    );
}