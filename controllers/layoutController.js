var q = require('q');


module.exports = function(req, res, next) {
    var isSeller = false;
    var isAdmin = false;
    if (req.session.isLogged === undefined) {
        req.session.isLogged = false;
    };
    if (req.session.isLogged === true) {
        console.log(req.session.user);
        console.log(req.session.user.permission);

        if (req.session.user.permission == 1) {
            isSeller = true;
        }
        if (req.session.user.permission == 2) {
            isAdmin = true;
        }
    };


    q.all(res.locals.layoutModels = {
        isLogged: req.session.isLogged,
        curUser: req.session.user,
        isSeller: isSeller,
        isADMIN: isAdmin
    });
    console.log(req.session.user);
    next();
};