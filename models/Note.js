var mongoose = require('mongoose');
var notesSchema = new mongoose.Schema({
  body: String
});
module.export = mongoose.model('Note', notesSchema);