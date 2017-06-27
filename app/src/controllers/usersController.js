exports.inscription = function (req, res) {
    res.render('inscription');
};

exports.create = function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var confpass = req.body.confpass;

    //validation
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'email is required').notEmpty();
    req.checkBody('email', 'email is not valid').isEmail();
    req.checkBody('password', 'password is required').notEmpty();
    req.checkBody('confpass', 'passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
        res.render('inscription', {
            errors: errors
        });
    } else {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                req.body.password = hash;
                var returnResponse = function (obj) {
                    req.flash('success_msg', 'You are now registered and can now login');
                    res.redirect('/login');
                };
                models.User(req.body).saveAsync()
                        .then(logLib.logContent)
                        .then(returnResponse);

            });
        });
    }
};

exports.login = function (req, res) {
    res.render('login');
};


exports.logged = function (req, res) {
    console.log(req.body);
    res.redirect('/accueil');
};

exports.islogin = function (req, res) {
    res.render('inbox');
};

exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

exports.people = function (req, res) {
    var returnResponse = function (obj) {
        var returnObj = function (ob) {

            //res.render('people',{invit:obj, invitation:o});


            /* models.User.find({_id:ob.idUsers}).sort({name:1}).select('name _id').execAsync()
             .then(returnRespon) */
            var donee = [];
            var myid = [];
            ob.forEach(function (el) {
                myid.push(el._id);

                models.User.find({_id: el.idUsers}).sort({name: 1}).select('name _id').execAsync()
                        .then(function (o) {
                            for (var i = 0; i < o.length; i++)
                            {
                                donee.push(o[i]);
                            }

                        });

            })

            res.render('people', {invit: obj, invitation: donee});

        }
        models.InvitationTemp.find({idUserInvit: req.user._id}).execAsync()
                .then(returnObj);

    };


    models.InvitationTemp.count({idUserInvit: req.user._id})
            .then(returnResponse);
};

exports.status = function (req, res) {
    res.render('status');

};

exports.profil = function (req, res) {
    res.render('profil');
};

exports.Upprofil = function (req, res) {

    var options = {_id: req.body._id};

    var returnUpdateObject = function () {
        models.User.findOneAsync(options)
                .then(logLib.logContent);

    }

    delete req.body['_id'];

    models.User.findOneAndUpdateAsync(options, req.body)
            .then(returnUpdateObject);

    res.redirect('/profil');
};

exports.index = function (req, res) {
    var returnResponse = function (obj) {
        res.render('people', {users: obj});
    };

    models.User.find().sort({name: 1}).select('-_id').execAsync()
            .then(returnResponse);
};


exports.Upstatus = function (req, res) {

    var options = {_id: req.body._id};

    var returnUpdateObject = function () {
        models.User.findOneAsync(options)
                .then(logLib.logContent);

    }

    delete req.body['_id'];

    models.User.findOneAndUpdateAsync(options, req.body)
            .then(returnUpdateObject);

}

exports.accepter = function (req, res) {

    var ami = req.body._id;
    var userconnect = req.user._id;

    var returnResponse = function () {
        var foundanddelete = function () {
            var deleteOne = function (obj) {
                models.InvitationTemp.findOneAndRemoveAsync({_id: obj._id});
            }
            models.InvitationTemp.findOneAsync({idUsers: ami,idUserInvit: req.user._id})
                .then(deleteOne);
        }
        models.AvoirAmi({idUser: ami, idAmis: userconnect}).saveAsync()
            .then(foundanddelete);
    }

    models.AvoirAmi({idUser: req.user._id, idAmis: req.body._id}).saveAsync()
        .then(returnResponse);
};

exports.refuser = function (req, res) {

    var ami = req.body._id;

            var deleteOne = function (obj) {
                models.InvitationTemp.findOneAndRemoveAsync({_id: obj._id});
            }
            models.InvitationTemp.findOneAsync({idUsers: ami,idUserInvit: req.user._id})
                .then(deleteOne);

};

