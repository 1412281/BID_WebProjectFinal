var mustache = require('mustache'),
    q = require('q'),
    mysql = require('mysql'),
    db = require('../fn/db');




exports.getBidByProduct = function(name, type) {
    var data = {
        name,
        type,
        sq: "select * from search"
    }
    var sql;
    if (name != "" && type != "") {
        sql = mustache.render("{{sq}} where tensp like '%{{name}}%' AND loai = '{{type}}'", data);

    } else if (name != "") {
        sql = mustache.render("{{sq}} where tensp like '%{{name}}%'", data);
    } else if (type != "") {
        if (type == '0') {
            data.type = '';
            sql = mustache.render("{{sq}}", data);
        } else {
            sql = mustache.render("{{sq}} where loai = '{{type}}'", data);
        }
    }
    console.log(sql);
    return db.load(sql);
}


// getBidByProduct("", "1").then(function(rows) {
//     console.log(rows);
// });

// getBidByProductName("Nokia").then(function(rows) {
//     console.log(rows);
// });