exports.inscription = function (req, res) {


    res.render('inscription');



};

exports.create = function (req, res) {
    var returnResponse = function (obj) {
        res.render('inscription');
    };


    models.User(req.body).saveAsync()
        .then(logLib.logContent)
        .then(returnResponse);

};

exports.login = function (req, res) {


    res.render('login');



};