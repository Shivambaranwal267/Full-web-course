const mongoose = require("moongoose");

const userSChema = mongoose.Schema({
  email: String,
  password: String,
});
