exports.inscription = function (req, res) {


    res.render('inscription');



};

exports.connect = function (req, res) {


    res.sendFile(path.basename('/app/'));



};