var mongoose = require('mongoose');

  var storySchema = new mongoose.Schema({
    name: {type: String, required: true},
    body: {
      title: {type: String},
      text: {type: String}
    }
  });

module.exports = mongoose.model("Story", storySchema)
