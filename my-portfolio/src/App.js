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
    let element = document.getElementById("secondTitle"),
        elemRect = element.getBoundingClientRect();
    if(elemRect.top >= 0 &&
      elemRect.left >= 0 &&
      elemRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      elemRect.right <= (window.innerWidth || document.documentElement.clientWidth)){
      document.getElementById("pageContainer").removeEventListener('scroll', scrollDecrypt);
      let originalValue = ["I told you I'd find you"];
      decryptWord([element], originalValue);
    }
  }

  // document.getElementById("pageContainer").addEventListener('scroll', scrollDecrypt, false);
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
      for(let j = 0; j < originalValues[i].length; j++){
        console.log(j);
        if(word[j] === undefined){
          word += originalValues[i][j];
        }
        else if(word[j] !== originalValues[i][j]){
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
    }, 60);
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

  const pageDecryptHelper = (element) =>{
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let word = element.innerHTML.split('');
    word[Math.floor(Math.random() * word.length)] = characters[Math.floor(Math.random() * characters.length)]
    element.innerHTML = word.join('');
  }

   const finishPageHelper = (element, originalValue) => {
    let word = element.innerHTML.split('');
    for(let i = 0; i < Math.max(originalValue.length, word.length); i++){
      console.log(i);
      if(!originalValue[i]){
        console.log("Popping");
        word.pop();
        break;
      }
      else if(!word[i]){
        word.push(originalValue[i]);
        break;
      }
      else if(word[i]!==originalValue[i]){
        word[i] = originalValue[i];
        break;
      }
    }
    element.innerHTML = word.join('');
   }

   const finishPageInterval = (element, originalValue) =>{
    let count = Math.max(originalValue.length, element.innerHTML.length);
    const finishInterval = setInterval(function(){
      count--;
      finishPageHelper(element, originalValue);
      if(count === 0){
        clearInterval(finishInterval)
      }
    }, 60);
   }
  

  const pageDecrypt = (e) => {
    let myElement = e.target;
    let newArray = (e.target.getAttribute("word-data").split(','));
    let index = newArray.indexOf(e.target.innerHTML);
    if(index > -1){
      newArray.splice(index, 1);
    }
    let originalValue = newArray[Math.floor(Math.random() * ((newArray.length - 1)-0+(newArray.length - 1)) + 0)]
    let count = e.target.innerHTML.length;
    const decryptInterval = setInterval(function(){
      count--;
      pageDecryptHelper(myElement);
      if(count === 0){
        clearInterval(decryptInterval);
        finishPageInterval(myElement, originalValue)
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
        let originalValues = ["Introduction", "About", "Projects", "Skills", "Contact"]
        decryptWord(menuItem.children, originalValues);
    }
  }
  return (
    <div className="App">
      <nav>
        <div className="left">
          <div className='nameNav'>
            <h3>Kyle Sousa</h3>
            <h5>Full-Stack Web Developer</h5>
          </div>
        </div>
        <div className="name">
        </div>
        <div className="right">
          <ul className={"nav-links " + menu}>
            <a href="#Intro">Introduction</a>
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
        <a href="#Intro" id="introLink"><h1>Introduction</h1></a>
        <a href="#About" id="aboutLink"><h1>About</h1></a>
        <a href="#Projects" id="projectLink"><h1>Projects</h1></a>
        <a href="#Skills" id="skillsLink"><h1>Skills</h1></a>
        <a href="#Contact" id="contactLink"><h1>Contact</h1></a>
      </div>

      <div className='pages' id="pageContainer">

      <div className="Page Intro" id="Intro">
        <div className='introText'>
          <h1 className='nameTitle'>Hi, I'm Kyle Sousa,</h1>
          <h3>a full-stack web developer who loves building efficent and 
            complex solutions to keep the user experience easy and streamlined.</h3>
          <h1>I <span className='encryptWord' onClick={pageDecrypt} word-data={["love", "adore"]}>____</span> what I do</h1>
        </div>
          <div className="introBox">
            <div className='imgBox'>
              <div className="headshot"></div>  
              <div className="mouse"></div>
            </div>
          </div>
      </div>

      <div className="Page About" id="About">
        <div className='margins'>
          <div className='pageTitle'>
            <h1>My Story:</h1>
          </div>
          <div className='pageText'>
            <div className='pageTextCenter'>
              <p>Years ago, when I got my first taste of coding, I was hooked. All it took was a "Hello World!", and from there, I couldn't stop. I found myself sharpening my skills and learning new things.</p>
              <p>The satisfaction and pride from perfecting a creation, whether it be a whole website or a single function, keeps me coming back to create more and more.</p>
              <p>I am motivated to fully commit myself to a team and a project and create something that lasts.</p>
              <p>My time as a company commander in JROTC taught me the importance of working as a team and respecting the chain of command.</p>
              <p>On a more personal note, I'm very passionate about video games(I could give you a discertation on any video game subject if you gave me enough time), and this led me to my interest in computers</p>
              <p>I built my first computer back when I was 14, and I began to learn to code soon after.</p>
            </div>
            <img className='sidePic' alt="First computer" src={require('./images/me.jpg')}></img>
          </div>
        </div>
      </div>

      <div className="Page Skills" id="Skills">
        <div className='margins'>
          <div className='pageTitle'>
            <h1>Skills</h1>
          </div>
          <div className='pageText'>
            <div className='pageTextCenter'>
              <p>I have acquired my skills and coding prowess from years of exploration as well as college experience. My time at
                at a bootcamp bolstered my confidence and skills and specialized me for web development.</p>
              <p>I have experience working on projects as a development team member <a href=''>and a team leader.</a></p>
              <p>Please, take a look at what I can do:</p>
            </div>
            <div className='skillList'>
              <div>
                <h2>Languages:</h2>
                <div>
                  <li>Python</li>
                  <li>C++</li>
                  <li>Javascript</li>
                  <li>GO</li>
                  <li>PHP</li>
                  <li>GraphQL</li>
                  <li>HTML/CSS</li>
                </div>    
              </div>
              <div>
                <h2>Frameworks:</h2>
                <div>
                  <li>ReactJS</li>
                  <li>Python Django</li>
                  <li>ExpressJs</li>
                  <li>AngularJS</li>
                  <li>HandlebarsJS</li>
                  <li>NodeJS</li>
                  <li>Bootstrap</li>
                </div>
              </div>
              <div>
                <h2>Databases:</h2>
                <div>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </div>   
              </div>
              <div>
                <h2>Miscellanious:</h2>
                <div>
                  <li>Git</li>
                  <li>RESTful API</li>
                  <li>Data structures</li>
                  <li>Office 365</li>
                  <li>Linux shell</li>
                  <li>Object-Oriented Programming</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Page Projects" id="Projects">
        <div className='margins'>
          <div className='pageTitle'>
            <h1>My Work</h1>
          </div>
          <div className='bigProject'>
            <div className='bigImage'>
              <img alt="Dangerous To Go Alone" src={require('./images/Dangerous.JPG')}></img>
            </div>
            <div>
              <p>Dangerous To Go Alone aims to create a hub for gamers to find others with similar mindsets and interests.</p>
              <p>Uses ReactJS, GraphQL, and MongoDB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Page Contact" id="Contact">
        {/* <div className="calling-card">
          <div>
            <div className="Name">Kyle Sousa</div>
            <div className="Phone">239-770-0763</div>
            <div className="Email">Kylesousa756@gmail.com</div>
            <div className="LinkedIn"></div>
            <div className="Github"></div>
          </div>
        </div> */}
      </div>
      </div>
    </div>
  );
}

export default App;
