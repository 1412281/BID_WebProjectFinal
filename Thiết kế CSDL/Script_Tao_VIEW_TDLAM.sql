
-- tao cac views can thiet giup cau truy van duoc gon gang hon
drop view if exists soluotdaugia;
create view soluotdaugia
as 
select ct.maphien, count(*) as soluotdau

from chitietphien ct  
group by ct.maphien
;
-- topphiendaugia giup loc ra cac phien dau gia con trong thoi han. bo qua cac phien dau gia da ket thuc
drop view if exists topphiendaugia;
create view topphiendaugia
as 
select p.maphien, sp.masp, sp.tensp, sp.nguoidang as nguoiban,sp.motaHTML, luot.soluotdau,
	   p.nguoigiugia , p.giahientai,p.buocgia,p.giamuangay ,p.thgianbd, p.thgiankt,
	   h.urlhinhanh
from phiendaugia p, soluotdaugia luot,
	 sanpham sp , hinhanh h
where p.sanpham = sp.masp and p.maphien=luot.maphien and sp.masp = h.masp and (datediff(p.thgiankt, now()) > 0 )  
group by p.maphien
;

-- views san pham danh cho seller truy xuat

drop view if exists sanphamchuadang;
create view sanphamchuadang 
as
select distinct sp.*, l.tenloai, h.urlhinhanh
from sanpham sp,loaisp l, hinhanh h
where sp.loai = l.maloai and sp.masp = h.masp 
	  and(sp.masp not in (select top.masp
			from topphiendaugia top
		))
group by sp.masp
order by sp.loai
;

-- view sanpham da co nguoi mua

drop view if exists sanphamdaban;
create view sanphamdaban 
as
select distinct sp.*, l.tenloai, h.urlhinhanh, kq.winner, kq.gia
from sanpham sp,loaisp l, hinhanh h,
	 phiendaugia p, ketquadaugia kq
where sp.loai = l.maloai and sp.masp = h.masp  and sp.masp = p.sanpham and p.maphien = kq.maphien
group by sp.masp
order by sp.loai
;