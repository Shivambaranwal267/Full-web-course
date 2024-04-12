const app = require("express")()

const connectdb = require('./db')

connectdb();

app.get("/", (req,res)=> {
    res.send("hello")
})

app.listen(1000, console.log("server started"))
