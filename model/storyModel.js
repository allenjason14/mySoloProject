var mongoose = require('mongoose');

var storySchema = new mongoose.Schema({
  name: {type: String, required: true}
});

module.exports = mongoose.model("Story", storySchema)
