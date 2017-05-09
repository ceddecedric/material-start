exports.schemaInvitations_temp = new mongoose.Schema({
    id_users:  {type: String, maxlength: 50},
    message_invitation: {type: String, maxlength: 254}
});