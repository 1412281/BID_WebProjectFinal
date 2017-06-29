var mustache = require('mustache'),
    q = require('q'),
    mysql = require('mysql'),
    db = require('../fn/db');

exports.bid = function(data) {
    var ins = "insert into chitietphien (maphien, thoigian, nguoidaugia, giadau) values "
    var sql = mustache.render("('{{maphien}}', '{{date}}','{{nguoidaugia}}','{{giadau}}');", data);
    console.log(ins + sql);
    return db.insert(ins + sql);
}