const http = require('http');
const fs = require('fs');
const url = require('url');
const hostname = '127.0.0.1';
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


//share the front end files
app.use("/app", express.static(path.join(__dirname, 'app')));
app.use("/node_modules", express.static(path.join(__dirname, 'node_modules')));

app.get('/', function (req, res) {
    console.log('Sending to index', __dirname + '/index.html');
    res.sendFile(__dirname + '/index.html');
});
app.get('/*', function(req, res) {
    //maybe get ride of this
    return;
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});

module.exports = app;
