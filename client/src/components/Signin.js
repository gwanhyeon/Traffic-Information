import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        const {history} = this.props;
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
        <div className="container form-control shadow-lg" style={{marginTop:'100px', maxWidth:'400px', height:'auto'}}>
            <h1 class="text-center" style={{marginTop: '15px', marginBottom: '20px',  fontSize:"2.5rem"}}>Signin</h1>
            <form onSubmit={ handleSubmit } style={{margin:'auto', maxWidth:'330px'}}>
                <div className="form-group" style={{borderStyle:'solid',borderWidth: '3px 3px'}}>
                    <input
                    type="email"
                    style={{ fontSize: '1.3rem'}}
                    placeholder="E-mail"
                    className={classnames('form-control form-control-sm', {
                        'is-invalid': errors.user_id
                    })}
                    name="user_id"
                    onChange={ handleInputChange }
                    value={ user_id }
                    />
                    {errors.user_id && (<div className="invalid-feedback">{user_id}</div>)}
                </div>
                <div className="form-group" style={{borderStyle:'solid',borderWidth: '3px 3px'}}>
                    <input
                    type="password"
                    style={{fontSize: '1.3rem'}}
                    placeholder="Password"
                    className={
                        classnames('form-control form-control-sm', {
                        'is-invalid': errors.user_password
                    })} 
                    name="user_password"
                    onChange={ handleInputChange }
                    value={ user_password }
                    />
                    {errors.user_password && (<div className="invalid-feedback">{errors.user_password}</div>)}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" style={{width: '100%',  fontSize: '1.5rem'}}>
                        Signin
                    </button>
                    <Link className="nav-link" to="/signup" style={{textAlign: 'right', width: '100%',  fontSize: '1rem'}}>Signup</Link>
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