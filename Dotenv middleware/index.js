const dotenv = require("dotenv");
dotenv.config({path: "./.env"});

const express = require("express");
const postRouter = require("./routes/post")
const authRouter = require("./routes/auth")
const app = express();

app.use("/post",postRouter) 

app.use("/auth",authRouter) 

app.get("/", (req, res) => {
  res.send({
    data: "ok",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Started listening on port: 4000");
});
