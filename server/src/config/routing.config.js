const express =require("express")
const mainRoute=express.Router()
const auth= require("../module/routing")

console.log("Routing config loaded");


mainRoute.use('/api',auth)
module.exports=mainRoute