import { combineReducers } from 'redux';
import reducer_error from './reducer_error';
import reducer_auth from './reducer_auth';
import reducer_pagenation from './reducer_pagenation'

export default combineReducers({
    errors: reducer_error,
    auth: reducer_auth,
    pagenation : reducer_pagenation
    
});