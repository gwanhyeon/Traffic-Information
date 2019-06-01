import React, { Fragment, Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    state ={
        Name : null,
        Email : null,
        Subject : null,
        Message : null,
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        const {Name, Email, Subject, Message} = this.state;
        e.preventDefault();
        const mailOpt = {
            requested_user_name : Name,
            requested_user_email : Email,
            requested_user_subject : Subject,
            requested_user_message : Message
        }
        axios.post('/user/mail_auth', mailOpt)

        this.props.history.push('/');
    
    }
    render() {
        return (
                <Fragment>
                <div class="w3-container w3-light-grey" style={{padding:'128px 16px'}} id="contact">
                    <h3 class="w3-center">CONTACT</h3>
                    <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
                    <div style={{marginTop : "48px"}}>
                        <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Seoul, KOREA</p>
                        <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +82 01000000000</p>
                        <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: wnstjrdlrj@gmail.com</p>
                        <br/>
                        <form onSubmit={this.handleSubmit} >
                        <p><input onChange={this.handleChange} class="w3-input w3-border" type="text" placeholder="Name" required name="Name"/></p>
                        <p><input onChange={this.handleChange} class="w3-input w3-border" type="text" placeholder="Email" required name="Email"/></p>
                        <p><input onChange={this.handleChange} class="w3-input w3-border" type="text" placeholder="Subject" required name="Subject"/></p>
                        <p>
                        <textarea onChange={this.handleChange} class="w3-input w3-border" type="text" placeholder="Message" required name="Message"/></p>
                        <p>
                            <button class="w3-button w3-black" type="submit">
                            <i class="fa fa-paper-plane"></i> SEND MESSAGE
                            </button>
                        </p>
                        </form>
                        
                        {/* <img src="/w3images/map.jpg" class="w3-image w3-greyscale" style={{width:'100%', marginTop:'48px'}}/> */}
                    </div>
                    
                </div>
             
            </Fragment>
        );
    }
}

export default ContactForm;