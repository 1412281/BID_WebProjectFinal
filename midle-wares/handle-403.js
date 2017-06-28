module.exports = function(req, res) {
    res.statusCode = 403;
    res.end('NOT PERMITTED!');
}