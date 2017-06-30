var mustache = require('mustache'),
    q = require('q'),
    mysql = require('mysql'),
    db = require('../fn/db');

exports.updatePhien = function(data) {
    var sql = mustache.render("update phiendaugia set giahientai = '{{giadau}}', nguoigiugia = '{{nguoidaugia}}' where maphien = '{{maphien}}';", data);
    return db.update(sql);
}

exports.insertCtphien = function(data) {
    var ins = "insert into chitietphien (maphien, thoigian, nguoidaugia, giadau) values "
    var sql = mustache.render("('{{maphien}}', '{{date}}','{{nguoidaugia}}','{{giadau}}');", data);
    console.log(ins + sql);
    return db.insert(ins + sql);
}

exports.getAutoBid = function(maphien) {
    var data = {
        maphien
    }
    var sql = mustache.render("select * from daugiatudong where maphien = '{{maphien}}'", data);
    return db.load(sql);
}

exports.insertAutoBid = function(data) {


    var ins = "insert into daugiatudong (maphien, nguoidaugia, giamax) values";
    var sql = mustache.render("('{{maphien}}', '{{nguoidaugia}}', '{{giadau}}')", data);
    return db.insert(ins + sql);
}

exports.updateAutoBid = function(data) {
    var upd = "update daugiatudong set ";
    var sql = mustache.render("nguoidaugia = '{{nguoidaugia}}', giamax = '{{giadau}}' where maphien = '{{maphien}}'", data);
    console.log(upd + sql);
    return db.update(upd + sql);
}

// data = {
//     maphien: "1",
//     nguoidaugia: "2",
//     giadau: "2"
// }
// updateAutoBid(data).then(function(rows) {
//     console.log("aaa");
//     console.log(rows);
// });
