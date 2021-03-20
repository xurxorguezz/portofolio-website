
import React from 'react';
import '../App.css';
import Top from './Top';
import editor from '../pics/editor.png';
import portofolio from '../pics/portofolio.png';
import shell from '../pics/shell.png';
import ReactDOM from 'react-dom';
import About from './About';


function Explore(){
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const checkNext = () => {
      const labels = document.querySelectorAll('#slider label');
      const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1; 
      setSelectedIndex(nextIndex);
    }
  
    const check = index => setSelectedIndex(index);

    const projects = "<Projects>";
    const projects1 = "</Projects>";




    function handleAbout(){
      ReactDOM.render(
        <About />,
        document.getElementById('root')
      );
    }



  
    return (
        <div>
          <div style={{display: 'inline-block'}}>
            <Top />
          </div>
            <div className="projects" style={{textAlign: 'center'}}>
              <header className="title" style={{marginBottom: '50px'}}><h1>{projects}<br/><br/><br/></h1></header>
            </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4" style={{position: 'relative'}}>
            <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            </div>
            <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
              <section
                id="slider"
                className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
              >
                <input
                  type="radio"
                  name="slider"
                  id="s1"
                  checked={selectedIndex === 0}
                  onClick={() => check(0)}
                />
                <input 
                  type="radio" 
                  name="slider" 
                  id="s2" 
                  checked={selectedIndex === 1}
                  onClick={() => check(1)}
                />
                <input
                  type="radio"
                  name="slider"
                  id="s3"
                  checked={selectedIndex === 2}
                  onClick={() => check(2)}
                />
                <label htmlFor="s1" id="slide1">
                  <img className="fea" src={portofolio} height="100%" width="100%" alt="Portofolio-img"/>
                  <p style={{textAlign: 'center'}}>
                    Portofolio<br/><br/>
                    <a href="https://github.com/koreaneggroll/portofolio-website" id="portofolio" style={{textDecoration: 'none', color: 'blue'}}>View</a>
                  </p>
                </label>
                <label htmlFor="s2" id="slide2">
                  <img className="fea" src={editor} height="100%" width="100%" alt="Xenon-img"/>
                  <p style={{textAlign: 'center'}}>
                    Xenon<br/><br/>
                    <a href="https://github.com/koreaneggroll/Xenon-text-editor" id="text-editor" style={{textDecoration: 'none', color: 'blue'}}>View</a>
                  </p>
                </label>
                <label htmlFor="s3" id="slide3">
                  <img className="fea" src={shell} height="100%" width="100%" alt="Shell-img"/>
                  <p style={{textAlign: 'center'}}>
                    Shell<br/><br/>
                    <a href="https://github.com/koreaneggroll/shell" id="shell" style={{textDecoration: 'none', color: 'blue'}}>View</a>
                  </p>
                </label>
              </section>
            </div>
            <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            </div>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div><h1 style={{textAlign: 'center'}}>{projects1}</h1></div>

          <hr/>

          <br/><br/><br/><br/>
          <div className="about-button">
            <button onClick={handleAbout} className="explore" id="About" style={{marginLeft: '43%'}}>About</button>
          </div>
          <br/><br/><br/><br/><br/>


        </div>
      );
}



export default Explore;