var express = require('express');
var searchRepo = require('../models/searchRepo');
var r = express.Router();



r.get('/:name?/:type?', function(req, res) {
    var data = {
        name: req.query.name,
        type: req.query.type
    }
    if (data.type == null) data.type = "";
    if (data.name == null) data.name = "";
    console.log(data);
    searchRepo.getBidByProduct(data.name, data.type)
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