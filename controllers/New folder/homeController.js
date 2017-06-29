var express = require('express');
var topbidRepo = require('../models/TopbidRepo');
var bidRepo = require('../models/bidRepo');
var r = express.Router();
var dateFormat = require('dateformat');



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

<<<<<<< HEAD
r.post('/bid', function(req, res) {
    var data = {
        giadau: req.body.giadau,
        maphien: req.body.maphien,
        nguoidaugia: req.body.user,
        date: dateFormat(Date.now(), "isoDateTime")
    }
=======
r.get('/:id-:idsp', function(req, res) {

    var data = {
        "maphien": req.params.id,
        "masp": req.params.idsp
    }
    console.log("da ket thuc");

    if (!data.maphien) {
        res.redirect('/');
    }


    topbidRepo.loadresultByID(data.maphien, data.masp)
        .then(function(pRows) {
            console.log(pRows[0]);   
            console.log(pRows[1]);
            console.log(pRows[2]);   

            var vm = {
                layoutModels: res.locals.layoutModels,
                resultbid: pRows[0][0],
                imageurls: pRows[1],
                chitietphien: pRows[2]
            };

            res.render('bids/result-details.hbs', vm);
        });

});

>>>>>>> c3e080292c94c7180a81cc5085701d42cf6968ad

    console.log(data);
    bidRepo.bid(data).then(function() {
        console.log("bid thanh cong");
        var url = '/';

        res.redirect(url);
    }).fail(function() {
        res.end('fail');
    });
    console.log(data);

});


module.exports = r;