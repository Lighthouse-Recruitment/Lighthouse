var mongoose = require('mongoose');

// const Note = require("./Notes");

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
  // resume: String,
  // bio: String,
  // updated_time: {type: Date, default: Date.now}
  // note: [Note]
});
module.export = mongoose.model('User', userSchema);

// {id: 1, name:"dav", email: "aaa@aa.com", password:"asdfks"};
