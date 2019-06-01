import React, { Fragment,Component } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
import { registerUser } from '../actions/authentication';
import Signup from './Signup';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import ji from './images/ji.jpg'
class MyPage extends Component {
   
    render() {
        const {auth} = this.props;

        
        if(auth.isAuthenticated) {
            return (
                <Fragment>
                <div class="w3-container w3-light-grey" style={{padding:'128px 16px'}} id="contact">
                    <h3 class="w3-center">MY PAGE</h3>
                    <p class="w3-center w3-large">회원가입 정보를 확인하세요!</p>
                    <div style={{marginTop : "48px"}}>
                    
                    <img src={ji} class="w3-image w3-greyscale" style={{width:'10%', marginTop:'48px'}}/>
                    <br/>
                        <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i> Email {this.props.auth.user.user_id}</p>
                    <br/>
                        <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> USER NAME {this.props.auth.user.user_name}</p>
                        
                        
                        
        
                        
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
