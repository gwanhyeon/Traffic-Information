import React, { Fragment, Component } from 'react';
import '../css/contactform.css'

class ContactForm extends Component {
    render() {
        return (
                <Fragment>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                
                
                <div class="w3-container w3-light-grey" style={{padding:'128px 16px'}} id="contact">
                    <h3 class="w3-center">CONTACT</h3>
                    <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
                    <div style={{marginTop : "48px"}}>
                        <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Chicago, US</p>
                        <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
                        <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
                        <br/>
                        <form action="/action_page.php" target="_blank">
                        <p><input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"/></p>
                        <p><input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"/></p>
                        <p><input class="w3-input w3-border" type="text" placeholder="Subject" required name="Subject"/></p>
                        <p>
                        <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"/></p>
                        <p>
                            <button class="w3-button w3-black" type="submit">
                            <i class="fa fa-paper-plane"></i> SEND MESSAGE
                            </button>
                        </p>
                        </form>
                        
                        <img src="/w3images/map.jpg" class="w3-image w3-greyscale" style={{width:'100%', marginTop:'48px'}}/>
                    </div>
                    
                </div>
             
            </Fragment>
        );
    }
}

export default ContactForm;