const db = require('../models/Users');

module.exports = {
create : function(req, res) {
  db.User
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

findAll: function(req, res) {
  db.User
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

findById : function(req, res) {
    // Retrieve and return all notes from the database.
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},

update : function(req, res) {
    // Update a note identified by the noteId in the request
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
},

remove : function(req, res) {
    // Delete a note with the specified noteId in the request
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};



// const mongoose = require("mongoose");
// var db = require("../models");
//
// module.exports = {
// // GET EVERYBODY
// app.get('/', function(req,res,next){
//   db.User.find(function(err, allindexs){
//     if (err) return next(err);
//     res.json(allindexs);
//   });
// });
// // GET SINGLE PERSON BY ID
// app.get('/:id', function(req,res,next){
//   db.User.findById(req.params.id, function(err,Post){
//     if(err) return next(err);
//     console.log(post)
//     res.json(post);
//   });
// });
// // SAVE Person
// app.post('/', function(req,res,next){
//   db.User.create(req.body, function(err, post){
//     if(err) return next(err);
//     res.json(post);
//   });
// });
// // SAVE PERSON'S Note
// app.post('/:id', function(req,res,next){
//   db.Note.create(req.body, function(err, post){
//     if(err) return next(err);
//     res.json(post);
//   });
// });
// app.put('/:id', function(req,res,next){
//   db.User.findByIdAndUpdate(req.params.id, req.body, function(err, post){
//     if(err) return next(err);
//     res.json(post);
//   });
// });
// app.delete('/:id', function(req,res,next){
//   db.User.findByIdAndRemove(req.params.id, req.body, function(err, post){
//     if(err) return next(err);
//     res.json(post);
//   });
// });
// }
