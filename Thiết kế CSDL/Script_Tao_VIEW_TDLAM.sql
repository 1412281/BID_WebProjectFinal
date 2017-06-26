
-- tao cac views can thiet giup cau truy van duoc gon gang hon

-- topphiendaugia giup loc ra cac phien dau gia con trong thoi han. bo qua cac phien dau gia da ket thuc
drop view if exists topphiendaugia;
create view topphiendaugia
as 
select p.maphien, sp.masp, sp.tensp, sp.nguoidang as nguoiban,sp.motaHTML, count(ct.nguoidaugia) as soluotdau,
	   p.nguoigiugia , p.giahientai,p.buocgia,p.giamuangay ,p.thgianbd, p.thgiankt,
	   h.urlhinhanh

from phiendaugia p left join chitietphien ct
	 on (p.maphien = ct.maphien) ,
	 sanpham sp , hinhanh h
where p.sanpham = sp.masp and sp.masp = h.masp and (datediff(p.thgiankt, now()) > 0 )  
group by ct.maphien
;
