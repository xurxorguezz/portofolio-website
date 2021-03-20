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
                <p><h1 style={{font: 'fantasy', fontSize: '80px', color: 'lightblue', fontWeight: 'bolder', marginLeft: '20px'}}>HELLO;</h1></p>
                <div className="about">
                    <h3 style={{font: 'fantasy', marginLeft: '40px' }}>
                        I am Arin and I am a Student/Programmer. I'm very energic and eager to learn new things(not
                    </h3>
                    <h3>
                        <p style={{marginLeft: '10px'}}>
                            neccessarily programming).
                        </p>
                    </h3>

                    <h3 style={{font: 'fantasy', marginLeft: '30px'}}>
                        <br/>
                        <p>I got into programming writing little scripts in a Game called KSP(kerbal space program), </p>
                    </h3>
                    <h3>
                        <p style={{marginLeft: '10px'}}>using a small programming language called kos</p>
                    </h3>
                </div>
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

                <div className="sponsors">
                    <h3>Sponsors: </h3>
                    <ul>
                        <li>
                            No Sponsors yet
                        </li>


                        <li id="becomespns">
                            <a href="https://www.patreon.com/ArinDesign" style={{textDecoration: 'none', color: 'black'}}><h4>Become A Sponsor</h4></a>
                        </li>
                    </ul>
                </div>


                <div className="technologies">
                    <h3>This website was built with: </h3>

                    <ul>
                        <li>
                            <a href="https://reactjs.org/" style={{textDecoration: 'none', color: 'black', fontSize: '18px'}}>React.js</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}