-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 28, 2017 lúc 04:52 SA
-- Phiên bản máy phục vụ: 5.7.14
-- Phiên bản PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `daugia`
--
CREATE DATABASE IF NOT EXISTS `daugia` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `daugia`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietphien`
--

DROP TABLE IF EXISTS `chitietphien`;
CREATE TABLE `chitietphien` (
  `id` int(11) NOT NULL,
  `maphien` int(11) NOT NULL,
  `thoigian` datetime DEFAULT NULL,
  `nguoidaugia` varchar(30) NOT NULL,
  `giadau` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `chitietphien`
--

INSERT INTO `chitietphien` (`id`, `maphien`, `thoigian`, `nguoidaugia`, `giadau`) VALUES
(1, 1, '2014-12-01 00:00:00', 'user1', 120000),
(2, 1, '2014-12-01 00:01:00', 'user1', 130000),
(3, 1, '2014-12-01 00:02:00', 'user1', 140000),
(4, 2, '2014-12-01 00:01:00', 'user1', 110000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `daugiatudong`
--

DROP TABLE IF EXISTS `daugiatudong`;
CREATE TABLE `daugiatudong` (
  `maphien` int(11) NOT NULL,
  `nguoidaugia` varchar(30) NOT NULL,
  `giamax` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `daugiatudong`
--

INSERT INTO `daugiatudong` (`maphien`, `nguoidaugia`, `giamax`) VALUES
(1, 'user1', 500000),
(2, 'user2', 1000000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhanh`
--

