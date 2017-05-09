var users = require('../schema/users');
var invitationTemps = require('../schema/invitationsTemp');

exports.User = mongoose.model('Users', users.schemaUsers);
exports.InvitationTemp = mongoose.model('InvitationTemps', invitationTemps.schemaInvitationtemps);

var avoirAmis = require('../schema/avoirAmis')
exports.AvoirAmi = mongoose.model('AvoirAmis', avoirAmis.schemaAvoirAmis);

var messagePrive = require ('../schema/messagesPrive');
exports.MessagePrive = mongoose.model('MessagesPrive', messagePrive.schemaMessagesPrive);

var channels = require('../schema/channels');
exports.Channels = mongoose.model('Channels', channels.schemaChannels);

var membreChannels = require('../schema/membreChannels');
exports.MembreChannels = mongoose.model('MembreChannels', membreChannels.schemaMembreChannels);

