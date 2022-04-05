var express = require('express');
var app = express();
var http = require('http').Server(app);
var io =  require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static('public'));

// Routes

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/chat', function(request, response) {
  response.sendFile(__dirname + '/chat.html');
});

app.get('/ping', function(request, response) {
  response.json({ ping: 'pong!' })
});


// Socketry

io.on('connection', function(socket) {
  console.log('a user connected');

  // on([received key], function([received value]){} )
  socket.on('chat-message', function(msg){
    io.emit('chat-message-from-server', msg);
  });
  socket.on('disconnect', function() {
    console.log('a user disconnected');
  });
});

http.listen(port, function() {
  console.log(`listening on port ${port}`)
});