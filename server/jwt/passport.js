// passport 전략만 세워놓음.

const JWTStrategy = require('passport-jwt');
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const opts = {};

opts.jwtFromRequest =ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
// 전략세우기
module.exports = (passport) =>{
    passport.use(new JWTStrategy(opts, (jwt_payload,done) =>{
        User.findById(jwt_payload.id)
        .then(user =>{
            if(user) {
                return done(null,user);
            }
            return done(null, false);
        })
        .catch(err => console.error(err));
    }))
}