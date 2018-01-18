const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Note = require('./Note');

var userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  resume: String,
  bio: String,
  updated_time: {type: Date, default: Date.now},
  note: {type: Schema.Types.ObjectId,ref: "Note"}
});
module.export = mongoose.model('User', userSchema);

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//
// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
// });
//
// const Book = mongoose.model("Book", bookSchema);
//
// module.exports = Book;
