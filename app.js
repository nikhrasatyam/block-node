
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const config = require('./config.js');

const app = express();
const server = http.createServer(app);
require('./routes')(app);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(config.publicPath));

server.listen(config.port || 8080, config.ip, () => {
  console.info(`Server listening on port ${config.port} and env ${config.env}`);
});
