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
    var obj = {
        ins: "insert into users (tenuser, matkhau, hoten, diachi, email, diemcong, diemtru, permission) values",
        tenuser: data.tenuser,
        matkhau: data.matkhau,
        hoten: data.hoten,
        diachi: '',
        email: data.email
    }
    var sql = mustache.render("{{ins}} ('{{tenuser}}','{{matkhau}}','{{hoten}}','{{diachi}}','{{email}}','0', '0', '0')", obj);
    return db.insert(sql);
}

exports.getUser = function(username) {
    var data = {
        tenuser: username
    }
    var sql = mustache.render('select * from users where tenuser="{{tenuser}}"',data);
    return db.load(sql);
}

exports.getUserInfo = function(username) {
    var data = {
        tenuser: username
    }
    console.log("input:"+ data.tenuser);
    var sql = mustache.render("select * from users where tenuser='{{tenuser}}';",data);
    sql+="select * from nhanxet where tenuser='"+data.tenuser+"'; select danhgia from thongtinuser where tenuser='"+data.tenuser+"'";
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

exports.nangcaptaikhoan = function(ten) {
    var data = {
        tenuser: ten
    }
    var sql = mustache.render("insert into seller(tenuser) values('{{tenuser}}')", 
        data);
    console.log(sql);
    return db.update(sql);
}

exports.updatepassword = function(tenuser, passmoi) {
    var data = {
        tenuser: tenuser,
        passmoi: passmoi
    }
    var sql = mustache.render("update users set matkhau='{{passmoi}}' where tenuser='{{tenuser}}'", 
        data);
    console.log(sql);
    return db.update(sql);
}

exports.loaddangdaugia = function(tenuser) {
    var data = {
        tenuser: tenuser
    }
    var sql = mustache.render("select p.* from topphiendaugia p, chitietphien ct where p.maphien = ct.maphien and ct.nguoidaugia = '{{tenuser}}' group by p.maphien", 
        data);
    console.log(sql);
    return db.load(sql);
}
exports.loadyeuthich = function(tenuser) {
    var data = {
        tenuser: tenuser
    }
    var sql = mustache.render("select p.*,h.urlhinhanh from yeuthich y, sanpham sp, hinhanh h, topphiendaugia p where y.masp = sp.masp and sp.masp  = h.masp and y.tenuser = '{{tenuser}}' and p.masp = sp.masp group by sp.masp; select p.*,sp.tensp,  kq.*,h.urlhinhanh from yeuthich y,phiendaugia p, hinhanh h, ketquadaugia kq, sanpham sp where y.masp = p.sanpham and sp.masp  = h.masp and y.tenuser = '{{tenuser}}' and sp.masp=p.sanpham and  kq.maphien = p.maphien group by y.masp", 
        data);
    console.log(sql);
    return db.load(sql);
}

exports.loaddathang = function(tenuser) {
    var data = {
        tenuser: tenuser
    }
    var sql = mustache.render("select  kq.*, sp.masp,sp.nguoidang,sp.tensp,h.urlhinhanh,p.thgiankt from ketquadaugia kq, sanpham sp, phiendaugia p, hinhanh h where  kq.maphien=p.maphien and sp.masp=p.sanpham and h.masp = sp.masp and winner = '{{tenuser}}' group by kq.maphien;", 
        data);
    console.log(sql);
    return db.load(sql);
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