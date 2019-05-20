import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

    onLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const {onLogout} = this;
        // 인증된 경우 이미지 보여줌 
        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <a href="" className="nav-link" onClick={onLogout}>
                    <img src="data:image/png;base64,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" alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                            Logout
                </a>
            </ul>
        )
        // 인증되지 않은 경우 이미지 보여주지 않는다.
      const guestLinks = (
        <ul className="navbar-nav ml-auto" style={{fontFamily: 'sans-serif', fontSize: '1.5vw'}}>
            <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign in</Link>
            </li>
        </ul>
      )
        return(
            <form class="navbar navbar-expand-lg navbar-dark bg-primary" style={{fontFamily: 'sans-serif', fontSize: '1.5vw'}}>
            {/* <nav > */}
                <Link className="navbar-brand" to="/" style={{fontSize: '1.5vw'}}>교통정보</Link>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <Link className="navbar-brand" to="/Board" style={{fontSize: '1.5vw'}}>board</Link>
                    {isAuthenticated ? authLinks : guestLinks}
                {/* </div> */}
            {/* </nav> */}
            </form>
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

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));