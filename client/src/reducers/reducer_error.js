import {Map} from 'immutable';
import {handleActions,createAction} from 'redux-actions';

// 액션 이름 및 타입 설정
const SET_SIGNIN ='signin/SET_SIGNIN';
const SHOW_SIGNIN ='signin/SHOW_SIGNIN';

// 액션 생성 함수 생성 

export const setSignin = createAction(SET_SIGNIN);
export const showSignin = createAction(SHOW_SIGNIN);
// 액션 이름 및 타입 설정 시 리듀서이름/SET_INPUT
const initialState = Map({
    user_id : '',
    user_password : '',
    user_auth : ''
})
// 리듀서 생성
export default handleActions({
    [SET_SIGNIN]: (state,action) =>{
        const {user_id,user_password} =action.payload;
        console.log("action payload => " + action.payload);
        console.log(JSON.stringify(action.payload));
        console.log(user_id, user_password);
        return state.set('value',action.payload)
    },
    [SHOW_SIGNIN] : (state,action) =>{
        const {user_id,user_password} =action.payload;
        console.log("action payload => " + action.payload);
        console.log(JSON.stringify(action.payload));
        console.log("user_id =>" + user_id + "user_password => "+ user_password);
        return state.set(user_id, user_password);
    }
},initialState);