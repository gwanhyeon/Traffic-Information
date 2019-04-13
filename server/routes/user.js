const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const User = require('../model/User');

// 요청이 들어왔을때니까, 유효성 검사이후 값 리턴
router.post('/register', (req,res) =>{
    const {errors, isValid } = validateRegisterInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }
    // 1. 유저 찾기 
    User.findOne({
        email : req.body.email
    }).then((user) => {
        if(user){
            return res.status(400).json({
                email: "이메일이 이미 존재합니다."
            });
        }else{
            const avatar = gravatar.url(req.body.email,{
                s: '200',
                r: 'pg',
                d: 'mm'

            })
        
            const newUser = new User({
                name : req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar
            })
            // Salt 값 적용 URL + SALT 인코딩
            bcrypt.genSalt(10,(err,salt) =>{
                if(err){
                    console.error("bcrypt Salt Error",err);
                }else{
                    bcrypt.hash(newUser.password,salt,(err,hash) =>{
                        newUser.password = hash;
                        newUser.save()
                        .then(user=>{
                            res.json(user);
                        });
                    })
                    
                }
            })
        }
    })
})

router.post('/login',(req,res) => {
    const {errors, inValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
    .then(user =>{
        if(!user){
            errors.email = 'User not found'
            return res.status(404).json(errors);
        }
        // 값 비교 
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                // 매칭될경우 
                if(isMatch){
                    const payload = {
                        id: user.id,
                        name: user.name,
                        avatar: user.avatar
                    }
                    // JWT 토큰 세션 시간
                    jwt.sign(payload,'secret',{
                        expiresIn: 3600

                    },(err,token) =>{
                        if(err){
                            console.error('토큰에 에러 발생',err);
                        }else{
                            res.json({
                                success: true,
                                token: `Bearer ${token}`
                            });
                        }
                    })
                }
                else{
                    errors.password = "부정확한 패스워드";
                    return res.status(400).json(errors);
                }
            })
    })

})

