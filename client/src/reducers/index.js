import { combineReducers } from 'redux';
import reducer_error from './reducer_error';
import reducer_auth from './reducer_auth';

export default combineReducers({
    errors: reducer_error,
    auth: reducer_auth
    
});