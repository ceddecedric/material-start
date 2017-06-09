var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('qwirk_db');
var id = pow.createObjectId;

fixtures.load({
    users: [
        {
            "_id": id(),
            "name": "Kevin doh",
            "email": "kevindoh26@gmail.com",
            "status": "Dieu est fort",
            "profil": "none",
            "password": "elvino29"
        }
    ]
});