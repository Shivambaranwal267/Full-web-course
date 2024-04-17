const app = require("express")();
const User = require("./models/User");

const connectdb = require("./db");

connectdb();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(1000, console.log("server started"));

async function createUser(newUser) {
  const user = new User(newUser);

  // user.save().then(() => {
  //   console.log("added");
  // });

  const data = await user.save();
  console.log("user", user);
  console.log("data", data);

  
  // user.save().then(() => {
  //   console.log("added");
  // });
}
createUser({
    email: "shivambaranwal@gmail.com",
    password: "1234",
  });
