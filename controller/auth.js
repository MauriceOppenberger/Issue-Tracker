const users = [];

exports.signup = (req, res) => {
  const user = {
    name: req.body.name,
    last: req.body.last
  };
  users.push(user);
  res.status(200).json({ message: "users", users });
};
