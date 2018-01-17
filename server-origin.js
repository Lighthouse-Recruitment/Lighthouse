const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 3001;


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("/"));

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/lhdb",
  {
    useMongoClient: true
  }
);


//-----------Router-------------------------------------------------------------------
var db = require("./models/Users")
// GET EVERYBODY
app.get('/user', function(req,res,next){
  db.find({})
    .then(function(data){
      res.json(data);
    })
    .catch(function(err){
      res.json(err);
    });
});
// GET SINGLE PERSON BY ID
app.get('/user/:id', function(req,res,next){
  db.User.findById(req.params.id, function(err,post){
    if(err) return next(err);
    console.log(post)
    res.json(post);
  });
});
// SAVE Person
app.post('/user', function(req,res,next){
  db.User.create(req.body, function(err, post){
    if(err) return next(err);
    res.json(post);
  });
});

//------------------------------------------------------------------------------
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
