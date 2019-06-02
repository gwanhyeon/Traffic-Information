import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import { Navbar, Form } from 'react-bootstrap'

import main_image from './images/photo.png'
import hambug from './images/bug.jpeg'
import userImage from './images/blankuser.png'

class Navbar1 extends Component {

    onLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    onMyPage = (e) => {
      e.preventDefault();
      this.props.history.push('/MyPage');
    }

    render() {
           
        const {isAuthenticated} = this.props.auth;
        const {onLogout} = this;
        // 인증된 경우 이미지 보여줌 
        const authLinks = (
            <ul className="nav ml-auto" style={{height:'50px'}}>
              <li>
                  <Link className="nav-link " to="/Mypage">
                    <img src={userImage} style={{marginTop:'-10px',height:'3rem', maxWidth:'3rem',marginLeft:'1px', borderRadius:'50%'}} alt=""/>
                    <p style={{marginTop:'-25px'}}></p>
                    <h style={{fontSize: '1px'}}>mypage</h>
                  </Link>
              </li>
              <li>
              <Link className="nav-link " onClick={onLogout} to="/signin" style={{marginRight:'15px', marginTop:''}}>Logout</Link>
              {/* <p href="" className="nav-link" onClick={onLogout}>
                <h style={{marginTop:''}}>Logout</h>
              </p> */}
              </li>
            </ul>
        )
        // 인증되지 않은 경우 이미지 보여주지 않는다.
      const guestLinks = (
              <ul className="nav ml-auto">
                <li>
                  <Link className="nav-link " to="/signup" style={{marginRight:'15px'}}>Sign up</Link>
                </li>
                <li>
                  <Link className="nav-link " to="/signin">Sign in</Link>
                </li>
              </ul>
      )
        return(
          
          <Navbar className="shadow-sm" bg="white" variant="" expand="lg"sticky="top" >
          {/* <p style={{color:'white',msUserSelect:'none',WebkitTouchCallout:'none',WebkitUserSelect:'none',MozUserSelect:'none',userSelect:'none'}}>4444</p> */}

            <Link to="/"> {/* 메인 페이지 */}
              <img src={main_image} className="navbar-brand" alt="" style={{maxWidth:'70px',height:'auto', borderRadius: '20%'}}/>
            </Link>
            
            <Navbar.Toggle className="navbar-default"  aria-controls="responsive-navbar-nav" style={{border: 'none'}}>
                <img src={hambug} className=" rounded float-right" alt="" style={{maxWidth:'60px', borderRadius: ''}}/>
            </Navbar.Toggle>
          
            <Navbar.Collapse id="responsive-navbar-nav" style={{fontSize: '20px'}}>
              <Form>
              <ul className="nav ml-auto">
                <Link className="nav-link" to="/transinfo" style={{marginRight:'15px'}}>TransInfo</Link>
                <Link className="nav-link" to="/Board" style={{marginRight:'15px'}}>Board</Link>
                <Link className="nav-link" to="/about" style={{marginRight:'15px'}}>About</Link>
                <Link className="nav-link" to="/contact" style={{marginRight:'15px'}}>Contact</Link>
                </ul>
              </Form>
                <hr />

              <Form inline className="ml-auto">
              {isAuthenticated ? authLinks : guestLinks}
              </Form>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar1));