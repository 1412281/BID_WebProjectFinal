var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.loadTop5 = function(){
	var sql = 'select * from topphiendaugia order by soluotdau desc limit 20; select * from topphiendaugia order by giahientai desc limit 20; select * from topphiendaugia order by thgiankt limit 20';
	return db.load(sql);
}

exports.loadByID = function(maphien,masp){
	 var obj = {
        ID: maphien,
        MASP: masp
    };
	var sql =mustache.render('select * from topphiendaugia where maphien={{ID}}; select * from daugia.hinhanh where masp={{MASP}}; select * from chitietphien where maphien={{ID}} order by giadau desc limit 5',
		obj
		);
	return db.load(sql);
}