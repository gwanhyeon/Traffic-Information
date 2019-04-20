const express = require('express');
const router = express.Router();
const user = require('../models/model_user');
router.get("/auth", function(req, res){
    let email = req.query.email;
    // let token = req.query.token;
    let token = req.query.token;
    if(token === 'success'){
    res.writeHead('200',{'Content-Type' : 'text/html; charset=utf-88'});
    res.write('<h1>' +  email+ '</h1>');
    res.write(`<h1> Gmail Auth ${token} !</h1>`);
    
    }else{
        user.auth = token;
        res.writeHead('200',{'Content-Type' : 'text/html; charset=utf-88'});
        res.write('<h1> 잘못된 인증입니다.</h1>');
        
    }

    // res.send("회원가입 성공하셨습니다.")
    console.log(email);
    console.log(token);
    // token이 일치하면 테이블에서 email을 찾아 회원가입 승인 로직 구현
})

module.exports = router;