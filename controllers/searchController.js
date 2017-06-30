var express = require('express');
var searchRepo = require('../models/searchRepo');
var r = express.Router();





r.get('/:name?/:type?/:time?', function(req, res) {
    var data = {
        name: req.query.name,
        type: req.query.type,
        time: req.query.time
    }
    if (data.type == null) data.type = "";
    if (data.name == null) data.name = "";
    if (data.time == null) data.time = "";

    console.log(data);
    searchRepo.getBidByProduct(data.name, data.type, data.time)
        .then(function(rows) {

            var vm = {
                layoutModels: res.locals.layoutModels,
                products: rows,

            };
            // in ra test thu
            console.log(rows);
            if (rows.length == 0) {
                console.log("0000000000000000");
                res.render('error/ProductNotFound');
                return false;
            }
            res.render('search/index', vm);
        }).fail(function(err) {
            console.log(err);
            res.render('error/ProductNotFound');
        });
});


module.exports = r;