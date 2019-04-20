const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/model_user');



router.post('/signin', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const user_id = req.body.user_id;
    const user_password = req.body.user_password;
    const user_name = req.body.user_name;

    User.findOne({user_id})
        .then(user => {
            if(!user) {
                errors.user_id = 'User not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(user_password, user.user_password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                user_id: user.user_id,
                                user_name: user.user_name,
                                // avatar: user.avatar
                            }
                            jwt.sign(payload, 'secret', {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                    res.json({
                                        success: true,
                                        token: `Bearer ${token}`
                                    });
                                }
                            });
                        }
                        else {
                            errors.user_password = 'Incorrect Password';
                            return res.status(400).json(errors);
                        }
                    });
        });
});


module.exports = router;

