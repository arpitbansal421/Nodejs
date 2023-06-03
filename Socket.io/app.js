const express = require('express');
const { setTimeout } = require('timers/promises');
const app = express();
const server = require('http').createServer(app); // Create a server instance
const io = require('socket.io')(server);

app.use(express.static(__dirname));



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('User online');

  setTimeout(()=>{
    socket.send("Website is fully loaded");
  },3000);

  socket.on('disconnect', () => {
    console.log('User offline');
  });

});


server.listen(8000, () => {
  console.log('Listening at http://localhost:8000');
});