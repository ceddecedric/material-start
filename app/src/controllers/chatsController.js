exports.inbox = function(req, res) {
  res.render('inbox');
}

exports.privategroup = function(req, res) {
  res.render('private_chat');
}

exports.publicgroup = function(req, res) {
  models.MessageGroupes.find({}).sort({messageText:1}).select('messageText time').execAsync()
    .then(logLib.logContent);
  res.render('public_chat');
}
