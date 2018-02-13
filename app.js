var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var todoRoutes = require("./routes/todos");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.use("/api/todos", todoRoutes);

app.get("/", function(req, res) {
    res.sendFile("index.html");
});


app.listen(3000, function() {
    console.log("API is running....");
});