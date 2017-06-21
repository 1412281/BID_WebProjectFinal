create database daugia;

use daugia;

-- create Tables

create table users(
	tenuser varchar(30) not null,
	matkhau varchar(30) not null,
	hoten  varchar(100) not null,
	diachi varchar(100) not null,
	email varchar(30) not null,
	diemcong int,
	diemtru int,
	primary key (tenuser)
);

create table  nhanxet(
	id int auto_increment,
	tenuser varchar(30) not null,
	tennguoinhanxet varchar(30) not null,
	noidung varchar(200),
	primary key (id)
);

create table seller(
	tenuser varchar(30) not null,
	quyenduocban boolean not null,
	thoigianxinban date,
	primary key (tenuser)
);

create table sanpham(
	masp int auto_increment not null,
	tensp varchar(200) not null,
	nguoidang varchar(30) not null,
	loai int not null,
	motaHTML varchar(500),
	primary key (masp)
);

create table hinhanh(
	masp int not null,
	urlhinhanh varchar(100) not null
);

create table yeuthich(
	id int auto_increment not null,
	tenuser varchar(30) not null,
	masp int not null,
	primary key (id)
);

create table loaisp(
	maloai int auto_increment,
	tenloai varchar(100),

	primary key (maloai)
);

create table phiendaugia(
	maphien int auto_increment,
	sanpham int not null,
	thgianbd datetime not null,
	thgiankt datetime not null,
	giakhoidiem int not null,
	buocgia int not null,
	giahientai int,
	nguoigiugia varchar(30),
	giamuangay int,
	tinhtrang varchar(30),
	primary key(maphien)
);

create table daugiatudong(
	maphien int not null,
	nguoidaugia varchar(30) not null,
	giamax int not null,
	primary key(maphien,nguoidaugia)
);

create table ketquadaugia(
	maphien int not null,
	winner varchar(30) ,
	gia int,
	ghichu varchar(200),
	primary key (maphien)
);

create table chitietphien(
	id int auto_increment,
	maphien int not null,
	thoigian datetime,
	nguoidaugia varchar(30) not null,
	giadau int, 
	primary key(id)
);

create table nguoimuabiloai(
	maphien int not null,
	nguoibiloai varchar(30) ,
	primary key (maphien,nguoibiloai)
);




-- tao du lieu mau

-- table loaisp:

INSERT INTO loaisp(tenloai) VALUES ('Công nghệ');
INSERT INTO loaisp(tenloai) VALUES ('Thời trang');
INSERT INTO loaisp(tenloai) VALUES ('Gia dụng');
INSERT INTO loaisp(tenloai) VALUES ('Khác');


