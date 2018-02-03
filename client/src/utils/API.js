import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  updateUser: function(id, userData){
    return axios.put("/api/users/" + id, userData);
  },
  // Gets all users
  getNotes: function() {
    return axios.get("/api/notes");
  },
  // Gets the user with the given id
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the user with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a user to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData);
  }

};
