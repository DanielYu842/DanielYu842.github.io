import React from 'react';
import './Awards.css';
import AwardItem from './AwardItem'
import { Spring } from 'react-spring/renderprops'

class Awards extends React.Component{
    render(){
        return(
            <div class="awards-div">
                <div class="awards-title">
                    My Awards
                </div>
                <div class="awards-content">
                    <Spring
                        config = {{delay: 500, tension: 30}}
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}>
                        {() => (<AwardItem></AwardItem>)}
                    </Spring>
                    <AwardItem></AwardItem>
                    <AwardItem></AwardItem>
                    <AwardItem></AwardItem>
                    <AwardItem></AwardItem>
                    <AwardItem></AwardItem>

                </div>
            </div>
        )
    }
}

export default Awards
