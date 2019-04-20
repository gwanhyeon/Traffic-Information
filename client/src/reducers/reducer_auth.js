import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action ) {
    console.log("순서 알아보기 5")
    console.log(action);
    console.log(action.type);
    switch(action.type) {
    
        case SET_CURRENT_USER:
        console.log("set_Current_user",action.payload);
        
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default: 
            return state;
    }
}