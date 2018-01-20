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
