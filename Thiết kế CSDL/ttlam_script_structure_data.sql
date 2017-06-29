/*
Navicat MySQL Data Transfer

Source Server         : qlbh
Source Server Version : 50505
Source Host           : 127.0.0.1:3306
Source Database       : daugia

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-06-29 07:46:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for chitietphien
-- ----------------------------
DROP TABLE IF EXISTS `chitietphien`;
CREATE TABLE `chitietphien` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `maphien` int(11) NOT NULL,
  `thoigian` datetime DEFAULT NULL,
  `nguoidaugia` varchar(30) NOT NULL,
  `giadau` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of chitietphien
-- ----------------------------
INSERT INTO `chitietphien` VALUES ('1', '1', '2014-12-01 00:00:00', 'user1', '120000');
INSERT INTO `chitietphien` VALUES ('2', '1', '2014-12-01 00:01:00', 'user1', '130000');
INSERT INTO `chitietphien` VALUES ('3', '1', '2014-12-01 00:02:00', 'user1', '140000');
INSERT INTO `chitietphien` VALUES ('4', '2', '2014-12-01 00:01:00', 'user1', '110000');

-- ----------------------------
-- Table structure for daugiatudong
-- ----------------------------
DROP TABLE IF EXISTS `daugiatudong`;
CREATE TABLE `daugiatudong` (
  `maphien` int(11) NOT NULL,
  `nguoidaugia` varchar(30) NOT NULL,
  `giamax` int(11) NOT NULL,
  PRIMARY KEY (`maphien`,`nguoidaugia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of daugiatudong
-- ----------------------------

-- ----------------------------
-- Table structure for hinhanh
-- ----------------------------
DROP TABLE IF EXISTS `hinhanh`;
CREATE TABLE `hinhanh` (
  `masp` int(11) NOT NULL,
  `urlhinhanh` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of hinhanh
-- ----------------------------
INSERT INTO `hinhanh` VALUES ('1', 'imgs/sanpham/1/1.jpg');
INSERT INTO `hinhanh` VALUES ('2', 'https://cdn.tgdd.vn/Products/Images/42/87840/iphone-7-plus-256gb-2-400x460.png');
INSERT INTO `hinhanh` VALUES ('7', 'upload/e5b6ea08cb77dae654edf1cf4b4a3dcd');

-- ----------------------------
-- Table structure for ketquadaugia
-- ----------------------------
DROP TABLE IF EXISTS `ketquadaugia`;
CREATE TABLE `ketquadaugia` (
  `maphien` int(11) NOT NULL,
  `winner` varchar(30) DEFAULT NULL,
  `gia` int(11) DEFAULT NULL,
  `ghichu` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`maphien`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ketquadaugia
-- ----------------------------

-- ----------------------------
-- Table structure for loaisp
-- ----------------------------
DROP TABLE IF EXISTS `loaisp`;
CREATE TABLE `loaisp` (
  `maloai` int(11) NOT NULL AUTO_INCREMENT,
  `tenloai` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`maloai`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of loaisp
-- ----------------------------
INSERT INTO `loaisp` VALUES ('1', 'Công ngh?');
INSERT INTO `loaisp` VALUES ('2', 'Th?i trang');
INSERT INTO `loaisp` VALUES ('3', 'Gia d?ng');
INSERT INTO `loaisp` VALUES ('4', 'Khác');

-- ----------------------------
-- Table structure for nguoimuabiloai
-- ----------------------------
DROP TABLE IF EXISTS `nguoimuabiloai`;
CREATE TABLE `nguoimuabiloai` (
  `maphien` int(11) NOT NULL,
  `nguoibiloai` varchar(30) NOT NULL,
  PRIMARY KEY (`maphien`,`nguoibiloai`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of nguoimuabiloai
-- ----------------------------

-- ----------------------------
-- Table structure for nhanxet
-- ----------------------------
DROP TABLE IF EXISTS `nhanxet`;
CREATE TABLE `nhanxet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tenuser` varchar(30) NOT NULL,
  `tennguoinhanxet` varchar(30) NOT NULL,
  `noidung` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_nhanxet_users` (`tenuser`),
  KEY `fk_nguoinhanxet_users` (`tennguoinhanxet`),
  CONSTRAINT `fk_nguoinhanxet_users` FOREIGN KEY (`tennguoinhanxet`) REFERENCES `users` (`tenuser`),
  CONSTRAINT `fk_nhanxet_users` FOREIGN KEY (`tenuser`) REFERENCES `users` (`tenuser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of nhanxet
-- ----------------------------

-- ----------------------------
-- Table structure for phiendaugia
-- ----------------------------
DROP TABLE IF EXISTS `phiendaugia`;
CREATE TABLE `phiendaugia` (
  `maphien` int(11) NOT NULL AUTO_INCREMENT,
  `sanpham` int(11) NOT NULL,
  `thgianbd` datetime NOT NULL,
  `thgiankt` datetime NOT NULL,
  `giakhoidiem` int(11) NOT NULL,
  `buocgia` int(11) NOT NULL,
  `giahientai` int(11) DEFAULT NULL,
  `nguoigiugia` varchar(30) DEFAULT NULL,
  `giamuangay` int(11) DEFAULT NULL,
  `tinhtrang` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`maphien`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of phiendaugia
-- ----------------------------
INSERT INTO `phiendaugia` VALUES ('1', '1', '2014-12-01 00:00:00', '2014-12-02 00:00:00', '100000', '10000', '100000', null, null, null);
INSERT INTO `phiendaugia` VALUES ('2', '2', '2014-12-01 00:00:00', '2014-12-02 00:00:00', '100000', '10000', '100000', null, null, null);
INSERT INTO `phiendaugia` VALUES ('3', '3', '2017-06-13 10:51:20', '2017-06-30 10:51:24', '10', '1', null, null, null, null);
INSERT INTO `phiendaugia` VALUES ('4', '7', '2017-06-28 19:02:00', '2017-06-30 00:00:00', '11', '1', null, null, '1', '1');

-- ----------------------------
-- Table structure for sanpham
-- ----------------------------
DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE `sanpham` (
  `masp` int(11) NOT NULL AUTO_INCREMENT,
  `tensp` varchar(200) NOT NULL,
  `nguoidang` varchar(30) NOT NULL,
  `loai` int(11) NOT NULL,
  `motaHTML` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`masp`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sanpham
-- ----------------------------
INSERT INTO `sanpham` VALUES ('1', 'Nokia 7610', 'user1', '1', '<UL>\r\n    <LI>Máy ?nh có ?? phân gi?i 1 megapixel</LI>\r\n    <LI>Màn hình 65.536 màu, r?ng 2,1 inch, 176 X 208 pixel v?i ?? h?a s?c nét, ?? phân gi?i cao</LI>\r\n    <LI>Quay phim video lên ??n 10 phút v?i hình ?nh s?c nét h?n</LI>\r\n    <LI>Kinh nghi?m ?a ph??ng ti?n ???c t?ng c??ng</LI>\r\n    <LI>Streaming video &amp; âm thanh v?i RealOne Player (h? tr? các d?ng th?c MP3/AAC).</LI>\r\n    <LI>Nâng c?p cho nh?ng ?o?n phim cá nhân c?a b?n b?ng các tính n?ng ch?nh s?a t? ??ng thông minh</LI>\r\n    <LI>In');
INSERT INTO `sanpham` VALUES ('2', 'Nokia N72', 'user1', '1', '<UL>\r\n    <LI>Camera mega pixel : 2 mega pixel</LI>\r\n    <LI>Bô? nh?? trong : 16 - 31 mb</LI>\r\n    <LI>Ch??c n?ng : quay phim, ghi âm, nghe ?a?i FM</LI>\r\n    <LI>H? tr?: Bluetooth, the? nh?? na?i, nha?c MP3 &lt;br/&gt;</LI>\r\n    <LI>Tro?ng l???ng (g) : 124g</LI>\r\n    <LI>Ki?ch th???c (mm) : 109 x 53 x 21.8 mm</LI>\r\n    <LI>Ngôn ng?? : Có ti?ng vi?t</LI>\r\n    <LI>H? ?i?u hành: Symbian OS 8.1</LI>\r\n</UL>\r\n');
INSERT INTO `sanpham` VALUES ('3', 'Motorola W377', 'user1', '1', '<UL>\r\n    <LI>General: 2G Network, GSM 900 / 1800 / 1900</LI>\r\n    <LI>Size:&nbsp; 99 x 45 x 18.6 mm, 73 cc</LI>\r\n    <LI>Weight: 95 g</LI>\r\n    <LI>Display: type TFT, 65K colors</LI>\r\n    <LI>Size: 128 x 160 pixels, 28 x 35 mm</LI>\r\n</UL>\r\n');
INSERT INTO `sanpham` VALUES ('4', 'Áo thun n?', 'user1', '2', '<UL>\r\n    <LI>Lo?i hàng: Hàng trong n??c</LI>\r\n    <LI>Xu?t x?: Tp H? Chí Minh</LI>\r\n</UL>\r\n');
INSERT INTO `sanpham` VALUES ('5', 'Áo bé trai', 'user1', '2', '<UL>\r\n    <LI>Qu?n áo bé trai</LI>\r\n    <LI>Lo?i hàng: Hàng trong n??c</LI>\r\n    <LI>Xu?t x?: Tp H? Chí Minh</LI>\r\n</UL>\r\n');
INSERT INTO `sanpham` VALUES ('6', '??m d? h?i ánh kim', 'user1', '2', '<UL>\r\n    <LI>Màu s?c: Khuynh h??ng ánh kim có th? th? hi?n trên vàng, b?c, ?? tía, xanh bi?n, vàng tím, tr?ng và ?en.</LI>\r\n    <LI>M?t s? bi?n t?u mang tính vui nh?n là vàng chanh, màu hoa vân anh và ng?c lam; trong ?ó hoàng kim và nh? b?c khá ph? bi?n.</LI>\r\n    <LI>Phong cách: Di?m ??ng ten, r? xu?ng theo chi?u th?ng ??ng, nhi?u l?p, c? ch? sâu, eo chít cao t?i ng?c... ???c bi?n t?u tùy theo m?i nhà thi?t k?.</LI>\r\n</UL>\r\n');
INSERT INTO `sanpham` VALUES ('7', '123', 'user1', '1', '<p>123</p>');

-- ----------------------------
-- Table structure for seller
-- ----------------------------
DROP TABLE IF EXISTS `seller`;
CREATE TABLE `seller` (
  `tenuser` varchar(30) NOT NULL,
  `quyenduocban` tinyint(1) NOT NULL,
  `thoigianxinban` date DEFAULT NULL,
  PRIMARY KEY (`tenuser`),
  CONSTRAINT `fk_seller_users` FOREIGN KEY (`tenuser`) REFERENCES `users` (`tenuser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of seller
-- ----------------------------

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sessions
-- ----------------------------
INSERT INTO `sessions` VALUES ('2D5XP1zguaqRyEN35iRoRDwNYexQUvlm', '1498654193', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32385431323A34393A35332E3339395A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('3570uYrKGOMrT0fRGwtIRV_6CQITL-LW', '1498654738', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32385431323A35383A35372E3934375A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('hh8m1JduIEIpbX3DstNwQMLlluIZYCbp', '1498654751', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32385431323A35393A31312E3439345A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('mdYd8EJ2ZXGvI-iONf_u8fxaEARxOJtI', '1498654493', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32385431323A35343A35332E3134345A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('x1bdbGRttLCUWTMmmHbgHB64UfqJhF8f', '1498741930', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A6E756C6C2C2265787069726573223A6E756C6C2C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A747275652C2275736572223A7B2274656E75736572223A2233222C22686F74656E223A2261222C22656D61696C223A226140676D61696C2E636F6D222C227065726D697373696F6E223A307D7D);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `tenuser` varchar(30) NOT NULL,
  `matkhau` varchar(30) NOT NULL,
  `hoten` varchar(100) NOT NULL,
  `diachi` varchar(100) NOT NULL,
  `email` varchar(30) NOT NULL,
  `diemcong` int(11) DEFAULT NULL,
  `diemtru` int(11) DEFAULT NULL,
  `permission` int(11) NOT NULL,
  PRIMARY KEY (`tenuser`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '1', '1', '1', '1@gmail.com', '1', '2', '1');
INSERT INTO `users` VALUES ('123', '123', '123', '', '123@gmail.com', '0', '0', '0');
INSERT INTO `users` VALUES ('2', 'bbbbb', 'a', 'a', 'a@gmail.com', '0', '0', '2');
INSERT INTO `users` VALUES ('3', '3', 'a', 'a', 'a@gmail.com', '0', '0', '0');
INSERT INTO `users` VALUES ('4', '4', '4', '4', '4@gmail.com', '0', '0', '0');
INSERT INTO `users` VALUES ('5', '5', '5', '5', '5@gmail.com', '0', '0', '0');

-- ----------------------------
-- Table structure for yeuthich
-- ----------------------------
DROP TABLE IF EXISTS `yeuthich`;
CREATE TABLE `yeuthich` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tenuser` varchar(30) NOT NULL,
  `masp` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_yeuthich_users` (`tenuser`),
  KEY `fk_yeuthich_sanpham` (`masp`),
  CONSTRAINT `fk_yeuthich_sanpham` FOREIGN KEY (`masp`) REFERENCES `sanpham` (`masp`),
  CONSTRAINT `fk_yeuthich_users` FOREIGN KEY (`tenuser`) REFERENCES `users` (`tenuser`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of yeuthich
-- ----------------------------
INSERT INTO `yeuthich` VALUES ('1', '1', '1');
INSERT INTO `yeuthich` VALUES ('2', '1', '2');
INSERT INTO `yeuthich` VALUES ('5', '1', '3');
INSERT INTO `yeuthich` VALUES ('6', '1', '5');

-- ----------------------------
-- View structure for sanphamchuadang
-- ----------------------------
DROP VIEW IF EXISTS `sanphamchuadang`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`  VIEW `sanphamchuadang` AS select distinct sp.*, l.tenloai, h.urlhinhanh
from sanpham sp,loaisp l, hinhanh h
where sp.loai = l.maloai and sp.masp = h.masp 
	  and(sp.masp not in (select top.masp
			from topphiendaugia top
		))
group by sp.masp
order by sp.loai ;

-- ----------------------------
-- View structure for sanphamdaban
-- ----------------------------
DROP VIEW IF EXISTS `sanphamdaban`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`  VIEW `sanphamdaban` AS select distinct sp.*, l.tenloai, h.urlhinhanh, kq.winner, kq.gia
from sanpham sp,loaisp l, hinhanh h,
	 phiendaugia p, ketquadaugia kq
where sp.loai = l.maloai and sp.masp = h.masp  and sp.masp = p.sanpham and p.maphien = kq.maphien
group by sp.masp
order by sp.loai ;

-- ----------------------------
-- View structure for search
-- ----------------------------
DROP VIEW IF EXISTS `search`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `search` AS select p.maphien, s.tensp, s.loai, p.giahientai, p.nguoigiugia, p.giamuangay, p.thgianbd, p.thgiankt, h.urlhinhanh
from phiendaugia p, sanpham s, soluotdaugia luot, hinhanh h
where p.sanpham = s.masp AND p.maphien = luot.maphien AND h.masp = s.masp
group by p.maphien ;

-- ----------------------------
-- View structure for soluotdaugia
-- ----------------------------
DROP VIEW IF EXISTS `soluotdaugia`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`  VIEW `soluotdaugia` AS select p.maphien, count(ct.giadau) as soluotdau

from phiendaugia p left outer join chitietphien ct on (p.maphien = ct.maphien)
group by p.maphien ;

-- ----------------------------
-- View structure for topphiendaugia
-- ----------------------------
DROP VIEW IF EXISTS `topphiendaugia`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`  VIEW `topphiendaugia` AS select p.maphien, sp.masp, sp.tensp, sp.nguoidang as nguoiban,sp.motaHTML, luot.soluotdau,
	   p.nguoigiugia , p.giahientai,p.buocgia,p.giamuangay ,p.thgianbd, p.thgiankt,
	   h.urlhinhanh
from phiendaugia p,
	 soluotdaugia luot,
	 sanpham sp , hinhanh h
where p.sanpham = sp.masp and p.maphien = luot.maphien and sp.masp = h.masp and (datediff(p.thgiankt, now()) > 0 ) and p.tinhtrang is not null
group by p.maphien ;
