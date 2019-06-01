import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../auth/setAuthToken';
import jwt_decode from 'jwt-decode';

// thunk 적용

export const registerUser = (user, history) => dispatch => {
    
    console.log("Signup actions user=>",user);
    console.log("Signup actions history=>",history);
    console.log("순서 알아보기 4")
    const formData = new FormData()
    formData.append(
        
        user.user_name,
        user.user_image
    )
    console.log("formdata => " ,formData);
    axios.post('/user/signup', user)
    
    
    
            .then(res => {
                history.push('/signin')
            })
            .catch(err => {
                // console.log("signup err => ",err);
                // console.log("signup err.response =>",err.response);
                // console.log("signup err.resopnse.data=>",err.response.data);
                
                dispatch({
                    
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

// thunk 적용
export const loginUser = (user) => dispatch => {
    axios.post('/user/signin', user)
            .then(res => {
                const { token } = res.data;
                console.log("여기는 thunk", token)
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                console.log("여기 decoded", decoded)
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    
    history.push('/signin');
}