exports.create = function (req, res) {

    var returnResponse = function (obj) {
        models.InvitationTemp({idUsers: req.user._id, idUserInvit: obj._id}).saveAsync();
    };

    var options = {email: req.body.email};

    models.User.findOneAsync(options).then(returnResponse);


    res.redirect('/people');
};

exports.index = function (req, res) {
    var returnResponse = function (obj) {
        console.log('test');
    };
};

exports.creategroup = function (req, res) {

    var returnResponse = function (obj) {
        console.log(req.body.name);
    };

    var options = {name: req.body.name};

    models.Groupe(req.body).saveAsync()
                        .then(logLib.logContent)
                        .then(returnResponse);


    res.redirect('/private_chat');
};