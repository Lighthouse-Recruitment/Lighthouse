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

router.route("/api/users")
    .get(User.getUsers)
    .post(User.addUser);

router.route("/api/users/:_id")
    .get(User.getUsersById)
    .put(User.updateUser)
    .delete(User.deleteUser);

router.route("/api/recruiters")
    .get(Recruiter.getRecruiters)
    .post(Recruiter.addRecruiter);

router.route("/api/recruiters/:_id")
    .get(Recruiter.getRecruitersById)
    .put(Recruiter.updateRecruiter)
    .delete(Recruiter.deleteRecruiter);

router.route("/api/notes")
    .get(Note.getNotes)
    .post(Note.addNote);

router.route("/api/notes/:_id")
    .get(Note.getNotesById)
    .put(Note.updateNote)
    .delete(Note.deleteNote);

module.exports = router;
