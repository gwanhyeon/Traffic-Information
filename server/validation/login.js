const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateLoginInput() = (data) =>{
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(!validator.isEmail(data.email)){
        errors.email = '이메일형식에 맞지 않습니다.';
    }
    if(validator.isEmpty(data.email)){
        errors.email = '이메일을 입력해주세요.'
    }
    if(!validator.isLength(data.password,{min:6, max:30})){
        errors.password = '패스워드 6자 이상 입력해주세요.';
    }
    if(validator.isEmpty(data.password)){
        errors.password = "패스워드를 입력해주세요.";
    }
    return {
        errors,
        inValid: isEmpty(errors)
    }
}