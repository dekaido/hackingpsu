// app/controllers/retrieve.js

var User = require('../models/user');

exports.output = function(callback){
  User.find({}, function(err, items) {
    callback(items);
  });
};
