const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSigninInput(data) {
    let errors = {};
    data.user_id = !isEmpty(data.user_id) ? data.user_id : '';
    data.user_password = !isEmpty(data.user_password) ? data.user_password : '';

    if(!Validator.isEmail(data.user_id)) {
        errors.user_id = 'Email is invalid';
    }

    if(Validator.isEmpty(data.user_id)) {
        errors.user_id = 'Email is required';
    }

    if(!Validator.isLength(data.user_password, {min: 6, max: 30})) {
        errors.user_password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.user_password)) {
        errors.user_password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}