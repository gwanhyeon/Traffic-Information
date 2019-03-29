const mongoose = require('mongoose');

module.exports = () => {
  function connect() {
    mongoose.connect('mongodb://localhost:27017/auth', function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      else{console.log('mongodb connected');}
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  require('../models/user.js')
};