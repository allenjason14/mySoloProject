var User = require("../model/userModel.js");

module.exports = {

  register: fucntion(req, res, next) {
    User.create(req.body, function(err, result){
      if(err) return res.status(500).send(err);
      newUser = result.toObject();
      newUser.password = null;
      res.statis(200).json(newUser);
    });
  };

  me: function(req, res, next) {
    if (!req.user) return.status(401).send('current user not defeined');
    req.user.password = null;
    return res.status(200).json(req.user);
  },

  update: function(req, res, next) {
    User.findByIdAndUpdate(req.parms._id, req.body, function(err, result) {
      if (err) next(err);
      res.status(200).send('user updated');
    });
  }
}
