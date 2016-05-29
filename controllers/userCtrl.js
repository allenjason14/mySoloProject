var User = require("../model/userModel.js");
var Story = require("../model/storyModel.js");

module.exports = {

  register: function(req, res, next) {
    User.create(req.body, function(err, result){
      if(err) return res.status(500).send(err);
      newUser = result.toObject();
      newUser.password = null;
      res.status(200).json(newUser);
    });
  },

  me: function(req, res, next) {
    console.log('gets to me')
    if (!req.user) return res.status(401).send('current user not defined');
    req.user.password = null;
    return res.status(200).json(req.user);
  },

  update: function(req, res, next) {
    User.findByIdAndUpdate(req.parms._id, req.body, function(err, result) {
      if (err) next(err);
      res.status(200).send('user updated');
    });
  },

  getUsers: function(req, res, next) {
    User.find({}).exec(function(err, response) {
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
    })
  },

  Read: function(req, res, next) {
    User.findOne({_id: req.params.id}).populate("story").exec(function(err, response) {
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
    })
  },

  removeFromStoryArray: function(req, res, next) {
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id,
      {
        $pull: {
          "story": req.body.story
        }
      }, function(err, response){
      if(err){
          res.status(500).json(err);
      }else{
          res.status(200).json(response);
      }
    })
  }
}
