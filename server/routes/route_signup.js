const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/model_user');

router.post('/signup',(req,res) =>{
    console.log(req.body);
    //todo  요청된 PASSWORD to bcrypt hash converting
    
    User.findOne({
        
        user_id: req.body.user_id

    }).then(user => {
        // todo 중복되는 유저 있는지 확인
        if(user) {
            return res.status(400).json({
                user_id : 'Email already exists'
            });
        }
        else {
            // todo 중복되는 유저 없을 시 
            bcrypt.hash(req.body.user_password, 10, (err,hash)=>{
                if(err){
                    return res.status(500).json({
                        error :err
                    })
                }else{
                    console.log(res.body);
                        //todo 회원 가입 객체 새로 생성 한 후 Mongoose type value ObjectID to _id value 
                        const user = new User({
                            user_id : req.body.user_id,
                            user_password : hash,
                            user_name : req.body.user_name,
                            auth: false
                        });
                        //todo 객채를 생성하고 Sign Status 200 server to request
                        user.save().then((result) =>{
                            console.log(result);
                            res.status(200).json({
                                success : "New User has been Created"

                            })
                            //todo server 쪽에서 Error
                        }).catch( (error) =>{
                            console.log("요기")
                            res.status(500).json({
                                error : err
                            })
                        })
                    }
                })
            }
        })
    }
)

module.exports = router;