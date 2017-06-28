var mustache = require('mustache'),
	q = require('q'),
	db = require('../fn/db');

exports.loadsanphamban = function(){
	var sql = 'select * from topphiendaugia where nguoiban="user1" ; select * from sanphamchuadang where nguoidang="user1"; select * from sanphamdaban where nguoidang="user1"; select * from loaisp';
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

exports.loadChiTietPhienByID = function(maphien,masp){
	 var obj = {
        ID: maphien,
        MASP: masp
    };
	var sql =mustache.render('select * from topphiendaugia where maphien={{ID}}; select * from daugia.hinhanh where masp={{MASP}}; select * from chitietphien where maphien={{ID}} order by giadau desc',
		obj
		);
	return db.load(sql);
}

exports.themmotasanpham = function(masp, motathem){
	 var obj = {
        MASP: masp,
        motathem: motathem
    };
	var sql =mustache.render('update sanpham set motaHTML = concat(motaHTML,"{{motathem}}") where masp={{masp}}',
		obj
		);
	return db.update(sql);
}

exports.KICK = function(maphien1,user1){
	 var data = {
        maphien: maphien1,
        user: user1
    };

	// xóa chi tiết phiên trước
	var sql =mustache.render('delete from chitietphien where maphien={{maphien}} and nguoidaugia="{{user}}"',
		data
		);
	
	console.log(sql);
	
	db.delete(sql).then(function(sodong){
			// thêm vào người mua bị loại
		var sql2 =mustache.render('insert into nguoimuabiloai(maphien,nguoibiloai) values({{maphien}},"{{user}}")',
		data
		);	
		console.log(sql2);
		db.insert(sql2).then(function(kq){
		// cập nhật người giữ giá và giá hiện tại trong phiên
			var sql3 =mustache.render('update phiendaugia p set giahientai = (select max(ct.giadau) from chitietphien ct where p.maphien = ct.maphien), nguoigiugia = (select ct.nguoidaugia from chitietphien ct where p.maphien = ct.maphien and ct.giadau = (select max(ct.giadau) from chitietphien ct where p.maphien = ct.maphien)) where p.maphien={{maphien}}',
			data
			);	
			console.log(sql3);
			return db.update(sql3);

		});
	});
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