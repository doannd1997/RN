const express = require("express");
const path = require('path');

const port = 3000;

const app = express();
app.use('/static', express.static(path.join(__dirname, '../public')));

app.get("/", (req, res)=>{res.send("Hello world")});
app.listen(port, ()=>{console.log("succes listen on local host port " + port)});

exports.default = app;