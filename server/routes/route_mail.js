const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact_User = require("../models/model_contact_user")
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes-256-cbc', 'mypassword');
let result2 = decipher.update('45e2a948b501bc45928af1df2f4fd920', 'hex', 'utf8'); // 암호화할문 (base64, utf8이 위의 cipher과 반대 순서입니다.)
result2 += decipher.final('utf8'); // 암호화할문장 (여기도 base64대신 utf8)
router.post('/mail_auth', (req,res) =>{
    console.log("req로 뭐가오니?", req.body);
   const requested_user_name = req.body.requested_user_name;
   const requested_user_email = req.body.requested_user_email;
   const requested_user_subject = req.body.requested_user_subject;
   const requested_user_message = req.body.requested_user_message;
   // let email = req.body.email;
   // let name = req.body.name;
    
   //console.log("여기 노드 메일",req)
   var smtpTransport = nodemailer.createTransport({
       service: 'naver',
       auth: {
           user: 'dlwnstjr8@naver.com',
           pass: result2
       }
   });
   var mailOptions = {
       from: requested_user_name + '<dlwnstjr8@naver.com>',
       to: requested_user_email,
    //    subject: `안녕하세요, ${requested_user_name}님. 이메일 인증을 해주세요.`,
       subject: requested_user_subject,
    //    html: '<p>아래의 링크를 클릭해주세요 !</p>' +
    //      `<a href=http://localhost:3002/user/auth/?email=${requested_user_email}&token=success>인증하기</a>`
       text: requested_user_message
   };

   smtpTransport.sendMail(mailOptions, function(error, res){

       if (error){
           console.log(error);
           //res.redirect('/contact');
       } else {
           console.log("Message sent : 메일이 성공적으로 발송되었습니다.");
           //res.redirect('/');
       }
       smtpTransport.close();
       
       
   });
   const newUser = new Contact_User({
       requested_user_name: req.body.requested_user_name,
       requested_user_email: req.body.requested_user_email,
       requested_user_subject: req.body.requested_user_subject,
       requested_user_message : req.body.requested_user_message
   });
   newUser.save()
   .then(user => {
       //res.json(user)
       console.log("then언제오니");
       //res.redirect("/");
   });

  

   
})

module.exports = router;