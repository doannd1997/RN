const express = require("express");
const socketIo = require("socket.io");
const path = require('path');
const http = require("http");

const port = 3000;
const index = require("./routes/index");

const app = express();
app.use('/static', express.static(path.join(__dirname, '../public')));
app.use(index);


const server = http.createServer(app);
const io = socketIo(server);
io.on("connection", socket=>{
    console.log("New client connected");
    socket.on("disconnect", ()=>{
        console.log("client disconnected");
    })
});

app.listen(port, ()=>{
    console.log("succes listen on local host port " + port)
});

exports.default = app;