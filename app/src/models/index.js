var users = require('../schema/users');
var invitations_temp = require('../schema/invitations_temp');

exports.User = mongoose.model('Users', users.schemaUsers);
exports.Invitation_temp = mongoose.model('Invitations_temp', invitations_temp.schemaInvitation_temp);

var avoirAmis = require('../schema/avoirAmis')
exports.AvoirAmi = mongoose.model('AvoirAmis', avoirAmis.schemaAvoirAmis);

