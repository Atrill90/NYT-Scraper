const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const exphbs = require('express-handlebars');
const morgan = require('morgan');
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

//Require routes
const index = require("./routes/index/index");
const getArticle = require("./routes/getArticle");

// Require all models
const db = require("./models");

const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// setting up handlebars~~~~
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Middleware
// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));



// Connect to the Mongo DB

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytscraper";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI).then(()=>{
    console.log("mongo db connected");
});


//using the routes
app.use('/', index);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });

  // I ended up having more issues with this assignment than I thought I would and ended up not completely finishing.
  // I struggled alot with the folder structure as well as some of the more basic parts including routes and controllers.
  // Pseudo coding the note I would have had to use populate to associate the user's note with the article. 




