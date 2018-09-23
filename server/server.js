const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
//middleware
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
console.log('New user connection');

socket.on('disconnect',()=>{
    console.log('User was disconnected');
});

});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
