var express = require('express');
var topbidRepo = require('../models/TopbidRepo');
var bidRepo = require('../models/bidRepo');
var r = express.Router();
var dateFormat = require('dateformat');
var q = require('q');

r.get('/', function(req,res){
    topbidRepo.loadTop5()
        .then(function(rows){
            var vm = {
                
                top5hot: rows[0],
                top5max: rows[1],
                top5end: rows[2] 
            };


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
            
            res.render('home/index',vm);
            }).fail(function(err){
                console.log(err);
                res.end('fail');

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
    if(!data.maphien){
        res.redirect('/');
    }
    
    topbidRepo.loadByID(data.maphien, data.masp)
        .then(function(pRows) {
            // console.log(pRows[1]);	

            var ctphien = pRows[2];
            for (var i = 0; i < ctphien.length; ++i) {
                ctphien[i].nguoidaugia = mahoa(ctphien[i].nguoidaugia);
            }
            var vm = {
                layoutModels: res.locals.layoutModels,
                bid: pRows[0][0],
                nguoigg: mahoa(pRows[0][0].nguoigiugia),
                giatieptheo: pRows[0][0].buocgia + pRows[0][0].giahientai,
                imageurls : pRows[1],
                chitietphien: pRows[2]
            };
            
            res.render('bids/bid-details.hbs',vm);
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
        return false;
    }

    var data = {
        giahientai: req.body.giahientai,
        giadau: req.body.giadau,
        maphien: req.body.maphien,
        nguoidaugia: req.body.user,
        buocgia: req.body.buocgia,
        autoBid: req.body.autoBid,
        date: dateFormat(Date.now(), "isoDateTime")
    }
    console.log(data);
    if (data.autoBid) {
        bidRepo.getAutoBid(data.maphien).then(function(rows) {
            if (rows.length > 0) {
                var curMax = {
                    giadau: parseInt(data.giadau) + parseInt(data.buocgia),
                    maphien: rows[0].maphien,
                    nguoidaugia: rows[0].nguoidaugia,
                    date: dateFormat(Date.now(), "isoDateTime"),
                }
                if (data.giadau < rows[0].giamax) {
                    console.log("be hon");
                    insertBid(data).then(function() {
                        insertBid(curMax).then(function() {
                            res.redirect(req.get('referer'));
                        })
                    })
                } else if (data.giadau == rows[0].giamax) {
                    console.log("bang");
                    curMax.giadau = rows[0].giamax;
                    insertBid(data).then(function() {
                        insertBid(curMax).then(function() {
                            res.redirect(req.get('referer'));
                        })
                    })
                } else {
                    console.log("lon hon");
                    data.giadau = parseInt(rows[0].giamax) + parseInt(data.buocgia);
                    curMax.giadau = rows[0].giamax;
                    insertBid(curMax).then(function() {
                        insertBid(data).then(function() {
                            data.giadau = req.body.giadau;
                            bidRepo.updateAutoBid(data).then(function() {
                                res.redirect(req.get('referer'));
                            });

                        })
                    })
                }
            } else {
                data.giadau = parseInt(data.giahientai) + parseInt(data.buocgia);
                insertBid(data).then(function() {
                    data.giadau = req.body.giadau;
                    bidRepo.insertAutoBid(data).then(function() {
                        res.redirect(req.get('referer'));
                    });
                });
            }
        });
    }
    if (!data.autoBid) {
        insertBid(data).then(function() {
            console.log("bid thanh cong");

            checkAutoBid(data).then(function() {
                res.redirect(req.get('referer'));

            }).fail(function() {
                res.redirect(req.get('referer'));

            });
        }).fail(function() {
            res.redirect(req.get('referer'));
        });
    }

});

insertBid = function(data) {
    d = q.defer();
    bidRepo.insertCtphien(data).then(function() {
        bidRepo.updatePhien(data).then(function(rows) {
            d.resolve(rows);
        });
    });
    return d.promise;
}

checkAutoBid = function(data) {
    bidRepo.getAutoBid(data.maphien).then(function(rows) {
        if (rows.length > 0) {
            if (rows[0].giamax >= data.giadau && (rows[0].nguoidaugia != data.nguoidaugia)) {
                var newCT = {
                    giadau: parseInt(data.giadau) + parseInt(data.buocgia),
                    maphien: rows[0].maphien,
                    nguoidaugia: rows[0].nguoidaugia,
                    date: dateFormat(Date.now(), "isoDateTime"),
                }
                console.log(newCT);
                if (rows[0].giamax == data.giadau) {
                    newCT.giadau = parseInt(data.giadau);
                }
                insertBid(newCT);
            }

        }
    });
}

module.exports = r;