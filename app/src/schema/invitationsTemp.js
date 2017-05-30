exports.schemaInvitationtemps = new mongoose.Schema({
    idUsers:  {type: String, maxlength: 50},
    messageInvitation: {type: String, maxlength: 254}
});