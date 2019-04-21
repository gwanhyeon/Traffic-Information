
//todo mongoose server connection to mongodb
const mongoose = require('mongoose');
//todo db연결하는 부분 (route 설정 , 모델 설정)


const board = mongoose.Schema({
    // _id : mongoose.Types.ObjectId,
    title : {type: String , required: true},
    body : {type: String },
    createdAt : {type: Data},
    updatedAt : {type: Date}
})
const Board = mongoose.model('Board',board);
module.exports = Board;