import { UPDATE_CURRENT_PAGE, UPDATE_START_END_PAGE } from '../actions/types';
const initialState = {

    start: 0,
    end : 10,
    current : 1,
}

export default function(state = initialState, action){
    switch(action.type){
        case UPDATE_CURRENT_PAGE:
            return{
                ...state,
                current : action.payload
            };
        case UPDATE_START_END_PAGE:
            return {
                ...state,
                start : action.payload.start,
                end : action.payload.end
            };
        default:
            return state;
    }
}

