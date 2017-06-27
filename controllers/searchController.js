var express = require('express');
var searchRepo = require('../models/searchRepo');
var r = express.Router();

r.get('/', function(req, res) {
    searchRepo.getBidByProductID
        .then(function(rows) {
            var vm = {
                layoutVM: res.locals.layoutVM,
                products: rows
            };
            // in ra test thu
            console.log(rows);

            res.render('home/index', vm);
        }).fail(function(err) {
            console.log(err);
            res.end('fail');
        });
});

module.exports = r;