const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/mail_auth', (req,res) =>{
    let email = req.body.email;
    let name = req.body.name;
    var smtpTransport = nodemailer.createTransport({  
        service: 'Gmail',
        auth: {
            user: 'kgh940525@gmail.com',
            pass: 'rhksrhkd!2'
        }
    });
    var mailOptions = {  
        from: '김관현 <kgh940525@gmail.com>',
        to: email,
        subject: `안녕하세요, ${name}님. 이메일 인증을 해주세요.`,
    html: '<p>아래의 링크를 클릭해주세요 !</p>' +
          "<a href='http://localhost:3002/user/auth/?email=" + email +"&name=react'>인증하기</a>"  
    };
    
    smtpTransport.sendMail(mailOptions, function(error, response){
    
        if (error){
            console.log(error);
        } else {
            console.log("Message sent : " + response.message);
        }
        smtpTransport.close();
    });

    res.redirect("/");
})

module.exports = router;