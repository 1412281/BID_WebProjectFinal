var mustache = require('mustache'),
    q = require('q'),
    db = require('../fn/db');

exports.loadsanphamban = function(nguoiban) {
    var ob = {
        nguoiban: nguoiban
    }
    var sql = mustache.render('select * from topphiendaugia where nguoiban="{{nguoiban}}" ; select * from sanphamchuadang where nguoidang="{{nguoiban}}"; select * from sanphamdaban where nguoidang="{{nguoiban}}"; select * from loaisp',
        ob);
    return db.load(sql);
}

exports.loadsanphamchuadang_byID = function(masp) {
    var obj = {
        MASP: masp
    };
    var sql = mustache.render('select * from hinhanh where masp={{MASP}};select * from sanphamchuadang where masp={{MASP}}; select * from loaisp',
        obj
    );
    return db.load(sql);
}

exports.updatesanpham = function(sanpham) {
    var obj1 = {
        ten: sanpham.tensanpham,
        loai: sanpham.loai,
        motaHTML: sanpham.gioithieu
    };
    var sql = mustache.render("update sanpham set tensp='{{ten}}', loai={{loai}}, motaHTML='",
        obj1
    );

    sql += sanpham.gioithieu + "' where masp=" + sanpham.masanpham;
    console.log(sql);
    return db.update(sql);
}

exports.themsanpham = function(nguoidang, sanpham, danhsachhinh) {
    // add sanpham first
    var obj1 = {
        ten: sanpham.tensanpham,
        nguoidang: nguoidang,
        loai: sanpham.loai,
        motaHTML: sanpham.gioithieu
    };
    var sql = mustache.render("INSERT INTO sanpham(tensp,nguoidang,loai,motaHTML) VALUES('{{ten}}','{{nguoidang}}',{{loai}},'",
        obj1
    );


    sql += sanpham.gioithieu + "')";
    console.log(sql);
    db.insert(sql).then(function(maspthem) {
        //add to hinhanh
        for (i = 0; i < 3; i++) {
            if (!danhsachhinh[i]) {
                console.log(danhsachhinh[i]);
                break;
            }
            // loi khi truy xuat nguoc lai

            var array = danhsachhinh[i].destination.split("/");

            var full = array[1] + "/" + danhsachhinh[i].filename;
            // var obj2 = {
            //    masp: maspthem,
            //    url: full,
            //    };

            var sql2 = "INSERT INTO hinhanh(masp,urlhinhanh) VALUES(" + maspthem + ",'" + full + "')";


            console.log(sql2);

            db.insert(sql2);
        }

    });
    return null;

}

exports.dangsanpham = function(phienmoi) {
    var giamuangay1 = phienmoi.giamuangay;
    if (giamuangay1 == '') {
        giamuangay1 = 'null';
    }
    // add sanpham first
    var obj1 = {
        masp: phienmoi.masanpham,
        giakhoidiem: phienmoi.giakhoidiem,
        buocgia: phienmoi.buocgia,
        giamuangay: giamuangay1,
        thgianbd: phienmoi.thgianbd,
        thgiankt: phienmoi.thgiankt
    };
    var sql = mustache.render("INSERT INTO phiendaugia(sanpham,thgianbd,thgiankt,giakhoidiem,buocgia,giamuangay) VALUES({{masp}}, STR_TO_DATE('{{thgianbd}}','%Y-%m-%d %H:%i'),STR_TO_DATE('{{thgiankt}}','%Y-%m-%d %H:%i'),{{giakhoidiem}},{{buocgia}},{{giamuangay}})",
        obj1
    );

    console.log(sql);

    // tạo timer làm nhiệm vụ canh hết thời gian khi sản phẩm kết thúc 

    db.insert(sql).then(function(maphien) {
        var x = setInterval(TimerKetThucPhienDauGia, 1000, maphien, obj1.thgiankt);
    });



}

function TimerKetThucPhienDauGia(maphien, thoigiankt) {
    console.log(maphien);

    var hientai = new Date().getTime();
    var seketthuc = new Date(thoigiankt).getTime();
    var khoangcach = seketthuc - hientai;


    console.log(khoangcach);

    if (khoangcach < 0) {
        // đến lúc làm nhiệm vụ thêm vào trong ketquadaugia
        sql = "select * from phiendaugia where maphien=" + maphien;
        db.load(sql).then(function(phien) {
            if (phien[0].nguoigiugia == null) {
                console.log('khong co ai thang');

            } else {
                console.log(phien[0].giahientai + "win:" + phien[0].giahientai);
                // insert dữ liệu vào table kết quả
                var sql = 'insert into ketquadaugia(maphien,winner,gia) values(' + phien[0].maphien + ',"' + phien[0].nguoigiugia + '",' + phien[0].giahientai + ')';
                console.log(sql);
                db.insert(sql);
            }

        });

        clearInterval(this); // dừng timer này lại, nhiệm vụ kết thúc



    }

}

exports.loadChiTietPhienByID = function(maphien, masp) {
    var obj = {
        ID: maphien,
        MASP: masp
    };
    var sql = mustache.render('select * from topphiendaugia where maphien={{ID}}; select * from daugia.hinhanh where masp={{MASP}}; select * from chitietphien where maphien={{ID}} order by giadau desc',
        obj
    );
    return db.load(sql);
}

exports.themmotasanpham = function(masp, motathem) {
    var obj = {
        masp: masp,
        motathem: motathem
    };
    var sql = 'update sanpham set motaHTML = concat(motaHTML,"' + motathem + '") where masp=' + masp;
    console.log(sql);
    return db.update(sql);
}

exports.KICK = function(maphien1, user1) {
    var data = {
        maphien: maphien1,
        user: user1
    };

    // xóa chi tiết phiên trước
    var sql = mustache.render('delete from chitietphien where maphien={{maphien}} and nguoidaugia="{{user}}"',
        data
    );

    console.log(sql);

    db.delete(sql).then(function(sodong) {
        // thêm vào người mua bị loại
        var sql2 = mustache.render('insert into nguoimuabiloai(maphien,nguoibiloai) values({{maphien}},"{{user}}")',
            data
        );
        console.log(sql2);
        db.insert(sql2).then(function(kq) {
            // cập nhật người giữ giá và giá hiện tại trong phiên
            var sql3 = mustache.render('update phiendaugia p set giahientai = (select max(ct.giadau) from chitietphien ct where p.maphien = ct.maphien), nguoigiugia = (select ct.nguoidaugia from chitietphien ct where p.maphien = ct.maphien and ct.giadau = (select max(ct.giadau) from chitietphien ct where p.maphien = ct.maphien)) where p.maphien={{maphien}}',
                data
            );
            console.log(sql3);
            return db.update(sql3);

        });
    });
}

exports.guicomment = function(noidung) {
    var data = {
        nguoinhancomment: noidung.nguoinhancomment,
        nguoiguicomment: noidung.nguoiguicomment,
        comment: noidung.comment,
        diem: noidung.diem

    };
    console.log(data);

    var sql = mustache.render("insert into nhanxet(tenuser,tennguoinhanxet,noidung,loai) values('{{nguoinhancomment}}','{{nguoiguicomment}}','{{comment}}',{{diem}})",
        data
    );

    console.log("Them nhan xet");
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