const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// App setup
// Register morgan as middleware. Morgan is a logging framework that logs all incoming requests.
app.use(morgan('combined'));
// Register bodyParser as middleware. Parses incoming requests.
// Our setup parses all types as json, weird but that will do just now.
app.use(bodyParser.json({ type: '*/*' }));


// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('server listening on: ', port);



