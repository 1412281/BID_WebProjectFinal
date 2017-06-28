var mustache = require('mustache'),
    q = require('q'),
    mysql = require('mysql'),
    db = require('../fn/db');



exports.getBidByProductName = function(name) {
    var sql = "select * from search where tensp like '%" + name + "%'";
    return db.load(sql);
}

exports.getBidByProductType = function(type) {
    var sql = "select * from search where loai = " + type;
    return db.load(sql);
}


// getBidByProductType(1).then(function(rows) {
//     console.log(rows);
// });

// getBidByProductName("Nokia").then(function(rows) {
//     console.log(rows);
// });