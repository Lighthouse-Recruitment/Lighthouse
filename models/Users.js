var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Note = require('./Notes');

var userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}

  // note: {type: Schema.Types.ObjectId,ref: "Note"}
});
var User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function(callback, limit){
  User.find(callback).limit(limit);
}

// add
module.exports.addUser = function(user, callback){
  User.create(user, callback);
}

module.exports.getUsersById = function(user, callback){
  User.findById(user, callback);
}

module.exports.updateUser = function(id, user, option, callback){
  var query = {_id: id};
  var update = {
    name: user.name,
    email: user.email,
    password: user.password
  }
  User.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteUser = function(id, callback){
  var query = {_id: id};
  User.remove(query,callback);
}


// var mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const Note = require('./Notes');
//
// var userSchema = new Schema({
//   name: {type: String, required: true},
//   email: {type: String, required: true},
//   password: {type: String, required: true},
//   resume: String,
//   bio: String
//   // note: {type: Schema.Types.ObjectId,ref: "Note"}
// });
// module.export = mongoose.model('User', userSchema);
