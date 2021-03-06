'use strict';

//require('babel/register');

var express = require('express');
var appController = require('./api/controllers/app_controller.js');
var bodyParser = require('body-parser');

// Express Settings

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Bootstrap App

app.use(function (req, res, next) {
    appController.initProps(req, res, next);
});

app.use(function (req, res, next) {
    appController.renderReact(req, res, next);
});

// Start App

var port = process.env.PORT || 3000;

var server = app.listen(port, function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Server Listening at localhost:' + port);
});



