var chats = require('../src/controllers/chatsController');

app.get('/inbox', chats.inbox);
app.get('/private_chat', chats.privategroup);
app.get('/public_chat', chats.publicgroup);
