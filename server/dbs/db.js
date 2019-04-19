const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/JWT_TEST');

const db_connect = mongoose.connect('mongodb://localhost:27017/Transportation', { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);
module.exports = db_connect;