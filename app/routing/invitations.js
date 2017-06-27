var invitations = require('../src/controllers/invitationsController');

app.post('/people', invitations.create);
app.get('/people', invitations.index);
app.post('/private_chat', invitations.creategroup);