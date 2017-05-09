exports.schemaMessages_prive = new mongoose.Schema({
    id_users:  {type: String, maxlength: 50},
    message_text: {type: String, maxlength: 254},
    time: {type: Date, default: date.now }
});