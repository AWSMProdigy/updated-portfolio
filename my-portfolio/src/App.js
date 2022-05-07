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
      window.setTimeout(lightPortrait, 3000);
      hovered = true;
    }
    if(revealed){
      return;
    }
    mouse.style.clipPath = 
      `circle(10em at ${e.offsetX}px ${e.offsetY}px)`;
  });

  const scrollDecrypt = () =>{
    let element = document.getElementById("secondTitle");
    let bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset   = elemRect.top - bodyRect.top;
    console.log(offset)
    if(offset < 600){
      document.getElementById("pageContainer").removeEventListener('scroll', scrollDecrypt);
      let originalValue = ["I told you I'd find you"];
      decryptWord([element], originalValue);
    }
  }

  document.getElementById("pageContainer").addEventListener('scroll', scrollDecrypt, false);
  })

  
  const [menu, setmenu] = useState("false");
  const [mobMenu, setMobMenu] = useState("mob-false");

  const decryptHelper = (wordArray, characters) =>{
    let charactersLength = characters.length;
    for(let i = 0; i < wordArray.length; i++){
      let word = wordArray[i].innerHTML.split('');
      word[Math.floor(Math.random() * word.length)] = characters[Math.floor(Math.random() * charactersLength)]
      wordArray[i].innerHTML = word.join('');
    }
  }

  const finishDecryptHelper = (wordArray, originalValues) => {
    for(let i = 0; i < wordArray.length; i++){
      let word = wordArray[i].innerHTML.split('');
      for(let j = 0; j < word.length; j++){
        if(word[j] !== originalValues[i][j]){
          word[j] = originalValues[i][j];
          break;
        }
      }
      wordArray[i].innerHTML = word.join('');
    }
  }

  const finishDecrypt = (wordArray, originalValues) => {
    let fCount = 0;
    for(let i = 0; i < wordArray.length; i++){
      fCount += wordArray[i].innerHTML.length;
    }
    const finishDecryptInterval = window.setInterval(function(){
      finishDecryptHelper(wordArray, originalValues);
      fCount--;
      if(fCount === 0){
        window.clearInterval(finishDecryptInterval);
      }
    }, 50);
  }

  const decryptWord = (wordArray, originalValues) =>{
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let count = 0;
    const decryptInterval = setInterval(function() {
      decryptHelper(wordArray, characters);
      count++;
      if(count > 50){
        clearInterval(decryptInterval);
        finishDecrypt(wordArray, originalValues);
      }
    }, 10);
  }
  
  const showmenu = () =>{
    const mobBtn = document.querySelector('.mob-btn');
    let menuItem = document.querySelector('.nav-links');
    const mobMenuItem = document.querySelector('.nav-links-mobile');

    // Close menu
    if(menu === "true"){
        setmenu("false");
        setMobMenu("mob-false");
        mobBtn.classList.remove('open');

    // Open up menu
    }else{
        setmenu("true");
        setMobMenu("mob-true");
        mobBtn.classList.add('open');
        console.log(menuItem.children);
        let originalValues = ["About", "Projects", "Skills", "Contact"]
        decryptWord(menuItem.children, originalValues);
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
        <div className='pages' id="pageContainer">
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
          <h1 id="secondTitle">I told you I'd find you</h1>
        </div>
        <div className="Page Skills" id="Skills">
          <h1>I have a particular set of skills...</h1>
        </div>
        <div className="Page Contact" id="Contact">
          <h1>Did you leave a calling card?</h1>
          <h1>Always do</h1>
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
