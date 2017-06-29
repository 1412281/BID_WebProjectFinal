var express = require('express');
var accountRepo = require('../models/accountRepo');
var r = express.Router();
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
        if (user.length === 0) {
            console.log("NO");

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
            var url = '/';
            // if (req.query.retUrl) {
            //     url = req.query.retUrl;
            // }
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


r.get('/profile',restrict,function(req, res) {
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

r.post('/updateinfo', restrict, function(req, res) {
    console.log("capnhatthongtin...............");
    
    accountRepo.updateinfo(req.body);

    res.redirect('../login/profile');
});

r.post('/changepassword', restrict, function(req, res) {
    console.log("doimatkhau...............");
    console.log(req.body);
    accountRepo.getUserInfo(req.session.user.tenuser)
        .then(function(rows) {
        console.log(rows[0]);
        var vm = {
                layoutModels: res.locals.layoutModels,
                thongtincanhan: rows[0][0],
                nhanxet: rows[1]
            };
            if(vm.thongtincanhan.matkhau == req.body.passcu){
                console.log("Pass Cu Dung");
                accountRepo.updatepassword(req.session.user.tenuser,req.body.passmoi);
                res.redirect('../login/profile');
            }
            else{
                    res.end('Mat khau Cu khong dung');
            }
            }).fail(function(err) {
                console.log(err);
                res.end('Mat khau Cu khong dung');


    });  

    

    
});

module.exports = r;