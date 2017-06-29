var express = require('express');
var accountRepo = require('../models/accountRepo');
var r = express.Router();
var sellerRepo = require('../models/sellerRepo');
var request = require('request');
var restrict = require('../midle-wares/restrict');
var crypto = require('crypto');


r.get('/', function(req, res) {

    res.render('home/login');


});

r.get('/register', function(req, res) {
    if (req.session.isLogged === true) {
        next();
    } else {
        res.render('home/register');
    }

});

r.post('/register', function(req, res) {
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.json({ "responseCode": 1, "responseDesc": "Please select captcha" });
        //return false;
    }
    // Put your secret key here.
    var secretKey = "6LcyKScUAAAAAIzb7F4uAa7LkGMIPjSgbHG_xdL8";
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function(error, response, body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
        if (body.success !== undefined && !body.success) {
            return res.json({ "responseCode": 1, "responseDesc": "Failed captcha verification" });
            //return false;
        }
        //res.json({ "responseCode": 0, "responseDesc": "Sucess" }); 
        var ePWD = crypto.createHash('md5').update(req.body.password).digest('hex');
        var data = {
            tenuser: req.body.tenuser,
            matkhau: ePWD,
            hoten: req.body.hoten,
            email: req.body.email
        }
        accountRepo.register(data).then(function(result) {
            res.redirect('/login');
        });
        console.log(data);
        res.redirect('/login');
    });

});

r.post('/signin', function(req, res) {
    var ePWD = crypto.createHash('md5').update(req.body.password).digest('hex');
    var data = {
        tenuser: req.body.tenuser,
        password: ePWD
    }
    console.log(data);
    accountRepo.signIn(data).then(function(user) {
        console.log(user);
        if (user == null) {
            console.log("NO");

            res.send("Đăng nhập không thành công");
            res.end('asdasd');
        } else {
            console.log("YES");
            req.session.isLogged = true;
            req.session.user = user;

            // if (remember === true) {
            //     var hour = 1000 * 60 * 60 * 24;
            //     req.session.cookie.expires = new Date(Date.now() + hour);
            //     req.session.cookie.maxAge = hour;
            // }
            console.log("re");
            var url = req.get('referer');

            res.redirect(url);
        }
    })
});

r.post('/logout', restrict, function(req, res) {
    console.log("logout...............");
    req.session.isLogged = false;
    req.session.user = null;
    req.session.cookie.expires = new Date(Date.now() - 1000);
    res.redirect('/');
});


r.get('/profile', restrict, function(req, res) {
    console.log("Profile...............");

    console.log(req.session.user.tenuser);


    accountRepo.getUserInfo(req.session.user.tenuser)
        .then(function(rows) {
            console.log(rows[0]);
            var vm = {
                layoutModels: res.locals.layoutModels,
                thongtincanhan: rows[0][0],
                nhanxet: rows[1]
            };
            console.log(rows[1]);
            res.render('account/profile', vm);
        }).fail(function(err) {
            console.log(err);
            res.end('fail');


        });

});

r.get('/dangdaugia', restrict, function(req, res) {
    console.log("Dang Dau Gia...............");

    console.log(req.session.user.tenuser);


    accountRepo.loaddangdaugia(req.session.user.tenuser)
        .then(function(rows) {
            console.log(rows);
            var vm = {
                layoutModels: res.locals.layoutModels,
                danhsachdangthamgia: rows
            };
            res.render('account/listbids', vm);
        }).fail(function(err) {
            console.log(err);
            res.end('fail');


        });

});


r.get('/yeuthich', restrict, function(req, res) {
    console.log("Danh sach yeu thich...............");

    console.log(req.session.user.tenuser);


    accountRepo.loadyeuthich(req.session.user.tenuser)
        .then(function(rows) {
            console.log(rows[0]);
            console.log(rows[1]);
            var vm = {
                layoutModels: res.locals.layoutModels,
                yeuthichdangdaugia: rows[0],
                yeuthichketthuc: rows[1]
            };
            res.render('account/favorite', vm);
        }).fail(function(err) {
            console.log(err);
            res.end('fail');


        });

});

r.get('/dathang', restrict, function(req, res) {
    console.log("Danh sach da thang...............");

    console.log(req.session.user.tenuser);


    accountRepo.loaddathang(req.session.user.tenuser)
        .then(function(rows) {
            console.log(rows);
            var vm = {
                layoutModels: res.locals.layoutModels,
                danhsachdathang: rows
            };
            res.render('account/winbids', vm);
        }).fail(function(err) {
            console.log(err);
            res.end('fail');
        });

});

r.post('/comment', restrict, function(req, res) {
    console.log("capnhatthongtin...............");

    var data = {
        nguoinhancomment: req.body.nguoinhancomment,
        nguoiguicomment: req.session.user.tenuser,
        comment: req.body.comment,
        diem: req.body.congtru
    }
    sellerRepo.guicomment(data);

    res.redirect('../login/profile');
});



r.post('/updateinfo', restrict, function(req, res) {
    console.log("capnhatthongtin...............");

    accountRepo.updateinfo(req.body);

    res.redirect('../login/profile');
});

r.post('/changepassword', restrict, function(req, res) {
    console.log("doimatkhau...............");
    console.log(req.body);
    var ePWD = crypto.createHash('md5').update(req.body.passcu).digest('hex');
    var ePWD_new = crypto.createHash('md5').update(req.body.passmoi).digest('hex');
    accountRepo.getUserInfo(req.session.user.tenuser)
        .then(function(rows) {
            console.log(rows[0]);
            var vm = {
                layoutModels: res.locals.layoutModels,
                thongtincanhan: rows[0][0],
                nhanxet: rows[1]
            };
            if (vm.thongtincanhan.matkhau ==ePWD ) {
                console.log("Pass Cu Dung");
                accountRepo.updatepassword(req.session.user.tenuser, ePWD_new);
                res.redirect('../login/profile');
            } else {
                res.end('Mat khau Cu khong dung');
            }
        }).fail(function(err) {
            console.log(err);
            res.end('Mat khau Cu khong dung');


        });




});

module.exports = r;