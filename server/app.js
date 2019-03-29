var express = require('express')
const db = require('./database/db.js'); // db 불러오기
const app = express();
const passport = require('passport');
const passportConfig = require('./passports/localPassport');
const signup = require('./router/signup.js');
const signin = require('./router/signin.js');
const authtest = require('./router/authtest.js');
var flash = require('connect-flash');
const bodyParser = require('body-Parser')
const jwtconfig = require('./jwt/config')

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())
app.set('jwt-secret',jwtconfig.secret)
app.use('/api/signin',signin)
app.use('/api/signup',signup)
app.use('/authtest',authtest)
db();
passportConfig(passport);
app.listen(3002, function(){
	console.log('http://localhost:3002 connected');
});