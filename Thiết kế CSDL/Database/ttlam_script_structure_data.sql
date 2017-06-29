/*
Navicat MySQL Data Transfer

Source Server         : daugia
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : daugia

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-06-29 19:27:34
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
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of chitietphien
-- ----------------------------
INSERT INTO `chitietphien` VALUES ('143', '4', '2017-06-29 19:01:56', '2222', '4');
INSERT INTO `chitietphien` VALUES ('144', '4', '2017-06-29 19:02:00', '2222', '5');
INSERT INTO `chitietphien` VALUES ('145', '4', '2017-06-29 19:02:08', '3333', '6');
INSERT INTO `chitietphien` VALUES ('146', '4', '2017-06-29 19:03:08', '3333', '7');
INSERT INTO `chitietphien` VALUES ('147', '4', '2017-06-29 19:03:21', '3333', '8');
INSERT INTO `chitietphien` VALUES ('148', '4', '2017-06-29 19:03:21', '3333', '9');
INSERT INTO `chitietphien` VALUES ('149', '4', '2017-06-29 19:03:54', '3333', '10');
INSERT INTO `chitietphien` VALUES ('150', '4', '2017-06-29 19:03:54', '3333', '11');
INSERT INTO `chitietphien` VALUES ('151', '4', '2017-06-29 19:04:20', '3333', '12');
INSERT INTO `chitietphien` VALUES ('152', '4', '2017-06-29 19:04:22', '3333', '13');
INSERT INTO `chitietphien` VALUES ('153', '4', '2017-06-29 19:04:29', '3333', '20');
INSERT INTO `chitietphien` VALUES ('154', '4', '2017-06-29 19:04:29', '3333', '21');
INSERT INTO `chitietphien` VALUES ('155', '4', '2017-06-29 19:05:30', '3333', '21');
INSERT INTO `chitietphien` VALUES ('156', '4', '2017-06-29 19:05:30', '2222', '22');
INSERT INTO `chitietphien` VALUES ('157', '4', '2017-06-29 19:05:36', '2222', '23');
INSERT INTO `chitietphien` VALUES ('158', '4', '2017-06-29 19:05:48', '3333', '24');
INSERT INTO `chitietphien` VALUES ('159', '4', '2017-06-29 19:06:10', '2222', '22');
INSERT INTO `chitietphien` VALUES ('160', '4', '2017-06-29 19:06:10', '3333', '23');
INSERT INTO `chitietphien` VALUES ('161', '4', '2017-06-29 19:06:37', '3333', '23');
INSERT INTO `chitietphien` VALUES ('162', '4', '2017-06-29 19:06:37', '3333', '24');
INSERT INTO `chitietphien` VALUES ('163', '4', '2017-06-29 19:07:04', '2222', '25');
INSERT INTO `chitietphien` VALUES ('164', '4', '2017-06-29 19:07:04', '3333', '26');
INSERT INTO `chitietphien` VALUES ('165', '4', '2017-06-29 19:14:40', '2222', '27');
INSERT INTO `chitietphien` VALUES ('166', '4', '2017-06-29 19:14:40', '3333', '28');
INSERT INTO `chitietphien` VALUES ('167', '4', '2017-06-29 19:14:48', '2222', '40');
INSERT INTO `chitietphien` VALUES ('168', '4', '2017-06-29 19:14:48', '3333', '41');
INSERT INTO `chitietphien` VALUES ('169', '4', '2017-06-29 19:16:25', '2222', '60');
INSERT INTO `chitietphien` VALUES ('170', '4', '2017-06-29 19:16:25', '3333', '60');
INSERT INTO `chitietphien` VALUES ('171', '4', '2017-06-29 19:16:31', '3333', '60');
INSERT INTO `chitietphien` VALUES ('172', '4', '2017-06-29 19:16:31', '2222', '61');
INSERT INTO `chitietphien` VALUES ('173', '4', '2017-06-29 19:16:36', '2222', '62');
INSERT INTO `chitietphien` VALUES ('174', '4', '2017-06-29 19:16:45', '3333', '63');
INSERT INTO `chitietphien` VALUES ('175', '4', '2017-06-29 19:16:45', '2222', '64');
INSERT INTO `chitietphien` VALUES ('176', '4', '2017-06-29 19:16:56', '2222', '70');
INSERT INTO `chitietphien` VALUES ('177', '4', '2017-06-29 19:16:56', '3333', '71');

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
INSERT INTO `daugiatudong` VALUES ('4', '3333', '71');

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
  `loai` varchar(255) DEFAULT NULL,
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
INSERT INTO `phiendaugia` VALUES ('4', '7', '2017-06-28 19:02:00', '2017-06-30 00:00:00', '1', '1', '71', '3333', '1', '1');

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
INSERT INTO `sessions` VALUES ('14YDz5xfxTuCZ5suzgpJLs2kwoFSGxvq', '1498738016', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32395431323A30363A35362E3239335A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('1FaoZOv3bvWBfTw3udP6D6k3X3IP7-Lm', '1498737943', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32395431323A30353A34322E3535305A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('1LXOGcSIxCCPB0qGHth35ssSxPmf_Vl_', '1498737123', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32395431313A35323A30322E3835365A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('Ic3mayKeGHb0JkiNLnQAhKRSZWRYG9S-', '1498819612', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A6E756C6C2C2265787069726573223A6E756C6C2C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73657D);
INSERT INTO `sessions` VALUES ('IsP8f5gXVwk79ONMGr6H4hW7l26VAL5h', '1498810751', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32395430383A31393A31302E3431305A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('Rn4m6wBbP_6qlLZI9yvWmxLsn-xH_Pho', '1498804447', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A6E756C6C2C2265787069726573223A6E756C6C2C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A747275652C2275736572223A7B2274656E75736572223A2232222C22686F74656E223A2232222C22656D61696C223A223240676D61696C2E636F6D222C227065726D697373696F6E223A307D7D);
INSERT INTO `sessions` VALUES ('chpiG9tQ9pD6RNACRJMPK1RBUrJQmvj7', '1498737871', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32395431323A30343A33302E3930345A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('gv3v6caDItYNc_342L8HRMJg6SiLGFJ2', '1498825585', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A6E756C6C2C2265787069726573223A6E756C6C2C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A747275652C2275736572223A7B2274656E75736572223A2233333333222C22686F74656E223A2233222C22656D61696C223A223340676D61696C2E636F6D222C227065726D697373696F6E223A307D7D);
INSERT INTO `sessions` VALUES ('jxLyrtLQSLHuvTC_j8Wt-rmXaqwKUmnb', '1498738596', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32395431323A31363A33362E3439315A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('oY6ybgezfKYYBOHcg0oAT0Bj7TvSu4ZP', '1498737650', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32395431323A30303A35302E3132345A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('ozMKhABEYaUj3ZTQ3gpqfSPThwuNxHg7', '1498788804', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A6E756C6C2C2265787069726573223A6E756C6C2C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A747275652C2275736572223A7B2274656E75736572223A2232222C22686F74656E223A2232222C22656D61696C223A223240676D61696C2E636F6D222C227065726D697373696F6E223A307D7D);
INSERT INTO `sessions` VALUES ('qr11WdXZALf_oyHco59mrIyR-LOdywhX', '1498737722', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A2D313030302C2265787069726573223A22323031372D30362D32395431323A30323A30312E3633365A222C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A66616C73652C2275736572223A6E756C6C7D);
INSERT INTO `sessions` VALUES ('queO_YaFSXt02i45mA2UGh9PjE9IkjN8', '1498817835', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A6E756C6C2C2265787069726573223A6E756C6C2C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A747275652C2275736572223A7B2274656E75736572223A2232323232222C22686F74656E223A2232222C22656D61696C223A223240676D61696C2E636F6D222C227065726D697373696F6E223A307D7D);
INSERT INTO `sessions` VALUES ('x1bdbGRttLCUWTMmmHbgHB64UfqJhF8f', '1498741930', 0x7B22636F6F6B6965223A7B226F726967696E616C4D6178416765223A6E756C6C2C2265787069726573223A6E756C6C2C22687474704F6E6C79223A747275652C2270617468223A222F227D2C2269734C6F67676564223A747275652C2275736572223A7B2274656E75736572223A2233222C22686F74656E223A2261222C22656D61696C223A226140676D61696C2E636F6D222C227065726D697373696F6E223A307D7D);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `tenuser` varchar(30) NOT NULL,
  `matkhau` varchar(35) NOT NULL,
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
INSERT INTO `users` VALUES ('1', 'c81e728d9d4c2f636f067f89cc14862c', '1', '1', '1@gmail.com', '1', '2', '1');
INSERT INTO `users` VALUES ('2222', 'c81e728d9d4c2f636f067f89cc14862c', '2', '', '2@gmail.com', '0', '0', '0');
INSERT INTO `users` VALUES ('3333', 'eccbc87e4b5ce2fe28308fd9f2a7baf3', '3', '', '3@gmail.com', '0', '0', '0');

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

