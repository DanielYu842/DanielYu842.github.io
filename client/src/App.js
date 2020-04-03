import React from 'react';
import '../node_modules/aos/dist/aos.css'; 
import './App.css';
import AOS from 'aos'; 
import Card from './card'
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
          </div>    
          <div className="filler-div1"></div>
        </div>
        <div className="skills-div">
          <div className="card1">          
            <Card></Card>
          </div>

        </div>
      </div>
    );
  }
}

//https://codepen.io/abdulrazakshaikh/pen/Kzaabo

export default App;
