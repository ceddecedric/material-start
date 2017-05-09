var path = require('path');
var express = require('express');
promise = require('bluebird');
mongoose = promise.promisifyAll(require('mongoose'));
fs = promise.promisifyAll(require('fs'));


var app = express();

app.use(express.static('app'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log('http://localhost:3000');
});