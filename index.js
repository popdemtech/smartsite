const express = require('express');
const { Liquid } = require('liquidjs');

const app = express();
const PORT = 3000;

app.engine('liquid', new Liquid().express());
app.set('view engine', 'liquid');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(PORT, () => {
  console.log(`SmaRtsite listening on port ${PORT}`);
});