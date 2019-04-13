const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const UserSchema = require('../model/User');
const User = mongoose.model('users',UserSchema);
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

// JWT 전략세우기 !
module.exports = (passport) =>{
    passport.use(new JWTStrategy(opts, (jwt_payload,done) =>{
        User.findById(jwt_payload.id)
        .then(user =>{
            if(user){
                return done(null,user);
            }
            return done(null,false);
        })
        .catch(err=> console.error(err));
    }));
}
