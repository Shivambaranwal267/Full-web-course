const mongoose = require("mongoose");

const mongoUri =
  "mongodb+srv://shivambaranwal267:bR5JyqIMGmWJ2spG@cluster0.ta0ivbf.mongodb.net/shivam?retryWrites=true&w=majority";

const connectdb = async () => {
  try {
   const connect = await mongoose.connect(mongoUri)

   console.log(`DB connected: ${connect.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectdb;