import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter,Link } from 'react-router-dom';
import { registerUser } from '../actions/authentication';

import classnames from 'classnames';

class Signup extends Component {


    state = {
        user_name: '',
        user_id: '',
        user_password: '',
        user_password_confirm: '',
        errors: {}
    }

    // 상태 값 변화 
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // 회원가입 등록
    handleSubmit = (e) => {
        console.log("순서 알아보기 1")
        const {registerUser,history} = this.props;
        const {user_name,user_id,user_password,user_password_confirm}=this.state;
        e.preventDefault();
        
        const user = {
            user_name: user_name,
            user_id: user_id,
            user_password: user_password,
            user_password_confirm: user_password_confirm
        }
        registerUser(user,history);
    }
    // todo 컴포넌트가 prop 을 새로 받았을 때 실행됩니다.
    // tree structure auth-istAuthenticated(false)
    componentWillReceiveProps(nextProps) {
        console.log("순서 알아보기 2")
        const {history} = this.props;
        console.log(nextProps)
        console.log(history)

        // 인증이 된 상태라면!
        if(nextProps.auth.isAuthenticated) {
            history.push('/');
        }
        // 인증이 되지 않은 상태라면!
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        console.log("this.props=>",this.props);
        const {auth,history} = this.props;
        
        
        console.log("this.props=>",this.props);
        console.log("auth=> ",auth)
        console.log("auth.isAuthenticated=>",auth.isAuthenticated)
        console.log("순서 알아보기 3")
        if(auth.isAuthenticated) {
            // <Link to='/'></Link>
            history.push('/');
        }
    }

    render() {
        const {handleInputChange,handleSubmit} = this;
        const {user_name,user_id,user_password,user_password_confirm,errors } = this.state;
        return(
        <div className="container" style={{ marginTop: '50px', min:'350px', maxWidth:'350px', height:'auto'}}>
            <h1 class="" style={{marginTop: '40px', marginBottom: '20px' , fontFamily: 'monospace', fontSize:"2.5rem"}}>Registration</h1>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    style={{fontFamily: 'monospace', fontSize: '1.5rem'}}
                    placeholder="Name"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.user_name
                    })}
                    name="user_name"
                    onChange={ handleInputChange }
                    value={ user_name }
                    />
                    {errors.user_name && (<div className="invalid-feedback">{errors.user_name}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    style={{fontFamily: 'monospace', fontSize: '1.5rem'}}
                    placeholder="E-mail"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.user_id
                    })}
                    name="user_id"
                    onChange={handleInputChange }
                    value={ user_id }
                    />
                    {errors.user_id && (<div className="invalid-feedback">{user_id}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    style={{fontFamily: 'monospace', fontSize: '1.5rem'}}
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.user_password
                    })}
                    name="user_password"
                    onChange={ handleInputChange }
                    value={ user_password }
                    />
                    {errors.user_password && (<div className="invalid-feedback">{errors.user_password}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    style={{fontFamily: 'monospace', fontSize: '1.5rem'}}
                    placeholder="Confirm Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.user_password_confirm
                    })}
                    name="user_password_confirm"
                    onChange={ handleInputChange }
                    value={ user_password_confirm }
                    />
                    {errors.user_password_confirm && (<div className="invalid-feedback">{errors.user_password_confirm}</div>)}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" style={{width: '100%', fontFamily: 'monospace', fontSize: '1.5rem'}}>
                        Register User
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

// state to props mapping
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(mapStateToProps,{ registerUser })(withRouter(Signup))