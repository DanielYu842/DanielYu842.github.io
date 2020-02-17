import React from 'react';
import './Navbar.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'


class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checked : "False"
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', function (e) {
            var nav = document.getElementsByClassName('navbar-div')[0];
            if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
                    nav.style.background = "#474747"
                } else {
                    nav.style.background = "transparent"

                }
        });
    }

    homePage(){

    }
    contentPage(){

    }


    onClick(){
        //this.setState( (prevState) => ({ checked : !prevState}))
        document.getElementsByClassName("hidden-navbutton")[0].checked = !document.getElementsByClassName("hidden-navbutton")[0].checked;
        console.log(document.getElementsByClassName("hidden-navbutton")[0].checked)
    }
    render(){

        return(
            <div class="navbar-div">
                <div class="logo-div">
                    <Link to="/home" style={{ textDecoration: 'none' , color: 'white'}}>Daniel Yu</Link>
                </div>
                <div class="navlinks-div">
                    <Link to="about" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>About</Link>
                    <Link to="awards" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>Awards</Link>
                    <Link to="projects" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>Projects</Link>
                    <Link to="resume" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>Resume</Link>
                </div>
                <nav role="navigation" class="navbar-small">
                    <div id="menuToggle" onClick={this.onClick}>
                        <input type="checkbox" class="hidden-navbutton"/>
                        <span ></span>
                        <span ></span>
                        <span ></span> 
                        <ul id="menu">
                            <div class="hidden-menu-content">
                                <Link to="about" class="navitem" style={{ textDecoration: 'none' , color: 'black'}}>About</Link>
                                <Link to="awards" class="navitem" style={{ textDecoration: 'none' , color: 'black'}}>Awards</Link>
                                <Link to="projects" class="navitem" style={{ textDecoration: 'none' , color: 'black'}}>Projects</Link>
                                <Link to="resume" class="navitem" style={{ textDecoration: 'none' , color: 'black'}}>Resume</Link>
                            </div>  
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar