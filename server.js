const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
// Configure body parser for AJAX requests
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
User = require('./models/Users');
// Set up promises with mongoose
// mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/lhdb",
  {
    useMongoClient: true
  }
);

const db = mongoose.connection;

app.get('/', function(req,res){
  res.send("user api/users");
});

app.get('/api/users', function(req,res){
    User.getUsers(function(err, users){
      if(err){
        throw err;
      }
      res.json(users);
    });
});
app.get('/api/users/:_id', function(req,res){
    User.getUserById(req.params._id, function(err, users){
      if(err){
        throw err;
      }
      res.json(users);
    });
});
app.post('/api/users', function(req,res){
  var user = req.body;
    User.addUser(user, function(err, user){
      if(err){
        throw err;
      }
      res.json(user);
    });
});
app.put('/api/users/:_id', function(req,res){
  var id = req.params._id;
  var user = req.body;
    User.updateUser(id, user, {}, function(err, user){
      if(err){
        throw err;
      }
      res.json(user);
    });
});
app.delete('/api/users/:_id', function(req,res){
  var id = req.params._id;
    User.deleteUser(id, function(err, user){
      if(err){
        throw err;
      }
      res.json(user);
    });
});


//------------------------------------------------------------------------------
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
