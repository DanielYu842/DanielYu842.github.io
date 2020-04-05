import React from 'react';
import "./project.css";
import Github from './assets/github.svg'
import Web from './assets/webdev.svg'
import AOS from 'aos'; 

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        AOS.init(); 

    }

    componentDidMount(){
        document.getElementsByClassName("project-div")[this.props.num].style.backgroundImage = `url(${this.props.background})`
    }

    render() { 
        return ( 
            <div className="project-div" data-aos="zoom-out">
                <div className="project-image-div"><img alt={`${this.props.title} Logo`} width="180" src={this.props.img}></img></div>
                <div className="project-filler1"></div>
                <div className="project-content">
                    <div className="project-details">
                        <div className="project-title">{this.props.title}</div>
                        <div className="project-desc">{this.props.desc}</div>
                    </div>
                    <div className="project-filler2"></div>
                    <div className="project-bottom">
                        <div className="project-tech">{this.props.tech}</div>
                        <div className="project-filler2"></div>
                        <div className="project-icons">
                            {this.props.github ? <a href={this.props.github} target="_blank" rel="noopener noreferrer"><img alt="Github Logo"width="30" src={Github}></img></a> : null}
                            {this.props.web ? <a href={this.props.web} target="_blank" rel="noopener noreferrer"><img alt="Website Logo" width="30" src={Web}></img></a> : null}

                        </div>
                    </div>
                </div>
                <div className="project-filler1"></div>
            </div> 
        );
    }
}
 
export default Project;