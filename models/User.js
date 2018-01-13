var mongoose = require('mongoose');
var peopleSchema = new mongoose.Schema({
  ppl_name: {type: String, required: true},
  ppl_email: {type: String, required: true},
  ppl_password: {type: String, required: true},
  ppl_resume: String,
  ppl_bio: String,
  updated_time: {type: Date, default: Date.now},
  note: {type: Schema.Types.ObjectId,ref: "Notes"}
});
module.export = mongoose.model('User', peopleSchema);