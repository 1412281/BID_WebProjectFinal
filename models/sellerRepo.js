var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.loadsanphamban = function(){
	var sql = 'select * from topphiendaugia where nguoiban="user1" ;select * from sanphamchuadang where nguoidang="user1";select * from sanphamdaban where nguoidang="user1"; select * from loaisp';
	return db.load(sql);
}

exports.loadsanphamchuadang_byID = function(masp){
	var obj = {
        MASP: masp
    };
	var sql = mustache.render('select * from hinhanh where masp={{MASP}};select * from sanphamchuadang where masp={{MASP}}; select * from loaisp',
		obj
	);
	return db.load(sql);
}

exports.updatesanpham = function(sanpham){
	var obj1 = {
        ten: sanpham.tensanpham,
        loai: sanpham.loai,
        motaHTML: sanpham.gioithieu
    };
	var sql = mustache.render("update sanpham set tensp='{{ten}}', loai={{loai}}, motaHTML='",
		obj1
	);

	sql+=sanpham.gioithieu+"' where masp="+sanpham.masanpham;
	console.log(sql);
	return db.update(sql);
}

exports.themsanpham = function(sanpham, danhsachhinh){
	// add sanpham first
	var obj1 = {
        ten: sanpham.tensanpham,
        loai: sanpham.loai,
        motaHTML: sanpham.gioithieu
    };
	var sql = mustache.render("INSERT INTO sanpham(tensp,nguoidang,loai,motaHTML) VALUES('{{ten}}','user1',{{loai}},'",
		obj1
	);

	sql+=sanpham.gioithieu+"')";
	db.insert(sql).then(function(maspthem){
			
			
		//add to hinhanh
		for(i=0;i<3;i++){
			if(!danhsachhinh[i]) {
				console.log(danhsachhinh[i]);
				break;
			}
			// loi khi truy xuat nguoc lai

			var array = danhsachhinh[i].destination.split("/");

			var full =array[1]+"/"+danhsachhinh[i].filename;
			// var obj2 = {
		 //    masp: maspthem,
		 //    url: full,
		 //    };
		    
			var sql2 = "INSERT INTO hinhanh(masp,urlhinhanh) VALUES("+maspthem+",'"+full+"')";
				
			
			console.log(sql2);

			db.insert(sql2);
		 }

		});
	return null;

}

exports.dangsanpham= function(phienmoi){
	// add sanpham first
	var obj1 = {
        masp: phienmoi.masanpham,
        giakhoidiem: phienmoi.giakhoidiem,
        buocgia: phienmoi.buocgia,
        giamuangay: phienmoi.giamuangay,
        thgianbd: phienmoi.thgianbd,
        thgiankt: phienmoi.thgiankt
    };
	var sql = mustache.render("INSERT INTO phiendaugia(sanpham,thgianbd,thgiankt,giakhoidiem,buocgia,giamuangay) VALUES({{masp}}, STR_TO_DATE('{{thgianbd}}','%Y-%m-%d %H:%i'),STR_TO_DATE('{{thgiankt}}','%Y-%m-%d %H:%i'),{{giakhoidiem}},{{buocgia}},{{giamuangay}})",
		obj1
	);

	console.log(sql);
	return db.insert(sql);

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