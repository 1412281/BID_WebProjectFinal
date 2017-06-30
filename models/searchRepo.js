var mustache = require('mustache'),
    q = require('q'),
    mysql = require('mysql'),
    db = require('../fn/db');




exports.getBidByProduct = function(name, type, time, limit, offset) {
    var d = q.defer();

    var data = {
        name,
        type,
        time,
        sq: "select * from search",
        limit,
        offset,
        sqlc: "select count(*) as total from search ",
    }
    var promises = [];

    var sqlCount;

    var sql;

    if (name != "" && type != "") {
        sql = mustache.render("{{sq}} where tensp like '%{{name}}%' AND loai = '{{type}}'", data);
        sqlCount = mustache.render("{{sqlc}}where tensp like '%{{name}}%' AND loai = '{{type}}' ", data);

    } else if (name != "") {
        sql = mustache.render("{{sq}} where tensp like '%{{name}}%'", data);
        sqlCount = mustache.render("{{sqlc}}where tensp like '%{{name}}%'", data);

    } else if (type != "") {
        if (type == '0') {
            data.type = '';
            sql = mustache.render("{{sq}}", data);
            sqlCount = mustache.render("{{sqlc}}", data);
        } else {
            sql = mustache.render("{{sq}} where loai = '{{type}}'", data);
            sqlCount = mustache.render("{{sqlc}}where loai = '{{type}}' ", data);
        }
    }
    if (data.time != "") {
        if (data.time === "inc") {
            sql += " order by thgiankt ASC";
        } else {
            sql += " order by thgiankt DESC";
        };
    }
    sql += mustache.render(" limit {{limit}} offset {{offset}}", data);
    console.log(sqlCount);
    console.log(sql);
    promises.push(db.load(sqlCount));
    promises.push(db.load(sql));

    q.all(promises).spread(function(totalRow, rows) {
        var data = {
            total: totalRow[0].total,
            list: rows
        }
        d.resolve(data);
    });

    return d.promise;


}


// getBidByProduct("", "1").then(function(rows) {
//     console.log(rows);
// });

// getBidByProductName("Nokia").then(function(rows) {
//     console.log(rows);
// });