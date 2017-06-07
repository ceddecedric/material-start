var invitations = require('../src/controllers/invitationsController');

app.post('/people', invitations.create);
app.get('/peaple',invitations.index);