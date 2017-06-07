exports.create = function (req, res) {

    var returnResponse = function (obj) {
        models.InvitationTemp({idUsers: '"'+ req.body.idUsers +'"', idUserInvit: '"'+ obj._id +'"'}).saveAsync();
    };

    var options = {email: req.body.email};

    var returnUpdateObject = models.User.findOneAsync(options).then(returnResponse);

     
    //console.log(returnUpdateObject._id);
    //var invitations = models.InvitationTemp({idUsers: '111', messageInvitation: '"'+ txs+'"'}).save();
    
    //.then(returnUpdateObject);
    res.redirect('/people');
};

exports.index = function (req, res) {
    var returnResponse = function (obj) {
        console.log('test');
    };
};