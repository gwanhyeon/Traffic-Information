const express = require('express');
const router = express.Router(); // 라우터 분리
const bodyParser = require('body-parser');
var passport = require('passport');
const jwt = require('jsonwebtoken');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/',urlencodedParser,(req,res) => {

  passport.authenticate('signin', (err,user,info) =>{
    var error = err||info
    if(error) return res.json({ status: 502, error:error });
    if(!user) return res.json({ status: 401, message:'login failure'})
    else{
      const token = jwt.sign({user_id:req.body.user_id}, req.app.get('jwt-secret'), {algorithm:"HS256",expiresIn:'1h'})
      return res.json({status:200, user_id:req.body.user_id, token:token});
    }
  }
  )(req,res)
})

module.exports = router;