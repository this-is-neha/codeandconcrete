
const authRoute = require("express").Router();
const authCtrl=require("./controller")

authRoute.post('/message', authCtrl.register)


module.exports = authRoute