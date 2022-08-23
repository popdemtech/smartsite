const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(request, response) {
  response.send('<h1>Welcome to SmaRtsite!</h1>');
});

app.listen(PORT, () => {
  console.log(`SmaRtsite listening on port ${PORT}`);
});