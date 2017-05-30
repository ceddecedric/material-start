exports.inbox = function(req, res) {
  res.render('inbox');
}

exports.privategroup = function(req, res) {
  res.render('private_chat');
}

exports.publicgroup = function(req, res) {
  res.render('public_chat');
}
