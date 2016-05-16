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
    Story.find().exec(function(err, resoponse) {
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(response);
      }
    })
  }



}

// var Product = require("../models/productModel.js");
//
// module.exports = {
//
//     Create: function(req, res, next){
//         var newProduct = new Product(req.body);
//         newProduct.save(function(err, response){
//             if(err){
//                 res.status(500).json(err);
//             }else{
//                 res.status(200).json(response);
//             }
//         })
//     },
//
//     Read: function(req, res, next){
//         Product.find().exec(function(err, response){
//             if(err){
//                 res.status(500).json(err);
//             }else{
//                 res.status(200).json(response);
//             }
//         })
//     },
//
//     Update: function(req, res, next){
//         Product.findByIdAndUpdate(req.params.id, req.body, function(err, response){
//             if(err){
//                 res.status(500).json(err);
//             }else{
//                 res.status(200).json(response);
//             }
//         })
//     },
//
//     Delete: function(req, res, next){
//         Product.findByIdAndRemove(req.params.id, function(err, response){
//             if(err){
//                 res.status(500).json(err);
//             }else{
//                 res.status(200).json(response);
//             }
//         })
//     },
//
// }
