
import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as signinActions from '../modules/Signin';
import axios from 'axios';


class Signin extends Component {
    componentDidMount() {
           
    }
    handleChange = (e) =>{
        const {signinActions} = this.props;
        const {user_id, user_password, user_auth} = this.props;
        console.log(user_id);
        console.log(user_password);
        console.log(user_auth);
        signinActions.showSignin({
            'user_id':e.target.name,
        'user_password':e.target.value,
        'user_auth' : ''
    })
        // signinActions.showSignin({'user_id':e.target.name,'user_password':e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const {signinActions} = this.props;
        const {user_id, user_password, user_auth} = this.props;

        const user = {
            user_id : user_id,
            user_password : user_password,
            user_auth : user_auth
        }
        signinActions.setSignin(user)
    }
    render() {
        const {handleSubmit,handleChange} = this;
        const {user_id, user_password, user_auth} = this.props;

        return (
            <div>
            <form onSubmit={handleSubmit} >
            <p>로그인</p>
            <div className="form-group">
              <label htmlFor="user_id">ID</label>
              <input type="text" id="user_id" className="form-control" name="user_id" placeholder="Enter ID" onChange={handleChange} defaultValue={user_id} />
            </div>
            <div className="form-group">
              <label htmlFor="user_password">Password</label>
              <input type="password" className="form-control" name="user_password" placeholder="Enter Password" onChange={handleChange} defaultValue={user_password}/>
            </div>
            
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
            </div>
        );
    }
}
export default connect(
    (state) =>({
        user_id : state.Signin.get('user_id'),
        user_password : state.Signin.get('user_password'),
        user_auth: state.Signin.get('user_auth')
    }),
    (dispatch) =>({
        signinActions : bindActionCreators(signinActions,dispatch)
    })
)(Signin);
