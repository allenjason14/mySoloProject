var Story = require('../model/storyModel.js');

module.exports = {

  Create: function(req, res, next) {
    var newStory = new Story(req.body);
    newStory.save(function(err, response){
      if (err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json(response)
      }
    })
  },

  Read: function(req, res, next) {
    Story.find().exec(function(err, response) {
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
    })
  },

  SaveSections: function(req, res, next) {
      Story.findByIdAndUpdate(req.params.id, req.body, function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    }
}
