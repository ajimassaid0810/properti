<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\CompanyProfile;
use App\Models\Gallery;
use App\Models\Project;
use App\Models\ProjectLocation;
use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::query()->updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin Properti',
                'password' => Hash::make('password'),
            ],
        );

        $this->seedProjects();
        $this->seedBlogs();
        $this->seedTestimonials();
        $this->seedCompanyProfile();
    }

    private function seedProjects(): void
    {
        $projects = [
            [
                'name' => 'Aurelia Hills Residence',
                'slug' => 'aurelia-hills-residence',
                'category' => 'Rumah',
                'location' => 'BSD City, Tangerang Selatan',
                'price_start' => 'Rp 1,8 M',
                'status' => 'Ready Stock',
                'thumbnail' => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
                'short_description' => 'Cluster rumah modern dengan clubhouse privat dan akses langsung ke koridor bisnis BSD.',
                'description' => 'Aurelia Hills Residence dirancang untuk keluarga urban yang membutuhkan hunian premium, tenang, dan tetap dekat pusat aktivitas. Setiap unit memakai bukaan besar, tata ruang efisien, material pilihan, serta konsep kawasan rendah kepadatan untuk kenyamanan jangka panjang.',
                'unit_types' => [
                    ['name' => 'Type Liora 78', 'land' => '78 m2', 'building' => '92 m2', 'bedroom' => '3+1', 'price' => 'Rp 1,8 M'],
                    ['name' => 'Type Celeste 112', 'land' => '112 m2', 'building' => '145 m2', 'bedroom' => '4+1', 'price' => 'Rp 2,9 M'],
                    ['name' => 'Type Royale 160', 'land' => '160 m2', 'building' => '210 m2', 'bedroom' => '4+1', 'price' => 'Rp 4,6 M'],
                ],
                'facilities' => ['Clubhouse', 'Jogging track', 'Smart gate', 'Taman tematik', 'Security 24 jam', 'Underground utilities'],
                'specifications' => ['Pondasi beton bertulang', 'Lantai homogenous tile 80x80', 'Rangka atap baja ringan', 'Sanitary premium', 'Smart home ready', 'Carport 2 mobil'],
                'site_plan' => ['total_area' => '8,5 Ha', 'green_area' => '35%', 'total_units' => '268 unit', 'road_width' => 'ROW 10 m'],
                'is_featured' => true,
                'latitude' => -6.3019110,
                'longitude' => 106.6529260,
                'address' => 'Jl. BSD Raya Utama, Tangerang Selatan',
                'landmark' => 'Dekat AEON Mall BSD dan ICE BSD',
                'nearby_points' => ['AEON Mall BSD', 'ICE BSD', 'Tol Serpong-Balaraja', 'Universitas Prasetiya Mulya'],
                'galleries' => [
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80',
                ],
            ],
            [
                'name' => 'Nava Signature Suites',
                'slug' => 'nava-signature-suites',
                'category' => 'Apartemen',
                'location' => 'Kuningan, Jakarta Selatan',
                'price_start' => 'Rp 980 Juta',
                'status' => 'Pre Launch',
                'thumbnail' => 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
                'short_description' => 'Apartemen serviced residence berkonsep hotel living di kawasan CBD Jakarta.',
                'description' => 'Nava Signature Suites menghadirkan gaya hidup vertikal premium dengan fasilitas bisnis, wellness, dan retail terintegrasi. Lokasinya ideal untuk profesional, ekspatriat, dan investor yang mengejar permintaan sewa stabil di pusat bisnis Jakarta.',
                'unit_types' => [
                    ['name' => 'Studio Premier', 'land' => '-', 'building' => '31 m2', 'bedroom' => 'Studio', 'price' => 'Rp 980 Juta'],
                    ['name' => '1BR Executive', 'land' => '-', 'building' => '46 m2', 'bedroom' => '1', 'price' => 'Rp 1,45 M'],
                    ['name' => '2BR Corner', 'land' => '-', 'building' => '68 m2', 'bedroom' => '2', 'price' => 'Rp 2,1 M'],
                ],
                'facilities' => ['Sky pool', 'Business lounge', 'Gym', 'Concierge', 'Retail promenade', 'Private meeting pod'],
                'specifications' => ['Facade low-e glass', 'Kitchen set', 'AC split', 'Video intercom', 'Access card', 'Semi furnished package'],
                'site_plan' => ['tower' => '2 tower', 'floors' => '38 lantai', 'total_units' => '612 unit', 'parking_ratio' => '1:2'],
                'is_featured' => true,
                'latitude' => -6.2231770,
                'longitude' => 106.8294220,
                'address' => 'Jl. Prof. Dr. Satrio, Kuningan, Jakarta Selatan',
                'landmark' => 'Dekat Lotte Shopping Avenue dan Mega Kuningan',
                'nearby_points' => ['Mega Kuningan', 'Lotte Shopping Avenue', 'MRT Bendungan Hilir', 'RS MMC'],
                'galleries' => [
                    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
                ],
            ],
            [
                'name' => 'Aruna Business Park',
                'slug' => 'aruna-business-park',
                'category' => 'Komersial',
                'location' => 'Cibubur, Bekasi',
                'price_start' => 'Rp 2,4 M',
                'status' => 'On Progress',
                'thumbnail' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
                'short_description' => 'Ruko premium dua sampai tiga lantai untuk bisnis F&B, klinik, kantor, dan showroom.',
                'description' => 'Aruna Business Park berada di jalur pertumbuhan komersial Cibubur dengan visibilitas tinggi, parkir luas, dan konsep fasad modern yang memperkuat citra bisnis. Kawasan ini cocok untuk pemilik usaha dan investor sewa komersial.',
                'unit_types' => [
                    ['name' => 'Ruko Avenue 2L', 'land' => '60 m2', 'building' => '118 m2', 'bedroom' => '-', 'price' => 'Rp 2,4 M'],
                    ['name' => 'Ruko Boulevard 3L', 'land' => '75 m2', 'building' => '210 m2', 'bedroom' => '-', 'price' => 'Rp 3,8 M'],
                ],
                'facilities' => ['ROW lebar', 'Parkir komunal', 'Signage area', 'Fiber optic', 'CCTV kawasan', 'Loading bay'],
                'specifications' => ['Struktur beton', 'Daya listrik bisnis', 'Toilet tiap lantai', 'Fasad aluminium composite panel', 'Kaca tempered'],
                'site_plan' => ['total_area' => '3,2 Ha', 'total_units' => '96 unit', 'main_road' => 'ROW 18 m', 'parking_lot' => '180 lot'],
                'is_featured' => false,
                'latitude' => -6.3715880,
                'longitude' => 106.9028170,
                'address' => 'Jl. Alternatif Cibubur, Bekasi',
                'landmark' => 'Koridor komersial Cibubur',
                'nearby_points' => ['Tol Cimanggis-Cibitung', 'Trans Studio Mall Cibubur', 'RS Permata Cibubur', 'LRT Harjamukti'],
                'galleries' => [
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
                ],
            ],
            [
                'name' => 'Serenia Lake Villas',
                'slug' => 'serenia-lake-villas',
                'category' => 'Rumah',
                'location' => 'Sentul, Bogor',
                'price_start' => 'Rp 3,2 M',
                'status' => 'Limited Unit',
                'thumbnail' => 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80',
                'short_description' => 'Vila modern bernuansa resort dengan view danau, udara sejuk, dan private garden.',
                'description' => 'Serenia Lake Villas dibuat sebagai hunian resort untuk keluarga yang mencari privasi, udara segar, dan akses mudah ke Jakarta. Setiap unit memiliki bukaan besar, taman privat, serta ruang keluarga yang terhubung ke area outdoor.',
                'unit_types' => [
                    ['name' => 'Villa Aster', 'land' => '180 m2', 'building' => '165 m2', 'bedroom' => '3+1', 'price' => 'Rp 3,2 M'],
                    ['name' => 'Villa Magnolia', 'land' => '240 m2', 'building' => '230 m2', 'bedroom' => '4+1', 'price' => 'Rp 5,1 M'],
                ],
                'facilities' => ['Lake deck', 'Private garden', 'Resort clubhouse', 'Bike lane', 'Shuttle kawasan'],
                'specifications' => ['Natural stone facade', 'Engineered wood floor', 'High ceiling living room', 'Rainwater harvesting', 'Solar water heater'],
                'site_plan' => ['total_area' => '12 Ha', 'green_area' => '48%', 'total_units' => '118 unit', 'lake_area' => '1,4 Ha'],
                'is_featured' => true,
                'latitude' => -6.5652000,
                'longitude' => 106.8591000,
                'address' => 'Jl. MH Thamrin, Sentul City, Bogor',
                'landmark' => 'Dekat Sentul Highlands Golf Club',
                'nearby_points' => ['AEON Sentul', 'Sentul International Convention Center', 'Tol Jagorawi', 'JungleLand'],
                'galleries' => [
                    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80',
                ],
            ],
            [
                'name' => 'Orion Transit Apartment',
                'slug' => 'orion-transit-apartment',
                'category' => 'Apartemen',
                'location' => 'Dukuh Atas, Jakarta Pusat',
                'price_start' => 'Rp 1,25 M',
                'status' => 'Launching Soon',
                'thumbnail' => 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
                'short_description' => 'Apartemen TOD premium terhubung dengan koridor MRT, LRT, KRL, dan Airport Railink.',
                'description' => 'Orion Transit Apartment menggabungkan efisiensi hunian vertikal dan mobilitas kota. Proyek ini ditujukan untuk profesional aktif yang membutuhkan akses transportasi publik lengkap, fasilitas kerja fleksibel, dan gaya hidup pusat kota.',
                'unit_types' => [
                    ['name' => 'Compact Studio', 'land' => '-', 'building' => '28 m2', 'bedroom' => 'Studio', 'price' => 'Rp 1,25 M'],
                    ['name' => 'Urban 1BR', 'land' => '-', 'building' => '42 m2', 'bedroom' => '1', 'price' => 'Rp 1,78 M'],
                    ['name' => 'Family 2BR', 'land' => '-', 'building' => '72 m2', 'bedroom' => '2', 'price' => 'Rp 3,15 M'],
                ],
                'facilities' => ['Transit lobby', 'Co-working lounge', 'Infinity pool', 'Yoga deck', 'Parcel room', 'EV charging'],
                'specifications' => ['Acoustic window', 'Smart lock', 'Built-in storage', 'Induction hob', 'Access control lift'],
                'site_plan' => ['tower' => '1 tower', 'floors' => '42 lantai', 'total_units' => '486 unit', 'retail_area' => '3 lantai'],
                'is_featured' => false,
                'latitude' => -6.2007100,
                'longitude' => 106.8229000,
                'address' => 'Jl. Kendal, Dukuh Atas, Jakarta Pusat',
                'landmark' => 'Kawasan TOD Dukuh Atas',
                'nearby_points' => ['MRT Dukuh Atas', 'Stasiun Sudirman', 'Grand Indonesia', 'Thamrin CBD'],
                'galleries' => [
                    'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
                ],
            ],
            [
                'name' => 'Mavira Lifestyle Arcade',
                'slug' => 'mavira-lifestyle-arcade',
                'category' => 'Komersial',
                'location' => 'Alam Sutera, Tangerang',
                'price_start' => 'Rp 1,95 M',
                'status' => 'NUP Open',
                'thumbnail' => 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80',
                'short_description' => 'Retail arcade modern untuk F&B, wellness, boutique office, dan bisnis lifestyle.',
                'description' => 'Mavira Lifestyle Arcade dirancang sebagai destinasi komersial dengan pedestrian spine, area alfresco, dan komposisi tenant lifestyle. Produk ini cocok untuk bisnis yang membutuhkan eksposur visual kuat di kawasan residensial mapan.',
                'unit_types' => [
                    ['name' => 'Retail Loft', 'land' => '48 m2', 'building' => '92 m2', 'bedroom' => '-', 'price' => 'Rp 1,95 M'],
                    ['name' => 'Corner Signature', 'land' => '72 m2', 'building' => '152 m2', 'bedroom' => '-', 'price' => 'Rp 3,35 M'],
                ],
                'facilities' => ['Alfresco plaza', 'Tenant signage', 'Shared parking', 'Outdoor seating', 'CCTV kawasan', 'Loading access'],
                'specifications' => ['Double height facade', 'Power outlet bisnis', 'Grease trap ready', 'High speed internet', 'Dedicated water meter'],
                'site_plan' => ['total_area' => '2,1 Ha', 'total_units' => '74 unit', 'pedestrian_spine' => '180 m', 'parking_lot' => '140 lot'],
                'is_featured' => true,
                'latitude' => -6.2433000,
                'longitude' => 106.6559000,
                'address' => 'Jl. Jalur Sutera Boulevard, Alam Sutera, Tangerang',
                'landmark' => 'Dekat Mall @ Alam Sutera',
                'nearby_points' => ['Mall @ Alam Sutera', 'IKEA Alam Sutera', 'Binus University', 'Tol Jakarta-Tangerang'],
                'galleries' => [
                    'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=1400&q=80',
                    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
                ],
            ],
        ];

        foreach ($projects as $projectData) {
            $project = Project::query()->updateOrCreate(
                ['slug' => $projectData['slug']],
                collect($projectData)
                    ->except(['latitude', 'longitude', 'address', 'landmark', 'nearby_points', 'galleries'])
                    ->all(),
            );

            ProjectLocation::query()->updateOrCreate(
                ['project_id' => $project->id],
                [
                    'latitude' => $projectData['latitude'],
                    'longitude' => $projectData['longitude'],
                    'address' => $projectData['address'],
                    'landmark' => $projectData['landmark'],
                    'nearby_points' => $projectData['nearby_points'],
                ],
            );

            $project->galleries()->delete();

            foreach ($projectData['galleries'] as $index => $imageUrl) {
                Gallery::query()->create([
                    'project_id' => $project->id,
                    'image_url' => $imageUrl,
                    'caption' => $project->name.' Gallery '.($index + 1),
                    'sort_order' => $index + 1,
                ]);
            }
        }
    }

    private function seedBlogs(): void
    {
        $blogs = [
            [
                'title' => 'Strategi Memilih Properti Bernilai Investasi Tinggi',
                'slug' => 'strategi-memilih-properti-investasi-tinggi',
                'category' => 'Investasi properti',
                'excerpt' => 'Lokasi, akses, reputasi developer, dan rencana infrastruktur menjadi indikator utama properti yang sehat.',
                'content' => 'Properti bernilai investasi tinggi dimulai dari lokasi yang kuat, legalitas jelas, konsep produk relevan, dan potensi permintaan sewa yang stabil. Investor perlu memeriksa akses transportasi, rencana infrastruktur, kualitas pengembang, serta supply-demand di area sekitar sebelum mengambil keputusan.',
                'cover_image' => 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
                'meta_title' => 'Tips investasi properti modern',
                'meta_description' => 'Panduan singkat memilih properti bernilai investasi tinggi.',
            ],
            [
                'title' => 'Checklist Membeli Rumah Pertama agar Tidak Salah Pilih',
                'slug' => 'checklist-membeli-rumah-pertama',
                'category' => 'Tips rumah',
                'excerpt' => 'Mulai dari legalitas, lingkungan, layout, fasilitas, sampai biaya bulanan yang perlu dihitung sejak awal.',
                'content' => 'Pembeli rumah pertama perlu membuat checklist sederhana: status sertifikat, reputasi developer, akses harian, potensi banjir, kualitas material, tata ruang, sampai biaya IPL atau keamanan. Survey lokasi di hari kerja dan akhir pekan juga membantu memahami ritme kawasan.',
                'cover_image' => 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
                'meta_title' => 'Checklist membeli rumah pertama',
                'meta_description' => 'Hal penting sebelum membeli rumah pertama.',
            ],
            [
                'title' => 'Tips KPR untuk Pembeli Rumah Pertama',
                'slug' => 'tips-kpr-pembeli-rumah-pertama',
                'category' => 'Tips KPR',
                'excerpt' => 'Persiapkan DP, rasio cicilan, dokumen, dan simulasi tenor sejak awal agar proses KPR lebih mulus.',
                'content' => 'KPR yang sehat memperhatikan kemampuan cicilan, biaya tambahan, dan kesiapan dokumen sebelum booking unit. Idealnya cicilan bulanan tidak menekan arus kas keluarga, sementara dana darurat tetap tersedia setelah akad.',
                'cover_image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
                'meta_title' => 'Tips KPR rumah pertama',
                'meta_description' => 'Panduan KPR untuk pembeli rumah pertama.',
            ],
            [
                'title' => 'Interior Modern Minimalis untuk Hunian Premium',
                'slug' => 'interior-modern-minimalis-hunian-premium',
                'category' => 'Interior modern',
                'excerpt' => 'Palet netral, pencahayaan berlapis, dan furniture proporsional membuat hunian terasa lapang dan elegan.',
                'content' => 'Interior modern minimalis tidak berarti kosong. Kuncinya adalah proporsi furniture, storage rapi, material natural, dan pencahayaan berlapis. Accent gold, wood texture, dan soft grey dapat memberi nuansa premium tanpa membuat ruang terasa berat.',
                'cover_image' => 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
                'meta_title' => 'Interior modern minimalis premium',
                'meta_description' => 'Inspirasi interior modern untuk hunian premium.',
            ],
        ];

        foreach ($blogs as $blogData) {
            Blog::query()->updateOrCreate(
                ['slug' => $blogData['slug']],
                [
                    ...$blogData,
                    'published_at' => now(),
                    'is_published' => true,
                ],
            );
        }
    }

    private function seedTestimonials(): void
    {
        $testimonials = [
            [
                'client_name' => 'Rania Putri',
                'client_role' => 'Founder Interior Studio',
                'project_name' => 'Aurelia Hills Residence',
                'avatar_url' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
                'quote' => 'Proses pembelian transparan, material unit sesuai ekspektasi, dan kawasan terasa sangat private.',
                'rating' => 5,
            ],
            [
                'client_name' => 'Dimas Mahendra',
                'client_role' => 'Investor Properti',
                'project_name' => 'Nava Signature Suites',
                'avatar_url' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
                'quote' => 'Lokasi dan konsep produknya kuat untuk pasar sewa profesional. Tim sales sangat informatif.',
                'rating' => 5,
            ],
            [
                'client_name' => 'Clara Wijaya',
                'client_role' => 'Business Owner',
                'project_name' => 'Mavira Lifestyle Arcade',
                'avatar_url' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
                'quote' => 'Fasad dan tenant mix-nya cocok untuk brand lifestyle. Area parkir juga jadi nilai tambah besar.',
                'rating' => 5,
            ],
            [
                'client_name' => 'Aditya Prakoso',
                'client_role' => 'Tech Consultant',
                'project_name' => 'Orion Transit Apartment',
                'avatar_url' => 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
                'quote' => 'Saya pilih karena akses transportasinya lengkap. Cocok untuk mobilitas harian dan potensi sewa.',
                'rating' => 5,
            ],
        ];

        foreach ($testimonials as $testimonialData) {
            Testimonial::query()->updateOrCreate(
                ['client_name' => $testimonialData['client_name']],
                [
                    ...$testimonialData,
                    'is_published' => true,
                ],
            );
        }
    }

    private function seedCompanyProfile(): void
    {
        CompanyProfile::query()->updateOrCreate(
            ['company_name' => 'Nirvana Estate Development'],
            [
                'tagline' => 'Curated living, lasting value.',
                'about' => 'Nirvana Estate Development adalah perusahaan developer properti yang fokus membangun hunian, apartemen, dan area komersial modern di lokasi strategis dengan standar desain premium.',
                'history' => 'Berawal dari pengembangan cluster butik pada 2016, perusahaan tumbuh menjadi developer yang mengintegrasikan desain, legalitas, pengalaman pelanggan, dan analisis lokasi untuk menciptakan properti bernilai jangka panjang.',
                'vision_mission' => [
                    'vision' => 'Menjadi developer properti terpercaya yang menciptakan ruang hidup bernilai tinggi.',
                    'mission' => [
                        'Mengembangkan properti di lokasi strategis dan bertumbuh.',
                        'Menghadirkan desain modern yang fungsional dan tahan waktu.',
                        'Memberikan pengalaman pembelian yang transparan dan profesional.',
                    ],
                ],
                'core_values' => ['Integrity', 'Craftsmanship', 'Customer Centric', 'Long Term Value'],
                'legalities' => ['PT Nirvana Estate Development', 'NIB 912020260518', 'PKKPR dan IMB/PBG sesuai tahap proyek', 'Sertifikat HGB induk'],
                'timeline' => [
                    ['year' => '2016', 'title' => 'Pengembangan cluster butik pertama'],
                    ['year' => '2019', 'title' => 'Ekspansi ke kawasan komersial'],
                    ['year' => '2023', 'title' => 'Peluncuran apartemen premium berkonsep TOD'],
                    ['year' => '2026', 'title' => 'Portfolio 900+ unit terjual'],
                ],
                'phone' => '+62 21 5089 2026',
                'whatsapp' => '6281299902026',
                'email' => 'hello@nirvanaestate.test',
                'address' => 'Nirvana Estate Gallery, Jl. Jenderal Sudirman Kav. 52, Jakarta Selatan',
                'social_links' => [
                    'instagram' => 'https://instagram.com/nirvanaestate',
                    'linkedin' => 'https://linkedin.com/company/nirvanaestate',
                    'youtube' => 'https://youtube.com/@nirvanaestate',
                ],
                'office_latitude' => -6.2245600,
                'office_longitude' => 106.8093300,
            ],
        );
    }
}
