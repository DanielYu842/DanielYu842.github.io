import React from 'react';
import './Projects.css'
import Footer from './Footer'
import ProjectItem from './ProjectItem'
import Whistler from './Assets/Whistler.jpg'


class Projects extends React.Component{
    render(){
        return(
            <div class="projects-div">
                <div class="projects-content-container">
                    <div class="projects-title">My Projects</div>

                    <div class="projects-content">
                        <ProjectItem 
                            title="Visionary Development Studios" 
                            image="./Assets/Visionary Image.png" 
                            link="https://google.com" 
                            description="Visionary is a SaaS model web application that will be the first social platform where users can plan, pledge, commit, and act on setting the planet to the path of environmental sustainability."
                            technologies="React | Javascript | Figma  Photoshop | Illustrator"
                            ></ProjectItem>
                        <ProjectItem 
                            image={Whistler}
                            title="Whistler"
                            description="A blockchain web application that allows users to securely and anonymously upload whistleblower complaints using the Inter Planetary File System and Metamask authentication"
                            technologies={<div>React | Javascript | Node.js <br></br>  Fetch API | Illustrator</div>}
                            ></ProjectItem>
                        <ProjectItem 
                            image="./Assets/Visionary Image.png"

                            ></ProjectItem>

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