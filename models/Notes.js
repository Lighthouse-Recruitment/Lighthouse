var mongoose = require('mongoose');

var notesSchema = new mongoose.Schema({
  name: String,
  body: String
});

const Note = module.export = mongoose.model('Note', notesSchema);

module.exports = {
        getNotes: function(req, res) {
          Note
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addNote: function(req, res) {
          Note
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getNotesById: function(req, res) {
          Note
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateNote: function(req, res) {
          Note
          .create(req.body)
          .then(function(dbNote) {
            return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
            })
            .then(function(dbArticle) {
              res.json(dbArticle);
            })
            .catch(function(err) {
              res.json(err);
            });
          },
        deleteNote: function(req, res) {
          Note
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
