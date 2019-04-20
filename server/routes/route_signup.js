const express = require('express');
const router = express.Router();
// const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');


router.post('/siginup', function(req, res) {

    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({
        user_id : req.body.user_id
    }).then(user => {
        if(user) {
            return res.status(400).json({
                user_id: 'Email already exists'
            });
        }
        else {
            const newUser = new User({
                user_name: req.body.user_name,
                user_id: req.body.user_id,
                user_password: req.body.user_password,
            });
            
            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.error('There was an error', err);
                else {
                    bcrypt.hash(newUser.user_password, salt, (err, hash) => {
                        if(err) console.error('There was an error', err);
                        else {
                            newUser.user_password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    res.json(user)
                                }); 
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;