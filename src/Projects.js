import React from 'react';
import './Projects.css'
import Footer from './Footer'
import ProjectItem from './ProjectItem'
import Whistler from './Assets/Whistler.jpg';
import Visionary from './Assets/VisionaryImage.jpg';
import Organotes from './Assets/Organotes.PNG';
import Python from './Assets/python-file.svg'

class Projects extends React.Component{
    render(){
        return(
            <div class="projects-div">
                <div class="projects-content-container">
                    <div class="projects-title">My Projects</div>

                    <div class="projects-content">
                        <ProjectItem 
                            title="Visionary Development Studios" 
                            image={Visionary}
                            link="https://google.com" 
                            description="A SaaS model web application that will be the first social platform where users can plan, pledge, commit, and act on setting the planet to the path of environmental sustainability."
                            contribution="Designed the entirety of UI and UX elements of web application on Figma with Photoshop and Illustrator. Developed the front-end client application using React.js. Integrated many API's including a realtime event tracking calendar"
                            technologies="React | Javascript | Figma  Photoshop | Illustrator"
                            github="https://www.visionary.app/"
                        ></ProjectItem>
                        <ProjectItem
                            title="Canadian Computing Competition"
                            image={Python}
                            description="A portfolio of CCC Junior problems available on the online grader while studying for the junior competition. Attained a perfect score on majority of problems"
                            contribution="Includes implementation of fundamental data structures and algorithms. High focus on graph theory with DFS and BFS traversals and recursive solutions with memoization"
                            technologies="Python"
                            github="https://github.com/DanielYu2004/CCC-Junior-Solutions"
                        >
                        </ProjectItem>
                        <ProjectItem 
                            image={Whistler}
                            title="Whistler"
                            description="A blockchain web application that allows users to securely and anonymously upload whistleblower complaints using the Inter Planetary File System and Metamask authentication"
                            contribution="Developed front-end client application using React.js. Integrated Fetch API to connect client application to Node webserver. Implemented client-side file upload system to connect with Inter Planetary File System"
                            technologies={<div> Node.js | Fetch API | Javascript  <br></br>  React | Illustrator</div>}
                            github="https://github.com/DanielYu2004/Whistler-Hack-The-Hammer"
                            ></ProjectItem>
                        <ProjectItem 
                            image={Organotes}
                            title="Organotes"
                            description="An online digitizing cue card generator where users can upload handwritten notes and receive online cue cards using Google Vision API and Imgur Upload API"
                            contribution="Developed front-end client application using React.js with interactive digital cue cards. Implemented Imgur Upload API with file upload system to feed into Google Vision API. Implemented Fetch API to connect to Node webserver"
                            technologies={<div> React | Node.js | Express <br></br> Imgur API | Photoshop</div>}
                            github="https://github.com/DanielYu2004/Organotes-MLH-Local-Hack-Day"
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