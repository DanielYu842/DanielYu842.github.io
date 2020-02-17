import React from 'react';
import './Awards.css';
import AwardItem from './AwardItem'

class Awards extends React.Component{
    render(){
        return(
            <div class="awards-div">
                <div class="awards-title">
                    My Awards
                </div>
                <div class="awards-content">
                    <AwardItem title="Canadian Computing Competition" award="Honor Roll Group 2" details="Received a score of 71/75 on the Jr"></AwardItem>
                    <AwardItem title="Canadian Open Mathematics Challenge" award="Southwestern Ontario Honor Roll" details="Received a score of 54/80 "></AwardItem>
                    <AwardItem title="DECA Accounting Applications Series" award="Top 20 Oral 1" details="Received a 95/100 on my oral case"></AwardItem>
                    <AwardItem title="Beaver Computing Competition" award="First Place Honor Roll" details="Received Perfect Score"></AwardItem>
                    <AwardItem title="Fryer" award="Honor Roll Group 3" details="Received a score of 38/40"></AwardItem>
                    <AwardItem></AwardItem>

                </div>
            </div>
        )
    }
}

export default Awards
