var users = require('../schema/users');

exports.User = mongoose.model('Users', users.schemaUsers);