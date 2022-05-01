import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from "react";

function App() {

  window.addEventListener('load', (event) => {
    let imgBox = document.querySelector('.imgBox');
    let mouse = document.querySelector('.mouse');
    let hovered = false;
    let revealed = false;

    const lightPortrait = () =>{
      revealed = true;
      mouse.style.transition = `all .5s ease-in-out`;
      mouse.style.clipPath = `circle(100%)`;
    }



    imgBox.addEventListener('mousemove', (e) => {
    if(!hovered){
      console.log("Hovered");
      window.setTimeout(lightPortrait, 3000);
      hovered = true;
    }
    if(revealed){
      return;
    }
    mouse.style.clipPath = 
      `circle(10em at ${e.offsetX}px ${e.offsetY}px)`;
  });
  })
  const [menu, setmenu] = useState("false");
  const [mobMenu, setMobMenu] = useState("mob-false");
  
  const showmenu = () =>{
    const mobBtn = document.querySelector('.mob-btn');
    if(menu === "true"){
        setmenu("false");
        setMobMenu("mob-false");
        mobBtn.classList.remove('open');

    }else{
        setmenu("true");
        setMobMenu("mob-true");
        mobBtn.classList.add('open');
    }
  }
  return (
    <div className="App">
      <nav>
        <div className="left"></div>
        <div className="name">
        </div>
        <div className="right">
          <ul className={"nav-links " + menu}>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Skills">Skills</a>
            <a href="#Contact">Contact</a>
          </ul>
          <div className='mob-btn' onClick={showmenu}>
            <div className="mob-btn__burger"></div>
          </div>
        </div>
        </nav>
        <div className={"nav-links-mobile " + mobMenu} onClick={showmenu}>
          <a href="#About" id="aboutLink"><h1>About</h1></a>
          <a href="#Projects" id="projectLink"><h1>Projects</h1></a>
          <a href="#Skills" id="skillsLink"><h1>Skills</h1></a>
          <a href="#Contact" id="contactLink"><h1>Contact</h1></a>
        </div>
        <div className='pages'>
        <div className="Page About" id="About">
          <h1>Introduce yourself Mr...</h1>
          <h2>Sousa...</h2>
          <div className='imgBox'>
            <div className="headshot"></div>  
            <div className="mouse"></div>
          </div>
          <h1>Kyle Sousa</h1>
          <h2>A full-stack web developer with an eye for quality and a desire for improvement</h2>
          <h3>With college, bootcamp, and real world experience, I aim to please</h3>
        </div>
        <div className="Page Projects" id="Projects">
          <h1>I told you I'd find you</h1>
        </div>
        <div className="Page Skills" id="Skills">
          <h1>I have a particular set of skills...</h1>
        </div>
        <div className="Page Contact" id="Contact">
          <h1>Did you leave a calling card?</h1>
          <h1>I always do</h1>
          <div className="calling-card">
            <div>
              <div className="Name">Kyle Sousa</div>
              <div className="Phone">239-770-0763</div>
              <div className="Email">Kylesousa756@gmail.com</div>
              <div className="LinkedIn"></div>
              <div className="Github"></div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
