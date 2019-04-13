const validator = require('validator');     // request 유효값 검사 모듈 
const isEmpty = require('./is-empty');

module.exports = validateRegisterInput() = (data) => {
    let errors= {};
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password: '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

    // 이름 유효성 검사
    if(!validator.isLength(data.name, {min: 20, max:30})){
        error.name = "이름 2-30자 입력하세요.";
    }
    if(!validator.isEmpty(data.name)){
        errors.name = "이름값 입력 실패하였습니다."
    }
    // 이메일 유효성 검사
    if(!validator.isEmail(data.email)){
        error.email = "이메일이 부정확합니다.";
    }
    if(!validator.isEmpty(data.email)){
        error.email = '이메일을 입력하세요.';
    }
    // 패스워드 유효성 검사
    if(!validator.isLength(data.password,{min:6, max:30})){
        error.password = "패스워드 6자이상 입력하세요.";
    }
    if(!validator.isEmpty(data.password)){
        error.password = "패스워드를 입력하세요.";
    }
    // 패스워드 확인 유효성 검사
    if(!validator.isLength(data.password_confirm,{min:6, max:30})){
        error.password_confirm = "패스워드 확인 6자이상 입력하세요.";
    }
    if(!validator.isEmpty(data.password_confirm)){
        error.password_confirm = "패스워드 확인을 입력하세요."
    }
    return{
        errors,
        invalid: isEmpty(errors)
    }

}