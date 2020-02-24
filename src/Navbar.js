import React from 'react';
import './Navbar.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Resume from './Assets/Resume.pdf'

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checked : "False"
        }
        this.onClick = this.onClick.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
      }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    componentDidMount(){
        document.addEventListener('mousedown', this.handleClickOutside);

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

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState( (prevState) => {
                document.getElementsByClassName("hidden-navbutton")[0].checked = false
            })
        }
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
                    <Link to="/home" style={{ textDecoration: 'none' , color: 'white'}}>DANIEL YU</Link>
                </div>
                <div class="navlinks-div">
                    <Link to="about" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>About</Link>
                    <Link to="awards" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>Awards</Link>
                    <Link to="projects" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>Projects</Link>
                    {/*<Link to="resume" class="navitem" style={{ textDecoration: 'none' , color: 'white'}}>Resume</Link>*/}
                    <a href={Resume} target="_blank" class="navitem">Resume</a>

                </div>
                <nav role="navigation" class="navbar-small" >
                    <div id="menuToggle" onClick={this.onClick} ref={this.setWrapperRef}>
                        <input type="checkbox" class="hidden-navbutton"/>
                        <span ></span>
                        <span ></span>
                        <span ></span> 
                        <ul id="menu">
                            <div class="hidden-menu-content" >
                                <Link to="home" class="navitemm" style={{ textDecoration: 'none' , color: '#232323'}}>Home</Link>
                                <Link to="about" class="navitemm" style={{ textDecoration: 'none' , color: '#232323'}}>About</Link>
                                <Link to="awards" class="navitemm" style={{ textDecoration: 'none' , color: '#232323'}}>Awards</Link>
                                <Link to="projects" class="navitemm" style={{ textDecoration: 'none' , color: '#232323'}}>Projects</Link>
                                <Link to="resume" class="navitemm" style={{ textDecoration: 'none' , color: '#232323'}}>Resume</Link>
                            </div>  
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar