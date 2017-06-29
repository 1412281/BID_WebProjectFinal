var mustache = require('mustache'),
    q = require('q'),
    db = require('../fn/db');

exports.loadTop5 = function() {
    var sql = 'select * from topphiendaugia order by soluotdau desc limit 20; select * from topphiendaugia order by giahientai desc limit 20; select * from topphiendaugia order by thgiankt limit 20';
    return db.load(sql);
}

exports.loadByID = function(maphien, masp) {
    var obj = {
        ID: maphien,
        MASP: masp
    };
    var sql = mustache.render('select * from topphiendaugia where maphien={{ID}}; select * from daugia.hinhanh where masp={{MASP}}; select * from chitietphien where maphien={{ID}} order by giadau desc limit 5',
        obj
    );
    console.log(sql);
    return db.load(sql);
}

exports.loadresultByID = function(maphien, masp) {
    var obj = {
        ID: maphien,
        MASP: masp
    };
    var sql = mustache.render('select * from phiendaugia p, ketquadaugia kq, hinhanh h, sanpham sp where sp.masp = p.sanpham and p.maphien={{ID}} and kq.maphien={{ID}} and h.masp = p.sanpham group by kq.maphien ; select * from daugia.hinhanh where masp={{MASP}}; select * from chitietphien where maphien={{ID}} order by giadau desc limit 10',
        obj
    );
    console.log(sql);
    return db.load(sql);
}