const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSignupInput(data) {
    let errors = {};
    data.user_name = !isEmpty(data.user_name) ? data.user_name : '';
    data.user_id = !isEmpty(data.user_id) ? data.user_id : '';
    data.user_password = !isEmpty(data.user_password) ? data.user_password : '';
    data.user_password_confirm = !isEmpty(data.user_password_confirm) ? data.user_password_confirm : '';
    data.user_image = !isEmpty(data.user_image) ? data.user_image : '';

    if(!Validator.isLength(data.user_name, { min: 2, max: 30 })) {
        errors.user_name = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.user_name)) {
        errors.user_name = 'Name field is required';
    }

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

    if(!Validator.isLength(data.user_password_confirm, {min: 6, max: 30})) {
        errors.user_password_confirm = 'Password must have 6 chars';
    }

    if(!Validator.equals(data.user_password, data.user_password_confirm)) {
        errors.user_password_confirm = 'Password and Confirm Password must match';
    }

    if(Validator.isEmpty(data.user_password_confirm)) {
        errors.user_password_confirm = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}