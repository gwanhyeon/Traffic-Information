const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ContactUserSchema = new Schema({
    requested_user_name: {
        type: String,
        required: true
    },
    requested_user_email: {
        type: String,
        required: true
    },
    requested_user_subject: {
        type: String,
        required: true
    },
    requested_user_message : {
        type: String,
        required: true
    }
});

const Contact_User = mongoose.model('contacts', ContactUserSchema);
module.exports = Contact_User;