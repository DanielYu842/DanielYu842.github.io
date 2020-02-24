import React from 'react';
import './ProjectItem.css'


class ProjectItem extends React.Component{

    render(){
        return(
            <div class="project-item-div">
                <div class="project-item-content">
                    <a href={this.props.link}>
                        <div class="project-image-div" styles={{ backgroundImage:`url(${this.props.image})` }}>
                       
                        </div>
                    </a>
                    <div class="project-title">
                        {this.props.title}
                    </div>
                    <div class="project-description">
                        {this.props.description}


                    </div>

                    <div class="project-technologies">
                        {this.props.technologies}
                    </div>
                </div>
                <div class="project-item-footer">
                    <a href={this.props.github}><img src={require('./Assets/github-logo.svg')} width="40" class="github-logo"/></a>               
                </div>
            </div>
        )
    }
}

export default ProjectItem