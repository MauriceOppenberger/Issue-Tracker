const User = require("../models/user");

exports.signup = (req, res) => {
  //Check if user already exist
  User.findOne({ email: req.body.email })
    .then(res => {
      if (res) {
        console.log("user already exist", res);
        return;
      }
      //Create new user
      const user = new User({
        name: req.body.name,
        email: req.body.email
      });

      //Add user to database
      return user.save();
    })
    .then(user => {
      res.status(200).json({ message: "users" });
      console.log(user);
    })

    .catch(err => console.log(err));
};
