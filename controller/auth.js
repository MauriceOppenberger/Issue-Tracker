const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.signup = (req, res, next) => {
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
      return bcrypt.hash(req.body.password, 12).then(hashedPassword => {
        //Create new user
        const user = new User({
          name: req.body.name,
          last: req.body.last,
          email: req.body.email,
          password: hashedPassword
        });
        //Add user to database
        return user.save();
      });
    })
    .then(user => {
      res.status(201).json({ message: "user created", user });
    })

    .catch(err => {
      return next(err);
    });
};

exports.login = (req, res, next) => {
  //find the user in the database
  User.findOne({ email: req.body.email })
    .then(user => {
      //throw err if no user exists
      if (!user) {
        const error = new Error(
          "No user found with this email, please use a valid email"
        );
        error.statusCode(401);
        throw error;
      }
      //verify password
      return bcrypt.compare(req.body.password, user.password).then(isMatch => {
        //throw err if password no match
        if (!isMatch) {
          const error = new Error("email or password invalid");
          error.statusCode = 403;
          throw error;
        }
        //return user if password correct
        res.status(200).json({ message: user });
      });
    })
    .catch(err => {
      return next(err);
    });
};
