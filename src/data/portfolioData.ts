import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'M KEYSHA ALFARO',
  tagline: 'Tech Enthusiast • Student Innovator • Young Achiever',
  education: 'SMA Negeri 1 Cicurug',
  status: 'Terbuka untuk kolaborasi, inovasi pelajar, dan kegiatan kewirausahaan.',
  bio: 'Pelajar SMA Negeri 1 Cicurug yang tertarik pada teknologi, inovasi, pengembangan diri, dan kewirausahaan. Senang mengeksplorasi ide baru, berkolaborasi dalam berbagai kegiatan, serta menciptakan dampak positif bagi lingkungan sekitar.',
  experienceStart: 'Pelajar Aktif',
  avatarUrl: '/avatar.webp',
  interests: [
    'Tech Enthusiasts',
    'Student Innovation',
    'Young Achiever',
    'Young Technologist',
    'Student Technopreneur',
  ],
  contact: {
    email: 'ryhndastra@gmail.com',
    github: 'https://github.com/sapilanang',
    linkedin: 'https://linkedin.com/in/reyhand-astra',
    location: 'Indonesia'
  }
};

export const capabilitiesData: TechItem[] = [
  // 01 // Personal Arsenal - Kumpulan skill dan keunggulan diri
  {
    name: 'Public Speaking & Presentasi',
    category: 'academic',
    layer: 'arsenal',
    iconKey: 'messagesquare',
    color: '#0284c7',
    roleTag: 'Komunikasi Kelas',
    usageContext: 'Kemampuan menyampaikan materi presentasi dan argumentasi ilmiah di depan kelas dengan bahasa yang terstruktur, artikulatif, dan percaya diri.',
    highlights: [
      'Penyampaian gagasan terstruktur & runtut',
      'Memimpin sesi tanya jawab kelompok kelas',
      'Artikulasi vokal jelas dan persuasif'
    ],
    proofMetric: 'Aktif di Setiap Presentasi Kelompok'
  },
  {
    name: 'Analisis Sosial IPS',
    category: 'academic',
    layer: 'arsenal',
    iconKey: 'brain',
    color: '#6366f1',
    roleTag: 'Kajian Kritis',
    usageContext: 'Pemahaman mendalam mengenai dinamika sosial, interaksi masyarakat, struktur kelompok, serta konsep dasar ekonomi dan sosiologi SMA.',
    highlights: [
      'Analisis fenomena sosial masyarakat terkini',
      'Kajian ekonomi mikro dan perilaku konsumen',
      'Kritis terhadap isu lingkungan dan masyarakat'
    ],
    proofMetric: 'Nilai Unggul Sosiologi & Ekonomi'
  },
  {
    name: 'Playmaker & Taktik Basket',
    category: 'sports',
    layer: 'arsenal',
    iconKey: 'target',
    color: '#ea580c',
    roleTag: 'Strategi Lapangan',
    usageContext: 'Berperan sebagai point guard dan playmaker, mengatur permainan tim hingga meraih Juara 1 Nesa Cup serta Juara 2 dan penghargaan MVP di Islamic Super League.',
    highlights: [
      'Point guard pada turnamen Nesa Cup',
      'Kapten dan playmaker di Islamic Super League',
      'Meraih penghargaan MVP Islamic Super League'
    ],
    proofMetric: 'Juara 1 Nesa Cup • MVP Islamic Super League'
  },
  {
    name: 'Team Leadership',
    category: 'arsenal',
    layer: 'arsenal',
    iconKey: 'crown',
    color: '#f59e0b',
    roleTag: 'Kepemimpinan',
    usageContext: 'Memimpin tim sebagai kapten di Islamic Super League dan berkontribusi dalam perjalanan tim meraih Juara 2 serta penghargaan MVP.',
    highlights: [
      'Menjalankan peran kapten dan playmaker',
      'Membawa tim mencapai final Islamic Super League',
      'Meraih Juara 2 dan penghargaan MVP'
    ],
    proofMetric: 'Kapten • Juara 2 & MVP Islamic Super League'
  },
  {
    name: 'Manajemen Waktu Pelajar-Atlet',
    category: 'bring',
    layer: 'arsenal',
    iconKey: 'timer',
    color: '#10b981',
    roleTag: 'Kedisiplinan Tinggi',
    usageContext: 'Disiplin mengelola jadwal padat antara latihan fisik harian, sparing kompetisi, dan ketuntasan tugas-tugas akademik sekolah tepat waktu.',
    highlights: [
      'Perencanaan jadwal harian teratur',
      'Penyelesaian tugas sekolah sebelum bertanding',
      'Konsistensi performa di kelas dan lapangan'
    ],
    proofMetric: 'Prestasi Olahraga & Nilai Rapor Seimbang'
  },
  {
    name: 'Problem Solving Kritis',
    category: 'arsenal',
    layer: 'arsenal',
    iconKey: 'sparkles',
    color: '#8b5cf6',
    roleTag: 'Daya Nalar Cepat',
    usageContext: 'Memberi kontribusi poin, steal, dan rebound penting dalam perjalanan tim meraih Juara 1 Putra Sukabumi Youth Competition.',
    highlights: [
      'Kontribusi poin krusial di pertandingan',
      'Kontribusi steal defensif dan rebound penentu',
      'Mendukung pencapaian Juara 1 Putra tingkat Kabupaten Sukabumi'
    ],
    proofMetric: 'Juara 1 Putra Sukabumi Youth Competition'
  },

  // 02 // Activities & Awards - Organisasi, kegiatan, lomba, dan penghargaan
  {
    name: 'Juara 1 Turnamen Basket Pelajar',
    category: 'sports',
    layer: 'awards',
    iconKey: 'trophy',
    color: '#eab308',
    roleTag: 'Podium Emas',
    usageContext: 'Meraih gelar Juara 1 dalam turnamen basket antar-SMA dengan rekor tak terkalahkan dan kontribusi poin krusial sepanjang laga.',
    highlights: [
      'Mencetak tembakan penentu di babak final',
      'Pertahanan disiplin full-court press tim',
      'Trofi dan medali emas kejuaraan sekolah'
    ],
    proofMetric: 'Trofi Juara 1 Antar-SMA'
  },
  {
    name: 'Juara 2 Basketball Cup Regional',
    category: 'sports',
    layer: 'awards',
    iconKey: 'medal',
    color: '#0284c7',
    roleTag: 'Piala Perak',
    usageContext: 'Mencapai babak grand final kejuaraan bergengsi tingkat pelajar regional dengan persaingan ketat antar-sekolah unggulan.',
    highlights: [
      'Kontribusi konsisten assist, steal & rebound',
      'Kerja sama tim solid menghadapi tim unggulan',
      'Sertifikat penghargaan atlet pelajar berprestasi'
    ],
    proofMetric: 'Runner-Up Cup Regional'
  },
  {
    name: 'Medali Kejuaraan Renang Pelajar',
    category: 'sports',
    layer: 'awards',
    iconKey: 'waves',
    color: '#06b6d4',
    roleTag: 'Podium Aquatic',
    usageContext: 'Pencapaian medali dalam nomor 50 meter gaya bebas dan gaya dada pada kompetisi aquatic tingkat pelajar/komunitas renang.',
    highlights: [
      'Kecepatan waktu finis kompetitif',
      'Teknik luncuran dan pernapasan stabil',
      'Konsistensi daya tahan kayuhan di lintasan'
    ],
    proofMetric: 'Medali Renang 50m Gaya Bebas & Dada'
  },
  {
    name: 'Tim Inti Starting Five Basket SMAN',
    category: 'sports',
    layer: 'awards',
    iconKey: 'award',
    color: '#ef4444',
    roleTag: 'Skuad Utama',
    usageContext: 'Terpilih sebagai salah satu pemain utama (Starting 5) tim basket sekolah SMAN 1 Cicurug yang diandalkan di setiap kejuaraan resmi.',
    highlights: [
      'Pilar rotasi permainan tim sekolah',
      'Jam terbang tanding kompetitif tinggi',
      'Dedikasi kehadiran latihan rutin 100%'
    ],
    proofMetric: 'Starting Five Basket Sekolah'
  },
  {
    name: 'Panitia Divisi Olahraga Classmeeting',
    category: 'awards',
    layer: 'awards',
    iconKey: 'users',
    color: '#10b981',
    roleTag: 'Kepanitiaan Sekolah',
    usageContext: 'Dipercaya menjadi seksi perlombaan dan koordinator teknis pertandingan basket antar-kelas di lingkungan sekolah.',
    highlights: [
      'Menyusun skema bagan dan jadwal pertandingan',
      'Memimpin jalannya pertandingan dengan adil & tertib',
      'Menjaga sportivitas dan kondusivitas antar-siswa'
    ],
    proofMetric: 'Sukses Menggelar Turnamen Antar-Kelas'
  },
  {
    name: 'Siswa Teraktif Diskusi Kelas IPS',
    category: 'academic',
    layer: 'awards',
    iconKey: 'graduationcap',
    color: '#3b82f6',
    roleTag: 'Penghargaan Akademik',
    usageContext: 'Mendapat apresiasi guru mata pelajaran sosiologi dan ekonomi atas keaktifan mengajukan gagasan kritis dan respons solutif di kelas.',
    highlights: [
      'Kerap menginisiasi diskusi topik sosial menarik',
      'Membantu rekan sekelas memahami studi kasus',
      'Antusiasme belajar dan membaca referensi'
    ],
    proofMetric: 'Apresiasi Guru: Siswa Sangat Aktif'
  },

  // 03 // Beyond the Classroom - Aktivitas dan pencapaian di luar kelas
  {
    name: 'Klub Basket & Sparing Rutin',
    category: 'sports',
    layer: 'beyond',
    iconKey: 'flame',
    color: '#f97316',
    roleTag: 'Latihan Intensif',
    usageContext: 'Aktivitas pembinaan intensif di klub basket lokal 3-4 kali seminggu, meliputi drill fundamental, dribble drive, dan laga persahabatan.',
    highlights: [
      'Pengasahan akurasi shooting perimeter',
      'Sparing kompetitif dengan klub-klub sekitar',
      'Peningkatan kelincahan fisik lateral'
    ],
    proofMetric: '3-4 Sesi Latihan Per Minggu'
  },
  {
    name: 'Renang Rutin & Daya Tahan (Endurance)',
    category: 'sports',
    layer: 'beyond',
    iconKey: 'waves',
    color: '#0ea5e9',
    roleTag: 'Kebugaran Aquatic',
    usageContext: 'Hobi berenang terprogram untuk menjaga kapasitas aerobik paru-paru, kebugaran otot bahu & kaki, serta relaksasi fisik pasca-latihan basket.',
    highlights: [
      'Renang jarak tempuh 1.000m+ per sesi',
      'Latihan interval gaya bebas dan dada',
      'Ketahanan kardiovaskular optimal'
    ],
    proofMetric: 'Rutinitas Renang 2x Mingguan'
  },
  {
    name: 'Workout Kebugaran & Kelincahan',
    category: 'sports',
    layer: 'beyond',
    iconKey: 'dumbbell',
    color: '#64748b',
    roleTag: 'Strength & Agility',
    usageContext: 'Program latihan fisik teratur berupa calisthenics, core workout, agility ladder, dan skipping guna menunjang vertical jump di lapangan.',
    highlights: [
      'Peningkatan vertical leap saat rebound',
      'Penguatan otot core untuk kestabilan raga',
      'Pencegahan risiko cedera olahraga'
    ],
    proofMetric: 'Kondisi Kebugaran Atletik Prima'
  },
  {
    name: 'Bakti Sosial & Komunitas Remaja',
    category: 'beyond',
    layer: 'beyond',
    iconKey: 'heart',
    color: '#ec4899',
    roleTag: 'Aksi Sosial',
    usageContext: 'Keterlibatan aktif dalam kegiatan sosial angkatan, santunan peduli sesama, dan program kerja bakti kebersihan lingkungan sekolah & warga.',
    highlights: [
      'Partisipasi dalam penggalangan dana sosial',
      'Interaksi hangat dengan warga dan anak-anak',
      'Menumbuhkan empati dan kepekaan sosial'
    ],
    proofMetric: 'Aktif Dalam Kegiatan Sosial Muda'
  },
  {
    name: 'Studi Lapangan Sosial & Ekonomi IPS',
    category: 'academic',
    layer: 'beyond',
    iconKey: 'trendingup',
    color: '#14b8a6',
    roleTag: 'Observasi Nyata',
    usageContext: 'Mengamati dinamika transaksi pasar tradisional dan pelaku UMKM lokal guna mengaitkan teori sosiologi dan ekonomi dengan dunia nyata.',
    highlights: [
      'Wawancara langsung dengan pelaku usaha kecil',
      'Penyusunan ringkasan observasi fenomena pasar',
      'Memahami dinamika sosial ekonomi lokal'
    ],
    proofMetric: 'Laporan Riset Sosial Mandiri'
  },

  // 04 // What I Bring - Kemampuan, karakter, dan nilai diri
  {
    name: 'Mentalitas Juara (Winning Mentality)',
    category: 'bring',
    layer: 'bring',
    iconKey: 'flame',
    color: '#dc2626',
    roleTag: 'Pantang Menyerah',
    usageContext: 'Mental baja yang tidak pernah menyerah meskipun tim dalam posisi tertinggal skor; selalu percaya kesempatan menang ada hingga bel akhir berbunyi.',
    highlights: [
      'Fokus total saat tekanan detik-detik akhir',
      'Tidak mudah putus asa menghadapi kesulitan',
      'Menjadi pemantik semangat kebangkitan tim'
    ],
    proofMetric: 'Tangguh di Bawah Tekanan Pertandingan'
  },
  {
    name: 'Sportivitas & Integritas Tinggi',
    category: 'bring',
    layer: 'bring',
    iconKey: 'shieldcheck',
    color: '#059669',
    roleTag: 'Fair Play',
    usageContext: 'Menghormati lawan tanding, mematuhi keputusan wasit, serta menjunjung tinggi kejujuran dalam pergaulan sekolah dan tugas kelas.',
    highlights: [
      'Bermain bersih tanpa kecurangan',
      'Menghargai usaha lawan dan rekan setim',
      'Menerima hasil dengan sikap ksatria & introspektif'
    ],
    proofMetric: 'Prinsip Fair Play di Dalam & Luar Lapangan'
  },
  {
    name: 'Energi Positif & Pembangkit Semangat',
    category: 'bring',
    layer: 'bring',
    iconKey: 'star',
    color: '#eab308',
    roleTag: 'Positive Vibe',
    usageContext: 'Membawa aura semangat membara dan keceriaan yang mencairkan suasana kaku, baik saat kerja kelompok maupun di ruang ganti tim.',
    highlights: [
      'Komunikatif, ramah, dan bersahabat',
      'Selalu memberi tepuk tangan & sorakan suportif',
      'Menciptakan lingkungan yang kompak dan menyenangkan'
    ],
    proofMetric: 'Penyuntik Semangat Rekan Belajar & Bertanding'
  },
  {
    name: 'Kolaborasi & Solidaritas Tim',
    category: 'bring',
    layer: 'bring',
    iconKey: 'users',
    color: '#2563eb',
    roleTag: 'Team First',
    usageContext: 'Memprioritaskan tujuan dan keberhasilan bersama di atas kepentingan pribadi; siap mengisi peran pendukung maupun pemain inti dengan maksimal.',
    highlights: [
      'Mendengarkan saran dan pendapat rekan sekelas',
      'Berbagi peluang dan bola tanpa egois',
      'Membangun rasa persaudaraan yang erat'
    ],
    proofMetric: '100% Mengutamakan Kemenangan Tim'
  },
  {
    name: 'Rasa Ingin Tahu & Keaktifan Kelas',
    category: 'academic',
    layer: 'bring',
    iconKey: 'brain',
    color: '#7c3aed',
    roleTag: 'Growth Mindset',
    usageContext: 'Keingintahuan besar terhadap ilmu pengetahuan sosial, rajin bertanya pada guru saat materi rumit, dan senang berdiskusi solutif.',
    highlights: [
      'Kerap menanyakan latar belakang fenomena sosial',
      'Terbuka terhadap saran dan koreksi dari pelatih/guru',
      'Dorongan kuat untuk terus meningkatkan kapasitas diri'
    ],
    proofMetric: 'Siswa Proaktif & Haus Belajar'
  }
];

