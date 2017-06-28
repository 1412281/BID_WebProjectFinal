var mustache = require('mustache'),
    q = require('q'),
    mysql = require('mysql'),
    search = require('./searchRepo'),
    db = require('../fn/db');

var updateInfo = function(tenuser, matkhau, hoten, diachi, email) {
    var data = {
        upd: "update users set",
        tenuser,
        matkhau,
        hoten,
        diachi,
        email
    }

    // var sql = mustache.render("UPDATE users SET hoten = '{{hoten}}' diachi = '{{diachi}}' email = '{{email}}' where tenuser = '{{tenuser}}' AND matkhau = '{{matkhau}}'", data);
    var sql = mustache.render("{{upd}} hoten = 'a', diachi = '{{diachi}}', email = '{{email}}' where tenuser = '{{tenuser}}' AND matkhau = '{{matkhau}}'", data);

    return db.update(sql);
}

var changePass = function(tenuser, matkhaucu, matkhaumoi) {
    var data = {
        upd: "update users set",
        tenuser,
        matkhaucu,
        matkhaumoi
    }
    var sql = mustache.render("{{upd}} matkhau = '{{matkhaumoi}}' where tenuser = '{{tenuser}}' AND matkhau = '{{matkhaucu}}'", data);

    return db.update(sql);
}

var addFavoriteProduct = function(tenuser, masp) {
    var data = {
        tenuser,
        masp
    }

    var sql = mustache.render("insert into yeuthich (tenuser, masp) values ('{{tenuser}}', '{{masp}}')", data);
    return db.insert(sql);
}


var getProductByID = function(id) {
    var sql = "select * from sanpham where masp = '" + id + "'";
    return db.load(sql);
}

var getUserFavoriteProductID = function(tenuser) {
    var data = {
        tenuser,
    }

    var sql = mustache.render("select masp from yeuthich where tenuser = '{{tenuser}}'", data);
    return db.load(sql);
}


var getUserFavoriteProduct = function(tenuser) {
    return getUserFavoriteProductID(tenuser).then(function(ids) {
        var result = [];
        for (var i = 0; i < ids.length; ++i)(function(i) {
            result.push(getProductByID(ids[i].masp).then(function(pros) {
                return pros;
            }));
        })(i);
        return q.all(result);
    });
}


getUserFavoriteProduct(1).then(function(rows) {
    console.log(rows);
});

// getProductByID("1").then(function(row) {
//     console.log(row);
// });



// getFavoriteProductId(1).then(function(r) {
//     console.log(r);
// });

// changePass("2", "2", "bbbbb").then(function(r) {
//     console.log(r);
// });

// var a = "3";
// updateInfo(a, a, "a", "a", "a@gmail.com").then(function(r) {
//     console.log(r);
// });