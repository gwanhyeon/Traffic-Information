const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: {type:String, required:true,unique:true},
  user_password: {type:String, required:true},
  user_name: {type : String, default:""},
  user_age: {type : Number, default:0},
  user_git_id: {type : String, default:""},
});

module.exports = mongoose.model('user',userSchema)