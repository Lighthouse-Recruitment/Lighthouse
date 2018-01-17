var User = require('../models/Users.model.js');

exports.create = function(req, res) {
    var user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    user.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the user."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    User.find({})
      .then(function(data){
        res.json(data);
      })
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    User.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id " + req.params.userId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    User.findById(req.params.userId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a user with id " + req.params.userId});
        }

        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update user with id " + req.params.userId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete user with id " + req.params.id});
        } else {
            res.send({message: "user deleted successfully!"})
        }
    });
};
