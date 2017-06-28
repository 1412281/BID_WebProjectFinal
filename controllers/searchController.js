var express = require('express');
var searchRepo = require('../models/searchRepo');
var r = express.Router();

r.get('/name=:name', function(req, res) {
    var data = {
        name: req.params.name
    }
    searchRepo.getBidByProductName(data.name)
        .then(function(rows) {
            var vm = {
                layoutVM: res.locals.layoutVM,
                products: rows
            };
            // in ra test thu
            console.log(rows);

            res.render('search/index', vm);
        }).fail(function(err) {
            console.log(err);
            res.end('fail');
        });
});

module.exports = r;