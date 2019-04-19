const express = require('express');
const router = express.Router();
router.get("/auth", function(req, res){
    let email = req.query.email;
    // let token = req.query.token;
    let name = req.query.name;

    res.writeHead('200',{'Content-Type' : 'text/html; charset=utf-88'});
    res.write('<h1> Email :' +  email+ '</h1>');
    res.write('<h1> Name : '+ name +'</h1>');
    res.write('<h1> 성공적으로 인증이 완료 되었습니다. </h1>');
    
    console.log(email);
    console.log(name);
    // token이 일치하면 테이블에서 email을 찾아 회원가입 승인 로직 구현
})

module.exports = router;