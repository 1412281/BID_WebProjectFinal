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