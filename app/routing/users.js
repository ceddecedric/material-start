var users = require('../src/controllers/usersController');

app.get('/inscription', users.inscription);
app.post('/inscription', users.create);

app.get('/people', users.people);
