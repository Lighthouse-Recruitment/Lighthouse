const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


// create express app
const app = express();
const PORT = process.env.PORT || 3001;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.Promise = global.Promise;
// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/lhdb',
{
    useMongoClient: true
});

// CHECK DATABASE CONNECTION
mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})
// define a simple route


//----ROUTER -------------------
// const users = require('./controllers/lh.controller.js');
var User = require('./models/Users.model.js');
var router = new express.Router();
    //later link to index
    app.get('/', function(req, res){
    res.json({"message": "Welcome to Lighthouse."});
    });
    // Create a new user
    router.post('/users', function(req, res) {
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
    });

    // Retrieve all users
    router.get('/users', function(req, res) {
        // Retrieve and return all notes from the database.
        User.find({})
          .then(function(data){
            res.json(data);
          });
    });

    // Retrieve a single Note with noteId
    // app.get('/users/:userId', users.findOne);
    //
    // // Update a Note with userId
    // app.put('/users/:userId', users.update);
    //
    // // Delete a Note with userId
    // app.delete('/users/:userId', users.delete);
//------------------------------

// listen for requests
app.listen(PORT, function(){
    console.log("Server is listening on port " + PORT);
});
