import React from 'react';
import './Home.css'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="home-div">
                <div class="home-title-div"> Daniel Yu</div>
                <div class="home-subtitle-div">I am a developer</div>
            </div>
        )
    }
}

export default Home