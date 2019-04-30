
//todo mongoose server connection to mongodb
const mongoose = require('mongoose');
//todo db연결하는 부분 (route 설정 , 모델 설정)


const board = mongoose.Schema({
    id : String,
    title: String,
    contents: String,
    author: String,
    board_date: {type: Date, default: Date.now()},
})
const Board = mongoose.model('Board',board);
module.exports = Board;