
//todo Express Engine Using 
const express = require('express');
const app = express();


//todo POST 방식 body-Parser 
const bodyParser = require('body-parser');
//todo PORT 3002
const PORT = 3002;
//todo mongoose 
const db = require('./dbs/db');
//todo Rotuer Connection to module
const route_signin = require('./routes/route_signin');
const route_signup = require('./routes/route_signup');
const route_mail = require('./routes/route_mail');
const route_mail_auth = require('./routes/route_mail_auth');
//todo database 연결 및 설정
db.db_connect;

//todo bodyparser(인코딩 설정, JSON 설정)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//todo route signup, signin router connect to and then using exporess moduel 
app.use('/user',route_mail);
app.use('/user',route_signin);
app.use('/user',route_signup);;
app.use('/user',route_mail_auth);
app.post('/', (req,res) =>{
    console.log(req.query.hello);
    console.log(req.params.name)
    // console.log(req.json());
    // json.parse() => string to json
    // json.stringfy = json to string
    console.log(req.body.data);
    res.json({
        "SERVER" : "Node.JS JWT SERVER TEST"
    })
})
app.get('/test',(req,res) =>{
    res.json({
        "SERVER" : "Node.JS JWT SERVER TEST"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})