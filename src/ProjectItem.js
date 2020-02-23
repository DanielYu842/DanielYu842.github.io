import React from 'react';
import './ProjectItem.css'


class ProjectItem extends React.Component{
    render(){
        return(
            <div class="project-item-div">
                <div class="project-item-content">
                    <div class="project-image-div" style={{backgroundImage: `url(${this.props.image})`}}>
                        
                    </div>
                    <div class="project-title">
                        {this.props.title}
                        Visionary Development Studios
                    </div>
                    <div class="project-description">
                        {this.props.description}
                        Visionary is a SaaS model web application that will be the first social platform where users can plan, pledge, commit, and act on setting the planet to the path of environmental sustainability. 


                    </div>

                    <div class="project-technologies">
                        React | Javascript | Figma | Photoshop | Illustrator
                    </div>
                </div>
                <div class="project-item-footer">

                </div>
            </div>
        )
    }
}

export default ProjectItem