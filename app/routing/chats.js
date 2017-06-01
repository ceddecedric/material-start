var chats = require('../src/controllers/chatsController');

app.get('/inbox', ensureAuthenticateds,  chats.inbox);
app.get('/private_chat', ensureAuthenticateds, chats.privategroup);
app.get('/public_chat', ensureAuthenticateds,  chats.publicgroup);

function ensureAuthenticateds (req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }else {
        res.redirect('/login');
    }
};