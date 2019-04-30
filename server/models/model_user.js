const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
 
    // avatar: {
    //     type: String
    // },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;