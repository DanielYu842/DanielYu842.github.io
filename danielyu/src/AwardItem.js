import React from 'react';
import './AwardItem.css'
class AwardItem extends React.Component{
    constructor(){
        super()
        this.state = {
            title: ""
        }
    }


    render(){
        return(
            <div class="awarditem-div">
                <div class="awarditem-title">{this.props.title}</div>
                <div class="awarditem-details">
                    <p>{this.props.award}</p>
                    <p> {this.props.details}</p>
                </div>
                <div class="awarditem-bottom">
                    <div >date</div>
                    <div>link</div>
                </div>
            </div>
        )
    }
}

export default AwardItem