const express = require('express');

const server = express();

const api = require('./api');

server.get('/', (req, res) => {
  res.send('Hello GraphQL');
});

server.use('/api', api);

server.listen(3000, () => console.log('Express is listening on port 3000'));