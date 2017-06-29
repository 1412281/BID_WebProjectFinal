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

            var ctphien = pRows[2];
            for (var i = 0; i < ctphien.length; ++i) {
                console.log(ctphien[i].nguoidaugia);
                ctphien[i].nguoidaugia = mahoa(ctphien[i].nguoidaugia);
                console.log(ctphien[i].nguoidaugia);
            }
            var vm = {
                layoutModels: res.locals.layoutModels,
                bid: pRows[0][0],
                nguoigg: mahoa(pRows[0][0].nguoigiugia),
                giatieptheo: pRows[0][0].buocgia + pRows[0][0].giahientai,
                imageurls: pRows[1],
                chitietphien: ctphien
            };

            res.render('bids/bid-details.hbs', vm);
        });

});

mahoa = function(data) {
    var result = "";
    for (var i = 0; i < data.length; ++i) {
        if (i % 2 == 0) {
            result += data[i];
        } else {
            result += '*';
        }
    }
    return result;
}


console.log(mahoa("a"));

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

r.post('/bid', function(req, res) {
    if (res.locals.layoutModels.curUser == null) {
        res.redirect('/login');
        console.log("login");
        return false;
    }

    var data = {
        giadau: req.body.giadau,
        maphien: req.body.maphien,
        nguoidaugia: req.body.user,
        date: dateFormat(Date.now(), "isoDateTime")
    }
    console.log(data);
    bidRepo.insertCtphien(data).then(function() {
        bidRepo.updatePhien(data).then(function() {
            console.log("bid thanh cong");

            res.redirect(req.get('referer'));
        }).fail(function() {
            res.end('fail');
            res.redirect(req.get('referer'));
        });;

    }).fail(function() {
        res.end('fail');
        res.redirect(req.get('referer'));
    });
    console.log(data);

});


module.exports = r;