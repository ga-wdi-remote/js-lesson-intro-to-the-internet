// Below are three examples that illustrate the progression of ideas within this homework
// but not necessarily the limit of complexity.

// Before this students will have a solid understanding (4 weeks) of Javascript
// in the browser, HTML, and CSS. They will have built a complex, two-player game
// in the browser.
// This assignment would be their introduction servers, requests, responses, http,
// and server side rendering. (No ajax at this point)

// The idea here is to push their exploration of requests and responses, building
// a multi-route API,.

// The result would be a small handcrafted api using the HTTP module and FS module
// to read a json file and allow end users to search a DB of Tom Cruise movies. student
// should be pushed to provide several ways for the end user to explore and view the Data

// The student should also be pretty comfortable with styling and front end development so can be
// asked to periodically take a break to style their last page etc.

// This assignment should be fairly aggressive in scope, while making sure there isn't
// too much assumed knowledge when it comes to core concepts. I.E. set the student up
// with basics, links to documentation, brief explanations of syntax and key words.
// but the remaining half of the step, assignment, should force the student to learn
// and explore on their own.

// A good idea might be to take the three examples below and turn them into mini assignments
// or steps in the process of getting a handle on how to set up a server so when tasked with
// creating a larger API it will be the fourth iteration.

// Student just prior to this assignment, will have a brief hour and a half ish introduction to the internet,
// including request response cycle, status codes, headers, paths, query strings. but no introduction to the
// actual syntax or modules used below.

// This assignment can be pushy. Students should be expected to put in about 16 - 20 hours into this weekend
// assignment. 

// Example One:

var http = require('http');

var server = http.createServer().listen(3001);

console.log('I\'m listening on port: 3001');

server.on('request', function(req, res) {
    console.log(req.url);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html>Cool Story Bro');
    res.write('<script>console.log(\'Heyooo\');</script>');
    res.write('</html>');
    res.end();
});

// Example TWO:

// var http      = require('http'); //includes the http package
// var urlParser = require('url'); // Adds urlParser
//
// var server = http.createServer().listen(3000); // listens for traffic on port 3000
//
//
// server.on('request', function(request, response){
// 	console.log( request.headers );
//
//   var urlObj  = urlParser.parse( request.url );
//   var pathname = urlObj.pathname; // parsing our the important info in the url
//
//   console.log("requested: " + pathname);
//
//   // returns a string with the contents of a basic HTML page as a response
//
//   response.writeHead( 200, {'Content-Type': 'text/html'});
//   response.write('<!DOCTYPE html>')
//   response.write('<html lang="en">');
//   response.write('<head>');
//   response.write('<meta charset="utf-8">');
//   response.write('<title>' + pathname + '</title>');
//   response.write('</head>');
//   response.write('<body>');
//   response.write('<h1> You dude,  hey wanted the ' + pathname + ' path!</h1>');
//   response.write('</body>');
//   response.write('</html>');
//   response.end();
//
// })
//
//
// // Example three:
//
// var http         = require('http');
// var url          = require('url');
// var fs           = require('fs');
// var server       = http.createServer();
// var cruiseDBText = fs.readFileSync("cruise_data.json", "utf8");
// var cruiseDB     = JSON.parse(cruiseDBText);
//
// //create an HTTP server that expects both request and response objects
// //as the two arguments to a callback
// server.on('request', function(request, response){
//     var urlObj = url.parse(request.url);
//     var path = urlObj.pathname;
//
//     console.log(urlObj);
//
//     if(path === "/") {
//
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write('<!DOCTYPE html><html lang="en"><head></head>');
//         response.write('<body><h1>Welcome to the Open Tom Cruise Database!!!</h1></body>');
//         response.write('</html>');
//         response.end();
//
//     } else if (path === "/movies") {
//
//         response.writeHead(200, { 'Content-Type': 'text/html' });
//         response.write('<!DOCTYPE html><html lang="en"><head></head>');
//         response.write('<body><h1>Tom Cruise has been in A LOT of movies!!!</h1>');
//         response.write("<ol>");
//         cruiseDB.forEach(function(movie) {
//             response.write("<li>"+ movie.Title + "</li>");
//         });
//         response.write("</ol>");
//         response.write('</body></html>');
//         response.end();
//
//     } else {
//
//         response.writeHead(400, { 'Content-Type': 'text/html' });
//         response.write('Bad Request');
//         response.end();
//
//     }
//
// });
//
// // Listen for traffic on port 3000.
// server.listen(3000);
