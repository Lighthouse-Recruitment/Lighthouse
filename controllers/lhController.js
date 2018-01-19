const db = require("../models");


module.exports = {
create : function(req, res) {
  // res.json({msg: "Create"});
    var seed = ({
      name:"yok",
      email: "time@ak.com",
      password: "skdfWER"
    })
  db.Users
    .create(seed)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

findAll: function(req, res) {
    // res.json({msg: "findAll"});
  db.Users
    .find({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

findById : function(req, res) {
    // Retrieve and return all notes from the database.
      res.json({msg: "findById"});
    // db.Users
    //   .findById(req.params.id)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
},

update : function(req, res) {
    // Update a note identified by the noteId in the request
      res.json({msg: "update"});
    // db.Users
    //   .findOneAndUpdate({ _id: req.params.id }, req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
},

remove : function(req, res) {
    // Delete a note with the specified noteId in the request
    res.json({msg: "remove"});
  //   db.Users
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  }
};
