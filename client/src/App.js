import React from 'react';
import '../node_modules/aos/dist/aos.css'; 
import './App.css';
import AOS from 'aos'; 
import Card from './card'
import reactLogo from './assets/react-2.svg'
import nodeLogo from './assets/nodejs.svg'

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
          <div className="title-div">
            <div className="title-content">            
              <div className="title-1">Hey, I'm Daniel</div>
              <div className="title-2">I AM A DEVELOPER</div>
              <div className="title-3">seeking development related opportunities</div>
              <div className="button-div">RESUME</div>
            </div>
            <div class="ocean">
              <div class="wave"></div>
              <div class="wave"></div>
            </div>
        </div>   
 
          <div className="filler-div1"></div>
        </div>
        <div className="skills-div">         
            <Card one="Frontend" two="React" three="Javascript" four="HTML" five="CSS" logo={reactLogo} background="white"></Card>
            <Card one="Backend" two="Node" three="Python" four="Firebase" five="GCP" logo={nodeLogo} background="white"></Card>
        </div>

      </div>
    );
  }
}

//https://codepen.io/abdulrazakshaikh/pen/Kzaabo

export default App;