DROP TABLE IF EXISTS `hinhanh`;
CREATE TABLE `hinhanh` (
  `masp` int(11) NOT NULL,
  `urlhinhanh` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `hinhanh`
--

INSERT INTO `hinhanh` (`masp`, `urlhinhanh`) VALUES
(1, 'imgs/sanpham/1/1.jpg'),
(1, 'imgs/sanpham/1/2.jpg'),
(1, 'imgs/sanpham/1/3.jpg'),
(3, 'imgs/sanpham/2/1.jpg'),
(4, 'imgs/sanpham/1/1.jpg'),
(4, 'imgs/sanpham/1/2.jpg'),
(4, 'imgs/sanpham/1/3.jpg'),
(5, 'imgs/sanpham/1/1.jpg'),
(5, 'imgs/sanpham/1/2.jpg'),
(5, 'imgs/sanpham/1/3.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ketquadaugia`
--

DROP TABLE IF EXISTS `ketquadaugia`;
CREATE TABLE `ketquadaugia` (
  `maphien` int(11) NOT NULL,
  `winner` varchar(30) DEFAULT NULL,
  `gia` int(11) DEFAULT NULL,
  `ghichu` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `ketquadaugia`
--

INSERT INTO `ketquadaugia` (`maphien`, `winner`, `gia`, `ghichu`) VALUES
(2, 'user2', 140000, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaisp`
--

DROP TABLE IF EXISTS `loaisp`;
CREATE TABLE `loaisp` (
  `maloai` int(11) NOT NULL,
  `tenloai` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `loaisp`
--

INSERT INTO `loaisp` (`maloai`, `tenloai`) VALUES
(1, 'Công nghệ'),
(2, 'Thời trang'),
(3, 'Gia dụng'),
(4, 'Khác');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoimuabiloai`
--

DROP TABLE IF EXISTS `nguoimuabiloai`;
CREATE TABLE `nguoimuabiloai` (
  `maphien` int(11) NOT NULL,
  `nguoibiloai` varchar(30) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanxet`
--

DROP TABLE IF EXISTS `nhanxet`;
CREATE TABLE `nhanxet` (
  `id` int(11) NOT NULL,
  `tenuser` varchar(30) NOT NULL,
  `tennguoinhanxet` varchar(30) NOT NULL,
  `noidung` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phiendaugia`
--

DROP TABLE IF EXISTS `phiendaugia`;
CREATE TABLE `phiendaugia` (
  `maphien` int(11) NOT NULL,
  `sanpham` int(11) NOT NULL,
  `thgianbd` datetime NOT NULL,
  `thgiankt` datetime NOT NULL,
  `giakhoidiem` int(11) NOT NULL,
  `buocgia` int(11) NOT NULL,
  `giahientai` int(11) DEFAULT NULL,
  `nguoigiugia` varchar(30) DEFAULT NULL,
  `giamuangay` int(11) DEFAULT NULL,
  `tinhtrang` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `phiendaugia`
--

INSERT INTO `phiendaugia` (`maphien`, `sanpham`, `thgianbd`, `thgiankt`, `giakhoidiem`, `buocgia`, `giahientai`, `nguoigiugia`, `giamuangay`, `tinhtrang`) VALUES
(1, 1, '2014-12-01 00:00:00', '2017-06-29 13:10:15', 100000, 10000, 140000, 'user1', 1000000, NULL),
(2, 3, '2014-12-01 00:00:00', '2017-06-30 12:00:00', 100000, 10000, 100000, 'user1', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE `sanpham` (
  `masp` int(11) NOT NULL,
  `tensp` varchar(200) NOT NULL,
  `nguoidang` varchar(30) NOT NULL,
  `loai` int(11) NOT NULL,
  `motaHTML` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`masp`, `tensp`, `nguoidang`, `loai`, `motaHTML`) VALUES
(1, 'Nokia 7610', 'user1', 1, '<UL>\r\n    <LI>Máy ảnh có độ phân giải 1 megapixel</LI>\r\n    <LI>Màn hình 65.536 màu, rộng 2,1 inch, 176 X 208 pixel với đồ họa sắc nét, độ phân giải cao</LI>\r\n    <LI>Quay phim video lên đến 10 phút với hình ảnh sắc nét hơn</LI>\r\n    <LI>Kinh nghiệm đa phương tiện được tăng cường</LI>\r\n    <LI>Streaming video &amp; âm thanh với RealOne Player (hỗ trợ các dạng thức MP3/AAC).</LI>\r\n    <LI>Nâng cấp cho những đoạn phim cá nhân của bạn bằng các tính năng chỉnh sửa tự động thông minh</LI>\r\n    <LI>In ảnh chất lượng cao từ nhà, văn phòng, kios và qua mạng</LI>\r\n    <LI>Dễ dàng kết nối vớI máy PC để lưu trữ và chia sẻ (bằng cáp USB, PopPort, công nghệ Bluetooth)</LI>\r\n    <LI>48 nhạc chuông đa âm sắc, True tones. Mạng GSM 900 / GSM 1800 / GSM 1900</LI>\r\n    <LI>Kích thước 109 x 53 x 19 mm, 93 cc</LI>\r\n    <LI>Trọng lượng 118 g</LI>\r\n    <LI>Hiển thị: Loại TFT, 65.536 màu</LI>\r\n    <LI>Kích cở: 176 x 208 pixels </LI>\r\n</UL>\r\n'),
(3, 'Nokia N72', 'user1', 1, '<UL>\r\n    <LI>Camera mega pixel : 2 mega pixel</LI>\r\n    <LI>Bộ nhớ trong : 16 - 31 mb</LI>\r\n    <LI>Chức năng : quay phim, ghi âm, nghe đài FM</LI>\r\n    <LI>Hỗ trợ: Bluetooth, thẻ nhớ nài, nhạc MP3 &lt;br/&gt;</LI>\r\n    <LI>Trọng lượng (g) : 124g</LI>\r\n    <LI>Kích thước (mm) : 109 x 53 x 21.8 mm</LI>\r\n    <LI>Ngôn ngữ : Có tiếng việt</LI>\r\n    <LI>Hệ điều hành: Symbian OS 8.1</LI>\r\n</UL>\r\n'),
(4, 'Motorola W377', 'user1', 1, '<UL>\r\n    <LI>General: 2G Network, GSM 900 / 1800 / 1900</LI>\r\n    <LI>Size:&nbsp; 99 x 45 x 18.6 mm, 73 cc</LI>\r\n    <LI>Weight: 95 g</LI>\r\n    <LI>Display: type TFT, 65K colors</LI>\r\n    <LI>Size: 128 x 160 pixels, 28 x 35 mm</LI>\r\n</UL>\r\n'),
(5, 'Áo thun nữ', 'user1', 2, '<UL>\r\n    <LI>Loại hàng: Hàng trong nước</LI>\r\n    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>\r\n</UL>\r\n'),
(6, 'Áo bé trai', 'user1', 2, '<UL>\r\n    <LI>Quần áo bé trai</LI>\r\n    <LI>Loại hàng: Hàng trong nước</LI>\r\n    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>\r\n</UL>\r\n'),
(7, 'Đầm dạ hội ánh kim', 'user1', 2, '<UL>\r\n    <LI>Màu sắc: Khuynh hướng ánh kim có thể thể hiện trên vàng, bạc, đỏ tía, xanh biển, vàng tím, trắng và đen.</LI>\r\n    <LI>Một số biến tấu mang tính vui nhộn là vàng chanh, màu hoa vân anh và ngọc lam; trong đó hoàng kim và nhũ bạc khá phổ biến.</LI>\r\n    <LI>Phong cách: Diềm đăng ten, rủ xuống theo chiều thẳng đứng, nhiều lớp, cổ chẻ sâu, eo chít cao tới ngực... được biến tấu tùy theo mỗi nhà thiết kế.</LI>\r\n</UL>\r\n');

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `sanphamchuadang`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `sanphamchuadang`;
CREATE TABLE `sanphamchuadang` (
`masp` int(11)
,`tensp` varchar(200)
,`nguoidang` varchar(30)
,`loai` int(11)
,`motaHTML` varchar(1000)
,`tenloai` varchar(100)
,`urlhinhanh` varchar(100)
);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `seller`
--

DROP TABLE IF EXISTS `seller`;
CREATE TABLE `seller` (
  `tenuser` varchar(30) NOT NULL,
  `quyenduocban` tinyint(1) NOT NULL,
  `thoigianxinban` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `soluotdaugia`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `soluotdaugia`;
CREATE TABLE `soluotdaugia` (
`maphien` int(11)
,`soluotdau` bigint(21)
);

-- --------------------------------------------------------

--
-- Cấu trúc đóng vai cho view `topphiendaugia`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `topphiendaugia`;
CREATE TABLE `topphiendaugia` (
`maphien` int(11)
,`masp` int(11)
,`tensp` varchar(200)
,`nguoiban` varchar(30)
,`motaHTML` varchar(1000)
,`soluotdau` bigint(21)
,`nguoigiugia` varchar(30)
,`giahientai` int(11)
,`buocgia` int(11)
,`giamuangay` int(11)
,`thgianbd` datetime
,`thgiankt` datetime
,`urlhinhanh` varchar(100)
);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `tenuser` varchar(20) NOT NULL,
  `matkhau` varchar(128) NOT NULL,
  `hoten` varchar(30) NOT NULL,
  `diachi` varchar(100) NOT NULL,
  `email` varchar(30) NOT NULL,
  `diemcong` int(11) DEFAULT NULL,
  `diemtru` int(11) DEFAULT NULL,
  `roll` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`tenuser`, `matkhau`, `hoten`, `diachi`, `email`, `diemcong`, `diemtru`, `roll`) VALUES
('admin', 'admin', 'nguyen thanh huong', 'quan 1', 'nth193@gmail.com', 0, 0, 1),
('user1', 'user1', 'user1', 'hcm', 'hanhphuclagi00@gmail.com', 0, 0, 0),
('user2', 'user2', 'user2', 'hcm', 'longlangdasoi@yahoo.com.vn', 0, 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `yeuthich`
--

DROP TABLE IF EXISTS `yeuthich`;
CREATE TABLE `yeuthich` (
  `id` int(11) NOT NULL,
  `tenuser` varchar(30) NOT NULL,
  `masp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `sanphamchuadang`
--
DROP TABLE IF EXISTS `sanphamchuadang`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `sanphamchuadang`  AS  select `sp`.`masp` AS `masp`,`sp`.`tensp` AS `tensp`,`sp`.`nguoidang` AS `nguoidang`,`sp`.`loai` AS `loai`,`sp`.`motaHTML` AS `motaHTML`,`l`.`tenloai` AS `tenloai`,`h`.`urlhinhanh` AS `urlhinhanh` from ((`sanpham` `sp` join `loaisp` `l`) join `hinhanh` `h`) where ((`sp`.`loai` = `l`.`maloai`) and (`sp`.`masp` = `h`.`masp`) and (not(`sp`.`masp` in (select `top`.`masp` from `topphiendaugia` `top`)))) group by `sp`.`masp` order by `sp`.`loai` ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `soluotdaugia`
--
DROP TABLE IF EXISTS `soluotdaugia`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `soluotdaugia`  AS  select `ct`.`maphien` AS `maphien`,count(0) AS `soluotdau` from `chitietphien` `ct` group by `ct`.`maphien` ;

-- --------------------------------------------------------

--
-- Cấu trúc cho view `topphiendaugia`
--
DROP TABLE IF EXISTS `topphiendaugia`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `topphiendaugia`  AS  select `p`.`maphien` AS `maphien`,`sp`.`masp` AS `masp`,`sp`.`tensp` AS `tensp`,`sp`.`nguoidang` AS `nguoiban`,`sp`.`motaHTML` AS `motaHTML`,`luot`.`soluotdau` AS `soluotdau`,`p`.`nguoigiugia` AS `nguoigiugia`,`p`.`giahientai` AS `giahientai`,`p`.`buocgia` AS `buocgia`,`p`.`giamuangay` AS `giamuangay`,`p`.`thgianbd` AS `thgianbd`,`p`.`thgiankt` AS `thgiankt`,`h`.`urlhinhanh` AS `urlhinhanh` from (((`phiendaugia` `p` join `soluotdaugia` `luot`) join `sanpham` `sp`) join `hinhanh` `h`) where ((`p`.`sanpham` = `sp`.`masp`) and (`p`.`maphien` = `luot`.`maphien`) and (`sp`.`masp` = `h`.`masp`) and ((to_days(`p`.`thgiankt`) - to_days(now())) > 0)) group by `p`.`maphien` ;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chitietphien`
--
ALTER TABLE `chitietphien`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `daugiatudong`
--
ALTER TABLE `daugiatudong`
  ADD PRIMARY KEY (`maphien`,`nguoidaugia`);

--
-- Chỉ mục cho bảng `hinhanh`
--
ALTER TABLE `hinhanh`
  ADD PRIMARY KEY (`masp`,`urlhinhanh`);

--
-- Chỉ mục cho bảng `ketquadaugia`
--
ALTER TABLE `ketquadaugia`
  ADD PRIMARY KEY (`maphien`);

--
-- Chỉ mục cho bảng `loaisp`
--
ALTER TABLE `loaisp`
  ADD PRIMARY KEY (`maloai`);

--
-- Chỉ mục cho bảng `nguoimuabiloai`
--
ALTER TABLE `nguoimuabiloai`
  ADD PRIMARY KEY (`maphien`,`nguoibiloai`);

--
-- Chỉ mục cho bảng `nhanxet`
--
ALTER TABLE `nhanxet`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `phiendaugia`
--
ALTER TABLE `phiendaugia`
  ADD PRIMARY KEY (`maphien`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`masp`);

--
-- Chỉ mục cho bảng `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`tenuser`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`tenuser`);

--
-- Chỉ mục cho bảng `yeuthich`
--
ALTER TABLE `yeuthich`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `chitietphien`
--
ALTER TABLE `chitietphien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT cho bảng `loaisp`
--
ALTER TABLE `loaisp`
  MODIFY `maloai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT cho bảng `nhanxet`
--
ALTER TABLE `nhanxet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT cho bảng `phiendaugia`
--
ALTER TABLE `phiendaugia`
  MODIFY `maphien` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `masp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT cho bảng `yeuthich`
--
ALTER TABLE `yeuthich`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
