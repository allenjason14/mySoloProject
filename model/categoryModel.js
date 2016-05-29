var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
  story: [{type: mongoose.Schema.Types.ObjectId, ref: "Story"}]
});

module.exports = mongoose.model("Category", categorySchema)
