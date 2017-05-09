var path = require('path');
var express = require('express');
promise = require('bluebird');
mongoose = promise.promisifyAll(require('mongoose'));
fs = promise.promisifyAll(require('fs'));


var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//config
app.use(express.static('app'));
mongoose.connect('mongodb://localhost/book_phone');

//import models
models = require('./app/src/models');

app.listen(3000, () => {
    console.log('http://localhost:3000');
});