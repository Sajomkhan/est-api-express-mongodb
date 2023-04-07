const express = require("express");
const cors = require("cors");
require("./config/db")

const userRouter = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api/user/", userRouter)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html")
})

// route error handel
app.get((req, res, next) => {
    res.status(404).json({
        massage: "route not found"
    })
})

// server error handel
app.get((err, req, res, next) => {
    res.status(500).json({
        massage: "something broke"
    })
})

module.exports = app;

// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE