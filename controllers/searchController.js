var express = require('express');
var searchRepo = require('../models/searchRepo');
var r = express.Router();





r.get('/:name?/:type?/:time?', function(req, res) {

    var limit = 1;
    var curPage = req.query.page ? req.query.page : 1;
    var offset = (curPage - 1) * limit;

    var data = {
        name: req.query.name,
        type: req.query.type,
        time: req.query.time
    }
    if (data.type == null) data.type = "";
    if (data.name == null) data.name = "";
    if (data.time == null) data.time = "";

    console.log(data);
    searchRepo.getBidByProduct(data.name, data.type, data.time, limit, offset)
        .then(function(datas) {

            var number_of_pages = datas.total / limit;
            if (datas.total % limit > 0) {
                number_of_pages++;
            }

            var pages = [];
            for (var i = 1; i <= number_of_pages; i++) {
                pages.push({
                    pageValue: i,
                    isActive: i === +curPage
                });
            }

            var vm = {
                layoutModels: res.locals.layoutModels,
                products: datas.list,

                pages: pages,
                curPage: curPage,
                prevPage: curPage - 1,
                nextPage: curPage + 1,
                showPrevPage: curPage > 1,
                showNextPage: curPage < number_of_pages - 1,

            };
            // in ra test thu
            console.log(datas.list);
            if (datas.list.length == 0) {
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