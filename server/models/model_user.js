//todo mongoose server connection to mongodb
const mongoose = require('mongoose');
//todo db연결하는 부분 (route 설정 , 모델 설정)


const user = mongoose.Schema({
    // _id : mongoose.Types.ObjectId,
    user_id : {type: String , required: true},
    user_password : {type: String , required: true},
    user_name : {type: String, required: true},
    auth : {type: Boolean, required: true}
})
module.exports = mongoose.model('User',user);