exports.create = function (req, res) {

    var commentaire = req.body.comment;
    //models.

    var use = models.User({email:  '"'+ user.body.email+'"'});

    var invitations = models.InvitationTemp({idUsers: '111', messageInvitation: '"'+ txs+'"'}).save();

    res.redirect('/people');
};