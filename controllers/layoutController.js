var q = require('q');


module.exports = function(req, res, next) {

    if (req.session.isLogged === undefined) {
        req.session.isLogged = false;
    }

    q.all(res.locals.layoutModels = {
        isLogged: req.session.isLogged,
        curUser: req.session.user,
    });
    console.log(req.session.user);
    next();
};