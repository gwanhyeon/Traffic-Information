
import React, { Component } from 'react'

import main_image from './images/photo.png'

class MainPage extends Component{
    render(){
        return(
            <div className="page-container">
                <div className="row">
                    <div className="col">
                    <img src={main_image} className="" alt="image" style={{maxWidth:'10rem'}}/>
                    </div>
                    <div className="col">1</div>
                </div>
                <div className="row">
                    <div className="col">2</div>
                </div>
                <div className="row">
                    <div className="col">3</div>
                </div>
            </div>
        )        
    }
}

export default MainPage;
