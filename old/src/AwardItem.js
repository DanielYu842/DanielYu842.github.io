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

                    <p class="awarditem-award">{this.props.award}</p>
                    <p class="awarditem-textdetails"> {this.props.details}</p>
                </div>
                <div class="awarditem-bottom">
                <div class="awarditem-date"> {this.props.date}</div>
                    {/*<div class="awarditem-link">link</div>*/}
                </div>
            </div>
        )
    }
}

export default AwardItem