const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
//var passport = require('passport');

module.exports = (passport) => {
  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
  });

  passport.deserializeUser((user_id, done) => { // 매개변수 id는 req.session.passport.user에 저장된 값
    User.findById(user_id, (err, user) => {
      done(null, user); // 여기의 user가 req.user가 됨
    });
  });

  passport.use('signin',new LocalStrategy({ // local 전략을 세움
    usernameField: 'user_id',
    passwordField: 'user_password',
    passReqToCallback: true,
  }, (req,user_id, user_password, done) => {
    User.find({ user_id: req.body.user_id, user_password:req.body.user_password }, (err, user) => {
      if (err) return done(err); // 서버 에러 처리
      if (!user) return done(null, false, req.flash('signinMessage','login failure')); // 임의 에러 처리
      else{
        if(user.length > 0){
          return done(null,user);
        }else{
          return done(null, false, req.flash('signinMessage','login failure'));
        }
      }
    })
  }))

  passport.use('signup',new LocalStrategy({ // local 전략을 세움
    usernameField: 'user_id',
    passwordField: 'user_password',
    passReqToCallback: true,},
    (req,user_id, user_password, done) => {
    User.findOne({"user_id":user_id}, (err,user) => {
        if(err) return done(err);
        if(user) return done(null,false,req.flash('signupMessage','이메일이 존재합니다.'))
        else{
            var newUser = new User({
                "user_id" : req.body.user_id ,
                "user_password" :req.body.user_password,
                "user_name":req.body.name,
                "user_age": req.body.age,
                "user_git_id" : req.body.user_git_id});
            newUser.save((err)=>{
                if(err)
                    throw err;
                return done(null,newUser);
            })
        }
    })
  }))
};
     