var express = require('express'),
    http = require('http'),
    path = require('path'),
    database = require('./main'),
    busboy = require('connect-busboy'),
    app = express(),
    bodyParser = require('body-parser');
    passport = require('passport');
    localStrategy = require('passport-local').Strategy;
    // dnd = require("angular-draganddrop")

database.connectDb();
// app.use(busboy());
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, './uploads')));
app.use(express.static("public", __dirname + "/public"))

app.get('/', function(req, resp) {
  resp.sendFile(__dirname + '/index.html')
}); // set up an HTML testing zone
app.post('/file-upload', database.addImage); // endpoint to post new images
app.get('/images', database.getImages); // endpoint to get list of images
app.post('/comments', database.addComment); //endpoint to add fashion comment

app.listen(5000, function () {
    console.log('OOTD server listening on port 5000');
});

