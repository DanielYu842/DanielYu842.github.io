import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Navbar from './Navbar'

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/awards"></Route>
            <Route path="/projects"></Route>
            <Route path="/resume"></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
