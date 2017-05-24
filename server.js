path = require('path');
var express = require('express');

//var http = require('http').Server(express);
//var io = require('socket.io')(http);

/*app2.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});*/

/*io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log(('user disconnected'));
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});*/

promise = require('bluebird');
mongoose = promise.promisifyAll(require('mongoose'));
fs = promise.promisifyAll(require('fs'));
logLib = require('./app/src/lib/log');
exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalSrategy = require('passport-local').Strategy;
bcrypt = require('bcryptjs');

 app = express();

// BodyParser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//config
app.use(express.static(path.join(__dirname + '/')));

 app.set('views', __dirname + '/app/src/views');
 app.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir: __dirname + '/app/src/views/layouts'}));
 app.set('view engine', 'handlebars');
mongoose.connect('mongodb://localhost/qwirk_db');

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

//express validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

//connect flash
app.use(flash());

app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('errr_msg');
    res.locals.error = req.flash('error');
    next();
})

//import models
models = require('./app/src/models');

//import routing
require('./app/routing/users');

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
