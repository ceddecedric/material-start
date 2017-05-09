var users = require('../schema/users');
var invitationTemps = require('../schema/invitations_temp');
var avoirAmis = require('../schema/avoirAmis');
var groupes = require('../schema/groupe');
var membreDes = require('../schema/membreDe');
var messageGroupes = require('../schema/messagesGroupe');


exports.User = mongoose.model('Users', users.schemaUsers);
exports.InvitationTemp = mongoose.model('InvitationTemps', invitationTemps.schemaInvitationtemps);
exports.AvoirAmi = mongoose.model('AvoirAmis', avoirAmis.schemaAvoirAmis);
exports.Groupe = mongoose.model('Groupes', groupes.schemaGroupes);
exports.MembreDe = mongoose.model('MembreDes', membreDes.schemaMembreDes);
exports.MessageGroupes = mongoose.model('MessageGroupes', messageGroupes.schemaMessagesGroupes);

