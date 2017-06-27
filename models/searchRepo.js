var mustache = require('mustache'),
    q = require('q'),
    mysql = require('mysql'),
    db = require('../fn/db');



exports.getIdProductByName = function(name) {
    var sql = "select masp from sanpham where tensp like '%" + name + "%'";
    return db.load(sql);
}

exports.getIDProductByType = function(type) {
    var sql = "select masp from sanpham where loai = " + type;
    return db.load(sql);
}

exports.getBidByProductID = function(id) {
    var sql = "select * from phiendaugia where sanpham = " + id + "";
    return db.load(sql);
}

exports.getBidByProductName = function(name) {
    var d = q.defer();

    getIdProductByName(name).then(function(rows) {
        var time = { thgiankt: 1 };
        var array = [];
        for (var i = 0; i < rows.length; ++i) {
            getBidByProductID(rows[i].masp).then(function(phien) {
                for (var j = 0; j < phien.length; ++j) {
                    array.push(phien[j]);
                }
                // console.log(phien);
            }).then(function() {
                d.resolve(array);
            });
        }
    });
    return d.promise;
}