module.exports = function validateUser(req, res, next) {
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