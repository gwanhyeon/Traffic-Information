const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact_User = require('../models/model_contact_user')
router.post('/mail_auth', (req,res) =>{
    const requested_user_name = req.body.requested_user_name;
    const requested_user_email = req.body.requested_user_email;
    const requested_user_subject = req.body.requested_user_subject;
    const requested_user_message = req.body.requested_user_message;
    // let email = req.body.email;
    // let name = req.body.name;

    console.log("여기 노드 메일",req)
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
          `<a href=http://localhost:3002/user/auth/?email=${email}&token=success>인증하기</a>`  
    };
    
    smtpTransport.sendMail(mailOptions, function(error, response){
    
        if (error){
            console.log(error);
        } else {
            console.log("Message sent : 메일이 성공적으로 발송되었습니다.");
            const newUser = new Contact_User({
                requested_user_name: req.body.requested_user_name,
                requested_user_email: req.body.requested_user_email,
                requested_user_subject: req.body.requested_user_subject,
                requested_user_message : req.body.requested_user_message   
            });
            newUser
            .save()
            .then(user => {
                res.json(user)
            }); 

        }
        smtpTransport.close();
    });

    res.redirect("/");
})

module.exports = router;