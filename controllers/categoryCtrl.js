var User = require("../model/userModel.js");
var  Story = require("../model/storyModel.js");
var Category = require("../model/categoryModel.js")

module.exports = {

  Create: function (req, res, next) {
  		Category.create(req.body, function (err, response) {
  			if (err) {
  				res.status(500).send(err)
  			} else {
  				User.findByIdAndUpdate(req.body.user, {
  					$push: {
  						'category': response
  					}
  				},
           function (err, user) {
  					console.log(user);
  					if (err) {
  						res.status(500).send(err)
  					} else {
  						res.status(200).send(response)
  					}
  				})
  			}
  		})
  	},

    Read: function (req, res, next) {
      Category.findOne({_id: req.params.id}).populate("story").exec(function(err, resonse) {
        if (err){
          res.status(500).json(err);
        }
        else{
          res.status(200).json(response);
        }
      })
    },

    Update: function (req, res, next) {
      Category.findByIdAndUpdate(req.params.id, {
        $push:
          req.body
      },
    function(err, response){
      if (err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json(response);
      }
    })
  },

  removeFromCatArray: function(req, res, next) {
    Category.findByIdAndUpdate(req.params.id,
      {
      $pull: {
        "story": req.body.story
      }
    }, function(err, response) {
      if(err) {
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
    })
  }
}
