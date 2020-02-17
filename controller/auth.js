const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  console.log("signup");
  //Check if user already exist
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        const error = new Error("user already exist");
        error.statusCode = 403;
        throw error;
      }

      //encrpyt password
      return bcrypt
        .hash(req.body.password, 12)
        .then(hashedPassword => {
          //Create new user
          const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
          });

          //Add user to database
          return user.save();
        })
        .catch(err => console.log(err));

      ///set cookie!?!
    })
    .then(user => {
      res.status(200).json({ message: "user created", user });
    })

    .catch(err => res.status(err.statusCode).json({ message: err.message }));
};
