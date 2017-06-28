drop view if exists search;
create view search
as 
select *
from phiendaugia p, sanpham s, loaisp l
where p.sanpham = s.masp AND s.loai = l.maloai;
