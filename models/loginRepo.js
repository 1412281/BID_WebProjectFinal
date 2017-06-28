var mustache = require('mustache'),
    q = require('q'),
    mysql = require('mysql'),
    db = require('../fn/db');

exports.getUserByEmail = function(email) {
    var data = {
        email
    };
    var sql = mustache.render("select * from users where email = '{{email}}'", data);

    return db.load(sql);
}

exports.signIn = function(username, password) {
    var data = {
        username,
        password
    }
    var sql = mustache.render("select * from users where tenuser = '{{username}}' AND matkhau = '{{password}}'", data);
    return db.load(sql);
}

exports.register = function(tenuser, matkhau, hoten, diachi, email) {
    var data = {
        ins: "insert into users (tenuser, matkhau, hoten, diachi, email, diemcong, diemtru) values",
        tenuser,
        matkhau,
        hoten,
        diachi,
        email
    }
    var sql = mustache.render("{{ins}} ('{{tenuser}}','{{matkhau}}','{{hoten}}','{{diachi}}','{{email}}','0', '0')", data);
    return db.insert(sql);
}



// signIn("1", "1").then(function(rows) {
//     console.log(rows);
// });

// getUserByEmail("2@gmail.com").then(function(rows) {
//     console.log(rows);
// });