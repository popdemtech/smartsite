const express = require('express');
const app = express();
const { auth } = require('express-openid-connect');
const http = require('http').Server(app);
const io =  require('socket.io')(http);
const { Liquid } = require('liquidjs');
const engine = new Liquid();
const port = process.env.PORT || 3000;

const { Post } = require('./app/models');

// Views
app.engine('liquid', engine.express());
app.set('views', './app/views');
app.set('view engine', 'liquid');

// Static files
app.use(express.static('public'));

// Auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL:
    process.env.NODE_ENV == 'production' ? 'https://pd-service.herokuapp.com' : 'https://localhost:3001',
  clientID: 'BdsyUqLCLcMDv21lT9VzCRuo8fP2xvZl',
  issuerBaseURL: 'https://dev-r6lb7q89.us.auth0.com',
  routes: {
    callback: '/auth0/callback'
  }
};

app.use(auth(config));

// Routes
app.get('/', async function(request, response) {
  const loggedIn = request.oidc.isAuthenticated();
  response.render('index', { loggedIn });
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

app.get('/posts', async (request, response) => {
  response.render('posts', {
    posts: await Post.findAll()
  });
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