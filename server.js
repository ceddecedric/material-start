path = require('path');
var express = require('express');
promise = require('bluebird');
mongoose = promise.promisifyAll(require('mongoose'));
fs = promise.promisifyAll(require('fs'));
exphbs = require('express-handlebars');

 app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//config
app.use(express.static(path.join(__dirname + '/')));

 app.set('views', __dirname + '/app/src/views');
 app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: __dirname + '/app/src/views/layouts'}));
 app.set('view engine', 'handlebars');
mongoose.connect('mongodb://localhost/qwirk_db');

//import models
models = require('./app/src/models');

//import routing
require('./app/routing/users');

app.listen(3000, () => {
    console.log('http://localhost:3000');
});