var users = require('../schema/users');
var invitationTemps = require('../schema/invitations_temp');

exports.User = mongoose.model('Users', users.schemaUsers);
exports.InvitationTemp = mongoose.model('InvitationTemps', invitationTemps.schemaInvitationtemps);

var avoirAmis = require('../schema/avoirAmis')
exports.AvoirAmi = mongoose.model('AvoirAmis', avoirAmis.schemaAvoirAmis);

