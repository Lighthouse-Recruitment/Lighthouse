var mongoose = require('mongoose');
const Note = require('./Notes');

var peopleSchema = new mongoose.Schema({
  ppl_name: {type: String, required: true},
  ppl_email: {type: String, required: true},
  ppl_password: {type: String, required: true},
  ppl_resume: String,
  ppl_bio: String,
  updated_time: {type: Date, default: Date.now},
  note: {type: mongoose.Schema.Types.ObjectId,ref: "Note"}
});
module.export = mongoose.model('User', peopleSchema);
