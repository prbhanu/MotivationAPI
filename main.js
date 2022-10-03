const express = require("express")
const request = require("request-promise")
const app = express()
require("dotenv").config()
var quotesRepository = require("./ranquotes");
const port = process.env.port

app.use(express.json());


app.get("/" , (req,res)=>{
    res.send("Welcome to Motivation Api. Go to /api/quotes/ to get a random Motivation quote.")
})

app.get('/api/quotes/', function (req, res) {
    res.send(quotesRepository.getRandom(req.params.num || 1));
});

app.listen(port,()=>{
    console.log("server running on "+ port)
})