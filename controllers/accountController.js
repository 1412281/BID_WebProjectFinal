var express = require('express');
var accountRepo = require('../models/accountRepo');
var r = express.Router();
var request = require('request');
var restrict = require('../midle-wares/restrict');

r.post('/register', function(req, res) {
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        //return res.json({ "responseCode": 1, "responseDesc": "Please select captcha" });

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
            //return res.json({ "responseCode": 1, "responseDesc": "Failed captcha verification" });
        }
        //res.json({ "responseCode": 0, "responseDesc": "Sucess" }); 
        {

        }
    });

    var data = {
        tenuser: req.body.tenuser,
        matkhau: req.body.password,
        hoten: req.body.hoten,
        email: req.body.email
    }
    accountRepo.register(data).then(function(result) {
        res._write(result);
    });
    console.log(data);
});

r.post('/signin', function(req, res) {
    var data = {
        tenuser: req.body.tenuser,
        password: req.body.password
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

module.exports = r;