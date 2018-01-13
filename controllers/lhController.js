const mongoose = require("mongoose");
// GET EVERYBODY
app.get('/', function(req,res,next){
  db.User.find(function(err, allindexs){
    if (err) return next(err);
    res.json(allindexs);
  });
});
// GET SINGLE PERSON BY ID
app.get('/:id', function(req,res,next){
  db.User.findById(req.params.id, function(err,Post){
    if(err) return next(err);
    console.log(post)
    res.json(post);
  });
});
// SAVE Person
app.post('/', function(req,res,next){
  db.User.create(req.body, function(err, post){
    if(err) return next(err);
    res.json(post);
  });
});
// SAVE PERSON'S Note
app.post('/:id', function(req,res,next){
  db.Note.create(req.body, function(err, post){
    if(err) return next(err);
    res.json(post);
  });
});
app.put('/:id', function(req,res,next){
  db.User.findByIdAndUpdate(req.params.id, req.body, function(err, post){
    if(err) return next(err);
    res.json(post);
  });
});
app.delete('/:id', function(req,res,next){
  db.User.findByIdAndRemove(req.params.id, req.body, function(err, post){
    if(err) return next(err);
    res.json(post);
  });
});
module.exports = app;