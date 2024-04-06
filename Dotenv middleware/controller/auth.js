const signupController = async (req, res) => {
  console.log("signpController called");
  res.send("signupcontroller");
};

const loginController = async (req, res) => {
  console.log("loginController called");
  res.send("logincontroller page");
};

module.exports = {
  signupController,
  loginController,
};
