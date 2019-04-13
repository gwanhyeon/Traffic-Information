const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passport = require('passport');
const config = require('./db/db.js')

const users = require('./routes/user');

mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    () =>{console.log("Mongodb Databases is connected!")},
    err =>{console.log("연결이 안되었습니다." + err)}
);

const app = express();
app.use(passport.initialize());
require('./jwtauth/passport')(passport);
// extended:false를 해줘야 한다 .왜냐하면 url인코딩이 계속 적용될지 1번만 적용하지 않을것이므로 false;

app.use(bodyparser.urlencoded({extended : false}));
// JSON 형식의 bodyParser 사용 
// bodyparser 사용하는이유는 post 방식에서의 data 전달 값은 body로 값이 요청들어오기 때문에, 이것들을
// bodyparser 라는 모듈을 이용하여 json() 형식으로 받겠다는 뜻이다.(express를 사용하여 하겠다는뜻.)
app.use(bodyparser.json());
app.use('/api/Users',users);

app.get('/', function (req,res) {
    res.send('hello');
})

const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})