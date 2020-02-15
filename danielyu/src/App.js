import React from 'react';
import './App.css';
import Navbar from './Navbar.js'
import {
  BrowserRouter ,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home'
import About from './About'


class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
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
