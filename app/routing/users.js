var users = require('../src/controllers/usersController');

app.get('/inscription', users.inscription);
app.post('/inscription', users.create);
app.get('/login', users.login);
app.get('/index', users.index);
app.post('/login',
        passport.authenticate('local', {successRedirect: '/accueil', failureRedirect: '/login', failureFlash: true}),
        users.logged);
app.get('/accueil', ensureAuthenticated, users.islogin);
app.get('/logout', users.logout);
app.get('/people', ensureAuthenticated, users.people);
app.get('/status', ensureAuthenticated, users.status);
app.put('/status', users.Upstatus);

app.get('/profil',ensureAuthenticated, users.profil);
app.put('/profil',ensureAuthenticated, users.Upprofil);
app.post('/accepter',ensureAuthenticated, users.accepter);



function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}
;
