const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();

//Models
const User = require('../models/Users');
const Recruiter = require('../models/Recruiters');
const Note = require('../models/Notes')

//router
router.get('/', function(req,res){
  res.send("user api/users");
});

router.get('/api/users', function(req,res){
    User.getUsers(function(err, users){
      if(err){
        throw err;
      }
      res.json(users);
    });
});
router.get('/api/users/:_id', function(req,res){
    User.getUsersById(req.params._id, function(err, user){
      if(err){
        throw err;
      }
      res.json(user);
    });
});
router.post('/api/users', function(req,res){
  var user = req.body;
    User.addUser(user, function(err, user){
      if(err){
        throw err;
      }
      res.json(user);
    });
});
router.put('/api/users/:_id', function(req,res){
  var id = req.params._id;
  var user = req.body;
    User.updateUser(id, user, {}, function(err, user){
      if(err){
        throw err;
      }
      res.json(user);
    });
});
router.delete('/api/users/:_id', function(req,res){
  var id = req.params._id;
    User.deleteUser(id, function(err, user){
      if(err){
        throw err;
      }
      res.json(user);
    });
});

router.get('/api/recruiters', function(req,res){
    Recruiter.getRecruiters(function(err, recruiters){
      if(err){
        throw err;
      }
      res.json(recruiters);
    });
});
router.get('/api/recruiters/:_id', function(req,res){
    Recruiter.getRecruitersById(req.params._id, function(err, recruiter){
      if(err){
        throw err;
      }
      res.json(recruiter);
    });
});
router.post('/api/recruiters', function(req,res){
  var recruiter = req.body;
    Recruiter.addRecruiter(recruiter, function(err, recruiter){
      if(err){
        throw err;
      }
      res.json(recruiter);
    });
});
router.put('/api/recruiters/:_id', function(req,res){
  var id = req.params._id;
  var recruiter = req.body;
    Recruiter.updateRecruiter(id, recruiter, {}, function(err, recruiter){
      if(err){
        throw err;
      }
      res.json(recruiter);
    });
});
router.delete('/api/recruiters/:_id', function(req,res){
  var id = req.params._id;
    Recruiter.deleteRecruiter(id, function(err, recruiter){
      if(err){
        throw err;
      }
      res.json(recruiter);
    });
});
router.get('/api/notes', function(req,res){
    Note.getNotes(function(err, notes){
      if(err){
        throw err;
      }
      res.json(notes);
    });
});
router.get('/api/notes/:_id', function(req,res){
    Note.getNotesById(req.params._id, function(err, note){
      if(err){
        throw err;
      }
      res.json(note);
    });
});
router.post('/api/notes', function(req,res){
  var note = req.body;
    Note.addNote(note, function(err, note){
      if(err){
        throw err;
      }
      res.json(note);
    });
});
router.put('/api/notes/:_id', function(req,res){
  var id = req.params._id;
  var note = req.body;
    Note.updateNote(id, note, {}, function(err, note){
      if(err){
        throw err;
      }
      res.json(note);
    });
});
router.delete('/api/notes/:_id', function(req,res){
  var id = req.params._id;
    Note.deleteNote(id, function(err, note){
      if(err){
        throw err;
      }
      res.json(note);
    });
});
module.exports = router;
