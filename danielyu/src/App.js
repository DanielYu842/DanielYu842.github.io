import React from 'react';
import './App.css';
import Navbar from './Navbar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home'



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about"></Route>
          <Route path="/awards"></Route>
          <Route path="/projects"></Route>
          <Route path="/resume"></Route>
          <Route path="/">            
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
