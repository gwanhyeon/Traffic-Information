import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter,Link } from 'react-router-dom';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';

class Signin extends Component {

    
    state = {
        user_id: '',
        user_password: '',
        errors: {}
    }
     

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {

        e.preventDefault();
        const {loginUser} = this.props;
        const {user_id,user_password} = this.state;
        const user = {
            user_id: user_id,
            user_password: user_password,
        }
        loginUser(user);
    }

    componentDidMount = () => {
        const {auth,history} = this.props;
        if(auth.isAuthenticated) {
            
            history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        const {auth,history} = this.props;
        if(nextProps.auth.isAuthenticated) {
            history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors,user_id,user_password} = this.state;
        const {handleInputChange,handleSubmit} = this;
        
        return(
<<<<<<< HEAD
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
=======
        <div className="container" style={{ marginTop: '100px', width: '500px'}}>
>>>>>>> f323a54d4725e081809df5c4d63369b8f25ab3c8
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <input
                    type="email"
<<<<<<< HEAD
                    placeholder="user_id"
=======
                    placeholder="E-mail"
>>>>>>> f323a54d4725e081809df5c4d63369b8f25ab3c8
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.user_id
                    })}
                    name="user_id"
                    onChange={ handleInputChange }
                    value={ user_id }
                    />
                    {errors.user_id && (<div className="invalid-feedback">{user_id}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
<<<<<<< HEAD
                    placeholder="user_password"
=======
                    placeholder="Password"
>>>>>>> f323a54d4725e081809df5c4d63369b8f25ab3c8
                    className={
                        classnames('form-control form-control-lg', {
                        'is-invalid': errors.user_password
                    })} 
                    name="user_password"
                    onChange={ handleInputChange }
                    value={ user_password }
                    />
                    {errors.user_password && (<div className="invalid-feedback">{errors.user_password}</div>)}
                </div>
                <div className="form-group">
<<<<<<< HEAD
                    <button type="submit" className="btn btn-primary">
                        Login User
                    </button>
=======
                    <button type="submit" className="btn btn-primary" style={{width: '470px'}}>
                        Login User
                    </button>
                    <Link className="nav-link" to="/signup" style={{float: 'right', width: '85px'}}>sing up</Link>
>>>>>>> f323a54d4725e081809df5c4d63369b8f25ab3c8
                </div>
            </form>
        </div>
        )
    }
}

// Login.propTypes = {
//     loginUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Signin)