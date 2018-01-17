var mongoose = require('mongoose');
const Note = require('./Notes');

var userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  resume: String,
  bio: String,
  updated_time: {type: Date, default: Date.now},
  note: {type: mongoose.Schema.Types.ObjectId,ref: "Note"}
});
module.export = mongoose.model('User', userSchema);
