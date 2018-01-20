var mongoose = require('mongoose');

var notesSchema = new mongoose.Schema({
  body: String
});

const Note = module.export = mongoose.model('Note', notesSchema);

module.exports.getNotes = function(callback, limit){
  Note.find(callback).limit(limit);
}

// add
module.exports.addNote = function(id, callback){
  var query = {_id: id};
  Note.create(query, callback);
}

module.exports.getNotesById = function(id, callback){
  Note.findById(id, callback);
}

module.exports.updateNote = function(id, note, option, callback){
  var query = {_id: id};
  var update = {
    name: note.name,
    email: note.email,
    password: note.password
  }
  Note.findOneAndUpdate(query, update, option, callback);
}

module.exports.deleteNote = function(id, callback){
  var query = {_id: id};
  Note.remove(query,callback);
}