-- table sanpham sanpham
INSERT INTO sanpham(tensp,nguoidang,loai,motaHTML) VALUES('Nokia 7610',        'user1',1,'<UL>\r\n    <LI>Máy ảnh có độ phân giải 1 megapixel</LI>\r\n    <LI>Màn hình 65.536 màu, rộng 2,1 inch, 176 X 208 pixel với đồ họa sắc nét, độ phân giải cao</LI>\r\n    <LI>Quay phim video lên đến 10 phút với hình ảnh sắc nét hơn</LI>\r\n    <LI>Kinh nghiệm đa phương tiện được tăng cường</LI>\r\n    <LI>Streaming video &amp; âm thanh với RealOne Player (hỗ trợ các dạng thức MP3/AAC).</LI>\r\n    <LI>Nâng cấp cho những đoạn phim cá nhân của bạn bằng các tính năng chỉnh sửa tự động thông minh</LI>\r\n    <LI>In ảnh chất lượng cao từ nhà, văn phòng, kios và qua mạng</LI>\r\n    <LI>Dễ dàng kết nối vớI máy PC để lưu trữ và chia sẻ (bằng cáp USB, PopPort, công nghệ Bluetooth)</LI>\r\n    <LI>48 nhạc chuông đa âm sắc, True tones. Mạng GSM 900 / GSM 1800 / GSM 1900</LI>\r\n    <LI>Kích thước 109 x 53 x 19 mm, 93 cc</LI>\r\n    <LI>Trọng lượng 118 g</LI>\r\n    <LI>Hiển thị: Loại TFT, 65.536 màu</LI>\r\n    <LI>Kích cở: 176 x 208 pixels </LI>\r\n</UL>\r\n');
INSERT INTO sanpham(tensp,nguoidang,loai,motaHTML) VALUES('Nokia N72',         'user1',1,'<UL>\r\n    <LI>Camera mega pixel : 2 mega pixel</LI>\r\n    <LI>Bộ nhớ trong : 16 - 31 mb</LI>\r\n    <LI>Chức năng : quay phim, ghi âm, nghe đài FM</LI>\r\n    <LI>Hỗ trợ: Bluetooth, thẻ nhớ nài, nhạc MP3 &lt;br/&gt;</LI>\r\n    <LI>Trọng lượng (g) : 124g</LI>\r\n    <LI>Kích thước (mm) : 109 x 53 x 21.8 mm</LI>\r\n    <LI>Ngôn ngữ : Có tiếng việt</LI>\r\n    <LI>Hệ điều hành: Symbian OS 8.1</LI>\r\n</UL>\r\n');
INSERT INTO sanpham(tensp,nguoidang,loai,motaHTML) VALUES('Motorola W377',     'user1',1,'<UL>\r\n    <LI>General: 2G Network, GSM 900 / 1800 / 1900</LI>\r\n    <LI>Size:&nbsp; 99 x 45 x 18.6 mm, 73 cc</LI>\r\n    <LI>Weight: 95 g</LI>\r\n    <LI>Display: type TFT, 65K colors</LI>\r\n    <LI>Size: 128 x 160 pixels, 28 x 35 mm</LI>\r\n</UL>\r\n');
INSERT INTO sanpham(tensp,nguoidang,loai,motaHTML) VALUES('Áo thun nữ',        'user1',2,'<UL>\r\n    <LI>Loại hàng: Hàng trong nước</LI>\r\n    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>\r\n</UL>\r\n');
INSERT INTO sanpham(tensp,nguoidang,loai,motaHTML) VALUES('Áo bé trai',        'user1',2,'<UL>\r\n    <LI>Quần áo bé trai</LI>\r\n    <LI>Loại hàng: Hàng trong nước</LI>\r\n    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>\r\n</UL>\r\n');
INSERT INTO sanpham(tensp,nguoidang,loai,motaHTML) VALUES('Đầm dạ hội ánh kim','user1',2,'<UL>\r\n    <LI>Màu sắc: Khuynh hướng ánh kim có thể thể hiện trên vàng, bạc, đỏ tía, xanh biển, vàng tím, trắng và đen.</LI>\r\n    <LI>Một số biến tấu mang tính vui nhộn là vàng chanh, màu hoa vân anh và ngọc lam; trong đó hoàng kim và nhũ bạc khá phổ biến.</LI>\r\n    <LI>Phong cách: Diềm đăng ten, rủ xuống theo chiều thẳng đứng, nhiều lớp, cổ chẻ sâu, eo chít cao tới ngực... được biến tấu tùy theo mỗi nhà thiết kế.</LI>\r\n</UL>\r\n');



-- tao khoa ngoai xen ke tao du lieu mau

alter table nhanxet
	add constraint fk_nhanxet_users
	foreign key (tenuser)
	references  users(tenuser);

alter table nhanxet
	add constraint fk_nguoinhanxet_users
	foreign key (tennguoinhanxet)
	references  users(tenuser); 

alter table yeuthich
	add constraint fk_yeuthich_users
	foreign key (tenuser)
	references  users(tenuser); 

alter table yeuthich
	add constraint fk_yeuthich_sanpham
	foreign key (masp)
	references  sanpham(masp); 

alter table seller
	add constraint fk_seller_users
	foreign key (tenuser)
	references  users(tenuser); 

alter table sanpham
	add constraint fk_sanpham_seller
	foreign key (nguoidang)
	references  seller(tenuser); 

alter table sanpham
	add constraint fk_sanpham_loaisp
	foreign key (loai)
	references  loaisp(maloai); 

alter table phiendaugia
	add constraint fk_phien_sanpham
	foreign key (sanpham)
	references  sanpham(masp); 	

alter table daugiatudong
	add constraint fk_tudong_phien
	foreign key (maphien)
	references  phiendaugia(maphien); 

alter table daugiatudong
	add constraint fk_tudong_pusers
	foreign key (nguoidaugia)
	references  users(tenuser);

alter table chitietphien
	add constraint fk_chitiet_phien
	foreign key (maphien)
	references  phiendaugia(maphien); 

alter table chitietphien
	add constraint fk_chitiet_users
	foreign key (nguoidaugia)
	references  users(tenuser); 

alter table nguoimuabiloai
	add constraint fk_nguoimuabiloai_phien
	foreign key (maphien)
	references  phiendaugia(maphien); 

alter table nguoimuabiloai
	add constraint fk_nguoimuabiloai_users
	foreign key (nguoibiloai)
	references  users(tenuser);  

alter table ketquadaugia
	add constraint fk_ketqua_phien
	foreign key (maphien)
	references  phiendaugia(maphien);



