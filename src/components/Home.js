import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [showNum, setNum ] = useState(false);

  const dispNone = {
    display: 'none'
  }

  const disp = {
    display: 'block'
  }

  let catalogArray = [
    {
      name: "It's Dangerous To Go Alone",
      desc: "It's Dangerous To Go Alone! A website designed to bring gamers together by connecting people with others of similar gaming interests, styles, and availability.",
      stack: ["React", "MongoDB", "Express"],
      picture: "Dangerous.JPG",
      github: "https://github.com/AWSMProdigy/dangerous-to-go-alone"
    },
    {
      name: "Reel Cinema",
      desc: "Mock theater website with friend functionality and ticket ordering. Created to solve a problem with some modern theater websites.",
      stack: ["HandleBarJS", "Express", "GraphQL"],
      picture: "reelCinema.png",
      github: "https://github.com/AWSMProdigy/Theater-website"
    },
    {
      name: "Daily Felon",
      desc: "Website meant to provide humor. Takes several pre-written stories and pictures and creates unique stories based off of comic book heroes and villains and randomly creates humorous stories with javascript.",
      stack: ["HTML/CSS", "Javascript"],
      picture: "Beau.JPG",
      github: "https://github.com/JamesStitzel/The-Daily-Felon", 
    },
    {
      name: "Twitter Bot",
      desc: "Bot designed to display the latest tweet from a chosen individual. This was originally done to stay up to date on exclusive product news.",
      stack: ["React", "Express"],
      picture: "Twitter.JPG",
      github: "https://github.com/AWSMProdigy/Twitter-bot"
    },
    {
      name: "Navi Bot",
      desc: "Discord bot designed to message 1 person at random on a discord server `Hey! Listen!` every hour. Works with any number of discord servers. Designed to be a funny side project, it gives me a laugh every time I get a notification and I see that the bot is working great. Is up and running and you can add this bot to your server here: https://discord.com/oauth2/authorize?client_id=1010365234797625466&permissions=0&scope=bot%20applications.commands",
      stack: ["DiscordJS"],
      picture: "Navi_(The_Legend_of_Zelda).png",
      github: "https://github.com/AWSMProdigy/Navi-Discord-Bot"
    }
  ]

  
  let catalogHtml = catalogArray.map((program) => <div className='project'>
                      <div className='projectImage'>
                        <Link to="/Project" state={`${program}`}><img alt={`${program.name}`} src={`${require('../images/' + program.picture)}`}></img></Link>
                        <h1>${program.name}</h1>
                        <h2>${program.stack.join(', ')}</h2>
                      </div>
                    </div>
  )
 

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
      if(!originalValue[i]){
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
        element.innerHTML = originalValue;
        clearInterval(finishInterval);
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
    let originalValue = newArray[Math.floor(Math.random() * newArray.length)];
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

  const showNumber = (e) => {
    setNum(!showNum);
  }
  
  return (
    <div className="App">
      <div className="Page Intro" id="Intro">
        <div className='introText'>
          <h1 className='nameTitle'>Hi, I'm Kyle Sousa,</h1>
          <h2>A full-stack web developer</h2>
          <h3>who loves building efficent and complex solutions to keep the user experience easy and streamlined.</h3>
          <h1 className='decryptLine'>I <span className='encryptWord' onClick={pageDecrypt} word-data={["love", "adore", "enjoy", "value"]}>____</span> what I do</h1>
        </div>
        <img className="imgBox" src={require('../images/me.jpg')}></img>
      </div>

      <div className="Page About" id="About">
        <div className='pageTitle'>
          <h1>My Story:</h1>
        </div>
        <div className='pageText'>
          <div className='pageTextCenter'>
            <p>Years ago, when I got my first taste of coding, I was hooked. All it took was a "Hello World!", and from there, I couldn't stop. I found myself sharpening my skills and learning new things.</p>
            <p>The satisfaction and pride from perfecting a creation, whether it be a whole website or a single function, keeps me coming back to create more and more.</p>
            <p>I am motivated to fully commit myself to a team and a project and create something that lasts.</p>
            <p>My time as a company commander in JROTC taught me the importance of working as a team and respecting the chain of command.</p>
            <p>On a more personal note, I'm very passionate about video games(I could give you a discertation on any video game subject if you gave me enough time), and this led me to my interest in computers.</p>
          </div>
        </div>
      </div>
      <div className="Page Skills" id="Skills">
        <div className='pageTitle'>
          <h1>Skills</h1>
        </div>
          <div className='skillBarContainer'>     
            <div className='bar'>
              <div className='skillBar frontBar'>
                <span>Front-End</span>
                <h1>75%</h1>
              </div>
            </div>
            <div className='bar'>
              <div className='skillBar backBar'>
                <span>Back-End</span>
                <h1>90%</h1>
              </div>
            </div>
            <div className='bar'>
              <div className='skillBar reactBar'>
                <span>ReactJS</span>
                <h1>85%</h1>
              </div>
            </div>
            <div className='bar'>
              <div className='skillBar javascriptBar'>
                <span>Javascript</span>
                <h1>90%</h1>
              </div>
            </div>
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
                <li>Dynamic Programming</li>
              </div>
            </div>
          </div>
      </div>

      <div className="Page Projects" id="Projects">
          <div className='pageTitle'>
            <h1>My Work</h1>
          </div>
          <div className='projectCatalog' id='projectCatalog'>
            {catalogHtml}
          </div>
          
      </div>
      <div className="Page Contact" id="Contact">
        <div className='pageTitle'>
            <h1>Contact Me</h1>
          </div>
        <ul className='contactList'>
          <li onClick={showNumber} style={showNum ? dispNone : disp}><i id="phoneIcon" className='fa fa-phone fa-4x phoneContact'></i></li>
          <li onClick={showNumber} id='number' style={!showNum ? dispNone : disp}><span className='phoneContact'>239-770-0763</span></li>
          <li><a href="https://github.com/AWSMProdigy"><i className='fa fa-github fa-4x'></i></a></li>
          <li><a href="https://www.linkedin.com/in/kyle-sousa-1a507b156/"><i className='fa fa-linkedin fa-4x'></i></a></li>
          <li><a href="mailto: kylesousa756@gmail.com"><i className='fa fa-envelope fa-4x'></i></a></li>
        </ul>
      </div>
      </div>
  );
}

export default Home;
