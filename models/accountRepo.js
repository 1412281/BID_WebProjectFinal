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

exports.signIn = function(req) {
    d = q.defer();
    var data = {
        username: req.tenuser,
        password: req.password
    }
    var sql = mustache.render("select * from users where tenuser = '{{username}}' AND matkhau = '{{password}}'", data);
    db.load(sql).then(function(rows) {
        if (rows.length > 0) {
            var user = {
                tenuser: rows[0].tenuser,
                hoten: rows[0].hoten,
                email: rows[0].email,
                permission: rows[0].permission
            }
            d.resolve(user);
        } else {
            d.resolve(null);
        }
    });
    return d.promise;
}

exports.register = function(data) {
    var data = {
        ins: "insert into users (tenuser, matkhau, hoten, diachi, email, diemcong, diemtru) values",
        tenuser: data.tenuser,
        matkhau: data.matkhau,
        hoten: data.hoten,
        diachi: data.diachi,
        email: data.email
    }
    var sql = mustache.render("{{ins}} ('{{tenuser}}','{{matkhau}}','{{hoten}}','{{diachi}}','{{email}}','0', '0')", data);
    return db.insert(sql);
}

exports.getUserInfo = function(username) {
    var data = {
        tenuser: username
    }
    console.log("input:"+ data.tenuser);
    var sql = mustache.render("select * from thongtinuser where tenuser='{{tenuser}}';",data);
    sql+="select * from nhanxet where tenuser='"+data.tenuser+"' ";
    console.log(sql);
    return db.load(sql);
}

exports.updateinfo = function(userinfo) {
    var data = {
        tenuser: userinfo.tenuser,
        hoten: userinfo.hoten ,
        email: userinfo.email ,
        diachi:userinfo.diachi
    }
    console.log("input:"+ data.tenuser);
    var sql = mustache.render("update users set hoten='{{hoten}}',email='{{email}}', diachi='{{diachi}}' where tenuser='{{tenuser}}';", 
        data);
    console.log(sql);
    return db.update(sql);
}

exports.updatepassword = function(tenuser, passmoi) {
    var data = {
        tenuser: tenuser,
        passmoi: passmoi
    }
    var sql = mustache.render("update users set matkhau='{{passmoi}}' where tenuser='{{tenuser}}';", 
        data);
    console.log(sql);
    return db.update(sql);
}


// var data = {
//     tenuser: "1",
//     password: "1"
// }
// signIn(data).then(function(rows) {
//     console.log(rows);
// });

// getUserByEmail("2@gmail.com").then(function(rows) {
//     console.log(rows);
// });