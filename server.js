var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// This is to serve static data from the 'public' directory in the app directory
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This sets up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Vital: Imports routes and gives the server access to them
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);
app.use(express.static(__dirname + '/public'));

// Starts our server listening to requests
app.listen(PORT, function () {
   // Log (server-side) when our server has started
   console.log("Server listening on: http://localhost:" + PORT);
});
