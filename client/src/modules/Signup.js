Signupimport {Map} from 'immutable';
import {handleActions,createAction} from 'redux-actions';


// 액션 생성 및 타입 설정

const SET_SIGNUP = 'signup/SET_SIGNUP';
const SHOW_SIGNUP = 'signup/SHOW_SIGNUP';

// 액션 생성 함수 생성 - export로 내보내야함
export const setSignup = createAction(SET_SIGNUP);
export const showSignup = createAction(SHOW_SIGNUP);
// 리듀서의 상태 초기화
const initialState = Map({
    user_id:'',
    user_password:'',
    user_name:'',
    result : null,
})

//  리듀서를 내보내려면 export default 모듈당 딱하나의 것만 보보낸다.
export default handleActions({
    [SHOW_SIGNUP] : (state,action) =>{
        const {user_id,user_password,user_name,result} =action.payload;
        console.log("action payload => " + action.payload);
        console.log(JSON.stringify(action.payload));
        console.log("user_id =>" + user_id + "user_password => "+ user_password);
        return state.set(user_id, user_password,);
    },
    [SET_SIGNUP] : (state,action) =>{

        // 액션을 만들면 파라미터로 전달한 객체를 payload로 설정한다
        const {user_id,user_password,user_name,result} =action.payload;
        console.log("action payload => " + action.payload);
        console.log(JSON.stringify(action.payload));
        console.log("user_id =>" + action.payload + "user_password => "+ user_password
        +"user_name => "+ user_name);

        return state.set(user_id,user_password,user_name,result);
        // return setSignup('value',action.payload);
    }
    
//초기화 부분 반드시 넣어줘야한다.
},initialState);