const users = require("../models/user");

const signupController = async (req, res) => {
  console.log("signpController called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email and Passoword are required");
    return;
  }

  const id = Math.floor(Math.random() * 1000);

  users.push({
    id,
    email,
    password,
  });

  res.status(200).json({
    id,
  });

  // res.send("signupcontroller");
};

const loginController = async (req, res) => {
  console.log("loginController called");

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(403).send("Email and Passoword are required");
    return;
  }

  
  const user = users.find((item) => item.email === email);

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

if(user.password != password) {
  res.status(401).send('Incorrect password')
}

  res.status(200).json(user)
  // res.send("logincontroller");
};

module.exports = {
  signupController,
  loginController,
};