export const techStackData: TechItem[] = capabilitiesData;

export const projectsData: Project[] = [
  {
    id: 'isl-2026',
    title: 'Juara 2 & MVP — Islamic Super League (ISL) 2026',
    subtitle: 'Ajang Kompetisi Olahraga Pelajar SD & SMP • "Rise Above The Rain" SMP Internat Al Kausar',
    category: 'smp',
    summary: 'Meraih gelar Juara 2 cabor bola basket jenjang SMP sekaligus dinobatkan sebagai Most Valuable Player (MVP) pada ajang bergengsi Islamic Super League (ISL) 2026 bertema “Rise Above The Rain” di SMP Internat Al Kausar.',
    description: 'Islamic Super League (ISL) 2026 adalah ajang kompetisi olahraga akbar antar-pelajar tingkat SD dan SMP dengan tema “Rise Above The Rain” yang diselenggarakan di SMP Internat Al Kausar. Mengumpulkan berbagai tim pelajar berprestasi dalam perebutan total hadiah kejuaraan sebesar Rp30.000.000. Keysha berhasil memimpin tim bola basket melaju hingga partai grand final meraih Juara 2 dan dinobatkan sebagai Pemain Terbaik (MVP) berkat kepemimpinan, visi bermain, serta torehan poin dan assist yang dominan sepanjang turnamen.',
    architecture: [
      'Penghargaan Most Valuable Player (MVP) Basket atas efisiensi skor dan assist',
      'Memimpin tim melaju mulus melewati babak penyisihan hingga partai Grand Final',
      'Tema Kejuaraan: "Rise Above The Rain" bertempat di SMP Internat Al Kausar',
      'Ajang kompetisi multi-cabor akbar dengan total hadiah keseluruhan Rp30.000.000',
      'Technical Meeting via Zoom (26 Okt) dan laga tanding kompetitif 31 Okt – 8 Nov 2026'
    ],
    stack: [
      'Islamic Super League 2026',
      'Juara 2 Basket SMP',
      'Penghargaan MVP',
      'SMP Internat Al Kausar',
      'Rise Above The Rain',
      'Total Hadiah 30 Juta'
    ],
    highlights: [
      'Dinobatkan sebagai Most Valuable Player (MVP) turnamen',
      'Podium Juara 2 Basket Kategori SMP se-Wilayah',
      'Total hadiah kejuaraan event mencapai Rp30.000.000'
    ],
    challenges: 'Menghadapi persaingan ketat dari sekolah-sekolah unggulan dengan jadwal tanding maraton; menuntut ketahanan stamina aerobik puncak dan ketenangan mental saat skor kejar-mengejar.',
    role: 'Captain & Playmaker (MVP Turnamen)',
    eventVenue: 'SMP Internat Al Kausar',
    eventDate: '31 Okt – 8 Nov 2026',
    awardBadge: 'Juara 2 & MVP',
    demoUrl: 'https://www.instagram.com/p/Dd6SPOEiduR/',
    imageUrl: '/Islamic%20Super%20League.jpg',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Prestasi Utama', value: 'Juara 2 & MVP' },
      { label: 'Total Hadiah Event', value: 'Rp30.000.000' },
      { label: 'Penyelenggara', value: 'Al Kausar' }
    ]
  },
  {
    id: 'nesacup',
    title: 'Juara 1 Basket Putra — Nesa Cup (NesaCup)',
    subtitle: 'Turnamen Tahunan Seni & Olahraga Pelajar Bergengsi • SMP Negeri 1 Cicurug',
    category: 'smp',
    summary: 'Meraih trofi Juara 1 cabor bola basket putra pada ajang kompetisi tahunan Nesa Cup (NesaCup 16) yang diselenggarakan oleh keluarga besar dan organisasi kesiswaan SMP Negeri 1 Cicurug.',
    description: 'Nesa Cup (NesaCup) merupakan agenda kompetisi olahraga dan seni tahunan bergengsi (seperti Nesa Cup 16) yang rutin diselenggarakan oleh keluarga besar dan organisasi siswa di SMP Negeri 1 Cicurug. Menjadi wadah persaingan sportivitas tinggi antar-tim basket pelajar se-wilayah. Keysha tampil sebagai motor serangan dan pengatur tempo tim yang sukses mengantarkan tim menyapu bersih seluruh partai dengan kemenangan dan mengamankan trofi Juara 1.',
    architecture: [
      'Gelar Juara 1 Kategori Bola Basket Putra Nesa Cup',
      'Menjaga rekor tak terkalahkan di setiap babak penyisihan hingga final',
      'Turnamen tradisi tahunan seni & olahraga kebanggaan SMP Negeri 1 Cicurug',
      'Eksekusi taktik fast-break transition dan pertahanan zona disiplin'
    ],
    stack: [
      'Nesa Cup 16',
      'Juara 1 Putra',
      'SMP Negeri 1 Cicurug',
      'Turnamen Tahunan',
      'Starting Five',
      'Trofi Juara'
    ],
    highlights: [
      'Trofi Juara 1 Basket Putra Nesa Cup',
      'Performa konsisten starting five sepanjang kejuaraan',
      'Dukungan penuh suporter sekolah di kandang sendiri'
    ],
    challenges: 'Tekanan mental bertanding di hadapan suporter sekolah sendiri; berhasil diatasi dengan ketenangan eksekusi shooting dan komunikasi tim yang solid.',
    role: 'Starting Five & Point Guard',
    eventVenue: 'SMP Negeri 1 Cicurug',
    eventDate: 'Turnamen Tahunan Nesa Cup',
    awardBadge: 'Juara 1 (Emas)',
    imageUrl: '/Nescup%2016.webp',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Podium', value: 'Juara 1 (Emas)' },
      { label: 'Kejuaraan', value: 'Nesa Cup' },
      { label: 'Tuan Rumah', value: 'SMPN 1 Cicurug' }
    ]
  },
  {
    id: 'syc-2026',
    title: 'Juara 1 Putra — Sukabumi Youth Competition (SYC) Vol. IV 2026',
    subtitle: 'Kejuaraan Basket Pelajar Se-Kabupaten Sukabumi • Wisma Pangestu Cicurug',
    category: 'sma',
    summary: 'Membawa Tim Basket Putra SMAN 1 Cicurug keluar sebagai Juara 1 se-Kabupaten Sukabumi pada turnamen akbar Sukabumi Youth Competition (SYC) Vol. IV 2026 di Wisma Pangestu Cicurug.',
    description: 'Sukabumi Youth Competition (SYC) Vol. IV se-Kabupaten Sukabumi 2026 adalah turnamen bola basket pelajar tingkat SMA paling prestisius di Kabupaten Sukabumi yang dihelat pada Agustus – September 2026 di Wisma Pangestu Cicurug (15, 16, 22, 23, 30 Agustus 2026). Tim Basket Putra SMAN 1 Cicurug sukses meraih Juara 1 Putra (serta Juara 3 Putri). Keysha menjadi pemain pilar di lapangan dengan kontribusi poin krusial, steal defensif, serta rebound penentu kemenangan di partai final.',
    architecture: [
      'Trofi Juara 1 Putra Sukabumi Youth Competition (SYC) Vol. IV 2026 Se-Kabupaten',
      'Rangkaian laga tanding intensif: 15, 16, 22, 23, 30 Agustus 2026',
      'Venue pertandingan resmi: Wisma Pangestu Cicurug',
      'Pencapaian ganda sekolah: Juara 1 Putra & Juara 3 Putri SMAN 1 Cicurug',
      'Penampilan solid dalam duel rebound, defense pick-and-roll, dan clutch shooting'
    ],
    stack: [
      'SYC Vol. IV 2026',
      'Juara 1 Putra',
      'SMAN 1 Cicurug',
      'Se-Kab. Sukabumi',
      'Wisma Pangestu Cicurug',
      'Basket SMA'
    ],
    highlights: [
      'Juara 1 Putra Tingkat Pelajar se-Kabupaten Sukabumi',
      'Pencapaian ganda SMAN 1 Cicurug (Juara 1 Putra & Juara 3 Putri)',
      'Laga final atmosfer tinggi di Wisma Pangestu Cicurug'
    ],
    challenges: 'Menghadapi tim-tim kuat SMA se-Kabupaten Sukabumi dengan jadwal pertandingan yang padat sepanjang bulan Agustus-September; membutuhkan disiplin fisik, fokus pemulihan, dan strategi rotasi pemain yang matang.',
    role: 'Starting Five SMAN 1 Cicurug',
    eventVenue: 'Wisma Pangestu Cicurug',
    eventDate: 'Agustus – September 2026',
    awardBadge: 'Juara 1 Se-Kabupaten',
    demoUrl: 'https://www.instagram.com/p/DdSxduwEoFC/',
    imageUrl: '/Sukabumi%20Youth%20Competition%20VolIV.webp',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Prestasi Juara', value: 'Juara 1 Putra' },
      { label: 'Cakupan Wilayah', value: 'Se-Kab. Sukabumi' },
      { label: 'Tim Sekolah', value: 'SMAN 1 Cicurug' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-sd',
    period: '2015 - 2021',
    role: 'Pendidikan Sekolah Dasar',
    organization: 'SDN 1 Pondokkasolandeuh',
    badge: 'Pendidikan Dasar',
    category: 'elementary',
    description:
      'Menempuh dan menyelesaikan pendidikan dasar di SDN 1 Pondokkasolandeuh. Membangun fondasi disiplin belajar yang kuat, budi pekerti, serta menjadi titik awal awal ketertarikan mendalam pada olahraga atletik, renang, dan permainan bola basket.',
    highlights: [
      'Fondasi disiplin belajar, budi pekerti, dan kepemimpinan dasar',
      'Mulai aktif menyukai olahraga renang dan bola basket',
      'Aktif dalam kegiatan kepramukaan dan perlombaan antarkelas'
    ],
    tech: ['Pendidikan Dasar', 'Olahraga Renang Pemula', 'Kepramukaan', 'Budi Pekerti', 'Kerja Sama']
  },
  {
    id: 'edu-smp',
    period: '2021 - 2024',
    role: 'Pendidikan Sekolah Menengah Pertama',
    organization: 'SMP Negeri 1 Cicurug',
    badge: 'Menengah Pertama',
    category: 'junior',
    description:
      'Menyelesaikan jenjang SMP di SMP Negeri 1 Cicurug. Mengembangkan minat bakat olahraga secara terstruktur lewat ekstrakurikuler basket, melatih ketahanan fisik melalui renang rutin, serta aktif berkontribusi dalam kegiatan organisasi kelas dan pentas sekolah.',
    highlights: [
      'Anggota aktif ekstrakurikuler bola basket SMPN 1 Cicurug',
      'Latihan renang terprogram menjaga kebugaran fisik & stamina',
      'Aktif dalam kepengurusan kelas dan kepanitiaan pentas seni sekolah'
    ],
    tech: ['Ekskul Basket SMP', 'Renang Rutin', 'Teamwork', 'Komunikasi', 'Organisasi Kelas']
  },
  {
    id: 'edu-sma',
    period: '2024 - Sekarang',
    role: 'Pelajar SMA (Peminatan IPS)',
    organization: 'SMA Negeri 1 Cicurug',
    badge: 'Pelajar Aktif',
    category: 'highschool',
    description:
      'Menempuh pendidikan tingkat menengah atas jurusan IPS di SMA Negeri 1 Cicurug. Menjadi salah satu pemain utama (Starting Five) tim basket sekolah yang berhasil mempersembahkan gelar Juara 1 dan Juara 2 di berbagai kejuaraan antar-SMA, perenang aktif, serta vokal dalam diskusi sosiologi dan ekonomi di kelas.',
    highlights: [
      'Peminatan Ilmu Pengetahuan Sosial (IPS): Sosiologi & Ekonomi',
      'Pemain inti Starting Five basket sekolah peraih Juara 1 & 2 kejuaraan',
      'Siswa aktif dalam presentasi kelas, kepanitiaan classmeeting & bakti sosial'
    ],
    tech: ['Peminatan IPS', 'Starting Five Basket', 'Juara Turnamen SMA', 'Renang Prestasi', 'Public Speaking']
  },
  {
    id: 'edu-univ-melbourne',
    period: 'Target Masa Depan',
    role: 'Target Studi Sarjana (Undergraduate Dream)',
    organization: 'University of Melbourne (Australia)',
    badge: 'Universitas Impian',
    category: 'target',
    description:
      'Memiliki tekad dan cita-cita kuat untuk menempuh pendidikan sarjana di University of Melbourne, universitas peringkat 1 di Australia dan top 15 dunia. Berkomitmen mempersiapkan keunggulan akademik, kemampuan bahasa Inggris internasional, serta portofolio kepemimpinan pelajar-atlet.',
    highlights: [
      'Target studi di universitas peringkat #1 Australia & #13 Dunia (QS World Ranking)',
      'Fokus bidang studi: Social Sciences, Business, Management, atau Global Leadership',
      'Persiapan penguasaan bahasa Inggris akademik (IELTS) & portofolio prestasi'
    ],
    tech: ['University of Melbourne', 'Studi Luar Negeri', 'Bachelor Degree', 'Global Leadership', 'IELTS Academic']
  }
];
