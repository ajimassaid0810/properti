-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.4.3 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table cp_property.blogs
CREATE TABLE IF NOT EXISTS `blogs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `published_at` timestamp NULL DEFAULT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `blogs_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.blogs: ~4 rows (approximately)
INSERT INTO `blogs` (`id`, `title`, `slug`, `category`, `excerpt`, `content`, `cover_image`, `meta_title`, `meta_description`, `published_at`, `is_published`, `created_at`, `updated_at`) VALUES
	(1, 'Strategi Memilih Properti Bernilai Investasi Tinggi', 'strategi-memilih-properti-investasi-tinggi', 'Investasi properti', 'Lokasi, akses, reputasi developer, dan rencana infrastruktur menjadi indikator utama properti yang sehat.', 'Properti bernilai investasi tinggi dimulai dari lokasi yang kuat, legalitas jelas, konsep produk relevan, dan potensi permintaan sewa yang stabil. Investor perlu memeriksa akses transportasi, rencana infrastruktur, kualitas pengembang, serta supply-demand di area sekitar sebelum mengambil keputusan.', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80', 'Tips investasi properti modern', 'Panduan singkat memilih properti bernilai investasi tinggi.', '2026-05-18 00:48:24', 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(2, 'Checklist Membeli Rumah Pertama agar Tidak Salah Pilih', 'checklist-membeli-rumah-pertama', 'Tips rumah', 'Mulai dari legalitas, lingkungan, layout, fasilitas, sampai biaya bulanan yang perlu dihitung sejak awal.', 'Pembeli rumah pertama perlu membuat checklist sederhana: status sertifikat, reputasi developer, akses harian, potensi banjir, kualitas material, tata ruang, sampai biaya IPL atau keamanan. Survey lokasi di hari kerja dan akhir pekan juga membantu memahami ritme kawasan.', 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80', 'Checklist membeli rumah pertama', 'Hal penting sebelum membeli rumah pertama.', '2026-05-18 00:48:24', 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(3, 'Tips KPR untuk Pembeli Rumah Pertama', 'tips-kpr-pembeli-rumah-pertama', 'Tips KPR', 'Persiapkan DP, rasio cicilan, dokumen, dan simulasi tenor sejak awal agar proses KPR lebih mulus.', 'KPR yang sehat memperhatikan kemampuan cicilan, biaya tambahan, dan kesiapan dokumen sebelum booking unit. Idealnya cicilan bulanan tidak menekan arus kas keluarga, sementara dana darurat tetap tersedia setelah akad.', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80', 'Tips KPR rumah pertama', 'Panduan KPR untuk pembeli rumah pertama.', '2026-05-18 00:48:24', 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(4, 'Interior Modern Minimalis untuk Hunian Premium', 'interior-modern-minimalis-hunian-premium', 'Interior modern', 'Palet netral, pencahayaan berlapis, dan furniture proporsional membuat hunian terasa lapang dan elegan.', 'Interior modern minimalis tidak berarti kosong. Kuncinya adalah proporsi furniture, storage rapi, material natural, dan pencahayaan berlapis. Accent gold, wood texture, dan soft grey dapat memberi nuansa premium tanpa membuat ruang terasa berat.', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80', 'Interior modern minimalis premium', 'Inspirasi interior modern untuk hunian premium.', '2026-05-18 00:48:24', 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24');

-- Dumping structure for table cp_property.cache
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.cache: ~0 rows (approximately)

-- Dumping structure for table cp_property.cache_locks
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` bigint NOT NULL,
  PRIMARY KEY (`key`),
  KEY `cache_locks_expiration_index` (`expiration`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.cache_locks: ~0 rows (approximately)

-- Dumping structure for table cp_property.company_profiles
CREATE TABLE IF NOT EXISTS `company_profiles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tagline` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `history` longtext COLLATE utf8mb4_unicode_ci,
  `vision_mission` json DEFAULT NULL,
  `core_values` json DEFAULT NULL,
  `legalities` json DEFAULT NULL,
  `timeline` json DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `whatsapp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci,
  `social_links` json DEFAULT NULL,
  `office_latitude` decimal(10,7) DEFAULT NULL,
  `office_longitude` decimal(10,7) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.company_profiles: ~1 rows (approximately)
INSERT INTO `company_profiles` (`id`, `company_name`, `tagline`, `about`, `history`, `vision_mission`, `core_values`, `legalities`, `timeline`, `phone`, `whatsapp`, `email`, `address`, `social_links`, `office_latitude`, `office_longitude`, `created_at`, `updated_at`) VALUES
	(1, 'Nirvana Estate Development', 'Curated living, lasting value.', 'Nirvana Estate Development adalah perusahaan developer properti yang fokus membangun hunian, apartemen, dan area komersial modern di lokasi strategis dengan standar desain premium.', 'Berawal dari pengembangan cluster butik pada 2016, perusahaan tumbuh menjadi developer yang mengintegrasikan desain, legalitas, pengalaman pelanggan, dan analisis lokasi untuk menciptakan properti bernilai jangka panjang.', '{"vision": "Menjadi developer properti terpercaya yang menciptakan ruang hidup bernilai tinggi.", "mission": ["Mengembangkan properti di lokasi strategis dan bertumbuh.", "Menghadirkan desain modern yang fungsional dan tahan waktu.", "Memberikan pengalaman pembelian yang transparan dan profesional."]}', '["Integrity", "Craftsmanship", "Customer Centric", "Long Term Value"]', '["PT Nirvana Estate Development", "NIB 912020260518", "PKKPR dan IMB/PBG sesuai tahap proyek", "Sertifikat HGB induk"]', '[{"year": "2016", "title": "Pengembangan cluster butik pertama"}, {"year": "2019", "title": "Ekspansi ke kawasan komersial"}, {"year": "2023", "title": "Peluncuran apartemen premium berkonsep TOD"}, {"year": "2026", "title": "Portfolio 900+ unit terjual"}]', '+62 21 5089 2026', '6281299902026', 'hello@nirvanaestate.test', 'Nirvana Estate Gallery, Jl. Jenderal Sudirman Kav. 52, Jakarta Selatan', '{"youtube": "https://youtube.com/@nirvanaestate", "linkedin": "https://linkedin.com/company/nirvanaestate", "instagram": "https://instagram.com/nirvanaestate"}', -6.2245600, 106.8093300, '2026-05-18 00:48:24', '2026-05-18 00:48:24');

-- Dumping structure for table cp_property.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.failed_jobs: ~0 rows (approximately)

-- Dumping structure for table cp_property.galleries
CREATE TABLE IF NOT EXISTS `galleries` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `project_id` bigint unsigned NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `caption` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order` int unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `galleries_project_id_index` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.galleries: ~24 rows (approximately)
INSERT INTO `galleries` (`id`, `project_id`, `image_url`, `caption`, `sort_order`, `created_at`, `updated_at`) VALUES
	(1, 1, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80', 'Aurelia Hills Residence Gallery 1', 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(2, 1, 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80', 'Aurelia Hills Residence Gallery 2', 2, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(3, 1, 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80', 'Aurelia Hills Residence Gallery 3', 3, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(4, 1, 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80', 'Aurelia Hills Residence Gallery 4', 4, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(5, 2, 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80', 'Nava Signature Suites Gallery 1', 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(6, 2, 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80', 'Nava Signature Suites Gallery 2', 2, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(7, 2, 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80', 'Nava Signature Suites Gallery 3', 3, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(8, 2, 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80', 'Nava Signature Suites Gallery 4', 4, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(9, 3, 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80', 'Aruna Business Park Gallery 1', 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(10, 3, 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80', 'Aruna Business Park Gallery 2', 2, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(11, 3, 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=80', 'Aruna Business Park Gallery 3', 3, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(12, 3, 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80', 'Aruna Business Park Gallery 4', 4, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(13, 4, 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80', 'Serenia Lake Villas Gallery 1', 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(14, 4, 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80', 'Serenia Lake Villas Gallery 2', 2, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(15, 4, 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1400&q=80', 'Serenia Lake Villas Gallery 3', 3, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(16, 4, 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80', 'Serenia Lake Villas Gallery 4', 4, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(17, 5, 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80', 'Orion Transit Apartment Gallery 1', 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(18, 5, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80', 'Orion Transit Apartment Gallery 2', 2, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(19, 5, 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80', 'Orion Transit Apartment Gallery 3', 3, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(20, 5, 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80', 'Orion Transit Apartment Gallery 4', 4, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(21, 6, 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80', 'Mavira Lifestyle Arcade Gallery 1', 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(22, 6, 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80', 'Mavira Lifestyle Arcade Gallery 2', 2, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(23, 6, 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=1400&q=80', 'Mavira Lifestyle Arcade Gallery 3', 3, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(24, 6, 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80', 'Mavira Lifestyle Arcade Gallery 4', 4, '2026-05-18 00:48:24', '2026-05-18 00:48:24');

-- Dumping structure for table cp_property.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` smallint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.jobs: ~0 rows (approximately)

-- Dumping structure for table cp_property.job_batches
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.job_batches: ~0 rows (approximately)

-- Dumping structure for table cp_property.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.migrations: ~0 rows (approximately)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '0001_01_01_000000_create_users_table', 1),
	(2, '0001_01_01_000001_create_cache_table', 1),
	(3, '0001_01_01_000002_create_jobs_table', 1),
	(4, '2025_08_14_170933_add_two_factor_columns_to_users_table', 1),
	(5, '2026_05_18_065445_create_blogs_table', 1),
	(6, '2026_05_18_065445_create_company_profiles_table', 1),
	(7, '2026_05_18_065445_create_project_locations_table', 1),
	(8, '2026_05_18_065445_create_projects_table', 1),
	(9, '2026_05_18_065445_create_testimonials_table', 1),
	(10, '2026_05_18_065515_create_galleries_table', 1);

-- Dumping structure for table cp_property.password_reset_tokens
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.password_reset_tokens: ~0 rows (approximately)

-- Dumping structure for table cp_property.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_start` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_types` json DEFAULT NULL,
  `facilities` json DEFAULT NULL,
  `specifications` json DEFAULT NULL,
  `site_plan` json DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `is_published` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `projects_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.projects: ~6 rows (approximately)
INSERT INTO `projects` (`id`, `name`, `slug`, `category`, `location`, `price_start`, `status`, `thumbnail`, `short_description`, `description`, `unit_types`, `facilities`, `specifications`, `site_plan`, `is_featured`, `is_published`, `created_at`, `updated_at`) VALUES
	(1, 'Aurelia Hills Residence', 'aurelia-hills-residence', 'Rumah', 'BSD City, Tangerang Selatan', 'Rp 1,8 M', 'Ready Stock', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80', 'Cluster rumah modern dengan clubhouse privat dan akses langsung ke koridor bisnis BSD.', 'Aurelia Hills Residence dirancang untuk keluarga urban yang membutuhkan hunian premium, tenang, dan tetap dekat pusat aktivitas. Setiap unit memakai bukaan besar, tata ruang efisien, material pilihan, serta konsep kawasan rendah kepadatan untuk kenyamanan jangka panjang.', '[{"land": "78 m2", "name": "Type Liora 78", "price": "Rp 1,8 M", "bedroom": "3+1", "building": "92 m2"}, {"land": "112 m2", "name": "Type Celeste 112", "price": "Rp 2,9 M", "bedroom": "4+1", "building": "145 m2"}, {"land": "160 m2", "name": "Type Royale 160", "price": "Rp 4,6 M", "bedroom": "4+1", "building": "210 m2"}]', '["Clubhouse", "Jogging track", "Smart gate", "Taman tematik", "Security 24 jam", "Underground utilities"]', '["Pondasi beton bertulang", "Lantai homogenous tile 80x80", "Rangka atap baja ringan", "Sanitary premium", "Smart home ready", "Carport 2 mobil"]', '{"green_area": "35%", "road_width": "ROW 10 m", "total_area": "8,5 Ha", "total_units": "268 unit"}', 1, 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(2, 'Nava Signature Suites', 'nava-signature-suites', 'Apartemen', 'Kuningan, Jakarta Selatan', 'Rp 980 Juta', 'Pre Launch', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80', 'Apartemen serviced residence berkonsep hotel living di kawasan CBD Jakarta.', 'Nava Signature Suites menghadirkan gaya hidup vertikal premium dengan fasilitas bisnis, wellness, dan retail terintegrasi. Lokasinya ideal untuk profesional, ekspatriat, dan investor yang mengejar permintaan sewa stabil di pusat bisnis Jakarta.', '[{"land": "-", "name": "Studio Premier", "price": "Rp 980 Juta", "bedroom": "Studio", "building": "31 m2"}, {"land": "-", "name": "1BR Executive", "price": "Rp 1,45 M", "bedroom": "1", "building": "46 m2"}, {"land": "-", "name": "2BR Corner", "price": "Rp 2,1 M", "bedroom": "2", "building": "68 m2"}]', '["Sky pool", "Business lounge", "Gym", "Concierge", "Retail promenade", "Private meeting pod"]', '["Facade low-e glass", "Kitchen set", "AC split", "Video intercom", "Access card", "Semi furnished package"]', '{"tower": "2 tower", "floors": "38 lantai", "total_units": "612 unit", "parking_ratio": "1:2"}', 1, 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(3, 'Aruna Business Park', 'aruna-business-park', 'Komersial', 'Cibubur, Bekasi', 'Rp 2,4 M', 'On Progress', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80', 'Ruko premium dua sampai tiga lantai untuk bisnis F&B, klinik, kantor, dan showroom.', 'Aruna Business Park berada di jalur pertumbuhan komersial Cibubur dengan visibilitas tinggi, parkir luas, dan konsep fasad modern yang memperkuat citra bisnis. Kawasan ini cocok untuk pemilik usaha dan investor sewa komersial.', '[{"land": "60 m2", "name": "Ruko Avenue 2L", "price": "Rp 2,4 M", "bedroom": "-", "building": "118 m2"}, {"land": "75 m2", "name": "Ruko Boulevard 3L", "price": "Rp 3,8 M", "bedroom": "-", "building": "210 m2"}]', '["ROW lebar", "Parkir komunal", "Signage area", "Fiber optic", "CCTV kawasan", "Loading bay"]', '["Struktur beton", "Daya listrik bisnis", "Toilet tiap lantai", "Fasad aluminium composite panel", "Kaca tempered"]', '{"main_road": "ROW 18 m", "total_area": "3,2 Ha", "parking_lot": "180 lot", "total_units": "96 unit"}', 0, 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(4, 'Serenia Lake Villas', 'serenia-lake-villas', 'Rumah', 'Sentul, Bogor', 'Rp 3,2 M', 'Limited Unit', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80', 'Vila modern bernuansa resort dengan view danau, udara sejuk, dan private garden.', 'Serenia Lake Villas dibuat sebagai hunian resort untuk keluarga yang mencari privasi, udara segar, dan akses mudah ke Jakarta. Setiap unit memiliki bukaan besar, taman privat, serta ruang keluarga yang terhubung ke area outdoor.', '[{"land": "180 m2", "name": "Villa Aster", "price": "Rp 3,2 M", "bedroom": "3+1", "building": "165 m2"}, {"land": "240 m2", "name": "Villa Magnolia", "price": "Rp 5,1 M", "bedroom": "4+1", "building": "230 m2"}]', '["Lake deck", "Private garden", "Resort clubhouse", "Bike lane", "Shuttle kawasan"]', '["Natural stone facade", "Engineered wood floor", "High ceiling living room", "Rainwater harvesting", "Solar water heater"]', '{"lake_area": "1,4 Ha", "green_area": "48%", "total_area": "12 Ha", "total_units": "118 unit"}', 1, 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(5, 'Orion Transit Apartment', 'orion-transit-apartment', 'Apartemen', 'Dukuh Atas, Jakarta Pusat', 'Rp 1,25 M', 'Launching Soon', 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80', 'Apartemen TOD premium terhubung dengan koridor MRT, LRT, KRL, dan Airport Railink.', 'Orion Transit Apartment menggabungkan efisiensi hunian vertikal dan mobilitas kota. Proyek ini ditujukan untuk profesional aktif yang membutuhkan akses transportasi publik lengkap, fasilitas kerja fleksibel, dan gaya hidup pusat kota.', '[{"land": "-", "name": "Compact Studio", "price": "Rp 1,25 M", "bedroom": "Studio", "building": "28 m2"}, {"land": "-", "name": "Urban 1BR", "price": "Rp 1,78 M", "bedroom": "1", "building": "42 m2"}, {"land": "-", "name": "Family 2BR", "price": "Rp 3,15 M", "bedroom": "2", "building": "72 m2"}]', '["Transit lobby", "Co-working lounge", "Infinity pool", "Yoga deck", "Parcel room", "EV charging"]', '["Acoustic window", "Smart lock", "Built-in storage", "Induction hob", "Access control lift"]', '{"tower": "1 tower", "floors": "42 lantai", "retail_area": "3 lantai", "total_units": "486 unit"}', 0, 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(6, 'Mavira Lifestyle Arcade', 'mavira-lifestyle-arcade', 'Komersial', 'Alam Sutera, Tangerang', 'Rp 1,95 M', 'NUP Open', 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80', 'Retail arcade modern untuk F&B, wellness, boutique office, dan bisnis lifestyle.', 'Mavira Lifestyle Arcade dirancang sebagai destinasi komersial dengan pedestrian spine, area alfresco, dan komposisi tenant lifestyle. Produk ini cocok untuk bisnis yang membutuhkan eksposur visual kuat di kawasan residensial mapan.', '[{"land": "48 m2", "name": "Retail Loft", "price": "Rp 1,95 M", "bedroom": "-", "building": "92 m2"}, {"land": "72 m2", "name": "Corner Signature", "price": "Rp 3,35 M", "bedroom": "-", "building": "152 m2"}]', '["Alfresco plaza", "Tenant signage", "Shared parking", "Outdoor seating", "CCTV kawasan", "Loading access"]', '["Double height facade", "Power outlet bisnis", "Grease trap ready", "High speed internet", "Dedicated water meter"]', '{"total_area": "2,1 Ha", "parking_lot": "140 lot", "total_units": "74 unit", "pedestrian_spine": "180 m"}', 1, 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24');

-- Dumping structure for table cp_property.project_locations
CREATE TABLE IF NOT EXISTS `project_locations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `project_id` bigint unsigned NOT NULL,
  `latitude` decimal(10,7) NOT NULL,
  `longitude` decimal(10,7) NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `landmark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nearby_points` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_locations_project_id_index` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.project_locations: ~6 rows (approximately)
INSERT INTO `project_locations` (`id`, `project_id`, `latitude`, `longitude`, `address`, `landmark`, `nearby_points`, `created_at`, `updated_at`) VALUES
	(1, 1, -6.3019110, 106.6529260, 'Jl. BSD Raya Utama, Tangerang Selatan', 'Dekat AEON Mall BSD dan ICE BSD', '["AEON Mall BSD", "ICE BSD", "Tol Serpong-Balaraja", "Universitas Prasetiya Mulya"]', '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(2, 2, -6.2231770, 106.8294220, 'Jl. Prof. Dr. Satrio, Kuningan, Jakarta Selatan', 'Dekat Lotte Shopping Avenue dan Mega Kuningan', '["Mega Kuningan", "Lotte Shopping Avenue", "MRT Bendungan Hilir", "RS MMC"]', '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(3, 3, -6.3715880, 106.9028170, 'Jl. Alternatif Cibubur, Bekasi', 'Koridor komersial Cibubur', '["Tol Cimanggis-Cibitung", "Trans Studio Mall Cibubur", "RS Permata Cibubur", "LRT Harjamukti"]', '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(4, 4, -6.5652000, 106.8591000, 'Jl. MH Thamrin, Sentul City, Bogor', 'Dekat Sentul Highlands Golf Club', '["AEON Sentul", "Sentul International Convention Center", "Tol Jagorawi", "JungleLand"]', '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(5, 5, -6.2007100, 106.8229000, 'Jl. Kendal, Dukuh Atas, Jakarta Pusat', 'Kawasan TOD Dukuh Atas', '["MRT Dukuh Atas", "Stasiun Sudirman", "Grand Indonesia", "Thamrin CBD"]', '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(6, 6, -6.2433000, 106.6559000, 'Jl. Jalur Sutera Boulevard, Alam Sutera, Tangerang', 'Dekat Mall @ Alam Sutera', '["Mall @ Alam Sutera", "IKEA Alam Sutera", "Binus University", "Tol Jakarta-Tangerang"]', '2026-05-18 00:48:24', '2026-05-18 00:48:24');

-- Dumping structure for table cp_property.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.sessions: ~15 rows (approximately)
INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
	('4QbE8vYBD1xzeEX2OkA0rtbf5lgf3pmGjuo8spEV', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.8457', 'eyJfdG9rZW4iOiJLMmhvYkJXTGE2a2xhc1pFR1pVZ3pIRGxIbTRtd2M1U25hUWxnYlhJIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9yZWdpc3RlciIsInJvdXRlIjoicmVnaXN0ZXIifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1779093098),
	('6qhpZ4vW24k2r0uAsyqihsbZwgGfiU1IKWNBaiM7', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.8457', 'eyJfdG9rZW4iOiJPZXk1bzlSUDdIUUFHbkRRZEVtOUhsb21QVjRURmZLMFkxNUQyUVA5IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwIiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1779092336),
	('ccVrpBVMUXRll9pxEw5MBSuQGrAoZnJgukedZXQz', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.8457', 'eyJfdG9rZW4iOiJXODhYcEtsUkdiYUxBRm1aUlU0MkVBbGdkUGl0RXJKeUFRUk5PQjl6IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwIiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1779092362),
	('eXgyahT8c33LDja8P3DKwZhUKwTg8OrzIzKuL3OV', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.8457', 'eyJfdG9rZW4iOiJ0SlJscXlqY0dMcTA0aXVqQXB2ZlFrRFdEd3JDb0lmeDZ2UTBtSzNxIiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvbG9jYWxob3N0OjgwMDBcL2Rhc2hib2FyZCJ9LCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvbG9jYWxob3N0OjgwMDBcL2Rhc2hib2FyZCIsInJvdXRlIjoiZGFzaGJvYXJkIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1779093098),
	('F2tsJ46bljIuGOOr36dShlBq49YqrBW9uxkhgoPO', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.8457', 'eyJfdG9rZW4iOiJNQTJxTWhQcE1ONlZIakN6SVZxRmVUS0E4cVdVejFEZ0tGNFc1S1FhIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDEyXC9sb2dpbiIsInJvdXRlIjoibG9naW4ifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1779092148),
	('IPQb7DdkGeP94kUO5tUSPPsphlrwmCXYI5kh0Mg3', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.8457', 'eyJfdG9rZW4iOiJaclUySE1JaDdkMmxkRzdLNW15aVZBSW1DM0g3NnV2MzY4QUN3bXZMIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9sb2dpbiIsInJvdXRlIjoibG9naW4ifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1779093099),
	('Kc6jrA4j6RnHJj6fkQ8ZLlWBntYtpnKLiZODtdDr', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36', 'eyJfdG9rZW4iOiJ4WFB3dmhmckpURlRNemVDZHRRcXg4bG9BUkhzZ0Q3TUFKZGFWZE8zIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119LCJfcHJldmlvdXMiOnsidXJsIjoiaHR0cDpcL1wvbG9jYWxob3N0OjgwMDBcL2Zhdmljb24uaWNvIiwicm91dGUiOiJob21lIn0sInVybCI6eyJpbnRlbmRlZCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9kYXNoYm9hcmQifX0=', 1779094682),
	('KSdQx472BYkecrY8vW3w1i7PhYEZ9je4xp3rEUVm', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.120.0 Chrome/142.0.7444.265 Electron/39.8.8 Safari/537.36', 'eyJfdG9rZW4iOiJ2N1BHWjlTOVJJZXlzOVBoWkZESElnc09mem5lOGRGcU9PWU1lbFJ4IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwIiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1779093537),
	('Q3vihn55d3kzwcDINHdfg7zZEWUnms6GD1tbjoN3', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.8457', 'eyJfdG9rZW4iOiJ6cWI0b1BSN0ZvT0lqUmsxS0RPQnpMYTBoWEpQelZhYUxkOXJ6dDJ1IiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDExXC9sb2dpbiIsInJvdXRlIjoibG9naW4ifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1779092107),
	('SmqUki2McUAn5oK986NaLpI7SPIzIn06UYWeNpdC', NULL, '127.0.0.1', 'curl/8.19.0', 'eyJfdG9rZW4iOiJ5ZmxPTEV5eHlOU29jcjBsQzB6bTN1djdGUzVFbWp2UTJXZURvWWwyIiwidXJsIjp7ImludGVuZGVkIjoiaHR0cDpcL1wvbG9jYWxob3N0OjgwMDAifSwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1779093106),
	('TPUxuqTVjRqbkf9uMGpqmr6DChN7V8wbuFj5qzNK', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.8457', 'eyJfdG9rZW4iOiJTZGxySThyZjV2NUZXSlJHenVtcHNjTXVsN2cyWVBNZWNUVmVLdGsxIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwIiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1779092360),
	('ULDsW6reNH84V8R9wEvMnXTZcSsQQJYQAYTg5VMc', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.8457', 'eyJfdG9rZW4iOiIzMk5XeTA5VFlOSHhFbG9zVHlZMm5xNUY1QW9YdjlhV3JkZ3hsNFlLIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDEyIiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1779092146),
	('uxvM8eYWcQVTtWOHFlCn6nu2RSbwk3wJdP1ZHCuz', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.120.0 Chrome/142.0.7444.265 Electron/39.8.8 Safari/537.36', 'eyJfdG9rZW4iOiJSSE1UMmNnVmV3Qk5RUmI3NlpPVnVWRkZ0VVpKaUlpalFJcHEzaWpnIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwIiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1779092190),
	('vkoxiG00TICFvtAJQ1Tsd3JLCovt8XMvPYHJTaXx', NULL, '127.0.0.1', 'curl/8.19.0', 'eyJfdG9rZW4iOiIyOUVrZEQyaFlzOWN0WmQwVllBWTdxVjBRcWdYRm5LQVZvR1lTbm9MIiwiX2ZsYXNoIjp7Im9sZCI6W10sIm5ldyI6W119fQ==', 1779093106),
	('wkz2GiOEpEXgABVE0Yy3dDhvESmdmAlph9LbVokT', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.26100.8457', 'eyJfdG9rZW4iOiJibDY4OUtyTlFSMXlnODhaZzBGekRPNGFNbDhxaDdnSEdrU3JCcUFOIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDExIiwicm91dGUiOiJob21lIn0sIl9mbGFzaCI6eyJvbGQiOltdLCJuZXciOltdfX0=', 1779092104);

-- Dumping structure for table cp_property.testimonials
CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `client_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quote` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` tinyint unsigned NOT NULL DEFAULT '5',
  `is_published` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.testimonials: ~4 rows (approximately)
INSERT INTO `testimonials` (`id`, `client_name`, `client_role`, `project_name`, `avatar_url`, `quote`, `rating`, `is_published`, `created_at`, `updated_at`) VALUES
	(1, 'Rania Putri', 'Founder Interior Studio', 'Aurelia Hills Residence', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', 'Proses pembelian transparan, material unit sesuai ekspektasi, dan kawasan terasa sangat private.', 5, 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(2, 'Dimas Mahendra', 'Investor Properti', 'Nava Signature Suites', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', 'Lokasi dan konsep produknya kuat untuk pasar sewa profesional. Tim sales sangat informatif.', 5, 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(3, 'Clara Wijaya', 'Business Owner', 'Mavira Lifestyle Arcade', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80', 'Fasad dan tenant mix-nya cocok untuk brand lifestyle. Area parkir juga jadi nilai tambah besar.', 5, 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24'),
	(4, 'Aditya Prakoso', 'Tech Consultant', 'Orion Transit Apartment', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80', 'Saya pilih karena akses transportasinya lengkap. Cocok untuk mobilitas harian dan potensi sewa.', 5, 1, '2026-05-18 00:48:24', '2026-05-18 00:48:24');

-- Dumping structure for table cp_property.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table cp_property.users: ~0 rows (approximately)
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'Admin Properti', 'admin@example.com', NULL, '$2y$12$eHgzK/pHcRf0Tqd.nr4BgOXZFHriL5r3yWjYuQUeauYHN2vJwz3Yq', NULL, NULL, NULL, NULL, '2026-05-18 00:48:24', '2026-05-18 00:48:24');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
