var express = require('express');
var topbidRepo = require('../models/TopbidRepo');
var r = express.Router();




r.get('/', function(req, res) {
    topbidRepo.loadTop5()
        .then(function(rows) {
            var vm = {
                layoutModels: res.locals.layoutModels,
                top5hot: rows[0],
                top5max: rows[1],
                top5end: rows[2]
            };
            console.log(vm.layoutModels);
            // in ra test thu
            // console.log(rows[0]);
            // console.log(rows[1]);
            // console.log(rows[2]);

            res.render('home/index', vm);
        }).fail(function(err) {
            console.log(err);
            res.end('fail');
        });
});

r.get('/:id;:idsp', function(req, res) {

    var data = {
        "maphien": req.params.id,
        "masp": req.params.idsp
    }
    console.log(data);

    if (!data.maphien) {
        res.redirect('/');
    }


    topbidRepo.loadByID(data.maphien, data.masp)
        .then(function(pRows) {
            // console.log(pRows[1]);	


            var vm = {
                layoutModels: res.locals.layoutModels,
                bid: pRows[0][0],
                giatieptheo: pRows[0][0].buocgia + pRows[0][0].giahientai,
                imageurls: pRows[1],
                chitietphien: pRows[2]
            };

            res.render('bids/bid-details.hbs', vm);
        });

});


module.exports = r;