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
            <div className="skill-card" data-aos={this.props.fade}>
                <div className="skill-card__header">
                    <img className="skill-card__icon" alt={`${this.props.two} Logo`}src={this.props.logo}/>
                </div>
                <div className="skill-card__body">
                    <h2 className="skill-card__title">{this.props.one}</h2><span className="skill-card__duration">{this.props.s}</span>
                    <ul className="skill-card__knowledge">
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