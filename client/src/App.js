import React from 'react';
import '../node_modules/aos/dist/aos.css'; 
import './App.css';
import AOS from 'aos'; 
import Card from './card'
import reactLogo from './assets/react-2.svg'
import nodeLogo from './assets/nodejs.svg'
import Project from './project.js'

import Covaid from './assets/projects/covaid.png'
import CovaidBackground from './assets/projects/CovaidBackground.svg'

import Whistler from "./assets/projects/whistlerLogo.svg"
import WhistlerBackground from './assets/projects/WhistlerBackground.svg'

import Python from './assets/projects/python-logo.png'
import PythonBackground from "./assets/projects/PythonBackground.svg"

import Visionary from './assets/projects/Visionary-A2.png'
import VisionaryBackground from "./assets/projects/VisionaryBackground.svg"

import SimilarnymBackground from './assets/projects/SimilarnymBackground.svg'
import PDF from './assets/RESUME.pdf'
class App extends React.Component {
  constructor(){
    super()
    this.state = {}
    AOS.init(); 

  }
  render(){
    return (
      <div className="App">
        <div className="navbar-div">
          <div className="logo">daniel yu</div>
        </div>
        <div className="landing-div">   
          <div className="landing-background"></div> 
          <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
          <div className="title-div">
            <div className="title-content">            
              <div className="title-1">Hey, I'm Daniel</div>
              <div className="title-2">I AM A DEVELOPER</div>
              <div className="title-3">highschool student seeking development related opportunities</div>
              <a href={PDF} target="_blank" style={{textDecoration : "none", color: "black"}}><div className="button-div">RESUME</div></a>
            </div>

        </div>   
 
          <div className="filler-div1"></div>
        </div>
        <div className="skills-div">       
          <div className="cards-div"> 
            <Card one="Frontend" two="React" three="Javascript" four="HTML" five="CSS" logo={reactLogo} background="black" num={0} fade="fade-right" s="Primary"></Card>
            <Card one="Backend" two="Node" three="Python" four="Firebase" five="GCP" logo={nodeLogo} background="white" num={1} fade="fade-left" s="Secondary"></Card>
          </div> 
          <div className="profile-div">
            <div className="profile-card" data-aos="fade-left">
              <div className="profile-title">About Me</div>
              <div className="profile-content">I am a highschool developer from Waterloo Ontario with a strong passion for programming. Currently looking for opportunities to advance my development career and hone my technical skills.</div>
            </div>
          </div>
        </div>
        <div className="projects-div">
          <div className="projects-curve">
            <svg width="100%" height="377" preserveAspectRatio="none" viewBox="0 0 1440 377" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1189 194.499C1322.11 194.499 1374.52 145.185 1440 122.515V-0.00088501H0V318.501C140 421 262 387.5 223.5 214C179.279 14.7166 623.868 93.3928 719 103.499C898 122.515 1020.5 194.499 1189 194.499Z" fill="#1B4CC7"/>
            </svg>
          </div>
          <div className="projects-title">MY PROJECTS</div>
          <div className="projects-content">
            <Project 
            title="COV-AID" 
            desc="A web application that helps improve the processes of receiving financial relief during COVID-19 by utilizing blockchain technology" 
            tech="React | Node | Express Restful API | CSS" 
            github="https://github.com/DanielYu2004/Winhacks-COV-AID"
            web="https://devpost.com/software/cov-aid"
            img={Covaid}
            background={CovaidBackground}
            num={0}
            > </Project>

            <Project
            num={1}
            title="Whistler"
            desc="A blockchain application that allows users to securely and anonymously upload whistleblower complaints using IPFS and Metamask auth"
            tech="React | Javascript Node | CSS | Illustrator"
            github="https://github.com/DanielYu2004/Whistler-Hack-The-Hammer"
            web="https://devpost.com/software/whistler"
            img={Whistler}
            background={WhistlerBackground}
            > </Project>


            <Project
            title="Canadian Computing Competition Jr"
            desc="A portfolio of solutions implementing data structures and algorithms. High focus on graph theory traversals and recursive solutions with memoization"
            num={2}
            img={Python}
            background={PythonBackground}
            github="https://github.com/DanielYu2004/CCC-Junior-Solutions"
            tech="Python | Algorithms Data Structures"
            > </Project>


            <Project
            num={3}
            img={Visionary}
            title="Visionary"
            desc="A SaaS model web application where users can plan, pledge, commit, and act on setting the planet to the path of environmental sustainability"
            tech="React | Javascript | CSS Illustrator | Photoshop Figma"
            web="https://www.visionary.app/"
            background={VisionaryBackground}
            > </Project>

            <Project
            num={4}
            title="Similarnym"
            desc="A deployed web application that generates 'similarnyms', words of similar application rather than a synonym, a word of near exact translation"
            img="https://img.icons8.com/flat_round/512/000000/bookmark-book.png"
            tech="React | Fetch API Javascript | CSS"
            web="https://danielyu2004.github.io/Similarnym/"
            background={SimilarnymBackground}
            >

            </Project>
          </div>
        </div>
        <div className="footer-div">
          <div className="footer-content">
            <div className="footer-contact">
              <div className="filler3"></div>
              <div className="footer-title">Daniel Yu</div>
              <div>danielyu2004@icloud.com</div>
              <div>226-988-9168</div>
              <div className="social-div">
                <div class="social-btns">
                  <a class="btn linkedin" href="https://www.linkedin.com/in/danielyu2004" target="_blank"><i class="fa fa-linkedin"></i></a>
                  <a class="btn github" href="https://github.com/danielyu2004" target="_blank"><i class="fa fa-github"></i></a>
                  <a class="btn envelope-square" href = "mailto: danielyu2004@icloud.com" target="_blank"><i class="fa fa-envelope-square"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">Developed as a side project</div>
          {/*//https://codepen.io/rustcode/pen/LMaLmy*/}
        </div>
      </div>
    );
  }
}

//https://codepen.io/abdulrazakshaikh/pen/Kzaabo

export default App;
