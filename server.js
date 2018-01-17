const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
// app.use(express.static("client/public"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/lhdb",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require("mongoose");
// var db = require('./models/allindex');
//
// // create express app
// const app = express();
// const PORT = process.env.PORT || 3001;
//
//
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// mongoose.Promise = global.Promise;
// // parse requests of content-type - application/json
// app.use(bodyParser.json())
//
// mongoose.connect('mongodb://localhost/lhdb',
// {
//     useMongoClient: true
// });
//
// // CHECK DATABASE CONNECTION
// mongoose.connection.on('error', function() {
//     console.log('Could not connect to the database. Exiting now...');
// });
// mongoose.connection.once('open', function() {
//     console.log("Successfully connected to the database");
// })
// // define a simple route
//
//
// //----ROUTER -------------------
// // const users = require('./controllers/lh.controller.js');
//
// app.get('/', function(req, res){
//     res.json({"message": "Welcome to Lighthouse."});
// })
//
// app.get('/user', function(req,res,next){
//   db.User.find({})
//     .then(function(data){
//       console.log(data);
//       res.json(data);
//   });
// });
// // GET SINGLE PERSON BY ID
// app.get('/user/:id', function(req,res,next){
//   db.User.findById(req.params.id, function(err,Post){
//     if(err) return next(err);
//     console.log(post)
//     res.json(post);
//   });
// });
// // SAVE Person
// app.post('/user', function(req,res,next){
//   db.User.create(req.body, function(err, post){
//     if(err) return next(err);
//     res.json(post);
//   });
// });
// //------------------------------
//
// // listen for requests
// app.listen(PORT, function(){
//     console.log("Server is listening on port " + PORT);
// });
