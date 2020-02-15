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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum erat erat. Sed cursus nibh in lectus vehicula, ut consectetur libero commodo. Pellentesque sit amet accumsan augue. Praesent at neque id magna pellentesque condimentum. Nullam viverra id sapien eu posuere. Sed pellentesque ante a aliquam fringilla. Nullam lacus nulla, varius ut vulputate id, semper at sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum varius est id lectus tincidunt fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod ipsum eget laoreet pulvinar. Aliquam sit amet orci elit.
                        </div>
                    </div>
                    <div class="about-image-div">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default About