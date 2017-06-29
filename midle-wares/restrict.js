module.exports = function(req, res, next) {
    if (req.session.isLogged === true) {
        next();
    } else {
        var url = '../';
        res.redirect(url);
    }
};