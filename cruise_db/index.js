var express = require('express');
var app = express();
var hbs = require('hbs');

var cruiseDB = require('./cruise_data.js');

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static(__dirname + '/public'));

// WRITE YOUR ROUTES HERE


app.listen(3000, function() {
  console.log('hello, cruiseDB initialized on port 3000')
})
