import React from 'react';
import Top2 from './Top-about.jsx';
import '../App.css';
//import '../css/About.css';

export default function About(){
    return (
        <div className="about">
            <Top2 />

            <br/>

            <div className="description">
                <p><h1 style={{font: 'fantasy', fontSize: '80px'}}>HELLO;</h1></p>
                <div className="about"></div>
            </div>

            <div className="right-info">
                <div className="vl"></div>

                <div className="like">
                    <p><h3>Things I like:</h3></p>
                    <ul>
                        <li>
                            <a href="https://github.com/koreaneggroll/libavoidrepetition-c" style={{textDecoration: 'none', color: 'black'}}>Contributing to Open-Source</a>
                        </li>

                        <br/>

                        <li>
                            Doggos
                        </li>

                        <br/>

                        <li>
                            Learning new things
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}