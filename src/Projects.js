import React from 'react';
import './Projects.css'
import Footer from './Footer'
import ProjectItem from './ProjectItem'

class Projects extends React.Component{
    render(){
        return(
            <div class="projects-div">
                <div class="projects-content-container">
                    <div class="projects-title">My Projects</div>

                    <div class="projects-content">
                        <ProjectItem image="./Assets/Visionary Image.png"></ProjectItem>
                        <ProjectItem image="./Assets/Visionary Image.png"></ProjectItem>
                        <ProjectItem image="./Assets/Visionary Image.png"></ProjectItem>

                    </div>

                    <div class="footer-div-projects">
                        <div class="footer-copyright">©️ Daniel Yu | All Rights Reserved <br/>Developed as a side project</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects