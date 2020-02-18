import React from 'react';
import './About.css'
class About extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="about-div">
                <div class="about-div-content">
                    <div class="about-div-text">
                        <div class="about-title">
                            About Me
                        </div>
                        <div class="about-content">
                        I am a grade 10 student in Waterloo Ontario with a strong passion for software development. I enjoy competitive coding problems with python while honing my skills in software development with react as a front-end developer. I have experience at over 7 hackathons (with a few wins) and have mentored at various coding seminars. In my spare time, I like to play chess, develop my competitive math skills and learn more about the world of business.
                        </div>
                    </div>
                    <div class="about-image-div">
                        
                    </div>
                </div>
                <div class="about-section-div">
                    <div class="triangle-topright"></div>
                    <div class="about-section-divv">
                        <div class="about-section-card">
                        <img src={require('./Assets/web.png')} width="100" class="about-section-icon"/>                        
                        <div class="section-card-title"> Frontend</div>
                            <div class="about-section-content">
                                <div class="about-section-content-item">HTML</div>
                                <div class="about-section-content-item">CSS3</div>
                                <div class="about-section-content-item">Javascript</div>
                                <div class="about-section-content-item">React</div>

                            </div>
                        </div>
                        <div class="about-section-card">
                            <div class="section-card-title">Backend</div>
                        </div>
                    </div>
                </div>
                <div class="footer-div">
                    <div class="footer-copyright">©️ Daniel Yu | All Rights Reserved <br/>Developed as a side project</div>
                </div>
            </div>
        )
    }
}

export default About