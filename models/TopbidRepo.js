var mustache = require('mustache'),
    q = require('q'),
    db = require('../fn/db');

<<<<<<< HEAD
exports.loadTop5 = function(){
	var sql = 'select * from topphiendaugia order by soluotdau desc limit 20; select * from topphiendaugia order by giahientai desc limit 20; select * from topphiendaugia order by thgiankt limit 20';
	return db.load(sql);
=======
exports.loadTop5 = function() {
    var sql = 'select * from topphiendaugia order by soluotdau desc limit 20; select * from topphiendaugia order by giahientai desc limit 20; select * from topphiendaugia order by thgiankt limit 20';
    return db.load(sql);
>>>>>>> master
}

exports.loadByID = function(maphien, masp) {
    var obj = {
        ID: maphien,
        MASP: masp
    };
<<<<<<< HEAD
	var sql =mustache.render('select * from topphiendaugia where maphien={{ID}}; select * from daugia.hinhanh where masp={{MASP}}; select * from chitietphien where maphien={{ID}} order by giadau desc limit 5',
		obj
		);
	return db.load(sql);
}

exports.loadresultByID = function(maphien,masp){
	 var obj = {
        ID: maphien,
        MASP: masp
    };
	var sql =mustache.render('select * from phiendaugia p, ketquadaugia kq, hinhanh h, sanpham sp where sp.masp = p.sanpham and p.maphien={{ID}} and kq.maphien={{ID}} and h.masp = p.sanpham group by kq.maphien ; select * from daugia.hinhanh where masp={{MASP}}; select * from chitietphien where maphien={{ID}} order by giadau desc limit 10',
		obj
		);
	console.log(sql);
	return db.load(sql);
}
=======
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


exports.loadLaiTuDau = function(){
    var sql = "select * from topphiendaugia";
    console.log(sql);
    db.load(sql).then(function(danhsachphiendangtontai){
          for(i = 0; i < danhsachphiendangtontai.length;i++){// mỗi 
                    var maphien = danhsachphiendangtontai[0].maphien;
                    var thgiankt = danhsachphiendangtontai[0].thgiankt;

          }  

          var x = setInterval(TimerKetThucPhienDauGia, 2000,maphien,thgiankt);


    });

}

// hàm sau đây copy từ sellerRepo. Vốn dùng để tạo 1 timer sau khi Đăng 1 sản phẩm lên phiên 
// hàm này tạo timer canh cho hết thời gian đấu giá thì làm nhiệm vụ, sau đó dừng
function TimerKetThucPhienDauGia (maphien, thoigiankt) {
    console.log(maphien);

    var hientai = new Date().getTime();
    var seketthuc = new Date(thoigiankt).getTime();
    var khoangcach = seketthuc-hientai;


    console.log(khoangcach);

    if(khoangcach<0){
        // đến lúc làm nhiệm vụ thêm vào trong ketquadaugia
        sql = "select * from phiendaugia where maphien="+maphien;
        db.load(sql).then(function(phien){
           if(phien[0].nguoigiugia == null){
            console.log('khong co ai thang');

           }
           else{
                console.log(phien[0].giahientai+"win:"+phien[0].giahientai);
                // insert dữ liệu vào table kết quả
                var sql ='insert into ketquadaugia(maphien,winner,gia) values('+phien[0].maphien+',"'+phien[0].nguoigiugia+'",'+phien[0].giahientai+')' ;
                console.log(sql);
                db.insert(sql);
           }

        });

        clearInterval(this); // dừng timer này lại, nhiệm vụ kết thúc
        


    }

}
>>>>>>> master
