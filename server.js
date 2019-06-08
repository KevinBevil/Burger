// Much of the code base used in this app was harvested from previous GT activities

var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
