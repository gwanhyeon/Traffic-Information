import React, { Fragment,Component } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
import { registerUser } from '../actions/authentication';
import Signup from './Signup';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import ji from './images/ji.jpg';
import blankuser from './images/blankuser.png';
class MyPage extends Component {
   
    render() {
        const {auth} = this.props;

        
        if(auth.isAuthenticated) {
            return (
                <Fragment>
                <div class="w3-container w3-light-grey" style={{padding:'128px 16px'}} id="contact">
                    <h3 class="w3-center">MY PAGE</h3>
                    <p class="w3-center w3-large">회원가입 정보를 확인하세요!</p>
                    <div style={{marginTop : "48px" ,textAlign:'center'}}>
                    
                    <img src={blankuser} class="w3-image w3-center" style={{width:'10%', marginTop:'48px'}} alt=""/>
                    </div>
                    <div class="input-group mb-3" style={{margin:'auto',width:'800px', marginTop:'10px'}}>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                        <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                    </div>
                    <div class="input-group-append">
                        <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                    </div>
                    </div>
                    
                    <div style={{marginTop : "10px" ,textAlign:'center'}}>
                    <br/>
                    <p><i class="fa fa-user fa-fw w3-xxlarge w3-center"></i> USER NAME: {this.props.auth.user.user_name}</p>
                    <br/>
                        <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-center"></i> Email: {this.props.auth.user.user_id}</p>
                    </div>
                        
                        
                        
                        
        
                        
                    
                    
                </div>
             
            </Fragment>

                
            );
        }else {
            return(
            <div style={{marginTop:'100px'}}>   
              
                <h1 style={{textAlign:'center'}}>로그인하세요.</h1>
            </div>
            );

        }
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(MyPage)
