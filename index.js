const http = require('http');
const fs = require('fs');
const url = require('url');
const hostname = '127.0.0.1';
const express = require('express');
const expressApp = express();
const port = 3000;
const path = require('path');
const timeout = require('connect-timeout');
const nodemailer = require('nodemailer');

//timeout after 10 sec
expressApp.use(timeout(1000*10));
expressApp.use(haltOnTimedout);

function haltOnTimedout(request, response, next){
    if (!request.timedout){
        next();
    } else {
        console.log('timedout');
    };
}

//share the front end files
expressApp.use(express.static(path.join(__dirname, 'app')));
expressApp.use("/node_modules", express.static(path.join(__dirname, 'node_modules')));


expressApp.get('/', function (request, response) {
    console.log('request', request);
    console.log('response', response);
    response.sendFile(__dirname + '/app/index.html');
});

expressApp.post('/sendEmail', function(request, response) {
    console.log(request);

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'adamsammylucia@gmail.com', // Your email id
            pass: 'Maclab117' // Your password
        }
    });

    var text = 'Hello world from \n\n' + request.body.name;

    var mailOptions = {
        from: 'adamsammylucia@gmail.com>', // sender address
        to: 'luciapwns@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });

    //return;
});

expressApp.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});

module.exports = expressApp;
