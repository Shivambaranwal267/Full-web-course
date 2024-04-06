const {loginController , signupController} = require( "../controller/auth");
const router = require('express').Router();

// router.post("/login", (req,res) => {
//     res.send("this is for login")
// })

router.post("/login",loginController)
router.post("/signup",signupController)

// router.post("/signup", (req,res) => {
//     res.send("this is for signup")
// })


module.exports = router; 