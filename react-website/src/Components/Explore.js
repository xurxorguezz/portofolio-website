import mainImg from '../pics/mainImg.jpg';
import React from 'react';
import '../App.css';


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
                  <img className="fea" src={mainImg} height="100%" width="100%"/>
                </label>
                <label htmlFor="s2" id="slide2">
                  <img className="fea" src={mainImg} height="100%" width="100%"/>
                </label>
                <label htmlFor="s3" id="slide3">
                  <img className="fea" src={mainImg} height="100%" width="100%"/>
                </label>
              </section>
            </div>
            <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            </div>
          </div>
        </div>
      );
}



export default Explore;