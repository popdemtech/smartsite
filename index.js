const express = require('express');
const { Liquid } = require('liquidjs');

const app = express();
const PORT = 3000;

app.engine('liquid', new Liquid().express());
app.set('view engine', 'liquid');

app.get('/', function(request, response) {
  const debug = request.query.debug;
  const nodeVersion = process.version;
  const serverTime = new Date();
  const nodeEnv = process.env.NODE_ENV || 'development'; 
  response.render('index', { debug, nodeVersion, serverTime, nodeEnv });
});

app.listen(PORT, () => {
  console.log(`SmaRtsite listening on port ${PORT}`);
});