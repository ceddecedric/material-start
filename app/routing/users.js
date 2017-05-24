var users = require('../src/controllers/usersController');

app.get('/inscription', users.inscription);
app.post('/inscription', users.create);
app.get('/login', users.login);
app.post('/login',
    passport.authenticate('local', {successRedirect:'/accueil', failureRedirect:'/login', failureFlash: true} ),
    users.logged);
app.get('/accueil', users.islogin);