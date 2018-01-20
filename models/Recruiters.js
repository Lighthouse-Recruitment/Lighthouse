var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Note = require('./Notes');

var recruiterSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    note: {type: Schema.Types.ObjectId,ref: "Note"}
});
var Recruiter = module.exports = mongoose.model('Recruiter', recruiterSchema);

module.exports = {
        getRecruiters: function(req, res) {
          Recruiter
            .find(req.query)
            // .populate(Note)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        // add
        addRecruiter: function(req, res) {
          Recruiter
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        getRecruitersById: function(req, res) {
          Recruiter
            .findById(req.params._id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        updateRecruiter: function(req, res) {
          Recruiter
            .findOneAndUpdate({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        deleteRecruiter: function(req, res) {
          Recruiter
            .findById({ _id: req.params._id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
