import React, { Fragment, Component } from 'react';
import '../css/contactform.css'

class About extends Component {
    render() {
        return (
            <Fragment>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                
            <div>
                <div class="w3-container" style={{padding:"128px 16px"}} id="team">
                <h3 class="w3-center">THE TEAM</h3>
                <p class="w3-center w3-large">The ones who runs this company></p>
                <div class="w3-row-padding w3-grayscale" style={{marginTop:"64px"}}>
                    <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-card">
                        <img src="https://avatars3.githubusercontent.com/u/26972611?s=460&v=4" alt="John" style={{width:"100%"}}/>
                        <div class="w3-container">
                        <h3>John Doe</h3>
                        <p class="w3-opacity">CEO & Founder</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                        </div>
                    </div>
                    </div>
                    <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-card">
                        <img src="../image/1" alt="Jane" style={{width:"100%"}}/>
                        <div class="w3-container">
                        <h3>Anja Doe</h3>
                        <p class="w3-opacity">Art Director</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                        </div>
                    </div>
                    </div>
                    <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-card">
                        <img src="../image/1" alt="Mike" style={{width:"100%"}}/>
                        <div class="w3-container">
                        <h3>Mike Ross</h3>
                        <p class="w3-opacity">Web Designer</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                        </div>
                    </div>
                    </div>
                    <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-card">
                        <img src="../..image/image" alt="Dan" style={{width:"100%"}}/>
                        <div class="w3-container">
                        <h3>Dan Star</h3>
                        <p class="w3-opacity">Designer</p>
                        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                        <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                                
            </div>
            </Fragment>
        );
    }
}

export default About;