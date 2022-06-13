const bcrypt = require("bcryptjs")
const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

validateUser = (req, res, next) => {
    const user = req.body;
    if (user.firstName.trim() === "") {
        return res.status(400).send("First name is a required field");
    }
    if (user.lastName.trim() === "") {
        return res.status(400).send("Last name is a required field");
    }
    if (!validateEmail(user.email)){
        return res.status(400).send("Please use a valid email address");
    }
    if (!validatePassword(user.password)){
        return res.status(400).send("Password format wrong");
    }
    next();
}

createUser = (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => console.log(err));
    });
  });
}

verifyUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(401).json({ error: "Email or password incorrect" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          firstname: user.firstName,
        };
        // Sign token
        jwt.sign(
          payload,
          "secret",
          {
            expiresIn: 86400, // 1 day in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: token,
            });
          }
        );
      } else {
        return res
          .status(401)
          .json({ error: "Email or password incorrect" });
      }
    });
  });
}

function validateEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validatePassword(password){
    return String(password )
      .toLowerCase()
      .match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/
      );
}

module.exports = {
  validateUser,
  createUser,
  verifyUser
}
