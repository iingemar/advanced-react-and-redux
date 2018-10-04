// express: parse response and handle routing
const express = require('express');
// http: handles low level http requests
const http = require('http');
// body-parser: help parse incoming http requests
const bodyParser = require('body-parser');
// morgan: logging framwork
const morgan = require('morgan');
// mongoose: work with mongo db
const mongoose = require('mongoose');
const router = require('./router');

// App setup
const app = express();
// Register morgan as middleware. Morgan is a logging framework that logs all incoming requests.
app.use(morgan('combined'));
// Register bodyParser as middleware. Parses incoming requests.
// Our setup parses all types as json, weird but that will do just now.
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('server listening on: ', port);



