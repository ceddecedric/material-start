var users = require('../schema/users');
var avoirAmis = require('../schema/avoirAmis')


exports.User = mongoose.model('Users', users.schemaUsers);
exports.AvoirAmi = mongoose.model('AvoirAmis', avoirAmis.schemaAvoirAmis);