exports.create = function (req, res) {

    var returnResponse = function (obj) {
        models.InvitationTemp({idUsers: req.user._id , idUserInvit:  obj._id}).saveAsync();
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