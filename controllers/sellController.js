var express = require('express');
var sellerRepo = require('../models/sellerRepo');
var multer = require('multer');
var upload = multer({ dest: 'public/upload' });
var restrict = require('../midle-wares/restrict');

var r = express.Router();

r.get('/', function(req, res) {
    if (res.locals.layoutModels == null) {
        res.redirect('/login');
        return false;
    }
    if ((res.locals.layoutModels != null) && (res.locals.layoutModels.curUser.permission != 1)) {
        console.log("redirecttttttttttttttttt");
        res.redirect(403, '/login');
        return false;
    }
    sellerRepo.loadsanphamban()
        .then(function(rows) {
            var vm = {
                layoutModels: res.locals.layoutModels,
                danhsachdangdaugia: rows[0],
                danhsachchuadang: rows[1],
                danhsachdaban: rows[2],
                danhsachloai: rows[3]
            };
            console.log(rows[2]);
            res.render('seller/listproducts', vm);
        }).fail(function(err) {
            console.log(err);
            res.end('fail');
        });
});



r.post('/', upload.any(), function(req, res) {
    console.log(req.body);

<<<<<<< HEAD
    sellerRepo.themsanpham(req.body, req.files);
=======
    sellerRepo.themsanpham(req.session.user.tenuser, req.body, req.files);
>>>>>>> master

    res.redirect('/seller');
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


    sellerRepo.loadChiTietPhienByID(data.maphien, data.masp)
        .then(function(pRows) {
            // console.log(pRows[1]);	


            var vm = {
                layoutVM: res.locals.layoutVM,
                bid: pRows[0][0],
                giatieptheo: pRows[0][0].buocgia + pRows[0][0].giahientai,
                imageurls: pRows[1],
                chitietphien: pRows[2]
            };

            res.render('seller/bid-details.hbs', vm);
        });

});

r.get('/masp=:masp', function(req, res) {
    var data = {
        "masp": req.params.masp
    }
    sellerRepo.loadsanphamchuadang_byID(data.masp)
        .then(function(rows2) {
            var vm = {
                sanpham: rows2[1][0],
                imageurls: rows2[0],
                danhsachloai: rows2[2]



            };
            console.log(rows2);
            res.render('seller/productdetails', vm);
        }).fail(function(err) {
            console.log(err);
            res.end('fail');
        });

});

r.post('/updateproduct', function(req, res) {
    console.log(req.body);
    sellerRepo.updatesanpham(req.body);

    res.redirect('/seller/masp=' + req.body.masanpham);
});

r.post('/auctionproduct', function(req, res) {
    console.log(req.body);
    sellerRepo.dangsanpham(req.body);

    res.redirect('/seller/masp=' + req.body.masanpham);
});

r.post('/:id;:idsp/themmota', function(req, res) {

    var data = {
        "maphien": req.params.id,
        "masp": req.params.idsp
    }

    console.log(req.body);
    sellerRepo.themmotasanpham(data.masp, req.body.motathem);

    res.redirect('/seller/' + data.maphien + ";" + data.masp);
});

r.get('/KICK/:maphien;:tenuser', function(req, res) {

    var data = {
        maphien: req.params.maphien,
        user: req.params.tenuser
    }

    console.log(data);
    sellerRepo.KICK(data.maphien, data.user);

    res.redirect('/seller');
});

r.post('/comment',restrict, function(req, res) {

    var data = {
        nguoinhancomment: req.body.nguoinhancomment,
        nguoiguicomment: req.session.user.tenuser,
        comment: req.body.comment,
        diem: req.body.congtru
    }
    sellerRepo.guicomment(data);
    res.redirect('../seller');
});

module.exports = r;