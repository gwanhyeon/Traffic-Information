import React, { Fragment, Component } from 'react';
import axios from 'axios';
import '../css/Contact.css';

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
                <div className="contactStyle" id="contact">
                    <div className="title">
                        <h3>CONTACT</h3>
                        <span>문의 사항이 있다면 남겨주세요.</span>
                    </div>
                    <div>
                        <div className="left-box" >
                            <br/><br/>
                        <p className="contacth4"><i class="fa fa-map-marker fa-fw w3-xlarge w3-margin-right"></i> Seoul, KOREA</p>
                        <p className="contacth4"><i class="fa fa-user fa-fw w3-xlarge w3-margin-right"></i> Name: Kim Gwan-hyeon</p>
                        <p className="contacth4"><i class="fa fa-phone fa-fw w3-xlarge w3-margin-right"></i> Phone: +82 010-4879-3997</p>
                        <p className="contacth4"><i class="fa fa-envelope fa-fw w3-xlarge w3-margin-right"> </i> Email: kgh940525@gmail.com</p>
                        </div>
                        <div class="card shadow-lg" id="left-box" style={{padding:'50px'}}>
                        <form onSubmit={this.handleSubmit} >
                        <p><input onChange={this.handleChange} class="form-control" type="text" placeholder="Name" required name="Name"/></p>
                        <p><input onChange={this.handleChange} class="form-control" type="text" placeholder="Email" required name="Email"/></p>
                        <p><input onChange={this.handleChange} class="form-control" type="text" placeholder="Subject" required name="Subject"/></p>
                        <p>
                        <textarea onChange={this.handleChange} class="form-control" type="text" placeholder="Message" required name="Message"
                        style={{height:'250px'}}/></p>
                        <p>
                            <button class="btn btn-primary" style={{float: 'right', fontWeight:'100', fontSize: '1rem', marginTop:'10px',marginRight:'30px'}} type="submit">
                            <i class="fa fa-paper-plane"></i> SEND MESSAGE
                            </button>
                        </p>
                        </form>
                        </div>
                        {/* <img src="/w3images/map.jpg" class="w3-image w3-greyscale" style={{width:'100%', marginTop:'48px'}}/> */}
                    </div>
                    
                </div>
             
            </Fragment>
        );
    }
}

export default ContactForm;