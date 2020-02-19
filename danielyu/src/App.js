import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import Awards from './Awards'
import Projects from './Projects'

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/awards" component={Awards}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/resume"></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
