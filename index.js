var express = require('express');
var app = express();
var http = require('http').Server(app);
var io =  require('socket.io')(http);
var { Liquid } = require('liquidjs');
var engine = new Liquid();
var port = process.env.PORT || 3000;

// Views
app.engine('liquid', engine.express());
app.set('views', './app/views');
app.set('view engine', 'liquid');

// Static files
app.use(express.static('public'));

// Routes
app.get('/', function(request, response) {
  response.render('index');
});

app.get('/chat', function(request, response) {
  response.sendFile(__dirname + '/chat.html');
});

app.get('/ping', function(request, response) {
  response.json({ ping: 'pong!' })
});

app.get('/hello-world', function(request, response) {
  const showDog = request.query.showDog == 'false' ? false : true;
  response.render('hello-world', {
    showDog,
    date: new Date()
  });
});

app.get('/hello-dog', function(request, response) {
  response.redirect('/hello-world?showDog=true');
});

app.get('/generate-pdf', function(request, response) {
  response.render('generate-pdf');
});

app.get('/invoice-creator', function(request, response) {
  response.render('invoice-creator');
});

// Socketry
io.on('connection', function(socket) {
  console.log('a user connected');

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