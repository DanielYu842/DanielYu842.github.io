import React from 'react';
import './Navbar.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'


class Navbar extends React.Component{
    render(){
        return(
            <div class="navbar-div">
                {/*<div class="filler-div"></div>*/}
                <div class="logo-div">
                    <Router>
                        <Link to="/home" style={{ textDecoration: 'none' , color: 'white'}}>Daniel Yu</Link>
                    </Router>
                </div>
                <div class="navlinks-div">
                    <Router>
                        <Link to="about" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>About</Link>
                        <Link to="awards" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>Awards</Link>
                        <Link to="projects" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>Projects</Link>
                        <Link to="resume" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>Resume</Link>

                    </Router>
                </div>
            </div>
        )
    }
}

export default Navbar