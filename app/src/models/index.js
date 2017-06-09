var users = require('../schema/users');
var invitationTemps = require('../schema/invitationsTemp');
var avoirAmis = require('../schema/avoirAmis');
var groupes = require('../schema/groupe');
var membreDes = require('../schema/membreDe');
var messageGroupes = require('../schema/messagesGroupe');
var messagePrive = require('../schema/messagesPrive');
var channels = require('../schema/channels');
var membreChannels = require('../schema/membreChannels');

exports.User = mongoose.model('Users', users.schemaUsers);
exports.InvitationTemp = mongoose.model('InvitationTemps', invitationTemps.schemaInvitationtemps);
exports.AvoirAmi = mongoose.model('AvoirAmis', avoirAmis.schemaAvoirAmis);
exports.Groupe = mongoose.model('Groupes', groupes.schemaGroupes);
exports.MembreDe = mongoose.model('MembreDes', membreDes.schemaMembreDes);
exports.MessageGroupes = mongoose.model('MessageGroupes', messageGroupes.schemaMessagesGroupes);
exports.MessagePrive = mongoose.model('MessagesPrive', messagePrive.schemaMessagesPrive);
exports.Channels = mongoose.model('Channels', channels.schemaChannels);
exports.MembreChannels = mongoose.model('MembreChannels', membreChannels.schemaMembreChannels);

exports.getUserByUsername = function (username, callback) {
    var query = {email: username};
    models.User.findOne(query, callback);
}

exports.getUserById = function (id, callback) {
    models.User.findById(id, callback);
}

exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err)
            throw err;
        callback(null, isMatch);
    });
}
