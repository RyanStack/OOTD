var express = require('express'),
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose'),
    database = require('./main'),
    busboy = require('connect-busboy'),
    app = express(),
    passport = require('passport');
    flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
    // dnd = require("angular-draganddrop")

//Database configuration

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
var db = mongoose.connection;
    db.on('open', function () {
      console.log('Mongoose default connection open to ' + configDB.url);
    });

    db.on('error',function (err) {
      console.log('Mongoose default connection error: ' + err);
    });

    db.on('disconnected', function () {
      console.log('Mongoose default connection disconnected');
    });


//------------------------------------------------------------------

require('./config/passport.js')(passport); // pass passport for configuration

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // set up ejs for templating

    // required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());  // use connect-flash for flash messages stored in session


// routes ======================================================================
require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
// var User = require("./models/user.js")
// var newUser = new User( { local: {email: "rms332@yahoo.com", password: "sammy1"} } );
//     newUser.save(function(err) { if( err ) throw new Error( 'There was an error while saving to the database.' ) })

app.use(express.static(path.join(__dirname, './uploads')));
app.use(express.static("public", __dirname + "/public"))






app.listen(5000, function () {
    console.log('OOTD server listening on port 5000');
});

