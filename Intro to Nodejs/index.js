// import xyz  from "./utils" ==> ES6 concept

// // const { multiply, add } = require("./utils");
// //  OR
// const utils = require("./utils");

// // console.log(multiply(2, 2));
// console.log(utils.multiply(2, 2));
// // console.log(add(2, 3));

// utils.log.error('hi world')

// console.log(utils.my);

const express= require("express");

const app = express();

app.use(express.json())

app.get("/user", (req, res) => {
  console.log("User was called");
  // res.send("hello user")
  res.json({
    name: "Suraj",
    age: 12,
   
  });
});

// app.post("/user", (req,res) => {
//     console.log(req.body);
//     res.json({
//         name: "Shivam",
//         age: 11,
//         multiplyResult: req.body.a + req.body.b
//       });
// })

app.get("/", (req, res) => {
  // res.send("server is not working");
//   res.sendFile(
//     __dirname + "/index.html"
//     // "/Users/shiva/OneDrive/Desktop/Mern Stack/Intro to Nodejs/index.html")
//   );
  res.json({
    success:true,
  })
});

app.listen(4000, () => {
  console.log("listening on port: 4000");
});
