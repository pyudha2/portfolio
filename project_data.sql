-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: portfolio_db
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `project`
--

LOCK TABLES `Project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `Project` (`id`, `title`, `description`, `imageUrl`, `liveUrl`, `repoUrl`, `techUsed`, `order`, `createdAt`, `updatedAt`, `type`) VALUES ('cmsvybova0000zwi5em05fp0s','Sistem Informasi Keuangan Berbasis Android Pada Yayasan Nurul Ulum Pungkuran Semarang','Aplikasi Android untuk mengelola keuangan pada Yayasan Nurul Ulum Pungkuran Semarang harian, bulanan, dan tahunan. Mendukung CRUD transaksi, filter berdasarkan periode waktu, export laporan ke PDF & Excel dengan rentang tanggal custom, serta notifikasi real-time via Firebase saat ada catatan keuangan baru masuk.','https://res.cloudinary.com/glshjadx/image/upload/v1786893459/portfolio/rlxkyy3hmgtdhks66jp6.jpg','','','Kotlin, Android Studio',0,'2026-08-16 15:20:19.366','2026-08-16 15:20:19.366','GALLERY'),('cmsvzfpms0005zwi5ovzocp0k','Website Single Sign On Pada Yayasan Nurul Ulum Pungkuran Semarang','Sistem Single Sign-On (SSO) berbasis web yang memungkinkan pengguna yang berada di Yayasan Nurul Ulum Pungkuran mengakses berbagai layanan internal yayasan hanya dengan satu kali login. Dikembangkan dengan fokus pada keamanan autentikasi terpusat dan kemudahan akses lintas platform, sebagai bagian dari proyek magang.','https://res.cloudinary.com/glshjadx/image/upload/v1786895016/portfolio/i6r70qzhmdfhyuyj0srx.png','','','PHP, Laravel, JavaScript',1,'2026-08-16 15:51:26.596','2026-08-16 15:51:26.596','GALLERY'),('cmsvzyvjb0009zwi5jabq0607','Website Yayasan Nurul Ulum Pungkuran Semarang','Website untuk Yayasan Nurul Ulum Pungkuran Semarang','https://res.cloudinary.com/glshjadx/image/upload/v1786896321/portfolio/w0limwxmzxstu3hdjzvd.jpg','https://yysnupungkuran.or.id/','','Laravel, PHP, JavaScript, CSS',2,'2026-08-16 16:06:20.711','2026-08-16 16:06:20.711','FULL'),('cmsw02rmb000azwi5zrxx8mz7','TrackerList','Aplikasi web buat nge-track film dan anime yang mau/lagi/udah ditonton. User bisa cari judul, lihat detail, simpan ke watchlist pribadi, kasih rating, dan pantau progress lewat dashboard.','https://res.cloudinary.com/glshjadx/image/upload/v1786897057/portfolio/edaxisg2lm8rvd7gdvyn.jpg','','https://github.com/pyudha2/Movie_Tracker','TypeScript',3,'2026-08-16 16:09:22.259','2026-08-16 16:17:41.216','FULL');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `projectimage`
--

LOCK TABLES `ProjectImage` WRITE;
/*!40000 ALTER TABLE `projectimage` DISABLE KEYS */;
INSERT INTO `ProjectImage` (`id`, `url`, `order`, `projectId`, `createdAt`) VALUES ('cmsvybovn0001zwi56vahllry','https://res.cloudinary.com/glshjadx/image/upload/v1786893476/portfolio/hql5qbpbpjp1mjwci1xs.jpg',0,'cmsvybova0000zwi5em05fp0s','2026-08-16 15:20:19.366'),('cmsvybovn0002zwi53sh648qm','https://res.cloudinary.com/glshjadx/image/upload/v1786893561/portfolio/i1uihqrbv7iv2d9g7agj.jpg',1,'cmsvybova0000zwi5em05fp0s','2026-08-16 15:20:19.366'),('cmsvybovn0003zwi5tb3meqkg','https://res.cloudinary.com/glshjadx/image/upload/v1786893584/portfolio/mr0qzmmsr1canqapgil1.jpg',2,'cmsvybova0000zwi5em05fp0s','2026-08-16 15:20:19.366'),('cmsvybovn0004zwi5n2itc87i','https://res.cloudinary.com/glshjadx/image/upload/v1786893609/portfolio/w09dv9dgowtoixgvqyge.jpg',3,'cmsvybova0000zwi5em05fp0s','2026-08-16 15:20:19.366'),('cmsvzfpmv0006zwi59cd3ussw','https://res.cloudinary.com/glshjadx/image/upload/v1786895424/portfolio/qjikduzy42ou0eclt3aw.png',0,'cmsvzfpms0005zwi5ovzocp0k','2026-08-16 15:51:26.596'),('cmsvzfpmv0007zwi5i89stswf','https://res.cloudinary.com/glshjadx/image/upload/v1786895445/portfolio/ztchl68xuffzlwzxbvch.png',1,'cmsvzfpms0005zwi5ovzocp0k','2026-08-16 15:51:26.596'),('cmsvzfpmv0008zwi54alxtq6k','https://res.cloudinary.com/glshjadx/image/upload/v1786895457/portfolio/b4hvw678mujrnvmwtde9.png',2,'cmsvzfpms0005zwi5ovzocp0k','2026-08-16 15:51:26.596');
/*!40000 ALTER TABLE `projectimage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-17 20:37:13
