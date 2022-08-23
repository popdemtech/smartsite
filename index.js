const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`SmaRtsite listening on port ${PORT}`);
});