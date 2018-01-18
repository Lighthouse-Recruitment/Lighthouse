const db = require("../models");


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
