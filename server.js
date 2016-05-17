var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var userCtrl = require('./controllers/userCtrl.js');
var storyCtrl = require('./controllers/storyCtrl.js');

var config = require('./config');

var passport = require('./services/passport');

var isAuthed = function(req, res, next) {
  console.log("auth working");
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

//user information
app.post('/users', userCtrl.register);
app.get('/me', isAuthed, userCtrl.me);
app.delete('/user/:_id', isAuthed, userCtrl.update);
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));

//story information
app.post('/newStory', storyCtrl.Create);
app.get('/readStory', storyCtrl.Read);
app.put('/updateStory', storyCtrl.SaveSections);

app.get('/logout', function(req, res, next){
  req.logout();
  return res.status(200).send('Logged out');
});

var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
    console.log('Connected to Mongo DB at ' + mongoURI);
});

app.listen(port, function(){
  console.log("Listening on port " + port);
});
