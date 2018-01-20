const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/lhdb",
  {
    useMongoClient: true
  }
);
const routes = require("./controllers/lhController");
app.use(routes);

//------------------------------------------------------------------------------
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
