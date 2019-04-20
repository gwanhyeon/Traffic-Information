import {Map} from 'immutable';
import {handleActions,createAction} from 'redux-actions';

// 액션 생성 및 타입 설정
const SET_SIGNUP = 'signup/SET_SIGNUP';
const SHOW_SIGNUP = 'signup/SHOW_SIGNUP';
const AUTH_SIGNUP = 'signup/AUTH_SIGNUP';
// 액션 생성 함수 생성 - export로 내보내야함
export const setSignup = createAction(SET_SIGNUP);
export const showSignup = createAction(SHOW_SIGNUP);
export const authSignup = createAction(AUTH_SIGNUP);

// 리듀서의 상태 초기화
const initialState = Map({
    user_id:'',
    user_password:'',
    user_name:'',
    auth : false,
})

//  리듀서를 내보내려면 export default 모듈당 딱하나의 것만 보보낸다.
export default handleActions({
    [SHOW_SIGNUP] : (state,action) =>{
        const {user_id,user_password,user_name,auth} =action.payload;
        console.log(JSON.stringify(action.payload));
        console.log("user_id =>",user_id);
        console.log("user_password => ",user_password);
        console.log("user_name => ",user_name);
        console.log("auth => ",auth);
        
        return state.set(user_id, user_password,user_name,auth);
    },
    [SET_SIGNUP] : (state,action) =>{

        // 액션을 만들면 파라미터로 전달한 객체를 payload로 설정한다
        const {user_id,user_password,user_name,auth} =action.payload;
        console.log(JSON.stringify(action.payload));
        console.log("user_id=>", user_id);
        console.log("user_Password=>", user_password);
        console.log("user_name=>", user_name);
        console.log("auth=>", auth);
        return state.set(user_id,user_password,user_name,auth);
        // return setSignup('value',action.payload);
    }
    
//초기화 부분 반드시 넣어줘야한다.
},initialState);