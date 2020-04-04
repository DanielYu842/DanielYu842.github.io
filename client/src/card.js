import React from 'react';
import "./card.scss";


class Card extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        document.getElementsByClassName("skill-card__header")[this.props.num].style.background = this.props.background
    }

    render(){
        return(
            <div class="skill-card" data-aos={this.props.fade}>
                <div class="skill-card__header">
                    <img class="skill-card__icon" src={this.props.logo} alt="HTML5 Logo" />
                </div>
                <div class="skill-card__body">
                    <h2 class="skill-card__title">{this.props.one}</h2><span class="skill-card__duration">{this.props.s}</span>
                    <ul class="skill-card__knowledge">
                        <li>{this.props.two}</li>
                        <li>{this.props.three}</li>
                        <li>{this.props.four}</li>
                        <li>{this.props.five}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Card