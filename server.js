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
app.post('/users', userCtrl.register); //CONNECTED
app.get('/users', userCtrl.getUsers); //CONNECTED
app.get('/me', isAuthed, userCtrl.me); //CONNECTED
app.delete('/user/:id', isAuthed, userCtrl.update);

app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
})); //CONNECTED
app.get('/logout', function(req, res, next){
  req.logout();
  return res.status(200).send('Logged out');
}); //CONNECTED

//story information on userCtrl
app.get('/readStory/:id', userCtrl.Read);
app.put('/removeStory/:id', userCtrl.removeFromStoryArray)


//story information
app.post('/newStory', storyCtrl.Create); //CONNECTED
app.get('/checkStory', storyCtrl.CheckStory);
app.put('/updateStory/:id', storyCtrl.SaveSections);
app.get('/readSelStory/:id', storyCtrl.readSelStory);
app.put('/updateTab/:id', storyCtrl.updateTab);
app.delete('/deleteStory/:id', storyCtrl.Delete)

var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
    console.log('Connected to Mongo DB at ' + mongoURI);
});

app.listen(port, function(){
  console.log("Listening on port " + port);
});
