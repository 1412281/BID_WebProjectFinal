var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.loadsanphamban = function(){
	var sql = 'select * from topphiendaugia where nguoiban="user1" ;select * from sanphamchuadang where nguoidang="user1";select * from sanphamdaban where nguoidang="user1"; select * from loaisp';
	return db.load(sql);
}

exports.loadsanphamban_byID = function(masp){
	var obj = {
        MASP: masp
    };
	var sql = mustache.render('select * from hinhanh where masp={{MASP}};select * from sanphamban where masp={{MASP}}',
		obj
	);
	return db.load(sql);
}
// exports.loadByID = function(maphien,masp){
// 	 var obj = {
//         ID: maphien,
//         MASP: masp
//     };
// 	var sql =mustache.render('select * from topphiendaugia where maphien={{ID}}; select * from daugia.hinhanh where masp={{MASP}};',
// 		obj
// 		);
// 	return db.load(sql);
// }