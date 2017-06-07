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

    if(errors){
        res.render('inscription', {
            errors:errors
        });
    }else {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
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
        res.render('people',{users: obj});
    };

    
    models.User.find().sort({name:1}).select('-_id').execAsync()
    .then(logLib.logContent)
    .then(returnResponse);
};

exports.status = function (req, res) {
    res.render('status');
};

exports.index = function (req, res) {
    var returnResponse = function (obj) {
        res.render('people',{users: obj});
    };

    models.User.find().sort({name:1}).select('-_id').execAsync()
    .then(logLib.logContent)
    .then(returnResponse);
};