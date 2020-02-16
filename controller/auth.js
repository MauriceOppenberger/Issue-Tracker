const users = [];
const User = require("../models/user");

exports.signup = (req, res) => {
  const user = new User({
    name: req.body.name
  });

  user
    .save()
    .then(user => {
      res.status(200).json({ message: "users" });
      console.log(user);
    })
    .catch(err => console.log(err));
};
