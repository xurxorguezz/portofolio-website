import mainImg from '../pics/arin_black.png';
import React from 'react';
import '../App.css';
import Top from './Top';
import editor from '../pics/editor.png';


function Explore(){
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const checkNext = () => {
      const labels = document.querySelectorAll('#slider label');
      const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1; 
      setSelectedIndex(nextIndex);
    }
  
    const check = index => setSelectedIndex(index);
  
    return (
        <div>
          <div style={{display: 'inline-block'}}>
            <Top />
          </div>

          <div style={{display: 'inline-block'}}>
            Self-Taught Programmer
          </div>

            <div className="projects" style={{textAlign: 'center'}}>
              <header className="title"></header>
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
                  <img className="fea" src={editor} height="100%" width="100%"/>
                  <p style={{textAlign: 'center'}}>
                    <a href="https://github.com/koreaneggroll/portofolio-website" id="portofolio">Portofolio-Site</a>
                  </p>
                </label>
                <label htmlFor="s2" id="slide2">
                  <img className="fea" src={editor} height="100%" width="100%"/>
                  <p style={{textAlign: 'center'}}>
                    <a href="https://github.com/koreaneggroll/Xenon-text-editor" id="text-editor">Xenon Text-Editor</a>
                  </p>
                </label>
                <label htmlFor="s3" id="slide3">
                  <img className="fea" src={editor} height="100%" width="100%"/>
                  <p style={{textAlign: 'center'}}>
                    <a href="https://github.com/koreaneggroll/shell" id="shell">Shell</a>
                  </p>
                </label>
              </section>
            </div>
            <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            </div>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      );
}



export default Explore;