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
                <div class="awarditem-title">Canadian Computing Competition</div>
                <div class="awarditem-details">
                    <p>Honor Roll Group 2</p>
                    <p>I received a score of 71/75 on the junior competition.</p>
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