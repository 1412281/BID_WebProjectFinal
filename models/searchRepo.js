var mustache = require('mustache'),
    q = require('q'),
    mysql = require('mysql'),
    db = require('../fn/db');




exports.getBidByProduct = function(name, type) {
    var data = {
        name,
        type,
        sq: "select * from search where"
    }
    if (name != "" && type != "") {
        var sql = mustache.render("{{sq}} tensp like '%{{name}}%' AND loai = '{{type}}'", data);

    } else if (name != "") {
        var sql = mustache.render("{{sq}} tensp like '%{{name}}%'", data);
    } else if (type != "") {
        var sql = mustache.render("{{sq}} loai = '{{type}}'", data);
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