const express = require("express")
const routes = express.Router();

router.route("/").get((req ,res) =>{
    res.send(`<h1>hello ${req.baseUrl} </h1> `)
}) 


module.exports= router