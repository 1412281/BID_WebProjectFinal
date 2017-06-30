var express = require('express');
var r = express.Router();

var emailRepo = require('../models/emailRepo');

r.get('/sentmail', function(req, res) {
    //emailRepo.sentmail();
    res.redirect('/admin');
});

module.exports = r;