exports.schemaMembreChannels = new mongoose.Schema({
    idChannel:  {type: String, maxlength: 50},
    idUsers: {type: String, maxlength: 100}
});