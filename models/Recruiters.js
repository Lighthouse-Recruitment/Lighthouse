var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Note = require('./Notes');

var recruiterSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    note: {type: Schema.Types.ObjectId,ref: "Note"}
});
var Recruiter = module.exports = mongoose.model('Recruiter', recruiterSchema);

module.exports.getRecruiters = function(callback, limit){
  Recruiter.find(callback).limit(limit);
}

// add
module.exports.addRecruiter = function(id, callback){
  var query = {_id: id};
  Recruiter.create(query, callback);
}

module.exports.getRecruitersById = function(id, callback){
  Recruiter.findById(id, callback);
}

module.exports.updateRecruiter = function(id, recruiter, option, callback){
  var query = {_id: id};
  var update = {
    name: recruiter.name,
    email: recruiter.email,
    password: recruiter.password
  }
  Recruiter.findOneAndUpdate(query, update, option, callback);
}

module.exports.deleteRecruiter = function(id, callback){
  var query = {_id: id};
  Recruiter.remove(query,callback);
}
