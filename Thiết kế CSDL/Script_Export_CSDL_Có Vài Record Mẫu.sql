-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: daugia
-- ------------------------------------------------------
-- Server version	5.5.54-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chitietphien`
--

DROP TABLE IF EXISTS `chitietphien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chitietphien` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `maphien` int(11) NOT NULL,
  `thoigian` datetime DEFAULT NULL,
  `nguoidaugia` varchar(30) NOT NULL,
  `giadau` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietphien`
--

LOCK TABLES `chitietphien` WRITE;
/*!40000 ALTER TABLE `chitietphien` DISABLE KEYS */;
INSERT INTO `chitietphien` VALUES (1,1,'2014-12-01 00:00:00','user1',120000),(2,1,'2014-12-01 00:01:00','user1',130000),(3,1,'2014-12-01 00:02:00','user1',140000),(4,2,'2014-12-01 00:01:00','user1',110000);
/*!40000 ALTER TABLE `chitietphien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daugiatudong`
--

DROP TABLE IF EXISTS `daugiatudong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daugiatudong` (
  `maphien` int(11) NOT NULL,
  `nguoidaugia` varchar(30) NOT NULL,
  `giamax` int(11) NOT NULL,
  PRIMARY KEY (`maphien`,`nguoidaugia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daugiatudong`
--

LOCK TABLES `daugiatudong` WRITE;
/*!40000 ALTER TABLE `daugiatudong` DISABLE KEYS */;
/*!40000 ALTER TABLE `daugiatudong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hinhanh`
--

DROP TABLE IF EXISTS `hinhanh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hinhanh` (
  `masp` int(11) NOT NULL,
  `urlhinhanh` varchar(100) NOT NULL,
  PRIMARY KEY (`masp`,`urlhinhanh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hinhanh`
--

LOCK TABLES `hinhanh` WRITE;
/*!40000 ALTER TABLE `hinhanh` DISABLE KEYS */;
INSERT INTO `hinhanh` VALUES (1,'imgs/sanpham/1/1.jpg'),(1,'imgs/sanpham/1/2.jpg'),(1,'imgs/sanpham/1/3.jpg'),(3,'imgs/sanpham/2/1.jpg'),(4,'imgs/sanpham/1/1.jpg'),(4,'imgs/sanpham/1/2.jpg'),(4,'imgs/sanpham/1/3.jpg'),(5,'imgs/sanpham/1/1.jpg'),(5,'imgs/sanpham/1/2.jpg'),(5,'imgs/sanpham/1/3.jpg');
/*!40000 ALTER TABLE `hinhanh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ketquadaugia`
--

DROP TABLE IF EXISTS `ketquadaugia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ketquadaugia` (
  `maphien` int(11) NOT NULL,
  `winner` varchar(30) DEFAULT NULL,
  `gia` int(11) DEFAULT NULL,
  `ghichu` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`maphien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ketquadaugia`
--

LOCK TABLES `ketquadaugia` WRITE;
/*!40000 ALTER TABLE `ketquadaugia` DISABLE KEYS */;
INSERT INTO `ketquadaugia` VALUES (2,'user2',140000,NULL);
/*!40000 ALTER TABLE `ketquadaugia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaisp`
--

DROP TABLE IF EXISTS `loaisp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loaisp` (
  `maloai` int(11) NOT NULL AUTO_INCREMENT,
  `tenloai` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`maloai`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaisp`
--

LOCK TABLES `loaisp` WRITE;
/*!40000 ALTER TABLE `loaisp` DISABLE KEYS */;
INSERT INTO `loaisp` VALUES (1,'Công nghệ'),(2,'Thời trang'),(3,'Gia dụng'),(4,'Khác');
/*!40000 ALTER TABLE `loaisp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoimuabiloai`
--

DROP TABLE IF EXISTS `nguoimuabiloai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nguoimuabiloai` (
  `maphien` int(11) NOT NULL,
  `nguoibiloai` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`maphien`,`nguoibiloai`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoimuabiloai`
--

LOCK TABLES `nguoimuabiloai` WRITE;
/*!40000 ALTER TABLE `nguoimuabiloai` DISABLE KEYS */;
/*!40000 ALTER TABLE `nguoimuabiloai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanxet`
--

DROP TABLE IF EXISTS `nhanxet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nhanxet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tenuser` varchar(30) NOT NULL,
  `tennguoinhanxet` varchar(30) NOT NULL,
  `noidung` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanxet`
--

LOCK TABLES `nhanxet` WRITE;
/*!40000 ALTER TABLE `nhanxet` DISABLE KEYS */;
/*!40000 ALTER TABLE `nhanxet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phiendaugia`
--

DROP TABLE IF EXISTS `phiendaugia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phiendaugia`
--

LOCK TABLES `phiendaugia` WRITE;
/*!40000 ALTER TABLE `phiendaugia` DISABLE KEYS */;
INSERT INTO `phiendaugia` VALUES (1,1,'2014-12-01 00:00:00','2017-06-29 13:10:15',100000,10000,140000,'user1',1000000,NULL),(2,3,'2014-12-01 00:00:00','2017-06-30 12:00:00',100000,10000,100000,'user1',NULL,NULL);
/*!40000 ALTER TABLE `phiendaugia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sanpham` (
  `masp` int(11) NOT NULL AUTO_INCREMENT,
  `tensp` varchar(200) NOT NULL,
  `nguoidang` varchar(30) NOT NULL,
  `loai` int(11) NOT NULL,
  `motaHTML` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`masp`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES (1,'Nokia 7610','user1',1,'<UL>\r\n    <LI>Máy ảnh có độ phân giải 1 megapixel</LI>\r\n    <LI>Màn hình 65.536 màu, rộng 2,1 inch, 176 X 208 pixel với đồ họa sắc nét, độ phân giải cao</LI>\r\n    <LI>Quay phim video lên đến 10 phút với hình ảnh sắc nét hơn</LI>\r\n    <LI>Kinh nghiệm đa phương tiện được tăng cường</LI>\r\n    <LI>Streaming video &amp; âm thanh với RealOne Player (hỗ trợ các dạng thức MP3/AAC).</LI>\r\n    <LI>Nâng cấp cho những đoạn phim cá nhân của bạn bằng các tính năng chỉnh sửa tự động thông minh</LI>\r\n    <LI>In ảnh chất lượng cao từ nhà, văn phòng, kios và qua mạng</LI>\r\n    <LI>Dễ dàng kết nối vớI máy PC để lưu trữ và chia sẻ (bằng cáp USB, PopPort, công nghệ Bluetooth)</LI>\r\n    <LI>48 nhạc chuông đa âm sắc, True tones. Mạng GSM 900 / GSM 1800 / GSM 1900</LI>\r\n    <LI>Kích thước 109 x 53 x 19 mm, 93 cc</LI>\r\n    <LI>Trọng lượng 118 g</LI>\r\n    <LI>Hiển thị: Loại TFT, 65.536 màu</LI>\r\n    <LI>Kích cở: 176 x 208 pixels </LI>\r\n</UL>\r\n'),(3,'Nokia N72','user1',1,'<UL>\r\n    <LI>Camera mega pixel : 2 mega pixel</LI>\r\n    <LI>Bộ nhớ trong : 16 - 31 mb</LI>\r\n    <LI>Chức năng : quay phim, ghi âm, nghe đài FM</LI>\r\n    <LI>Hỗ trợ: Bluetooth, thẻ nhớ nài, nhạc MP3 &lt;br/&gt;</LI>\r\n    <LI>Trọng lượng (g) : 124g</LI>\r\n    <LI>Kích thước (mm) : 109 x 53 x 21.8 mm</LI>\r\n    <LI>Ngôn ngữ : Có tiếng việt</LI>\r\n    <LI>Hệ điều hành: Symbian OS 8.1</LI>\r\n</UL>\r\n'),(4,'Motorola W377','user1',1,'<UL>\r\n    <LI>General: 2G Network, GSM 900 / 1800 / 1900</LI>\r\n    <LI>Size:&nbsp; 99 x 45 x 18.6 mm, 73 cc</LI>\r\n    <LI>Weight: 95 g</LI>\r\n    <LI>Display: type TFT, 65K colors</LI>\r\n    <LI>Size: 128 x 160 pixels, 28 x 35 mm</LI>\r\n</UL>\r\n'),(5,'Áo thun nữ','user1',2,'<UL>\r\n    <LI>Loại hàng: Hàng trong nước</LI>\r\n    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>\r\n</UL>\r\n'),(6,'Áo bé trai','user1',2,'<UL>\r\n    <LI>Quần áo bé trai</LI>\r\n    <LI>Loại hàng: Hàng trong nước</LI>\r\n    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>\r\n</UL>\r\n'),(7,'Đầm dạ hội ánh kim','user1',2,'<UL>\r\n    <LI>Màu sắc: Khuynh hướng ánh kim có thể thể hiện trên vàng, bạc, đỏ tía, xanh biển, vàng tím, trắng và đen.</LI>\r\n    <LI>Một số biến tấu mang tính vui nhộn là vàng chanh, màu hoa vân anh và ngọc lam; trong đó hoàng kim và nhũ bạc khá phổ biến.</LI>\r\n    <LI>Phong cách: Diềm đăng ten, rủ xuống theo chiều thẳng đứng, nhiều lớp, cổ chẻ sâu, eo chít cao tới ngực... được biến tấu tùy theo mỗi nhà thiết kế.</LI>\r\n</UL>\r\n');
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `sanphamchuadang`
--

DROP TABLE IF EXISTS `sanphamchuadang`;
/*!50001 DROP VIEW IF EXISTS `sanphamchuadang`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `sanphamchuadang` AS SELECT 
 1 AS `masp`,
 1 AS `tensp`,
 1 AS `nguoidang`,
 1 AS `loai`,
 1 AS `motaHTML`,
 1 AS `tenloai`,
 1 AS `urlhinhanh`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seller` (
  `tenuser` varchar(30) NOT NULL,
  `quyenduocban` tinyint(1) NOT NULL,
  `thoigianxinban` date DEFAULT NULL,
  PRIMARY KEY (`tenuser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `soluotdaugia`
--

DROP TABLE IF EXISTS `soluotdaugia`;
/*!50001 DROP VIEW IF EXISTS `soluotdaugia`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `soluotdaugia` AS SELECT 
 1 AS `maphien`,
 1 AS `soluotdau`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `topphiendaugia`
--

DROP TABLE IF EXISTS `topphiendaugia`;
/*!50001 DROP VIEW IF EXISTS `topphiendaugia`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `topphiendaugia` AS SELECT 
 1 AS `maphien`,
 1 AS `masp`,
 1 AS `tensp`,
 1 AS `nguoiban`,
 1 AS `motaHTML`,
 1 AS `soluotdau`,
 1 AS `nguoigiugia`,
 1 AS `giahientai`,
 1 AS `buocgia`,
 1 AS `giamuangay`,
 1 AS `thgianbd`,
 1 AS `thgiankt`,
 1 AS `urlhinhanh`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `tenuser` varchar(20) NOT NULL,
  `matkhau` varchar(128) NOT NULL,
  `hoten` varchar(30) NOT NULL,
  `diachi` varchar(100) NOT NULL,
  `email` varchar(30) NOT NULL,
  `diemcong` int(11) DEFAULT NULL,
  `diemtru` int(11) DEFAULT NULL,
  PRIMARY KEY (`tenuser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yeuthich`
--

DROP TABLE IF EXISTS `yeuthich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `yeuthich` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tenuser` varchar(30) NOT NULL,
  `masp` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yeuthich`
--

LOCK TABLES `yeuthich` WRITE;
/*!40000 ALTER TABLE `yeuthich` DISABLE KEYS */;
/*!40000 ALTER TABLE `yeuthich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `sanphamchuadang`
--

/*!50001 DROP VIEW IF EXISTS `sanphamchuadang`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `sanphamchuadang` AS select distinct `sp`.`masp` AS `masp`,`sp`.`tensp` AS `tensp`,`sp`.`nguoidang` AS `nguoidang`,`sp`.`loai` AS `loai`,`sp`.`motaHTML` AS `motaHTML`,`l`.`tenloai` AS `tenloai`,`h`.`urlhinhanh` AS `urlhinhanh` from ((`sanpham` `sp` join `loaisp` `l`) join `hinhanh` `h`) where ((`sp`.`loai` = `l`.`maloai`) and (`sp`.`masp` = `h`.`masp`) and (not(`sp`.`masp` in (select `top`.`masp` from `topphiendaugia` `top`)))) group by `sp`.`masp` order by `sp`.`loai` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `soluotdaugia`
--

/*!50001 DROP VIEW IF EXISTS `soluotdaugia`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `soluotdaugia` AS select `ct`.`maphien` AS `maphien`,count(0) AS `soluotdau` from `chitietphien` `ct` group by `ct`.`maphien` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `topphiendaugia`
--

/*!50001 DROP VIEW IF EXISTS `topphiendaugia`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `topphiendaugia` AS select `p`.`maphien` AS `maphien`,`sp`.`masp` AS `masp`,`sp`.`tensp` AS `tensp`,`sp`.`nguoidang` AS `nguoiban`,`sp`.`motaHTML` AS `motaHTML`,`luot`.`soluotdau` AS `soluotdau`,`p`.`nguoigiugia` AS `nguoigiugia`,`p`.`giahientai` AS `giahientai`,`p`.`buocgia` AS `buocgia`,`p`.`giamuangay` AS `giamuangay`,`p`.`thgianbd` AS `thgianbd`,`p`.`thgiankt` AS `thgiankt`,`h`.`urlhinhanh` AS `urlhinhanh` from (((`phiendaugia` `p` join `soluotdaugia` `luot`) join `sanpham` `sp`) join `hinhanh` `h`) where ((`p`.`sanpham` = `sp`.`masp`) and (`p`.`maphien` = `luot`.`maphien`) and (`sp`.`masp` = `h`.`masp`) and ((to_days(`p`.`thgiankt`) - to_days(now())) > 0)) group by `p`.`maphien` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-27  1:40:10
