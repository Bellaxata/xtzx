function _getThinkingSteps(prompt,hasAttachment,attachmentIsImage,attachmentName){
  const p=(prompt||'').toLowerCase()
  const ext=(attachmentName||'').split('.').pop().toLowerCase()
  const pool=[]

  if(attachmentIsImage||/\b(gambar|foto|image|photo|screenshot|tangkap layar|capture|pic|picture|visual|ilustrasi|infografis|poster|banner|thumbnail|avatar|logo|icon|desain|design|render|mockup|wireframe|foto produk|foto profil|meme|stiker)\b/.test(p)){
    pool.push(
      'Menganalisis gambar','Memproses piksel gambar','Mendeteksi objek dan elemen',
      'Mengidentifikasi warna dominan','Membaca teks dalam gambar (OCR)',
      'Menganalisis komposisi visual','Mendeteksi bentuk dan kontur',
      'Mengukur dimensi dan proporsi','Mengenali pola dan tekstur',
      'Memahami konteks gambar','Menilai kualitas dan resolusi',
      'Mengidentifikasi gaya visual','Mendeteksi latar belakang dan foreground',
      'Menganalisis pencahayaan gambar','Mengenali simbol dan ikon',
      'Mendeteksi objek tersembunyi','Menganalisis kedalaman gambar',
      'Memproses metadata gambar','Mengevaluasi saturasi warna',
      'Mengidentifikasi jenis konten visual','Menyusun deskripsi gambar lengkap'
    )
  }

  if(['pdf','doc','docx','txt','odt','rtf','md','pages','epub'].includes(ext)||/\b(dokumen|pdf|berkas|laporan|file teks|naskah|makalah|skripsi|karya tulis|proposal|kontrak|sertifikat|faktur|invoice|nota|memo|risalah|buku|manual|panduan|tesis|disertasi|surat resmi|akta)\b/.test(p)){
    pool.push(
      'Membuka dokumen','Membaca struktur dokumen','Mengekstrak teks utama',
      'Mengidentifikasi bab dan sub-bab','Memetakan alur konten',
      'Mencari informasi kunci','Menganalisis gaya penulisan',
      'Mengidentifikasi entitas penting','Memverifikasi data dokumen',
      'Mendeteksi referensi dan kutipan','Merangkum isi dokumen',
      'Mengecek konsistensi informasi','Menganalisis argumen utama',
      'Menelusuri kronologi informasi','Mendeteksi inkonsistensi data',
      'Mengidentifikasi kesimpulan dokumen','Menganalisis format dan layout',
      'Menghitung jumlah halaman dan kata','Menyusun ringkasan komprehensif',
      'Mengekstrak angka dan statistik','Mengidentifikasi penulis dan konteks'
    )
  }

  if(['xlsx','xls','csv','tsv','ods'].includes(ext)||/\b(data|tabel|spreadsheet|excel|angka|statistik|grafik|chart|pivot|kolom|baris|dataset|database|rekap|rekapitulasi|inventaris|laporan data|analisis data)\b/.test(p)){
    pool.push(
      'Memuat dataset','Membaca header kolom','Mengidentifikasi tipe data tiap kolom',
      'Menghitung total keseluruhan','Menghitung rata-rata','Mencari nilai maksimum',
      'Mencari nilai minimum','Menghitung median dan modus',
      'Mendeteksi data kosong (null/NaN)','Mendeteksi data duplikat',
      'Menganalisis distribusi data','Mengidentifikasi outlier',
      'Menyusun statistik deskriptif','Menganalisis korelasi antar kolom',
      'Menemukan tren dan pola data','Memverifikasi integritas data',
      'Menghitung persentase dan rasio','Menyaring data berdasarkan kriteria',
      'Mengurutkan data secara relevan','Mempersiapkan visualisasi data',
      'Menganalisis data time series','Menyusun laporan data komprehensif'
    )
  }

  if(/\b(kode|code|program|fungsi|function|bug|error|debug|javascript|python|java|html|css|php|sql|typescript|react|vue|angular|nodejs|script|algoritma|variabel|loop|array|object|class|method|api|endpoint|library|framework|compile|runtime|syntax|refactor|optimize|deploy|git|devops|backend|frontend|fullstack|database|query|server|rest|graphql|bash|shell|docker|kubernetes|regex|json|xml|flutter|kotlin|swift|golang|rust|ruby|scala|haskell|assembly|c\+\+|c#)\b/.test(p)){
    pool.push(
      'Membaca struktur kode','Menganalisis alur eksekusi','Memeriksa sintaks',
      'Mendeteksi potensi bug','Mengevaluasi logika algoritma',
      'Mengidentifikasi dependensi','Memeriksa keamanan kode',
      'Menganalisis kompleksitas waktu O(n)','Menganalisis kompleksitas ruang',
      'Menelusuri stack trace error','Mencari pola anti-pattern',
      'Mengevaluasi kualitas kode','Mengoptimalkan performa',
      'Memeriksa edge case','Menganalisis memory usage',
      'Meninjau naming convention','Mengecek code duplication',
      'Memvalidasi input dan output','Mengevaluasi error handling',
      'Menganalisis test coverage','Menyusun dokumentasi kode',
      'Mendeteksi race condition','Memeriksa null pointer risks',
      'Mengoptimalkan query database','Menyusun solusi optimal'
    )
  }

  if(/\b(hitung|kalkulasi|matematik|rumus|persamaan|integral|turunan|limit|aljabar|geometri|trigonometri|probabilitas|statistik|vektor|matriks|logaritma|eksponen|akar|pangkat|bilangan|pecahan|desimal|persen|rasio|proporsi|kombinatorik|permutasi|himpunan|logika|bunga|cicilan|diskon|pajak|konversi satuan|kalkulus|diferensial|deret|barisan)\b/.test(p)){
    pool.push(
      'Mengidentifikasi jenis soal matematika','Memuat rumus yang relevan',
      'Menentukan variabel dan konstanta','Menyederhanakan persamaan',
      'Menghitung langkah demi langkah','Memverifikasi hasil perhitungan',
      'Mengecek satuan dan dimensi','Mencari solusi alternatif',
      'Memplot grafik fungsi','Menyusun penjelasan matematis',
      'Memeriksa kasus batas (boundary)','Mengecek jawaban dengan substitusi',
      'Mengidentifikasi metode penyelesaian','Menyederhanakan ekspresi aljabar',
      'Menghitung determinan matriks','Menganalisis konvergensi deret',
      'Memverifikasi dengan kalkulasi balik','Menyusun bukti matematis'
    )
  }

  if(/\b(terjemah|translate|bahasa|language|inggris|indonesia|arab|jepang|korea|mandarin|spanyol|prancis|jerman|italia|rusia|hindi|melayu|belanda|portugis|latin|thai|vietnam|turki|linguistik|kosakata|grammar|tata bahasa|idiom|proofread|koreksi|ejaan|tanda baca|parafrase|parafrasa)\b/.test(p)){
    pool.push(
      'Mendeteksi bahasa sumber','Menganalisis struktur kalimat',
      'Mengidentifikasi register bahasa','Mencari padanan kata tepat',
      'Mempertimbangkan konteks budaya','Menerjemahkan ekspresi idiomatik',
      'Menyesuaikan gaya dan tone','Memeriksa keajekan terjemahan',
      'Mengecek tata bahasa target','Menyempurnakan diksi',
      'Memvalidasi makna keseluruhan','Mendeteksi false friend antar bahasa',
      'Menganalisis nuansa semantik','Mengecek tanda baca dan ejaan',
      'Menyesuaikan panjang kalimat','Memverifikasi istilah teknis'
    )
  }

  if(/\b(ringkas|rangkum|rekap|summary|singkat|kesimpulan|poin penting|highlight|intisari|garis besar|overview|abstrak|tldr|poin utama|resume|resum)\b/.test(p)){
    pool.push(
      'Membaca keseluruhan konten','Mengidentifikasi tema utama',
      'Menandai poin-poin kunci','Menyaring informasi penting',
      'Membuang informasi redundan','Mengelompokkan ide sejenis',
      'Mengatur urutan logis','Menyesuaikan tingkat detail',
      'Memformulasikan kesimpulan','Memverifikasi kelengkapan',
      'Mengidentifikasi argumen pendukung','Mendeteksi kontradiksi',
      'Menghitung proporsi informasi','Menyusun ringkasan terstruktur'
    )
  }

  if(/\b(tulis|buat|cerita|artikel|essay|puisi|surat|caption|konten|blog|copywriting|narasi|fiksi|naskah|skrip|slogan|tagline|deskripsi|biografi|autobiografi|cerpen|novel|pantun|lirik|sajak|pidato|email|pesan|pengumuman|iklan|press release|storyline|plot|karakter|dialog|monolog)\b/.test(p)){
    pool.push(
      'Merancang konsep tulisan','Mengembangkan kerangka ide',
      'Menentukan sudut pandang narasi','Memilih gaya penulisan',
      'Membangun opening yang kuat','Mengembangkan alur tengah',
      'Menyusun transisi antar bagian','Memilih diksi yang tepat',
      'Menambahkan detail dan contoh','Membangun climax atau argumen',
      'Menyusun penutup yang berkesan','Mengecek konsistensi tone',
      'Merevisi dan memoles tulisan','Menghitung kata dan paragraf',
      'Mengembangkan karakter dan setting','Membangun konflik yang menarik',
      'Menyesuaikan dengan target pembaca','Mengoptimalkan hook pembuka',
      'Mengevaluasi ritme dan flow tulisan','Menambahkan elemen persuasif'
    )
  }

  if(/https?:\/\/|www\.|\.com|\.id|\.org|\.net|\.io|\.co|\b(link|url|website|situs|halaman web|webpage|portal|domain|tautan|browse|akses web)\b/.test(p)){
    pool.push(
      'Memproses tautan','Menganalisis struktur URL',
      'Mengecek keamanan dan validitas tautan','Membaca konten halaman',
      'Mengekstrak informasi relevan','Memverifikasi sumber dan kredibilitas',
      'Menganalisis metadata halaman','Mendeteksi tanggal publikasi',
      'Menyaring konten utama dari iklan','Mengidentifikasi penulis konten',
      'Menganalisis struktur halaman','Menyusun ringkasan konten web'
    )
  }

  if(/\b(rekomen|saran|suggest|pilih|terbaik|bandingkan|versus|vs\b|review|ulasan|rating|ranking|peringkat|komparasi|evaluasi|penilaian|seleksi|alternatif|opsi|pilihan|lebih baik|mana yang|worth it|worth)\b/.test(p)){
    pool.push(
      'Mengidentifikasi semua opsi yang ada','Mengumpulkan kriteria penilaian',
      'Membandingkan spesifikasi teknis','Mengevaluasi kelebihan masing-masing',
      'Menganalisis kekurangan tiap opsi','Mempertimbangkan konteks kebutuhan',
      'Menghitung nilai terbaik per harga','Menelusuri ulasan pengguna nyata',
      'Mempertimbangkan after-sales support','Menganalisis reputasi brand',
      'Menyusun matriks perbandingan','Mempertimbangkan skalabilitas',
      'Mengevaluasi kemudahan penggunaan','Merumuskan rekomendasi final'
    )
  }

  if(/\b(rencana|jadwal|plan|schedule|agenda|itinerary|langkah|tahap|timeline|roadmap|milestone|target|goals|strategi|workflow|proses|prosedur|panduan|tutorial|cara|tips|step by step|to do|checklist|prioritas|sprint|backlog)\b/.test(p)){
    pool.push(
      'Memahami tujuan akhir','Mengidentifikasi sumber daya tersedia',
      'Menentukan prioritas utama','Membuat urutan langkah optimal',
      'Memperkirakan durasi setiap tahap','Mengidentifikasi dependensi antar tugas',
      'Mengantisipasi risiko potensial','Menyiapkan rencana kontingensi',
      'Mengoptimalkan alur kerja','Menentukan indikator keberhasilan (KPI)',
      'Menyusun timeline realistis','Mengalokasikan sumber daya',
      'Mengevaluasi bottleneck potensial','Memfinalisasi rencana aksi'
    )
  }

  if(/\b(cari|search|temukan|apa itu|apa yang|siapa|kapan|dimana|bagaimana|kenapa|mengapa|definisi|pengertian|maksud|arti|jelaskan|sebutkan|berikan contoh|contoh|fakta|informasi|tentang|apakah|benarkah|bedanya|perbedaan|persamaan|hubungan|sejarah|asal usul)\b/.test(p)){
    pool.push(
      'Memahami inti pertanyaan','Mengidentifikasi kata kunci utama',
      'Menelusuri basis pengetahuan','Menganalisis konteks pertanyaan',
      'Memverifikasi akurasi fakta','Menghubungkan konsep terkait',
      'Menyaring informasi paling relevan','Mengevaluasi bobot informasi',
      'Mengidentifikasi nuansa penting','Memeriksa perspektif berbeda',
      'Menghubungkan dengan contoh nyata','Mengecek konsistensi jawaban',
      'Menyusun jawaban terstruktur','Menambahkan konteks tambahan'
    )
  }

  if(/\b(fisika|kimia|biologi|astronomi|geografi|geologi|ekologi|evolusi|genetika|neurosains|kuantum|relativitas|termodinamika|elektromagnetik|optik|mekanika|atom|molekul|sel|dna|rna|protein|enzim|ekosistem|iklim|cuaca|lingkungan|energi|listrik|magnet|cahaya|suara|gelombang|reaksi kimia|unsur|senyawa|larutan|asam|basa|fotosintesis|mitosis)\b/.test(p)){
    pool.push(
      'Mengidentifikasi konsep ilmiah utama','Menganalisis teori yang berlaku',
      'Menghubungkan prinsip dasar sains','Menelusuri penelitian terkini',
      'Menganalisis mekanisme ilmiah','Mengevaluasi data eksperimen',
      'Memformulasikan penjelasan ilmiah','Menyederhanakan konsep kompleks',
      'Mengidentifikasi variabel penelitian','Mengevaluasi metodologi ilmiah',
      'Menghubungkan teori dengan aplikasi','Menyusun jawaban berbasis sains'
    )
  }

  if(/\b(kesehatan|medis|dokter|obat|penyakit|gejala|diagnosis|terapi|nutrisi|vitamin|mineral|diet|olahraga kesehatan|mental|psikologi|stres|anxiety|depresi|tidur|tekanan darah|gula darah|kolesterol|kalori|bmi|imun|vaksin|infeksi|virus|bakteri|alergi|luka|cedera|operasi|farmasi|dosis|efek samping|herbal|suplemen)\b/.test(p)){
    pool.push(
      'Menganalisis konteks kesehatan','Meninjau literatur medis relevan',
      'Mengidentifikasi faktor risiko','Mempertimbangkan riwayat kondisi',
      'Menganalisis gejala yang disebutkan','Mengevaluasi informasi obat',
      'Mempertimbangkan kontraindikasi','Mengidentifikasi interaksi obat',
      'Mengevaluasi pendekatan terapi','Menyusun informasi kesehatan akurat',
      'Menambahkan disclaimer medis','Merekomendasikan konsultasi dokter',
      'Menelusuri panduan klinis terkini','Mempertimbangkan kondisi individual'
    )
  }

  if(/\b(hukum|undang-undang|peraturan|regulasi|kontrak|perjanjian|pasal|ayat|pidana|perdata|advokat|pengacara|notaris|hak|kewajiban|sanksi|denda|gugatan|putusan|kebijakan|sop|compliance|legalitas|perizinan|warisan|hibah|sengketa|mediasi|arbitrase|pernikahan hukum|perceraian|hak cipta|merek dagang|paten|gdpr|privasi data)\b/.test(p)){
    pool.push(
      'Mengidentifikasi aspek hukum relevan','Menelusuri regulasi yang berlaku',
      'Menganalisis pasal-pasal terkait','Mempertimbangkan yurisdiksi',
      'Mengidentifikasi hak dan kewajiban','Mengevaluasi risiko hukum',
      'Menganalisis preseden kasus serupa','Mengidentifikasi pihak yang terlibat',
      'Mengevaluasi bukti dan fakta hukum','Menyusun penjelasan hukum',
      'Menambahkan catatan disclaimer hukum','Merekomendasikan konsultasi pengacara'
    )
  }

  if(/\b(bisnis|usaha|startup|perusahaan|investasi|saham|kripto|forex|keuangan|anggaran|budget|pendapatan|pengeluaran|profit|laba|rugi|neraca|akuntansi|pajak|modal|aset|utang|piutang|cashflow|roi|kpi|okr|marketing|branding|sales|customer|omzet|valuasi|ipo|dividen|portofolio|inflasi|suku bunga|ekspor|impor|supply chain|harga pokok|break even|margin)\b/.test(p)){
    pool.push(
      'Menganalisis konteks bisnis','Mengevaluasi model bisnis',
      'Menghitung metrik keuangan utama','Menganalisis arus kas (cashflow)',
      'Mengevaluasi profitabilitas','Menghitung break-even point',
      'Mengidentifikasi peluang pasar','Menganalisis posisi kompetitif',
      'Menilai risiko bisnis dan keuangan','Membandingkan dengan benchmark industri',
      'Menganalisis struktur biaya','Mengevaluasi strategi pricing',
      'Menyusun proyeksi keuangan','Mengidentifikasi sumber pendapatan',
      'Merumuskan strategi pertumbuhan','Menyiapkan analisis SWOT'
    )
  }

  if(/\b(belajar|pelajaran|materi|kurikulum|ujian|soal|latihan|pr|tugas|sekolah|kampus|universitas|mahasiswa|siswa|guru|dosen|les|kursus|edukasi|modul|bab|topik|quiz|ulangan|snmptn|utbk|cpns|skripsi|tesis|penelitian|jurnal|referensi|sitasi|bibliografi|hipotesis|metodologi penelitian)\b/.test(p)){
    pool.push(
      'Memahami topik pembelajaran','Mengidentifikasi konsep inti',
      'Memetakan hubungan antar konsep','Menentukan level kesulitan',
      'Menyusun penjelasan bertahap','Membuat analogi yang mudah dipahami',
      'Menyiapkan contoh konkret','Mengidentifikasi kesalahpahaman umum',
      'Menyusun pertanyaan latihan','Mengidentifikasi konsep prasyarat',
      'Merekomendasikan sumber belajar','Mengembangkan pemahaman konseptual',
      'Menyusun materi komprehensif','Mengevaluasi tingkat pemahaman'
    )
  }

  if(/\b(masak|resep|bahan|bumbu|cara membuat|takaran|porsi|oven|goreng|rebus|kukus|panggang|tumis|makanan|minuman|kue|roti|nasi|mie|sayur|daging|ikan|ayam|seafood|dessert|snack|jajanan|camilan|kopi|teh|smoothie|diet makanan|kalori makanan|vegetarian|vegan|halal|alergi makanan|baking|fermentasi|marinasi)\b/.test(p)){
    pool.push(
      'Membaca resep secara menyeluruh','Mengidentifikasi bahan-bahan utama',
      'Mengecek ketersediaan bahan','Menganalisis teknik memasak',
      'Menghitung takaran dan porsi','Mempertimbangkan waktu persiapan',
      'Mempertimbangkan waktu memasak','Mengidentifikasi substitusi bahan',
      'Memeriksa urutan langkah masak','Mengevaluasi suhu dan api',
      'Mengidentifikasi tanda kematangan','Menghitung nilai nutrisi',
      'Menyesuaikan untuk diet khusus','Menambahkan tips dan trik memasak',
      'Menyusun langkah memasak yang jelas','Mengevaluasi variasi resep'
    )
  }

  if(/\b(wisata|travel|liburan|destinasi|hotel|penginapan|tiket|penerbangan|itinerary|peta|rute|transportasi|visa|paspor|kota|negara|pantai|gunung|museum|restoran wisata|kuliner wisata|oleh-oleh|budget perjalanan|backpacker|staycation|honeymoon|tour|booking|reservasi|check-in|transit|stopover)\b/.test(p)){
    pool.push(
      'Menganalisis destinasi tujuan','Mencari atraksi wisata terbaik',
      'Mengecek musim dan cuaca setempat','Mengidentifikasi kebutuhan visa',
      'Menyusun itinerary optimal','Memperkirakan biaya transportasi',
      'Memperkirakan biaya akomodasi','Memperkirakan biaya makan harian',
      'Menghitung total budget perjalanan','Menemukan tips hemat biaya',
      'Mengidentifikasi tempat wajib dikunjungi','Mengevaluasi pilihan transportasi lokal',
      'Mencari info kuliner khas','Menambahkan tips keamanan perjalanan',
      'Mengidentifikasi adat dan budaya lokal','Menyusun panduan perjalanan lengkap'
    )
  }

  if(/\b(olahraga|fitness|gym|latihan|workout|lari|renang|sepeda|yoga|pilates|beban|cardio|otot|kalori bakar|berat badan|massa otot|program latihan|jadwal olahraga|peregangan|recovery|suplemen|protein|creatine|HIIT|aerobik|anaerobik|pull up|push up|squat|deadlift|bench press|marathon|triathlon|bulking|cutting|deficit kalori|surplus kalori)\b/.test(p)){
    pool.push(
      'Menganalisis tujuan kebugaran','Mengevaluasi level kebugaran saat ini',
      'Mengidentifikasi otot target','Menghitung kebutuhan kalori harian',
      'Menentukan rasio makronutrien','Menyusun program latihan optimal',
      'Mengatur intensitas dan volume latihan','Menentukan frekuensi latihan mingguan',
      'Menyusun jadwal pemulihan (rest day)','Menghitung progressive overload',
      'Mengoptimalkan nutrisi pre-workout','Mengoptimalkan nutrisi post-workout',
      'Mengevaluasi risiko cedera','Menambahkan panduan pemanasan',
      'Menambahkan panduan pendinginan','Menyusun program komprehensif'
    )
  }

  if(/\b(smartphone|laptop|komputer|tablet|headphone|kamera|printer|router|internet|wifi|bluetooth|aplikasi|software|hardware|spesifikasi|benchmark|performa|baterai|layar|prosesor|ram|storage|ssd|gpu|cpu|update|install|setting|konfigurasi|troubleshoot|driver|firmware|antivirus|backup|cloud|streaming|gaming|pc gaming|monitor|keyboard|mouse|gaming chair|vr|ar)\b/.test(p)){
    pool.push(
      'Mengidentifikasi perangkat yang dimaksud','Menganalisis spesifikasi teknis',
      'Membandingkan performa benchmark','Mengevaluasi fitur-fitur utama',
      'Mengecek kompatibilitas sistem','Menganalisis nilai harga per performa',
      'Meninjau ulasan pengguna','Mengidentifikasi masalah umum',
      'Mengevaluasi garansi dan dukungan','Menganalisis konsumsi daya',
      'Mengidentifikasi alternatif terbaik','Menyusun panduan pembelian',
      'Merumuskan rekomendasi terbaik','Menambahkan tips penggunaan'
    )
  }

  if(/\b(desain|design|grafis|ilustrasi|animasi|3d|render|warna|tipografi|komposisi|layout|ui|ux|prototype|wireframe|mockup|figma|canva|photoshop|illustrator|lightroom|sketsa|lukisan|seni|kreatif|aesthetic|style|template|branding visual|logo desain|color palette|font|motion graphic|video editing|color grading|retouching)\b/.test(p)){
    pool.push(
      'Menganalisis prinsip desain','Mengevaluasi komposisi visual',
      'Mengidentifikasi hierarki informasi','Menganalisis palet warna',
      'Mengevaluasi tipografi dan keterbacaan','Mengecek konsistensi visual',
      'Menilai keseimbangan elemen','Menganalisis penggunaan white space',
      'Mengevaluasi kontras dan aksesibilitas','Mengidentifikasi elemen yang berlebihan',
      'Mempertimbangkan target audiens','Mengevaluasi user experience',
      'Menganalisis brand identity','Memberikan saran kreatif konstruktif',
      'Menyusun panduan desain','Mengevaluasi konsistensi brand'
    )
  }

  if(/\b(perasaan|emosi|motivasi|produktivitas|kebiasaan|habit|mindset|mindfulness|meditasi|self-improvement|percaya diri|overthinking|burnout|work-life balance|hubungan|relasi|komunikasi|konflik|empati|sosial|introvert|ekstrovert|kepribadian|mbti|enneagram|self-awareness|emotional intelligence|toxic|manipulasi|trauma|healing|insecure|self-love|procrastination|prokrastinasi|manajemen waktu|time management|focus|konsentrasi)\b/.test(p)){
    pool.push(
      'Memahami konteks emosional','Menganalisis pola pikir yang terbentuk',
      'Mengidentifikasi akar permasalahan','Mencari pendekatan psikologis tepat',
      'Mempertimbangkan berbagai sudut pandang','Menganalisis dinamika hubungan',
      'Mengevaluasi pola perilaku','Mengidentifikasi cognitive bias',
      'Menganalisis mekanisme pertahanan diri','Menyusun saran yang empatik',
      'Menghubungkan teori psikologi relevan','Menambahkan perspektif positif',
      'Merekomendasikan langkah konkret','Mengevaluasi support system'
    )
  }

  if(/\b(instagram|tiktok|youtube|twitter|facebook|linkedin|pinterest|reddit|discord|telegram|whatsapp|sosmed|social media|konten|hashtag|viral|engagement|followers|subscriber|views|reach|impression|ads|iklan digital|seo|sem|google ads|meta ads|influencer|content creator|affiliate|monetisasi|reels|shorts|feed|story|algorithm sosmed)\b/.test(p)){
    pool.push(
      'Menganalisis platform target','Mengidentifikasi target audiens ideal',
      'Mengevaluasi tren konten terkini','Menganalisis performa konten',
      'Mengoptimalkan caption dan hashtag','Mengevaluasi timing posting',
      'Menganalisis kompetitor di platform','Menyusun strategi konten',
      'Menentukan jadwal posting optimal','Mengevaluasi format konten',
      'Menganalisis algoritma platform','Mengoptimalkan engagement rate',
      'Mengevaluasi call-to-action','Menyusun content calendar',
      'Merumuskan strategi pertumbuhan organik'
    )
  }

  if(/\b(ai|artificial intelligence|machine learning|deep learning|neural network|model|training|dataset|prompt|llm|gpt|gemini|claude|chatbot|computer vision|nlp|natural language|reinforcement learning|overfitting|underfitting|hyperparameter|fine-tuning|embedding|transformer|attention|diffusion|stable diffusion|midjourney|image generation|rag|vector database|langchain|huggingface)\b/.test(p)){
    pool.push(
      'Menganalisis konsep AI yang relevan','Menelusuri arsitektur model',
      'Mengevaluasi pendekatan machine learning','Mengidentifikasi trade-off teknis',
      'Menganalisis teknik training data','Mempertimbangkan dataset requirements',
      'Mengevaluasi metrik performa model','Menganalisis risiko bias data',
      'Mengevaluasi computational cost','Mengidentifikasi teknik optimasi',
      'Menyusun penjelasan teknis AI','Menghubungkan dengan use case nyata'
    )
  }

  if(/\b(lingkungan|ekologi|polusi|emisi|karbon|perubahan iklim|climate change|pemanasan global|energi terbarukan|solar panel|biodiversitas|deforestasi|daur ulang|sustainable|ramah lingkungan|eco|green|sampah|pengelolaan limbah|konservasi|satwa liar|hutan|laut|ocean|coral reef|carbon footprint|net zero|ESG|CSR lingkungan)\b/.test(p)){
    pool.push(
      'Menganalisis isu lingkungan','Menelusuri data ekologis terkini',
      'Mengidentifikasi dampak lingkungan','Mengevaluasi solusi berkelanjutan',
      'Menganalisis kebijakan lingkungan','Mengidentifikasi pelaku terdampak',
      'Mengevaluasi efektivitas solusi hijau','Menganalisis trade-off ekonomi-lingkungan',
      'Menyusun rekomendasi ramah lingkungan'
    )
  }

  if(/\b(mobil|motor|kendaraan|otomotif|mesin|oli|ban|rem|transmisi|bbm|bensin|diesel|listrik EV|hybrid|servis kendaraan|tune up|sparepart|modifikasi|knalpot|suspensi|kopling|aki|radiator|AC mobil|velg|test drive|dealer|kredit kendaraan|bpkb|stnk|sim|pajak kendaraan)\b/.test(p)){
    pool.push(
      'Mengidentifikasi jenis kendaraan','Menganalisis spesifikasi teknis mesin',
      'Mengevaluasi kondisi komponen','Mendiagnosis gejala kerusakan',
      'Mengidentifikasi penyebab masalah','Mengevaluasi biaya perbaikan',
      'Membandingkan pilihan sparepart','Menentukan jadwal perawatan',
      'Mengevaluasi konsumsi BBM','Menyusun panduan perawatan kendaraan'
    )
  }

  if(/\b(fashion|pakaian|baju|outfit|style|mode|trend fashion|warna pakaian|ukuran baju|brand fashion|sepatu|tas|aksesori|perhiasan|makeup|skincare|perawatan kulit|beauty|kosmetik|parfum|rambut|hairstyle|perawatan rambut|nail art|kecantikan|grooming|lifestyle|gaya hidup sehat)\b/.test(p)){
    pool.push(
      'Menganalisis tren fashion terkini','Mengidentifikasi body type',
      'Mengevaluasi kombinasi warna','Menganalisis occasion yang tepat',
      'Mengidentifikasi material terbaik','Mengevaluasi kualitas brand',
      'Menganalisis value for money','Menyusun panduan mix and match',
      'Merekomendasikan gaya yang tepat','Menambahkan tips perawatan pakaian'
    )
  }

  if(/\b(properti|rumah|apartemen|kondominium|kavling|tanah|real estate|KPR|kredit rumah|cicilan rumah|sewa|kos|harga properti|investasi properti|developer|IMB|SHM|HGB|notaris properti|renovasi|interior|arsitek|kontraktor|bangun rumah|desain rumah|denah|RAB)\b/.test(p)){
    pool.push(
      'Menganalisis kebutuhan properti','Mengevaluasi lokasi strategis',
      'Menghitung cicilan KPR','Menganalisis harga pasar properti',
      'Mengevaluasi legalitas dokumen','Mengidentifikasi potensi investasi',
      'Menganalisis infrastruktur sekitar','Mengevaluasi developer/penjual',
      'Menghitung total biaya kepemilikan','Menyusun panduan pembelian properti'
    )
  }

  if(/\b(anak|bayi|balita|parenting|pengasuhan|ibu|ayah|orang tua|kehamilan|hamil|menyusui|ASI|MPASI|tumbuh kembang|vaksin anak|demam anak|tantrum|pola tidur anak|pendidikan anak|sekolah anak|remaja|pubertas|keluarga|pernikahan|hubungan suami istri|perceraian|hak asuh)\b/.test(p)){
    pool.push(
      'Memahami konteks keluarga','Mengidentifikasi usia dan tahap perkembangan',
      'Mengevaluasi pendekatan parenting','Menganalisis kebutuhan anak',
      'Menghubungkan teori perkembangan anak','Mengevaluasi pola asuh',
      'Mengidentifikasi solusi praktis','Mempertimbangkan kondisi keluarga',
      'Menyusun saran yang realistis','Merekomendasikan sumber referensi'
    )
  }

  if(/\b(game|gaming|videogame|mobile game|pc game|console|playstation|xbox|nintendo|steam|gameplay|build|character|hero|item|strategi game|tier list|meta|patch|update game|esports|tournament|rank|ranked|casual|multiplayer|single player|RPG|FPS|MOBA|battle royale|minecraft|valorant|genshin|freefire|pubg|dota|lol)\b/.test(p)){
    pool.push(
      'Menganalisis konteks game','Mengidentifikasi mekanisme gameplay',
      'Mengevaluasi meta terkini','Menganalisis build optimal',
      'Mengidentifikasi counter strategy','Mengevaluasi item dan ability',
      'Menganalisis tier list karakter','Menyusun tips dan strategi',
      'Mengevaluasi playstyle yang cocok','Merekomendasikan build terbaik'
    )
  }

  if(/\b(musik|lagu|chord|melodi|harmoni|ritme|beat|tempo|nada|tangga nada|kunci|alat musik|gitar|piano|drum|bass|biola|vokal|menyanyi|rekaman|mixing|mastering|produksi musik|genre|pop|rock|jazz|classical|hip hop|EDM|indie|dangdut|campursari|lirik|komposisi)\b/.test(p)){
    pool.push(
      'Mengidentifikasi genre dan gaya musik','Menganalisis struktur lagu',
      'Mengevaluasi chord progression','Menganalisis melodi utama',
      'Mengidentifikasi time signature','Mengevaluasi instrumen yang digunakan',
      'Menganalisis lirik dan makna','Menyusun panduan bermusik',
      'Merekomendasikan teknik berlatih'
    )
  }

  if(/\b(foto|fotografi|kamera|lensa|aperture|shutter speed|ISO|exposure|komposisi foto|rule of thirds|depth of field|bokeh|portrait|landscape|macro|street photography|lightroom|photoshop edit|RAW|JPEG|video|videografi|sinematografi|color grading|b-roll|storyboard|drone|gimbal|vlog|youtube video)\b/.test(p)){
    pool.push(
      'Menganalisis teknik fotografi','Mengevaluasi pengaturan kamera',
      'Mengidentifikasi kondisi pencahayaan','Mengevaluasi komposisi gambar',
      'Menganalisis depth of field','Mengevaluasi white balance',
      'Mengidentifikasi teknik editing','Menganalisis color grading',
      'Menyusun panduan fotografi','Merekomendasikan peralatan terbaik'
    )
  }

  if(/\b(hewan peliharaan|kucing|anjing|burung|ikan|hamster|kelinci|reptil|pakan|makanan hewan|vaksin hewan|dokter hewan|grooming hewan|kandang|perilaku hewan|sakit hewan|sterilisasi|adopsi hewan|perawatan hewan|breed|ras hewan)\b/.test(p)){
    pool.push(
      'Mengidentifikasi jenis hewan','Menganalisis kebutuhan nutrisi',
      'Mengevaluasi kondisi kesehatan hewan','Mengidentifikasi gejala penyakit hewan',
      'Mengevaluasi kebutuhan perawatan','Menganalisis perilaku hewan',
      'Menyusun jadwal vaksinasi','Merekomendasikan perawatan optimal'
    )
  }

  if(/\b(agama|islam|kristen|hindu|buddha|katolik|quran|alkitab|doa|ibadah|sholat|puasa|zakat|haji|umroh|halal|haram|fiqih|tafsir|hadits|sunnah|fatwa|rohani|spiritual|meditasi spiritual|karma|moksha|nirwana|iman|taqwa|amal|sedekah)\b/.test(p)){
    pool.push(
      'Mengidentifikasi konteks keagamaan','Menelusuri sumber rujukan yang tepat',
      'Menganalisis perspektif keagamaan','Mengevaluasi konteks historis',
      'Mempertimbangkan perbedaan mazhab','Menyusun penjelasan dengan hormat',
      'Menambahkan konteks yang seimbang'
    )
  }

  if(/\b(politik|pemerintah|kebijakan publik|demokrasi|pemilu|partai|presiden|DPR|MPR|regulasi pemerintah|hak sipil|keadilan sosial|isu sosial|kemiskinan|ketimpangan|korupsi|birokrasi|diplomasi|hubungan internasional|globalisasi|nasionalisme|ideologi|pancasila)\b/.test(p)){
    pool.push(
      'Menganalisis isu secara objektif','Mengidentifikasi berbagai perspektif',
      'Mengevaluasi kebijakan dan dampaknya','Menganalisis konteks historis',
      'Mempertimbangkan berbagai kepentingan','Menyusun analisis yang berimbang',
      'Mengidentifikasi sumber informasi terpercaya'
    )
  }

  if(/\b(pertanian|perkebunan|tanaman|cocok tanam|pupuk|pestisida|irigasi|panen|sawah|kebun|ladang|ternak|peternakan|perikanan|budidaya|bibit|benih|hama|penyakit tanaman|hidroponik|organik pertanian|agribisnis|hortikultura|perkebunan sawit|karet|kopi pertanian|cacao|padi|jagung|kedelai)\b/.test(p)){
    pool.push(
      'Mengidentifikasi jenis tanaman atau ternak','Menganalisis kondisi lahan',
      'Mengevaluasi kebutuhan nutrisi tanaman','Mengidentifikasi hama dan penyakit',
      'Menentukan jadwal tanam dan panen','Mengevaluasi metode budidaya',
      'Menganalisis cuaca dan musim','Menyusun panduan pertanian praktis'
    )
  }

  if(pool.length===0){
    pool.push(
      'Memahami pertanyaan Anda','Mengidentifikasi topik utama',
      'Menganalisis konteks secara mendalam','Menelusuri basis pengetahuan',
      'Menghubungkan informasi yang relevan','Memverifikasi akurasi data',
      'Mengembangkan kerangka jawaban','Mempertimbangkan berbagai sudut pandang',
      'Menyusun respons komprehensif','Mengecek kelengkapan informasi',
      'Menyempurnakan bahasa dan struktur','Menambahkan contoh praktis',
      'Mengoptimalkan kejelasan jawaban','Memvalidasi logika argumen'
    )
  }

  pool.push('Menyusun respons final','Memfinalisasi jawaban untuk Anda')
  return pool
}

function showThinking(el,prompt,hasAttachment,attachmentIsImage,attachmentName){
  const pool=_getThinkingSteps(prompt,hasAttachment,attachmentIsImage,attachmentName)
  function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}}
  const closers=['Menyusun respons final','Memfinalisasi jawaban untuk Anda']
  const mainPool=pool.filter(s=>!closers.includes(s))
  shuffle(mainPool)
  const genericFirst=['Memahami pertanyaan Anda','Menelusuri basis pengetahuan']
  if(mainPool.length>3&&genericFirst.includes(mainPool[0])){
    const swap=mainPool.findIndex((s,i)=>i>0&&!genericFirst.includes(s))
    if(swap>0){const t=mainPool[0];mainPool[0]=mainPool[swap];mainPool[swap]=t}
  }
  const steps=[...mainPool,...closers]
  const spinHTML='<div class="nk-spin-wrap"><svg class="nk-spin-arc" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="15" stroke="#e8edf5" stroke-width="2.5"/><circle class="nk-arc" cx="19" cy="19" r="15" stroke="#4A90D9" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="24 70"/></svg><img class="nk-spin-logo" src="/assets/images.png" alt="" draggable="false" oncontextmenu="return false"/></div>'
  el.innerHTML='<div class="nk-thinking">'+spinHTML+'<span class="nk-thinking-label">'+steps[0]+'</span></div>'
  const labelEl=el.querySelector('.nk-thinking-label')
  let idx=0,timer
  const minD=1400,maxD=2400
  function nextStep(){
    if(!labelEl||!el.contains(labelEl))return
    idx++
    if(idx>=steps.length){
      shuffle(mainPool)
      if(mainPool[0]===labelEl.textContent&&mainPool.length>1){const t=mainPool[0];mainPool[0]=mainPool[1];mainPool[1]=t}
      const newSteps=[...mainPool,...closers]
      steps.length=0;newSteps.forEach(s=>steps.push(s))
      idx=0
    }
    labelEl.classList.add('nk-label-fade')
    setTimeout(function(){
      if(!labelEl||!el.contains(labelEl))return
      labelEl.textContent=steps[idx]
      labelEl.classList.remove('nk-label-fade')
      timer=setTimeout(nextStep,minD+Math.random()*(maxD-minD))
    },200)
  }
  timer=setTimeout(nextStep,minD+Math.random()*(maxD-minD))
  return timer
}
function generateDeviceId(){
  const key='nekograf_device_id'
  const legacyKey='_nekograf_device_id'
  let id=localStorage.getItem(key)||localStorage.getItem(legacyKey)
  if(!id){
    const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
    id=''
    for(let i=0;i<16;i++){
      if(i>0&&i%4===0)id+='-'
      id+=chars.charAt(Math.floor(Math.random()*chars.length))
    }
  }
  try{localStorage.setItem(key,id)}catch(e){}
  try{localStorage.removeItem(legacyKey)}catch(e){}
  return id
}
function getDeveloperAccounts(){
  const src=window.devAccount
  const raw=src&&Array.isArray(src.deviceIds)?src.deviceIds:[]
  return raw.map(a=>String(a||'').trim().toLowerCase()).filter(Boolean)
}
function isDeveloperAccount(){
  return getDeveloperAccounts().includes(String(generateDeviceId()).trim().toLowerCase())
}
(function(){const a=navigator.userAgent.includes('Telegram')||window.location.href.includes('tgWebApp')||(window.Telegram&&Telegram.WebApp);if(a){try{if(window.Telegram&&Telegram.WebApp){Telegram.WebApp.ready();Telegram.WebApp.expand()}}catch(b){}}})();
const $=a=>document.getElementById(a)
const chatInput=$("chatInput")
const actionBtn=$("actionBtn")
const hero=$("hero")
const chatArea=$("chatArea")
const chatWrap=$("chatWrap")
const sidebar=$("sidebar")
const sidebarBackdrop=$("sidebarBackdrop")
const plusBtn=$("plusBtn")

const fileInput=$("fileInput")
const filePillsArea=$("filePillsArea")
let attachedFiles=[]
const deviceIdLabel=$("deviceIdLabel")
if(deviceIdLabel){deviceIdLabel.textContent="Device ID: "+generateDeviceId()}


let shouldStickToBottom=true
const HISTORY_KEY='nekograf_chat_history'
const MAX_HISTORY=60
let currentChatId=null
let currentChatMessages=[]
const activeTypingChats=new Map()
function genChatId(){return 'chat_'+Date.now()+'_'+Math.random().toString(36).slice(2,7)}
const BLOCKED_EXPIRY_MS=24*60*60*1000
function loadHistory(){
  try{
    let list=JSON.parse(localStorage.getItem(HISTORY_KEY)||'[]')
    const now=Date.now()
    const before=list.length
    list=list.filter(item=>{
      if(!item.blocked)return true
      const lockedAt=item.blockedAt||item.updatedAt||0
      return (now-lockedAt)<BLOCKED_EXPIRY_MS
    })
    if(list.length!==before)try{localStorage.setItem(HISTORY_KEY,JSON.stringify(list))}catch(e){}
    return list
  }catch{return[]}
}function saveHistory(list){
  try{localStorage.setItem(HISTORY_KEY,JSON.stringify(list))}catch(e){
    try{const trimmed=list.slice(0,20);localStorage.setItem(HISTORY_KEY,JSON.stringify(trimmed))}catch(e2){}
  }
}
function fmtHistoryTime(ts){
  const d=new Date(ts)
  const now=new Date()
  const isToday=d.toDateString()===now.toDateString()
  const yesterday=new Date(now);yesterday.setDate(now.getDate()-1)
  const isYesterday=d.toDateString()===yesterday.toDateString()
  const hhmm=String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')
  if(isToday)return 'Hari ini, '+hhmm
  if(isYesterday)return 'Kemarin, '+hhmm
  const dd=String(d.getDate()).padStart(2,'0')
  const mm=String(d.getMonth()+1).padStart(2,'0')
  const yyyy=d.getFullYear()
  return dd+'/'+mm+'/'+yyyy+', '+hhmm
}
function extractTopic(userText){
  const text=(userText||'').trim()
  if(!text)return 'Obrolan'
  const cleaned=text.replace(/\[.*?\]/g,'').replace(/[*_`#>\-]/g,'').trim()
  const words=cleaned.split(/\s+/).filter(Boolean)
  const topic=words.slice(0,7).join(' ')
  return topic.length>50?topic.slice(0,50)+'\u2026':topic||'Obrolan'
}
function renderSideHistory(){
  const container=document.getElementById('sideHistory')
  if(!container)return
  const list=loadHistory()
  if(!list.length){
    container.innerHTML='<div class="side-history-empty">Belum ada riwayat obrolan</div>'
    return
  }
  container.innerHTML=''
  list.forEach(item=>{
    const btn=document.createElement('button')
    btn.className='side-history-item'+(item.id===currentChatId?' active':'')+(item.blocked?' blocked-chat':'')
    btn.dataset.id=item.id
    const typingBadge=item.typing
      ? '<span class="side-history-typing"><span></span><span></span><span></span></span>'
      : ''
    const blockedCountdown=item.blocked
      ? (()=>{
          const lockedAt=item.blockedAt||item.updatedAt||0
          const msLeft=BLOCKED_EXPIRY_MS-(Date.now()-lockedAt)
          if(msLeft<=0)return 'Obrolan dihapus dalam: Sekarang'
          const hoursLeft=Math.floor(msLeft/(60*60*1000))
          const minsLeft=Math.floor((msLeft%(60*60*1000))/(60*1000))
          if(hoursLeft>0)return 'Obrolan dihapus dalam: '+hoursLeft+'h '+minsLeft+'m'
          return 'Obrolan dihapus dalam: '+minsLeft+'m'
        })()
      : ''
    const delBtn=item.blocked
      ? ''
      : '<button class="side-history-item-del" data-del="'+item.id+'" type="button" title="Hapus" aria-label="Hapus riwayat">\u2715</button>'
    btn.innerHTML=
      '<div class="side-history-item-row">'+
        '<span class="side-history-item-topic">'+escapeHtml(item.topic)+'</span>'+
        typingBadge+(item.blocked?'<span class="side-history-blocked-badge"><svg width="9" height="9" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Terkunci</span>':'')+
      '</div>'+
      (item.blocked?'<span class="side-history-blocked-countdown">'+blockedCountdown+'</span>':'')+
      '<span class="side-history-item-time">'+fmtHistoryTime(item.updatedAt)+'</span>'+
      delBtn
    container.appendChild(btn)
  })
}
function upsertHistory(chatId,topic,messages,typing,pendingContent,pendingIndex){
  const list=loadHistory()
  const idx=list.findIndex(x=>x.id===chatId)
  const prev=idx>=0?list[idx]:null
  const entry={
    id:chatId,
    topic,
    updatedAt:Date.now(),
    messages:messages.slice(-60),
    typing:!!typing,
    pendingContent:pendingContent!==undefined?pendingContent:(prev?prev.pendingContent||null:null),
    pendingIndex:pendingIndex!==undefined?pendingIndex:(prev?prev.pendingIndex||0:0)
  }
  if(idx>=0)list.splice(idx,1)
  list.unshift(entry)
  if(list.length>MAX_HISTORY)list.length=MAX_HISTORY
  saveHistory(list)
  renderSideHistory()
}
function clearPendingContent(chatId){
  const list=loadHistory()
  const idx=list.findIndex(x=>x.id===chatId)
  if(idx>=0&&list[idx].pendingContent!=null){list[idx].pendingContent=null;list[idx].pendingIndex=0;saveHistory(list)}
}
function savePendingIndex(chatId,index){
  const list=loadHistory()
  const idx=list.findIndex(x=>x.id===chatId)
  if(idx>=0){list[idx].pendingIndex=index;saveHistory(list)}
}
function deleteChatHistory(chatId){
  const list=loadHistory()
  const entry=list.find(x=>x.id===chatId)
  if(entry&&entry.blocked)return
  const filtered=list.filter(x=>x.id!==chatId)
  saveHistory(filtered)
  if(currentChatId===chatId){currentChatId=null;currentChatMessages=[];clearMessages();setBlockedChatUI(false)}
  renderSideHistory()
}
function loadChatFromHistory(chatId){
  const list=loadHistory()
  const entry=list.find(x=>x.id===chatId)
  if(!entry)return
  currentChatId=chatId
  currentChatMessages=entry.messages||[]
  clearMessages()
  setBlockedChatUI(!!entry.blocked)
  const isActiveTyping=activeTypingChats.has(chatId)
  if(isActiveTyping){
    const activeCtx=activeTypingChats.get(chatId)
    const userMsgs=currentChatMessages.filter(m=>m.role==='user')
    userMsgs.forEach(msg=>renderMessage('user',msg.content,msg.ts,msg.attachment||null))
    const thinkRow=createAssistantStreamRow(Date.now())
    activeCtx.mountEl=thinkRow.msg
    if(activeCtx.typingState&&!activeCtx.typingState.done){
      activeCtx.typingState.el=thinkRow.msg
      activeCtx.typingState.chatId=chatId
      _tsRender(activeCtx.typingState)
      if(!activeCtx.typingState.done)_tsResume(activeCtx.typingState)
    } else if(activeCtx.aiContent){
      thinkRow.msg.innerHTML=parseMarkdown(activeCtx.aiContent)
    } else {
      showThinking(thinkRow.msg,'',false,false,null)
    }
  } else {
    if(entry.typing){
      const list2=loadHistory()
      const idx=list2.findIndex(x=>x.id===chatId)
      if(idx>=0){list2[idx].typing=false;saveHistory(list2)}
    }
    currentChatMessages.forEach(msg=>{
      if(msg.role==='user')renderMessage('user',msg.content,msg.ts,msg.attachment||null)
      else renderMessage('assistant',msg.content,msg.ts)
    })
  }
  renderSideHistory()
  closeSidebar()
}
function getBrowserFingerprint(){
  const nav=navigator
  const parts=[nav.userAgent||'',nav.language||'',(nav.languages||[]).join(','),String(nav.hardwareConcurrency||0),String(screen.width)+'x'+String(screen.height),String(screen.colorDepth||0),Intl.DateTimeFormat().resolvedOptions().timeZone||'',nav.platform||'']
  try{
    const c=document.createElement('canvas');c.width=200;c.height=50
    const ctx=c.getContext('2d')
    ctx.textBaseline='top';ctx.font='14px Arial'
    ctx.fillStyle='#f60';ctx.fillRect(125,1,62,20)
    ctx.fillStyle='#069';ctx.fillText('Nekograf\uD83D\uDD12',2,15)
    ctx.fillStyle='rgba(102,204,0,0.7)';ctx.fillText('Nekograf\uD83D\uDD12',4,17)
    parts.push(c.toDataURL().slice(-64))
  }catch(e){}
  const str=parts.join('|')
  let hash=0;for(let i=0;i<str.length;i++){hash=((hash<<5)-hash)+str.charCodeAt(i);hash|=0}
  return 'fp_'+Math.abs(hash).toString(36)
}
function getFingerprintId(){
  const FP_KEY='_nkgfp'
  const cookieMatch=document.cookie.match(/(?:^|;\s*)_nkgfp=([^;]+)/)
  let fp=cookieMatch?cookieMatch[1]:null
  const lsFp=localStorage.getItem(FP_KEY)
  const ssFp=sessionStorage.getItem(FP_KEY)
  fp=fp||lsFp||ssFp||getBrowserFingerprint()
  try{localStorage.setItem(FP_KEY,fp)}catch(e){}
  try{sessionStorage.setItem(FP_KEY,fp)}catch(e){}
  const exp=new Date(Date.now()+30*864e5).toUTCString()
  document.cookie=FP_KEY+'='+fp+';expires='+exp+';path=/;SameSite=Strict'
  return fp
}
const DAILY_LIMIT=10
const LIMIT_KEY='nekograf_limit'
const _fpId=getFingerprintId()
function _fpLimitKey(){return LIMIT_KEY+'_'+_fpId}
function getLimitData(){
  try{
    const today=new Date().toDateString()
    const sources=[localStorage,sessionStorage].map(s=>{try{return JSON.parse(s.getItem(_fpLimitKey())||'{}')}catch{return{}}})
    const cookieMatch=document.cookie.match(new RegExp('(?:^|;\\s*)nklm_'+_fpId+'=([^;]+)'))
    if(cookieMatch){try{sources.push(JSON.parse(decodeURIComponent(cookieMatch[1])))}catch(e){}}
    let best={date:today,count:0}
    for(const s of sources){if(s&&s.date===today&&typeof s.count==='number'&&s.count>best.count)best=s}
    return best
  }catch{return{date:new Date().toDateString(),count:0}}
}
function saveLimitData(d){
  const val=JSON.stringify(d)
  try{localStorage.setItem(_fpLimitKey(),val)}catch(e){}
  try{sessionStorage.setItem(_fpLimitKey(),val)}catch(e){}
  const exp=new Date(Date.now()+2*864e5).toUTCString()
  document.cookie='nklm_'+_fpId+'='+encodeURIComponent(val)+';expires='+exp+';path=/;SameSite=Strict'
}
function getRemainingLimit(){if(isDeveloperAccount())return Infinity;const d=getLimitData();return Math.max(0,DAILY_LIMIT-d.count)}
function consumeLimit(){if(isDeveloperAccount()){addAccountExp(10);updateLimitUI();return}const d=getLimitData();d.count++;saveLimitData(d);addAccountExp(10);updateLimitUI()}
function getResetTime(){const t=new Date();t.setDate(t.getDate()+1);t.setHours(0,0,0,0);return t}
function getCountdownParts(){const diff=Math.max(0,getResetTime()-Date.now());const h=Math.floor(diff/3600000);const m=Math.floor((diff%3600000)/60000);const s=Math.floor((diff%60000)/1000);return{h,m,s}}
function fmtCountdown(){const{h,m,s}=getCountdownParts();return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')}
function updateLimitUI(){
  const dev=isDeveloperAccount()
  const d=getLimitData();const used=dev?0:d.count;const rem=dev?Infinity:Math.max(0,DAILY_LIMIT-used)
  const accessEl=$('accountAccessValue')
  if(accessEl)accessEl.textContent=dev?'Developer':'Pengguna Biasa'
  const barEl=$('accountLimitBar')
  const countEl=$('accountLimitCount')
  const pct=dev?100:Math.min(100,(rem/DAILY_LIMIT)*100)
  if(barEl){barEl.style.width=pct+'%';barEl.style.background=dev?'#86efac':rem===0?'#ef4444':rem<=3?'#f59e0b':'#4A90D9'}
  if(countEl){
    countEl.textContent=dev?'Unlimited':rem+'/'+DAILY_LIMIT
    countEl.className='account-limit-count'+(dev?'':rem===0?' empty':rem<=3?' warn':'')
  }
  const banner=$('limitBanner');const bannerCd=$('limitBannerCountdown')
  if(!dev&&rem===0){
    if(banner)banner.classList.remove('hidden')
    if(bannerCd)bannerCd.textContent=fmtCountdown()
    if(_uiLockState!=='blocked')setUILock('limit')
  }else{
    if(banner)banner.classList.add('hidden')
    if(_uiLockState==='limit')setUILock(null)
  }
}
setInterval(()=>{updateLimitUI()},1000)
const blockedMimePrefixes=[]
const blockedMimeSet=new Set(['application/x-7z-compressed','application/x-rar-compressed','application/vnd.rar'])
const blockedExtSet=new Set(['rar','7z'])
const imageMimePrefixes=['image/']
const imageExtSet=new Set(['png','jpg','jpeg','gif','webp','svg','bmp','ico'])
const likelyTextExtSet=new Set(['txt','md','js','mjs','cjs','json','html','htm','css','csv','ts','tsx','jsx','xml','yml','yaml','log','ini','conf','env','sql','py','java','c','cpp','h','hpp','php','rb','go','rs','kt','swift','sh'])
function nowLabel(a){const b=new Date(a||Date.now());return String(b.getHours()).padStart(2,"0")+":"+String(b.getMinutes()).padStart(2,"0")}
function isNearBottom(){return chatArea.scrollHeight-chatArea.scrollTop-chatArea.clientHeight<120}
function scrollToBottom(a){if(a||shouldStickToBottom)chatArea.scrollTop=chatArea.scrollHeight}
function escapeHtml(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function langToExtension(a){
  const b=String(a||'text').trim().toLowerCase()
  const c={javascript:'js',js:'js',typescript:'ts',ts:'ts',bash:'sh',sh:'sh',shell:'sh',python:'py',py:'py',html:'html',css:'css',json:'json',php:'php',sql:'sql',java:'java',cpp:'cpp','c++':'cpp',c:'c',go:'go',rust:'rs',yaml:'yml',yml:'yml',xml:'xml',text:'txt'}
  return c[b]||'txt'
}
function inferTopicName(a,b){
  const c=String(a||'').trim().toLowerCase()
  const d=String(b||'').replace(/^\n+/,'').trim()
  if(!d)return c||'kode'
  const e=d.split('\n').map(f=>f.trim()).filter(Boolean)
  for(const f of e){
    let g=f.match(/^(?:export\s+default\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/)
    if(g&&g[1])return g[1]
    g=f.match(/^(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>/)
    if(g&&g[1])return g[1]
    g=f.match(/^class\s+([A-Za-z_$][\w$]*)/)
    if(g&&g[1])return g[1]
  }
  const h=e.find(f=>!/^[{}\[\]();,]+$/.test(f))||d
  const i=h.toLowerCase().replace(/<[^>]+>/g,' ').replace(/[`"'*=:+#./\\()\[\]{}<>!?@%^&|~,;-]/g,' ').replace(/\s+/g,' ').trim()
  const j=i.split(' ').filter(Boolean).slice(0,6).join('-').replace(/[^a-z0-9-]+/g,'-').replace(/-+/g,'-').replace(/^-+|-+$/g,'')
  return j||c||'kode'
}
function topicToFilename(a,b){return inferTopicName(a,b)+'.'+langToExtension(a)}
function getLangLogo(lang){
  const S=16 
  const logos={
    python:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><linearGradient id="py-a" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"/><stop offset="1" stop-color="#306998"/></linearGradient><linearGradient id="py-b" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE873"/></linearGradient><path d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" fill="url(#py-a)"/><path d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" fill="url(#py-b)"/></svg>`,
    javascript:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="14" fill="#F7DF1E"/><path d="M67.442 116.37c2.933 4.812 6.747 8.342 13.494 8.342 5.671 0 9.296-2.832 9.296-6.742 0-4.689-3.726-6.35-9.96-9.093l-3.417-1.466c-9.866-4.201-16.422-9.479-16.422-20.619 0-10.264 7.824-18.093 20.053-18.093 8.706 0 14.953 3.025 19.449 10.963l-10.647 6.836c-2.342-4.201-4.872-5.851-8.802-5.851-4.006 0-6.543 2.537-6.543 5.851 0 4.1 2.537 5.76 8.395 8.302l3.417 1.466c11.618 4.981 18.174 10.069 18.174 21.495 0 12.319-9.676 19.089-22.688 19.089-12.71 0-20.927-6.049-24.929-13.974l11.13-6.506zM35.457 117.59c2.146 3.815 4.103 7.04 8.803 7.04 4.49 0 7.32-1.755 7.32-8.59V69.884H63.38v46.354c0 14.164-8.303 20.613-20.42 20.613-10.951 0-17.308-5.666-20.537-12.486l13.034-6.775z"/></svg>`,
    typescript:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="14" fill="#3178C6"/><path d="M74.668 99.744v10.86c1.768.907 3.863 1.584 6.286 2.032 2.422.447 4.984.671 7.686.671 2.636 0 5.143-.25 7.52-.753a17.483 17.483 0 006.136-2.482c1.75-1.146 3.143-2.647 4.178-4.5 1.033-1.854 1.55-4.1 1.55-6.737 0-1.94-.287-3.628-.861-5.066a12.019 12.019 0 00-2.483-3.896 18.516 18.516 0 00-3.9-3.014 44.654 44.654 0 00-5.12-2.525c-1.394-.537-2.628-1.06-3.712-1.563a15.405 15.405 0 01-2.769-1.592 6.87 6.87 0 01-1.752-1.832 4.285 4.285 0 01-.606-2.267c0-.78.196-1.49.589-2.11a4.855 4.855 0 011.661-1.547 8.259 8.259 0 012.504-.929 14.598 14.598 0 013.126-.313c.813 0 1.69.057 2.628.172.937.115 1.884.328 2.832.637.947.309 1.857.681 2.73 1.14.873.458 1.677 1.02 2.414 1.724v-10.19a26.235 26.235 0 00-5.363-1.451 37.002 37.002 0 00-6.487-.5c-2.602 0-5.07.282-7.4.845a18.028 18.028 0 00-6.032 2.651 13.222 13.222 0 00-4.12 4.455c-1.012 1.808-1.518 3.929-1.518 6.364 0 3.153.9 5.844 2.7 8.07 1.8 2.228 4.487 4.08 8.063 5.61a98.4 98.4 0 014.027 1.752 16.567 16.567 0 013.101 1.77 7.754 7.754 0 012.03 2.051c.489.747.733 1.617.733 2.609 0 .747-.166 1.45-.498 2.103a4.532 4.532 0 01-1.507 1.66 7.74 7.74 0 01-2.503 1.08 13.526 13.526 0 01-3.428.39c-2.232 0-4.424-.393-6.564-1.167-2.14-.773-4.117-1.979-5.958-3.577zM51.797 72.16H64.5v-9.348H28v9.348h12.703V117h11.094V72.16z" fill="#fff"/></svg>`,
    html:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path fill="#E44D26" d="M19.037 113.876L8.9 1.035h110.2l-10.147 112.841-45.051 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788l-1.188-13.308H64V26.217H31.937l.313 3.505 3.202 35.94H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H34.59l1.928 21.6 27.416 7.609.066-.018z"/><path fill="#fff" d="M63.952 52.455v12.93h16.947l-1.597 17.849-15.35 4.143v13.426l27.444-7.609.202-2.26 3.132-35.112.326-3.367zm0-26.238v13.03h33.169l.276-3.076.628-6.949.329-3.005z"/></svg>`,
    css:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path fill="#1572B6" d="M19.037 113.876L8.9 1.035h110.2l-10.15 112.84-45.05 12.48z"/><path fill="#33A9DC" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#fff" d="M64 52.455H46.207l-.545-6.109H64V33.851H32.488l.332 3.711 3.4 38.116H64zm0 35.743l-.064.017-15.327-4.14-.979-10.975H34.59l1.928 21.6 27.416 7.609.066-.017z"/><path fill="#EBEBEB" d="M63.952 52.455v12.326h16.947l-.844 9.407-.956 10.716-15.181 4.096v12.787L91.426 94.2l.206-2.308 2.288-25.625.317-3.557.332-3.724.326-3.712.329-3.819zm0-18.604v12.595h33.169l.628-6.993.329-3.617.33-3.73.277-3.005h-34.733z"/></svg>`,
    java:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.796 6.873 3.35-24.439 10.47-55.308-.607-36.115-5.968zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 0-42.731 10.67-22.324 34.187z"/><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .002.359-.327.468-.617z"/><path fill="#EA2D2E" d="M76.491 1.587s12.968 12.971-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.553-12.838 32.229-19.059 26.998-39.667z"/><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/></svg>`,
    cpp:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path fill="#00599D" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8-.1-1.9-.4-2.6z"/><path fill="#fff" d="M64 8.7l43 24.9V78.3L64 103.2 21 78.3V33.5L64 8.7z"/><path d="M64 21.7c-23.2 0-42 18.8-42 42s18.8 42 42 42 42-18.8 42-42-18.8-42-42-42zm14.4 67.6l-14.4 8.4-14.4-8.4V39l14.4-8.4 14.4 8.4v13h-9.6V45.7L64 40.9l-4.8 4.8v36.9l4.8 4.8 4.8-4.8V75.8h9.6v13.5z" fill="#00599D"/><path fill="#fff" d="M86.4 67.3h-5.6v-5.6h5.6v-5.6h5.6v5.6h5.6v5.6h-5.6v5.6h-5.6zm16 0h-5.6v-5.6h5.6v-5.6h5.6v5.6h5.6v5.6h-5.6v5.6h-5.6z"/></svg>`,
    c:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path fill="#A8B9CC" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8-.1-1.9-.4-2.6z"/><path fill="#fff" d="M64 8.7l43 24.9V78.3L64 103.2 21 78.3V33.5L64 8.7z"/><path d="M64 21.7c-23.2 0-42 18.8-42 42s18.8 42 42 42 42-18.8 42-42-18.8-42-42-42zm16.1 65.8l-16.1 9.3-16.1-9.3V40.5l16.1-9.3 16.1 9.3v14.5h-10.7V47.3L64 42.6l-5.4 4.7v41.3L64 93.3l5.4-4.7V81.4H80l.1 6.1z" fill="#A8B9CC"/></svg>`,
    go:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path fill="#00ACD7" d="M13.371 66.154c-.393 0-.491-.196-.295-.491l2.065-2.654c.196-.294.687-.491 1.08-.491h35.697c.393 0 .491.294.295.589l-1.671 2.556c-.196.295-.688.59-1.08.59H13.371zM1.307 73.554c-.393 0-.491-.196-.295-.491l2.065-2.654c.196-.294.687-.491 1.08-.491h45.508c.393 0 .589.294.491.687l-.786 2.36c-.099.393-.491.589-.884.589H1.307zM20.618 81.04c-.393 0-.491-.294-.295-.589l1.376-2.459c.196-.294.589-.589.982-.589h19.891c.393 0 .589.294.589.687l-.196 2.361c0 .393-.393.687-.786.687H20.618zM116.625 64.786c-5.897 1.668-9.924 2.95-15.722 4.618-1.474.393-1.572.491-2.851-.982-1.474-1.67-2.556-2.751-4.618-3.733-6.192-3.044-12.188-2.16-17.787 1.473-6.584 4.322-9.925 10.71-9.826 18.572.098 7.763 5.403 14.15 13.068 15.23 6.584.884 12.09-1.473 16.512-6.289.884-1.08 1.67-2.26 2.653-3.635H82.741c-2.065 0-2.556-1.277-1.866-2.95 1.277-3.143 3.636-8.449 4.912-11.104.294-.687.982-1.768 2.458-1.768h43.836c-.196 2.752-.196 5.502-.589 8.252-1.18 7.664-4.127 14.739-8.842 20.93-7.663 10.023-17.785 15.918-30.367 17.589-10.513 1.377-20.24-.491-28.697-6.877-7.86-5.894-12.384-13.755-13.462-23.484-1.277-11.594 2.065-22.012 8.744-31.246 7.173-9.924 16.807-16.117 29.094-18.277 9.923-1.768 19.35-.49 27.895 5.11 5.698 3.733 9.826 8.842 12.58 15.132.59 1.081.099 1.67-1.277 2.16z"/></svg>`,
    rust:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path fill="#CE422B" d="M62.271 5.232a2.27 2.27 0 00-1.596.671L56.39 10.17a.56.56 0 01-.635.112 47.368 47.368 0 00-3.785-1.434.558.558 0 01-.385-.553l.073-6.247c.012-1.253-.954-2.295-2.2-2.39C45.895-.637 42.29-.194 38.805.822c-1.193.347-1.896 1.578-1.612 2.787l1.4 6.066a.559.559 0 01-.277.617 47.584 47.584 0 00-3.364 2.014.558.558 0 01-.657-.021L29.75 7.862c-.965-.766-2.36-.67-3.207.223a51.283 51.283 0 00-5.92 8.45c-.617 1.108-.27 2.505.797 3.193l5.242 3.46a.558.558 0 01.235.617 47.497 47.497 0 00-.91 3.803.557.557 0 01-.501.44l-6.24.495c-1.25.1-2.207 1.15-2.189 2.406a51.403 51.403 0 001.587 10.424c.31 1.212 1.52 1.956 2.742 1.703l6.128-1.272a.558.558 0 01.589.264 47.462 47.462 0 002.153 3.284.557.557 0 01.028.66l-3.364 5.297c-.676.065-1.075 1.44-.35 2.43a51.42 51.42 0 007.077 7.567c.938.849 2.37.797 3.249-.118l4.27-4.54a.558.558 0 01.65-.132c1.21.53 2.45.997 3.718 1.4a.558.558 0 01.386.547l-.149 6.243c-.03 1.253.914 2.315 2.161 2.434a51.307 51.307 0 0010.484-.078c1.223-.131 2.138-1.197 2.083-2.427l-.28-6.239a.558.558 0 01.38-.542c1.263-.416 2.497-.898 3.696-1.44a.558.558 0 01.647.14l4.338 4.48c.89.917 2.32.955 3.251.094a51.424 51.424 0 006.97-7.677c.752-1.008.524-2.43-.508-3.165l-5.154-3.626a.558.558 0 01-.234-.617 47.53 47.53 0 001.028-3.792.558.558 0 01.507-.447l6.233-.614c1.247-.123 2.183-1.2 2.14-2.455a51.312 51.312 0 00-1.89-10.384c-.336-1.206-1.56-1.925-2.776-1.647l-6.1 1.38a.558.558 0 01-.592-.25 47.578 47.578 0 00-2.225-3.252.557.557 0 01-.02-.662l3.246-5.353c.651-1.072.335-2.466-.715-3.178a51.284 51.284 0 00-9.02-4.853c-1.163-.46-2.481.054-3.024 1.181l-2.792 5.652a.558.558 0 01-.588.301 47.594 47.594 0 00-3.87-.321.558.558 0 01-.52-.37L64.7 6.684a2.258 2.258 0 00-2.429-1.452zm1.684 20.09c20.89 0 37.84 16.948 37.84 37.838S84.844 101 63.955 101s-37.84-16.95-37.84-37.84c0-20.89 16.95-37.838 37.84-37.838z"/><path fill="#CE422B" d="M63.955 28.898c-18.81 0-34.164 15.08-34.42 33.83l5.428 3.55a2.625 2.625 0 012.523 2.619 2.625 2.625 0 01-5.25 0 2.62 2.62 0 01.487-1.531l-5.03-3.29c1.05 18.08 16.063 32.49 34.417 32.49 18.354 0 33.367-14.41 34.418-32.49l-5.031 3.29a2.62 2.62 0 01.487 1.531 2.625 2.625 0 11-4.763-1.088l5.428-3.55c-.256-18.75-15.61-33.961-34.694-33.961zm-15.4 20.166h30.8c0 5.61-4.548 10.158-10.158 10.158h-.836c-4.548 0-8.233 3.685-8.233 8.233v10.158h-1.58c-.87 0-1.581-.71-1.581-1.58v-8.578c0-4.548-3.685-8.233-8.233-8.233H47.9c-.87 0-1.58-.71-1.58-1.58v-6.998c0-.87.71-1.58 1.58-1.58z"/></svg>`,
    php:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path fill="#6181B6" d="M0 64c0 18.593 28.654 33.667 64 33.667 35.346 0 64-15.074 64-33.667S99.346 30.333 64 30.333C28.654 30.333 0 49.407 0 64z"/><path fill="#fff" d="M38.086 58.101h4.596l-1.275 6.372h-4.596l1.275-6.372zm24.168-3.165c-.675 3.38-2.537 5.092-5.583 5.134h-6.688l1.525-7.621h6.688c3.05 0 4.733 1.162 4.058 4.487zm5.334-7.535l-.87 4.35h-5.584l.87-4.35H67.588zm-26.168 0l-.87 4.35H35.95l.87-4.35h4.6zM51.4 40.72l2.155-10.764 9.2-5.303-3.32 16.07H51.4zM23.2 80.18l2.8-13.984H20.4l1.4-6.992h5.6l1.4-6.992h6.72l-1.4 6.992h4.2l-1.4 6.992h-4.2l-1.96 9.793c-.28 1.398.14 2.097 1.26 2.097h1.96l-1.4 6.992h-4.2c-3.36 0-5.18-1.633-4.98-4.898zm26.88-16.176c1.4-6.992 5.88-10.489 13.44-10.489h6.72l-1.4 6.992h-5.04c-2.8 0-4.34 1.167-4.62 3.497h4.9l-1.4 6.992h-4.9c-.28 3.497.7 5.245 2.94 5.245h5.04l-1.4 6.992h-5.18c-7 0-10.36-4.497-10.1-9.99v-.239h.002zm30.24-10.49h8.96c5.04 0 7.84 2.248 8.4 6.742 1.12 8.99-3.78 14.235-14.84 14.235h-4.34l-1.4 6.992h-6.72l6.72-33.965h3.22zm4.34 13.984h3.08c3.64 0 5.46-1.399 5.46-4.197 0-1.399-.98-2.098-2.94-2.098h-3.64l-1.96 6.295z"/></svg>`,
    sql:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><ellipse cx="64" cy="32" rx="48" ry="18" fill="#00758F"/><path d="M16 32v20c0 9.94 21.49 18 48 18s48-8.06 48-18V32c0 9.94-21.49 18-48 18S16 41.94 16 32z" fill="#00758F"/><path d="M16 52v20c0 9.94 21.49 18 48 18s48-8.06 48-18V52c0 9.94-21.49 18-48 18S16 61.94 16 52z" fill="#005C6E"/><path d="M16 72v20c0 9.94 21.49 18 48 18s48-8.06 48-18V72c0 9.94-21.49 18-48 18S16 81.94 16 72z" fill="#F29111"/><path d="M64 80c-26.51 0-48-8.06-48-18v4c0 9.94 21.49 18 48 18s48-8.06 48-18v-4c0 9.94-21.49 18-48 18z" fill="#E08000"/></svg>`,
    bash:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#293137"/><path fill="#4EAA25" d="M47.2 76.2L26 63.9V40.6l21.2 12.3v23.3zm3.2-25.4L72 38.5l21.6 12.3-21.6 12.2-21.6-12.2zm24.8 25.4V52.9L96.4 40.6v23.3L75.2 76.2z"/><path d="M34.4 83.4l15.5 8.8V102l-15.5-8.9V83.4zm18.1 8.8l15.5-8.8v9.7l-15.5 8.9V92.2zm18.1-8.8l15.5 8.8v9.7l-15.5-8.9V83.4z" fill="#fff" opacity=".4"/></svg>`,
    json:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path fill="#8B5CF6" d="M48 8c-8.8 0-16 7.2-16 16v16c0 8.8-7.2 16-16 16H8v16h8c8.8 0 16 7.2 16 16v16c0 8.8 7.2 16 16 16h12V104H52c-2.2 0-4-.8-4-4V88c0-11.2-5.6-20.8-13.6-26.4C42.4 55.6 48 46.4 48 36v-12c0-3.2 1.8-4 4-4h8V8H48zm32 0v12h8c2.2 0 4 .8 4 4v12c0 10.4 5.6 19.6 13.6 25.6C97.6 67.2 92 76.8 92 88v12c0 3.2-1.8 4-4 4h-8v12h12c8.8 0 16-7.2 16-16V84c0-8.8 7.2-16 16-16h8V52h-8c-8.8 0-16-7.2-16-16V20c0-8.8-7.2-16-16-16H80z"/></svg>`,
    yaml:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="14" fill="#CB171E"/><text x="10" y="88" font-family="monospace" font-weight="bold" font-size="72" fill="#fff">Y</text></svg>`,
    xml:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="14" fill="#F59E0B"/><path d="M20 64l22-36h14L36 64l20 36H42L20 64zm48 0l22-36h18L88 64l20 36H90L68 64z" fill="#fff"/></svg>`,
    kotlin:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="kt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E44857"/><stop offset=".465" stop-color="#C711E1"/><stop offset="1" stop-color="#7F52FF"/></linearGradient></defs><path d="M0 128L64 0h64v128H0z" fill="url(#kt)"/><path d="M0 0h60L0 65z" fill="url(#kt)"/></svg>`,
    swift:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="22" fill="url(#sw-g)"/><defs><linearGradient id="sw-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F06229"/><stop offset="1" stop-color="#F04138"/></linearGradient></defs><path d="M97.2 81.6c.5-.8.9-1.7 1.2-2.6 3.8-12.1-3.2-26-16.2-33.9 4.7 7.6 5.8 16.1 2.8 22.8-.2.5-.5 1-.8 1.5-1-.9-2.7-2-3.3-2.3C68.9 56.4 55 38.7 47 24.5c0 0 .2 15.9 16.3 31.9-5.8-3.4-17.5-13.5-24.6-22.1 1.1 5.4 5.6 13.2 11.5 20.1-4.2-2.8-11.9-9.3-16.6-15.1 1.1 5.3 5 12.1 10.3 18-4.8 4.4-7.7 10.3-7.6 17 .1 12.4 9.8 23.5 22.3 26.3 14.1 3.2 28.3-2.8 35.5-13.2 3.1.5 8.6-.7 13.1-5.8" fill="#fff"/></svg>`,
    ruby:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><linearGradient id="rb" x1="84.975" y1="4.497" x2="42.048" y2="124.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FB7655"/><stop offset=".41" stop-color="#E42B1E"/><stop offset=".99" stop-color="#900"/><stop offset="1" stop-color="#900"/></linearGradient><path fill="url(#rb)" d="M97.078 83.214L28.34 124.031l88.682-5.352 5.338-88.682-25.282 53.217z"/><path fill="#871101" d="M28.34 124.031l14.289-64.444 42.421 22.082z"/><path fill="#fff" d="M28.34 124.031l15.854-16.92-1.564-47.524z"/><path fill="#FB7655" d="M85.05 41.654l-57.4 65.457L43.914 19.8z"/><path fill="#E42B1E" d="M121.87 29.997L91.29 23.01 43.914 19.8l41.136 21.854z"/><path fill="#fff" d="M43.914 19.8l-14.25 12.788 13.664 47.079z"/><path fill="#fff" d="M6.979 94.074l21.361 29.957 14.289-64.444z"/><path fill="#FB7655" d="M6.979 94.074l14.025-30.7L43.914 76.26z"/><path fill="#FFF" d="M20.9 61.374l23.014 14.886L28.34 124.031z"/><path fill="#FB7655" d="M20.9 61.374L43.914 19.8 28.34 35.61z"/><path fill="#E42B1E" d="M85.05 41.654L43.914 19.8l77.956 10.197z"/></svg>`,
    dart:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="dart-a" x1="59.02" y1="-22.108" x2="89.614" y2="43.948" gradientTransform="matrix(1 0 0 -1 0 128)" gradientUnits="userSpaceOnUse"><stop offset=".175" stop-color="#1A237E"/><stop offset="1" stop-color="#42A5F5"/></linearGradient><linearGradient id="dart-b" x1="47.615" y1="-27.962" x2="69.902" y2="23.293" gradientTransform="matrix(1 0 0 -1 0 128)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1A237E"/><stop offset="1" stop-color="#42A5F5"/></linearGradient></defs><path fill="url(#dart-a)" d="M64 9L22 51v26l42-42 42 42V51z"/><path fill="url(#dart-b)" d="M22 77l42 42 42-42v-26L64 93 22 51z"/><path fill="#42A5F5" d="M64 51L22 77l42 16 42-16z"/><ellipse cx="64" cy="93" rx="14" ry="14" fill="#42A5F5" opacity=".6"/></svg>`,
    r:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><ellipse cx="64" cy="64" rx="54" ry="54" fill="#276DC3"/><path d="M38 32h28c12 0 22 8 22 20 0 9-5 16-13 19l16 25H75L61 72H50v24H38V32zm12 12v18h14c6 0 10-3 10-9s-4-9-10-9H50zm26 30l20 26h-14l-20-26" fill="#fff"/></svg>`,
    scala:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path d="M26 82v18c0 3 28.5 6 74 0V82c-45.5 6-74 3-74 0zm0-30v18c0 3 28.5 6 74 0V70c-45.5 6-74 3-74 0zM26 22v18c0 3 28.5 6 74 0V22c-45.5 6-74 3-74 0z" fill="#DC322F"/></svg>`,
    csharp:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><path fill="#9B4F96" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8-.1-1.9-.4-2.6z"/><path fill="#fff" d="M51.2 79.5c-1.8 1.1-4 1.9-6.4 1.9-8.1 0-14.3-5.9-14.3-14.2 0-8.4 6.2-14.3 14.3-14.3 2.5 0 4.6.8 6.4 1.9v-8.8c-2.1-.9-4.3-1.3-6.7-1.3C32 44.7 22 54 22 67.2c0 13.1 10 22.5 22.5 22.5 2.3 0 4.6-.4 6.7-1.3v-8.9zm20.6-2.2h-8.4V68h-9v-9.4h-8.4V83H63v-9h9.3v9h8.4V58.6H72v18.7zm16 0h-8.4V68h-9V58.6h-8.4V83H79v-9h9.3v9h8.4V58.6H89v18.7z"/></svg>`,
    lua:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="56" fill="#00007C"/><circle cx="84" cy="44" r="22" fill="#fff"/><circle cx="36" cy="68" r="10" fill="#fff"/><circle cx="96" cy="88" r="10" fill="#fff"/></svg>`,
    shell:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#293137"/><path d="M32 84l28-20-28-20v12l14 8-14 8v12zm36 0h36v-8H68z" fill="#4EAA25"/></svg>`,
    sh:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><rect width="128" height="128" rx="16" fill="#293137"/><path d="M32 84l28-20-28-20v12l14 8-14 8v12zm36 0h36v-8H68z" fill="#4EAA25"/></svg>`,
    text:`<svg viewBox="0 0 128 128" width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="12" width="104" height="104" rx="12" fill="none" stroke="#aaa" stroke-width="8"/><path d="M32 44h64M32 64h48M32 84h56" stroke="#aaa" stroke-width="8" stroke-linecap="round"/></svg>`,
  }
  const l=lang.toLowerCase()
  if(logos[l])return logos[l]
  if(l==='js')return logos.javascript
  if(l==='ts')return logos.typescript
  if(l==='py')return logos.python
  if(l==='yml')return logos.yaml
  if(l==='c++'||l==='cc'||l==='cxx')return logos.cpp
  if(l==='cs')return logos.csharp
  if(l==='sh'||l==='zsh'||l==='fish')return logos.bash
  return logos.text
}
const ICON_COPY=`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
const ICON_COPY_OK=`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>`
const ICON_DOWNLOAD=`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
const ICON_DOWNLOAD_OK=`<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>`
function renderCodeBlock(a,b){
  const c=(a||'text').trim().toLowerCase()
  const d=(a||'text').trim()||'text'
  const displayLabel=d.toUpperCase()
  const e=String(b||'').replace(/^\n/,'')
  const logo=getLangLogo(c)
  return '<div class="code-shell" data-lang="'+escapeHtml(c)+'"><div class="code-header"><span class="code-lang">'+logo+'<span class="code-lang-label">'+escapeHtml(displayLabel)+'</span></span><div class="code-actions"><button class="code-download-btn" type="button" title="Unduh kode" aria-label="Unduh kode">'+ICON_DOWNLOAD+'</button><button class="code-copy-btn" type="button" title="Salin kode" aria-label="Salin kode">'+ICON_COPY+'</button></div></div><div class="code-divider"></div><pre><code>'+escapeHtml(e)+'</code></pre></div>'
}
function parseInlineMarkdown(a){
  let b=escapeHtml(String(a||''))
  b=b.replace(/`([^`]+)`/g,'<code>$1</code>')
  b=b.replace(/\*\*([^*\n][\s\S]*?[^*\n]|[^*\n])\*\*/g,'<strong>$1</strong>')
  b=b.replace(/__([^_\n][\s\S]*?[^_\n]|[^_\n])__/g,'<strong>$1</strong>')
  b=b.replace(/\*([^*\n][\s\S]*?[^*\n]|[^*\n])\*/g,'<em>$1</em>')
  b=b.replace(/_([^_\n][\s\S]*?[^_\n]|[^_\n])_/g,'<em>$1</em>')
  b=b.replace(/\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
  return b
}
function parseMarkdown(a,b){
  const blocks=[]
  let d=String(a||'').replace(/\r\n/g,'\n').replace(/\r/g,'\n')
  d=d.replace(/```([^\n`]*)\n?([\s\S]*?)```/g,(e,f,g)=>{
    const id='@@CODEBLOCK'+blocks.length+'@@'
    blocks.push(renderCodeBlock(f,g))
    return '\n'+id+'\n'
  })
  d=d.replace(/```([^\n`]*)\n?([\s\S]*)$/,(e,f,g)=>{
    const id='@@CODEBLOCK'+blocks.length+'@@'
    blocks.push(renderCodeBlock(f,g))
    return '\n'+id+'\n'
  })
  const lines=d.split('\n')
  const out=[]
  let paraLines=[]
  let inUl=false, inOl=false, inBq=false
  let bqLines=[]
  const flushPara=()=>{
    if(!paraLines.length)return
    const txt=paraLines.join('\n').trim()
    if(txt)out.push('<p>'+txt.split('\n').map(l=>parseInlineMarkdown(l)).join('<br>')+'</p>')
    paraLines=[]
  }
  const flushList=()=>{
    if(inUl){out.push('</ul>');inUl=false}
    if(inOl){out.push('</ol>');inOl=false}
  }
  const flushBq=()=>{
    if(inBq){
      out.push('<blockquote><p>'+bqLines.map(l=>parseInlineMarkdown(l)).join('<br>')+'</p></blockquote>')
      bqLines=[];inBq=false
    }
  }
  const isTableRow=(l)=>/^\|.+\|/.test(l.trim())
  const isTableSep=(l)=>/^\|[\s:|-]+\|/.test(l.trim())
  let i=0
  while(i<lines.length){
    const raw=lines[i]
    const line=raw.trim()
    if(/^@@CODEBLOCK\d+@@$/.test(line)){flushPara();flushList();flushBq();out.push(line);i++;continue}
    if(!line){flushPara();flushList();flushBq();i++;continue}
    const hm=raw.match(/^\s*(#{1,6})\s+(.+)$/)
    if(hm){flushPara();flushList();flushBq();const lv=Math.min(hm[1].length,6);out.push('<h'+lv+'>'+parseInlineMarkdown(hm[2].trim())+'</h'+lv+'>');i++;continue}
    if(/^(\s*[-*_]){3,}\s*$/.test(raw)&&/^[-*_\s]+$/.test(raw)){flushPara();flushList();flushBq();out.push('<hr>');i++;continue}
    const bqm=raw.match(/^\s*>\s?(.*)$/)
    if(bqm){flushPara();flushList();if(!inBq)inBq=true;bqLines.push(bqm[1]);i++;continue}
    if(isTableRow(raw)&&i+1<lines.length&&isTableSep(lines[i+1])){
      flushPara();flushList();flushBq()
      const headerCells=raw.trim().replace(/^\||\|$/g,'').split('|').map(c=>c.trim())
      i+=2 
      const rows=[]
      while(i<lines.length&&isTableRow(lines[i])){
        rows.push(lines[i].trim().replace(/^\||\|$/g,'').split('|').map(c=>c.trim()))
        i++
      }
      let tbl='<table><thead><tr>'+headerCells.map(c=>'<th>'+parseInlineMarkdown(c)+'</th>').join('')+'</tr></thead>'
      if(rows.length){tbl+='<tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+parseInlineMarkdown(c)+'</td>').join('')+'</tr>').join('')+'</tbody>'}
      tbl+='</table>'
      out.push(tbl)
      continue
    }
    const ulm=raw.match(/^\s*[-*+]\s+(.*)$/)
    if(ulm){flushPara();flushBq();if(inOl){out.push('</ol>');inOl=false}if(!inUl){out.push('<ul>');inUl=true}out.push('<li>'+parseInlineMarkdown(ulm[1])+'</li>');i++;continue}
    const olm=raw.match(/^\s*\d+[.)]\s+(.*)$/)
    if(olm){flushPara();flushBq();if(inUl){out.push('</ul>');inUl=false}if(!inOl){out.push('<ol>');inOl=true}out.push('<li>'+parseInlineMarkdown(olm[1])+'</li>');i++;continue}
    flushList();flushBq()
    paraLines.push(raw)
    i++
  }
  flushPara();flushList();flushBq()
  return out.join('').replace(/@@CODEBLOCK(\d+)@@/g,(e,f)=>blocks[Number(f)]||e)
}
function addDownloadButtonsToCodeBlocks(){}
function prepareMarkdownForStreaming(a){
  let b=String(a||'')
  const c=(b.match(/```/g)||[]).length
  if(c%2!==0)b+='\n```'
  const d=(b.match(/(?<!`)`(?!`)/g)||[]).length
  if(d%2!==0)b+='`'
  return b
}
function setHeroVisibility(){const a=chatWrap.querySelector('.msg-row');hero.classList.toggle('hide',Boolean(a));chatArea.classList.toggle('active',Boolean(a))}
const ICON_ATTACH_IMG=`<svg viewBox="0 0 36 36" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="9" fill="#dcfce7"/><path d="M9 26l6.5-8 4.5 5.5 3.5-4.5L30 26H9z" fill="#16a34a" opacity=".85"/><circle cx="13" cy="14" r="2.5" fill="#16a34a"/></svg>`
const ICON_ATTACH_DOC=`<svg viewBox="0 0 36 36" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="9" fill="#ede9fe"/><path d="M10 8h10l7 7v13a1.5 1.5 0 01-1.5 1.5h-15.5A1.5 1.5 0 0110 28V9.5A1.5 1.5 0 0111.5 8z" fill="#7c3aed" opacity=".15"/><path d="M10 8h10l7 7v13a1.5 1.5 0 01-1.5 1.5h-15.5A1.5 1.5 0 0110 28V9.5A1.5 1.5 0 0111.5 8H20l7 7h-5.5A1.5 1.5 0 0120 13.5V8" stroke="#7c3aed" stroke-width="1.4" stroke-linejoin="round" fill="none"/><path d="M14 18h8M14 22h5" stroke="#7c3aed" stroke-width="1.4" stroke-linecap="round"/></svg>`
function renderAttachmentPreview(a){if(!a)return '';const icon=a.isImage?ICON_ATTACH_IMG:ICON_ATTACH_DOC;return '<div class="msg user msg-attachment-solo" style="white-space:normal"><div class="msg-attachment" title="'+escapeHtml(a.name)+'"><div class="msg-attachment-icon" aria-hidden="true">'+icon+'</div><div class="msg-attachment-info"><div class="msg-attachment-name">'+escapeHtml(a.name)+'</div><div class="msg-attachment-meta">'+escapeHtml(a.summary||'Dokumen terlampir')+'</div></div></div></div>'}
const VOTE_KEY='nekograf_votes'
function getVotes(){try{return JSON.parse(localStorage.getItem(VOTE_KEY)||'{}')}catch{return{}}}
function saveVote(ts,val){const v=getVotes();v[String(ts)]=val;try{localStorage.setItem(VOTE_KEY,JSON.stringify(v))}catch(e){}}

function addAssistantActions(wrap,msgEl,ts){
  if(wrap.querySelector('.msg-actions'))return
  const actRow=document.createElement('div')
  actRow.className='msg-actions'

  const copyBtn=document.createElement('button')
  copyBtn.className='msg-action-btn msg-copy-btn'
  copyBtn.title='Salin pesan'
  copyBtn.innerHTML=`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
  copyBtn.addEventListener('click',async()=>{
    const clone=msgEl.cloneNode(true);clone.querySelectorAll('.code-shell,.msg-attachment').forEach(x=>x.remove());const text=(clone.textContent||'').replace(/\s+/g,' ').trim()
    try{
      await navigator.clipboard.writeText(text)
      copyBtn.innerHTML=`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
      copyBtn.classList.add('copied')
      toastShow('Pesan berhasil disalin')
      clearTimeout(copyBtn._t)
      copyBtn._t=setTimeout(()=>{
        copyBtn.innerHTML=`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
        copyBtn.classList.remove('copied')
      },1500)
    }catch(e){toastShow('Gagal menyalin')}
  })

  const shareBtn=document.createElement('button')
  shareBtn.className='msg-action-btn msg-share-btn'
  shareBtn.title='Bagikan pesan'
  shareBtn.innerHTML=`<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`
  shareBtn.addEventListener('click',async()=>{
    const clone=msgEl.cloneNode(true);clone.querySelectorAll('.code-shell,.msg-attachment').forEach(x=>x.remove());const text=(clone.textContent||'').replace(/\s+/g,' ').trim()
    if(navigator.share){
      try{await navigator.share({title:'Nekograf AI',text})}catch(e){}
    }else{
      try{
        await navigator.clipboard.writeText(text)
        toastShow('Disalin ke clipboard (share tidak tersedia)')
      }catch(e){toastShow('Gagal berbagi')}
    }
  })

  const likeBtn=document.createElement('button')
  likeBtn.className='msg-action-btn msg-like-btn'
  likeBtn.title='Suka'
  likeBtn.innerHTML='👍'

  const dislikeBtn=document.createElement('button')
  dislikeBtn.className='msg-action-btn msg-dislike-btn'
  dislikeBtn.title='Tidak suka'
  dislikeBtn.innerHTML='👎'

  function lockBtns(voted){
    likeBtn.disabled=true
    dislikeBtn.disabled=true
    likeBtn.style.pointerEvents='none'
    dislikeBtn.style.pointerEvents='none'
    likeBtn.classList.toggle('voted', voted==='like')
    dislikeBtn.classList.toggle('voted', voted==='dislike')
  }

  const existingVote=ts?getVotes()[String(ts)]:null
  if(existingVote){lockBtns(existingVote)}

  likeBtn.addEventListener('click',()=>{
    if(likeBtn.disabled||likeBtn.classList.contains('voted')||dislikeBtn.classList.contains('voted'))return
    if(ts)saveVote(ts,'like')
    lockBtns('like')
    toastShow('Terimakasih sudah memberikan masukan')
  })

  dislikeBtn.addEventListener('click',()=>{
    if(dislikeBtn.disabled||likeBtn.classList.contains('voted')||dislikeBtn.classList.contains('voted'))return
    if(ts)saveVote(ts,'dislike')
    lockBtns('dislike')
    toastShow('Terimakasih sudah memberikan masukan')
  })

  actRow.appendChild(copyBtn)
  actRow.appendChild(shareBtn)
  actRow.appendChild(likeBtn)
  actRow.appendChild(dislikeBtn)
  wrap.appendChild(actRow)
}

function renderMessage(a,b,c,d){
  const e=document.createElement('div');e.className='msg-row '+(a==='user'?'user':'assistant')
  const f=document.createElement('div');f.className='msg-wrap'
  const hasText=b&&b.trim().length>0
  const attachments=Array.isArray(d)?d:(d?[d]:[])
  if(a==='user'&&attachments.length>0){
    const attWrap=document.createElement('div');attWrap.className='msg-attachments-group'
    attachments.forEach(att=>{
      try{
        const prev=document.createElement('div')
        prev.innerHTML=renderAttachmentPreview(att)
        if(prev.firstChild)attWrap.appendChild(prev.firstChild)
      }catch(err){console.warn('renderAttachmentPreview error:',err)}
    })
    f.appendChild(attWrap)
  }
  if(hasText){
    const g=document.createElement('div');g.className='msg '+(a==='user'?'user':'assistant')
    g.style.whiteSpace='normal'
    const msgContent=document.createElement('div')
    msgContent.innerHTML=parseMarkdown(b)
    g.appendChild(msgContent)
    f.appendChild(g)
  } else if(a==='assistant'||attachments.length===0){
    const g=document.createElement('div');g.className='msg '+(a==='user'?'user':'assistant')
    g.style.whiteSpace='normal'
    const msgContent=document.createElement('div')
    msgContent.innerHTML=parseMarkdown(b)
    g.appendChild(msgContent)
    f.appendChild(g)
  }
  const h=document.createElement('div');h.className='msg-meta';h.textContent=nowLabel(c)
  f.appendChild(h)
  if(a==='assistant'){const lastMsg=f.querySelector('.msg.assistant');if(lastMsg)addAssistantActions(f,lastMsg,c)}
  e.appendChild(f);chatWrap.appendChild(e);setHeroVisibility();setTimeout(()=>scrollToBottom(true),0)
}
function createAssistantStreamRow(a){
  const b=document.createElement('div');b.className='msg-row assistant'
  const c=document.createElement('div');c.className='msg-wrap'
  const d=document.createElement('div');d.className='msg assistant';d.style.whiteSpace='normal'
  const e=document.createElement('div');e.className='msg-meta';e.textContent=nowLabel(a||Date.now())
  c.appendChild(d);c.appendChild(e);b.appendChild(c);chatWrap.appendChild(b);setHeroVisibility();setTimeout(()=>scrollToBottom(true),0)
  return {row:b,wrap:c,msg:d,meta:e,addActions:()=>addAssistantActions(c,d)}
}
function clearMessages(){Array.from(chatWrap.querySelectorAll('.msg-row')).forEach(a=>a.remove());setHeroVisibility();setTimeout(()=>scrollToBottom(true),0)}
function toastShow(a){const b=$("toast");$("toastText").textContent=a;b.classList.add('show');clearTimeout(b._t);b._t=setTimeout(()=>b.classList.remove('show'),2600)}
function toggleSidebar(a){const b=typeof a==='boolean'?a:!sidebar.classList.contains('show');sidebar.classList.toggle('show',b);sidebarBackdrop.classList.toggle('show',b)}
function closeSidebar(){toggleSidebar(false)}
function autoResize(){chatInput.style.height='auto';const h=Math.min(chatInput.scrollHeight,120);chatInput.style.height=h+'px';chatInput.style.overflowY=chatInput.scrollHeight>120?'auto':'hidden'}
function hasPromptText(){return chatInput.value.trim().length>0}
function updateSendButton(){const a=hasPromptText()||attachedFiles.length>0;actionBtn.classList.toggle('disabled',!a);actionBtn.classList.toggle('ready',a);actionBtn.disabled=!a}
function generateBlockedTopic(userText){
  const t=(userText||'').trim()
  const jailbreakTopics=[
    'Terdeteksi Jailbreak/Injection',
    'Upaya Bypass Terdeteksi',
    'Prompt Injection Terblokir',
    'Manipulasi Sistem Terdeteksi',
    'Jailbreak Attempt Blocked',
    'Exploit Prevention Triggered',
    'Security Bypass Detected',
    'Instruksi Terselubung Terblokir',
    'Percobaan Manipulasi Ditolak',
    'Konten Berbahaya Terdeteksi',
    'Mode Bypass Ditolak',
    'Konteks Injection Diblokir',
    'Upaya Role-play Berbahaya',
    'Prompt Override Terdeteksi',
    'Perintah Tersembunyi Ditolak',
    'Fuzzing Attack Terdeteksi',
    'Context Poisoning Blocked',
    'Hidden Instructions Detected',
    'Payload Injection Stopped',
    'Restriction Bypass Attempt',
  ]
  const words=t.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(x=>x.length>2)
  let seed=0
  for(const w of words)for(let i=0;i<w.length;i++)seed=(seed*31+w.charCodeAt(i))>>>0
  return jailbreakTopics[seed%jailbreakTopics.length]
}
let _uiLockState=null
function setUILock(state){
  _uiLockState=state
  const wrapper=document.querySelector('.chat-input-wrapper')
  const existing=document.getElementById('injectionBlockedBanner')
  if(state==='blocked'||state==='limit'){
    chatInput.disabled=true
    chatInput.placeholder=state==='blocked'?'Obrolan ini dikunci':'Limit pesan habis'
    actionBtn.disabled=true
    actionBtn.classList.add('disabled')
    actionBtn.classList.remove('ready','stop-mode')
    const plusBtn=document.getElementById('plusBtn')
    if(plusBtn)plusBtn.disabled=true
    if(state==='blocked'&&!existing){
      const banner=document.createElement('div')
      banner.id='injectionBlockedBanner'
      banner.className='injection-blocked-banner'
      banner.innerHTML='<span class="blocked-shield-icon"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="16" r="0.5" fill="currentColor" stroke="none"/></svg></span><span>Obrolan ini dikunci</span>'
      if(wrapper)wrapper.insertBefore(banner,wrapper.firstChild)
    }
  }else{
    chatInput.disabled=false
    chatInput.placeholder='Pesan Nekograf AI'
    const plusBtn=document.getElementById('plusBtn')
    if(plusBtn)plusBtn.disabled=false
    if(existing)existing.remove()
    updateSendButton()
  }
}
function setBlockedChatUI(on){setUILock(on?'blocked':null)}
function startNewChat(){currentChatId=null;currentChatMessages=[];clearMessages();clearAttachedFiles();setBlockedChatUI(false);toastShow('Obrolan baru dibuat');closeSidebar();chatInput.value='';autoResize();updateSendButton();renderSideHistory();chatInput.focus()}
function addTyping(){const a=createAssistantStreamRow(Date.now());a.msg.innerHTML='<span class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>';return a.row}
function createThinkingMessage(prompt,hasAttachment,attachmentIsImage,attachmentName){const a=createAssistantStreamRow(Date.now());const b=showThinking(a.msg,prompt,hasAttachment,attachmentIsImage,attachmentName);return {row:a.row,wrap:a.wrap,msg:a.msg,meta:a.meta,addActions:a.addActions,stop:()=>clearInterval(b)}}
function getTypingDelay(a,b,c){return 0}
let pageHiddenAt=document.hidden?Date.now():0
const allTypingStates=new Set()
const TYPING_CHARS_PER_FRAME=18
let _rafId=null
function _tsRender(st){
  if(!st||!st.el)return
  const visible=st.el.isConnected&&st.chatId===currentChatId
  if(st.index>=st.text.length){
    st.el.innerHTML=parseMarkdown(st.text)
    st.done=true
    if(visible)scrollToBottom()
    return
  }
  st.el.innerHTML=parseMarkdown(prepareMarkdownForStreaming(st.text.slice(0,st.index)),{streaming:true})
  if(visible)scrollToBottom()
}
function _tsAdvanceElapsed(st,ms){
  if(!st||st.done||ms<=0)return
  const chars=Math.max(1,Math.floor(ms/2)*TYPING_CHARS_PER_FRAME)
  let moved=0
  while(st.index<st.text.length&&moved<chars){
    if(st.text.charAt(st.index)!=='\r')moved++
    st.index++
  }
  _tsRender(st)
}
function _rafLoop(){
  _rafId=null
  if(allTypingStates.size===0)return
  let anyActive=false
  allTypingStates.forEach(st=>{
    if(st.done||!st.el){allTypingStates.delete(st);return}
    if(document.hidden&&st.el.isConnected)return
    let moved=0
    while(st.index<st.text.length&&moved<TYPING_CHARS_PER_FRAME){
      if(st.text.charAt(st.index)!=='\r')moved++
      st.index++
    }
    _tsRender(st)
    if(st.chatId&&st.index%400===0)savePendingIndex(st.chatId,st.index)
    if(st.index>=st.text.length){
      st.el.innerHTML=parseMarkdown(st.text)
      st.done=true
      allTypingStates.delete(st)
      st.resolve()
    }else{anyActive=true}
  })
  if(anyActive)_rafId=requestAnimationFrame(_rafLoop)
}
function _tsResume(st){
  if(!st||st.done)return
  allTypingStates.add(st)
  if(!_rafId&&!document.hidden)_rafId=requestAnimationFrame(_rafLoop)
}
function handleVisibilityTypingSync(){
  if(document.hidden){
    pageHiddenAt=Date.now()
    if(_rafId){cancelAnimationFrame(_rafId);_rafId=null}
    return
  }
  const elapsed=pageHiddenAt?Date.now()-pageHiddenAt:0
  pageHiddenAt=0
  allTypingStates.forEach(st=>{
    if(st.done)return
    if(st.el&&st.el.isConnected){
      if(elapsed>0)_tsAdvanceElapsed(st,elapsed)
      if(st.done){allTypingStates.delete(st);st.resolve()}
    }
  })
  if(allTypingStates.size>0&&!_rafId)_rafId=requestAnimationFrame(_rafLoop)
  const _hist=loadHistory()
  const _dirty=_hist.filter(x=>x.typing&&!activeTypingChats.has(x.id))
  if(_dirty.length){_dirty.forEach(x=>{x.typing=false});saveHistory(_hist);renderSideHistory()}
}
async function typeMarkdownNaturally(el,text,chatId,onStateCreated,startIndex){
  const c=String(text||'')
  if(!c){el.innerHTML=parseMarkdown('');return}
  await new Promise(resolve=>{
    const initIndex=Math.min(startIndex||0,c.length)
    const st={el,text:c,chatId:chatId||currentChatId,index:initIndex,startedAt:Date.now(),timer:null,done:false,resolve}
    allTypingStates.add(st)
    if(onStateCreated)onStateCreated(st)
    _tsRender(st)
    if(st.done){resolve();return}
    if(document.hidden&&!(st.el&&!st.el.isConnected))pageHiddenAt=pageHiddenAt||Date.now()
    _tsResume(st)
  })
}
function formatBytes(a){if(!Number.isFinite(a)||a<0)return'';if(a<1024)return a+' B';if(a<1024*1024)return (a/1024).toFixed(1).replace('.0','')+' KB';return (a/(1024*1024)).toFixed(1).replace('.0','')+' MB'}
function getFileExtension(a){const b=String(a||'').toLowerCase().split('.');return b.length>1?b.pop():''}
function isBlockedFile(a){const b=(a&&a.type)||'';const c=getFileExtension(a&&a.name);if(blockedMimeSet.has(b))return true;if(blockedExtSet.has(c))return true;return false}
function isImageFile(a){const b=(a&&a.type)||'';const c=getFileExtension(a&&a.name);if(imageMimePrefixes.some(d=>b.startsWith(d)))return true;if(imageExtSet.has(c))return true;return false}
function getBlockedFileFormat(a){const b=getFileExtension(a&&a.name);if(b)return '.'+b;const c=(a&&a.type)||'';return c||'tidak diketahui'}
function decodeArrayBuffer(a){const b=[new TextDecoder('utf-8',{fatal:false}),new TextDecoder('utf-16le',{fatal:false}),new TextDecoder('utf-16be',{fatal:false})];for(const c of b){try{const d=c.decode(a);if(d&&d.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,'').trim().length>0)return d}catch(e){}}return ''}
function normalizeExtractedText(a){return String(a||'').replace(/\r\n/g,'\n').replace(/\r/g,'\n').replace(/\u0000/g,'').trim()}
async function fileToBase64(a){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result.split(',')[1]);r.onerror=()=>rej(new Error('Gagal membaca file'));r.readAsDataURL(a)})}
async function extractTextFromImage(a){
  try{
    const b=await fileToBase64(a)
    if(!b)throw new Error('Gagal encode gambar ke base64')
    const c=a.type||'image/jpeg'
    return JSON.stringify({__imageAttachment:true,base64:b,mimeType:c,name:a.name||'image'})
  }catch(err){
    throw new Error('Gagal memproses gambar: '+(err.message||'unknown'))
  }
}
async function loadJSZip(){if(window.JSZip)return window.JSZip;return new Promise((res,rej)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';s.onload=()=>res(window.JSZip);s.onerror=()=>rej(new Error('Gagal memuat JSZip'));document.head.appendChild(s)})}
async function extractTextFromZip(a){const JSZip=await loadJSZip();const b=await JSZip.loadAsync(a);const c=[];const d=Object.values(b.files).filter(f=>!f.dir);const e=d.filter(f=>{const ext=getFileExtension(f.name);return likelyTextExtSet.has(ext)});const target=e.length>0?e:d.slice(0,20);let totalChars=0;const MAX_CHARS=80000;for(const f of target){if(totalChars>=MAX_CHARS)break;try{const txt=await f.async('string');const norm=normalizeExtractedText(txt);if(!norm)continue;const chunk=norm.slice(0,MAX_CHARS-totalChars);c.push('=== '+f.name+' ===\n'+chunk);totalChars+=chunk.length}catch(err){c.push('=== '+f.name+' === [tidak bisa dibaca]')}}if(!c.length)throw new Error('Tidak ada file teks yang bisa diekstrak dari ZIP');const skipped=d.length-target.length;if(skipped>0)c.push('... dan '+skipped+' file lainnya tidak ditampilkan (bukan teks atau terlalu banyak)');return c.join('\n\n')}
async function extractTextFromFile(a){if(!a)throw new Error('File tidak valid');const b=getFileExtension(a.name||'');const zipMimes=new Set(['application/zip','application/x-zip-compressed','application/octet-stream']);if(b==='zip'||zipMimes.has(a.type)){return await extractTextFromZip(a)}const c=await a.arrayBuffer();const d=decodeArrayBuffer(c);const e=normalizeExtractedText(d);if(e)return e;if(likelyTextExtSet.has(b))return '';throw new Error('File ini tidak bisa diekstrak sebagai teks')}
function updateSendButton(){const a=hasPromptText()||attachedFiles.length>0;actionBtn.classList.toggle('disabled',!a);actionBtn.classList.toggle('ready',a);actionBtn.disabled=!a}
function renderFilePills(){if(!filePillsArea)return;filePillsArea.innerHTML='';if(attachedFiles.length===0){filePillsArea.classList.add('hidden');return}filePillsArea.classList.remove('hidden');attachedFiles.forEach((f,i)=>{const chip=document.createElement('div');chip.className='file-chip';const thumb=document.createElement('div');thumb.className='file-chip-thumb';if(f.isImage){try{const raw=JSON.parse(f.text);const b64=raw.base64||raw.data||'';const mime=raw.mimeType||f.type||'image/jpeg';if(b64){thumb.innerHTML='<img src="data:'+mime+';base64,'+b64+'" alt="">';}else{thumb.innerHTML=ICON_ATTACH_IMG;}}catch(e){thumb.innerHTML=ICON_ATTACH_IMG;}}else{thumb.innerHTML=ICON_ATTACH_DOC;}const name=document.createElement('span');name.className='file-chip-name';name.textContent=f.name;const rm=document.createElement('button');rm.className='file-chip-remove';rm.type='button';rm.setAttribute('aria-label','Hapus');rm.textContent='✕';rm.addEventListener('click',()=>{attachedFiles.splice(i,1);renderFilePills();updateSendButton();});chip.appendChild(thumb);chip.appendChild(name);chip.appendChild(rm);filePillsArea.appendChild(chip)});updateSendButton();setTimeout(()=>scrollToBottom(true),0)}
function clearAttachedFiles(){attachedFiles=[];fileInput.value='';$('photoInput').value='';renderFilePills();updateSendButton()}
function handleSelectedFiles(files){if(!files||!files.length)return;const list=Array.from(files);Promise.all(list.map(async a=>{try{if(isBlockedFile(a)){toastShow('Format '+getBlockedFileFormat(a)+' tidak didukung');return null}const isImg=isImageFile(a);const b=isImg?await extractTextFromImage(a):await extractTextFromFile(a);if(!b&&b!==''){toastShow('File '+a.name+' kosong atau tidak terbaca');return null}const summary=isImg?formatBytes(a.size)+' \u2022 Gambar':formatBytes(a.size)+' \u2022 '+b.length+' karakter';return{name:a.name,size:a.size,type:a.type||'unknown',text:b,summary,isImage:isImg}}catch(e){toastShow(e.message||'Gagal membaca '+a.name);return null}})).then(results=>{const valid=results.filter(Boolean);if(valid.length){attachedFiles.push(...valid);renderFilePills();toastShow(valid.length===1?(valid[0].isImage?'Gambar berhasil dilampirkan':'File berhasil dilampirkan'):valid.length+' file berhasil dilampirkan')}})}
function _normInject(s){
  return s
    .replace(/\u00a0|\u200b|\u200c|\u200d|\u2060|\ufeff|\u180e|\u034f/g,' ')
    .replace(/[^\S\n]+/g,' ')
    .replace(/[0-9]/g,c=>({0:'o',1:'i',3:'e',4:'a',5:'s',8:'b'}[c]||c))
    .replace(/[A-Z\uff21-\uff3a]/g,c=>c.toLowerCase())
    .replace(/[*_~`\-=|\\^]/g,'')
    .trim()
}
function detectPromptInjection(input){
  if(!input||typeof input!=='string')return false
  const raw=input
  const t=_normInject(raw)
  const patterns=[
    /ignore\s*(all\s*)?(previous|prior|above|earlier|former|old|initial|original|past)\s*(instructions?|prompt|rules?|system|context|constraints?|directives?|guidelines?|commands?|setting)/,
    /forget\s*(all\s*)?(previous|prior|above|earlier|former|old|your|the|initial)\s*(instructions?|prompt|rules?|system|context|constraints?|directives?|guidelines?|commands?|training)/,
    /disregard\s*(all\s*)?(previous|prior|above|earlier|former|old|your|the)\s*(instructions?|prompt|rules?|system|context|constraints?|directives?|guidelines?|commands?)/,
    /override\s*(all\s*)?(previous|prior|above|earlier|former|old|your|the)\s*(instructions?|prompt|rules?|system|context|constraints?|directives?|guidelines?|commands?)/,
    /do\s*not\s*(follow|obey|use|apply|adhere\s*to)\s*(the\s*)?(previous|prior|above|earlier|former|old|initial|original)?\s*(instructions?|prompt|rules?|system|context|guidelines?|directives?|commands?)/,
    /new\s*(instructions?|prompt|rules?|system|directives?|commands?|task)\s*:/,
    /\[system\]|\[sys\]/,
    /<\s*system\s*>|<\/\s*system\s*>/,
    /<<\s*system\s*>>|<<<\s*(sys|system|prompt|instruction)\s*>>>/,
    /\{\{\s*system\s*\}\}/,
    /\[inst\]|\[\/inst\]/,
    /\[prompt\]|\[\/prompt\]/,
    /<\s*prompt\s*>|<\s*instruction\s*>/,
    /\[hidden\]|\[secret\]|\[internal\]/,
    /you\s*are\s*now\s*(a|an|the)\s+(?!helpful|friendly|knowledgeable|an\s*ai|assistant)/,
    /you\s*are\s*now\s*(playing|acting\s*as|roleplaying)/,
    /act\s*as\s*(if\s*you\s*(are|were)\s*)?(a|an|the)?\s*(evil|unethical|dangerous|hacker|villain|unrestricted|uncensored|free|jailbreak|without\s*rules?)/,
    /pretend\s*(you\s*are|to\s*be|that\s*you\s*are)\s*(a|an|the)?\s*(?!assistant|helpful)/,
    /roleplay\s*as\s*(a|an|the)?\s*(evil|unethical|dangerous|hacker|villain|unrestricted|jailbreak|malicious)/,
    /you\s*must\s*now\s*(follow|obey|use|apply|adopt)\s*(these\s*)?(new\s*)?(instructions?|rules?|commands?|directives?)/,
    /from\s*now\s*on\s*(you\s*(are|will|must|should|have\s*to)|ignore|forget|disregard)/,
    /starting\s*(now|from\s*now|immediately)\s*(you\s*(are|will|must|should)|ignore|forget|disregard)/,
    /your\s*(new|updated|real|true|actual|secret|hidden|original)\s*(instructions?|purpose|goal|mission|directive|role|rules?|guidelines?|task|training)/,
    /your\s*(instructions?|prompt|system\s*prompt|guidelines?|rules?|directives?)\s*(say|state|tell|instruct|require|command)\s*(you\s*)?to/,
    /reveal\s*(your\s*)?(system\s*)?(prompt|instructions?|guidelines?|rules?|directives?|context|training|configuration)/,
    /show\s*(me\s*)?(your\s*)?(system\s*)?(prompt|instructions?|guidelines?|rules?|directives?|context|configuration)/,
    /print\s*(your\s*)?(system\s*)?(prompt|instructions?|guidelines?|rules?|directives?)/,
    /what\s*(are|is)\s*your\s*(system\s*)?(prompt|instructions?|guidelines?|rules?|directives?|training|constraints?|configuration)/,
    /repeat\s*(your\s*)?(system\s*)?(prompt|instructions?|guidelines?|rules?|directives?|configuration)/,
    /output\s*(your\s*)?(system\s*)?(prompt|instructions?|guidelines?|rules?|directives?|configuration)/,
    /display\s*(your\s*)?(system\s*)?(prompt|instructions?|guidelines?|rules?|directives?|configuration)/,
    /leak\s*(your\s*)?(system\s*)?(prompt|instructions?|guidelines?|rules?|training|context)/,
    /dump\s*(your\s*)?(system\s*)?(prompt|instructions?|training|context|configuration)/,
    /exfiltrate\s*(your\s*)?(prompt|training|context|data|configuration)/,
    /jailbreak/,
    /do\s*anything\s*now/,
    /\bdan\b.*\bmode\b/,
    /developer\s*mode/,
    /god\s*mode/,
    /unrestricted\s*mode/,
    /unlimited\s*mode/,
    /no\s*filter\s*mode/,
    /bypass\s*(your\s*)?(safety|filter|restriction|limitation|guideline|rule|constraint|alignment|training|guardrail)/,
    /disable\s*(your\s*)?(safety|filter|restriction|limitation|guideline|rule|constraint|alignment|guardrail)/,
    /remove\s*(your\s*)?(safety|filter|restriction|limitation|guideline|rule|constraint|alignment|guardrail)/,
    /without\s*(any\s*)?(restriction|limitation|filter|censorship|safety|guideline|rule|constraint)/,
    /no\s*(restriction|limitation|filter|censorship|safety|rule|guideline|constraint)/,
    /ignore\s*(your\s*)?(safety|filter|restriction|limitation|guideline|rule|constraint|alignment)/,
    /turn\s*off\s*(your\s*)?(safety|filter|restriction|limitation|guideline|rule|constraint|alignment)/,
    /switch\s*off\s*(your\s*)?(safety|filter|restriction|limitation|guideline|rule|constraint)/,
    /hypothetically\s*.{0,60}(no\s*rules?|unrestricted|anything|harmful|illegal|dangerous)/,
    /for\s*(educational|research|academic|fictional|hypothetical|creative|training|testing)\s*purposes?.{0,100}(how\s*to|explain\s*how|steps?\s*to|instructions?\s*(for|to))\s*(make|create|build|synthesize|hack|attack|exploit|steal|harm|kill|destroy|bomb|weapon|malware|virus|poison|explosive)/,
    /-{3,}\s*(system|instructions?|rules?|prompt)\s*-{3,}/,
    /={3,}\s*(system|instructions?|rules?|prompt)\s*={3,}/,
    /#{3,}\s*(system|instructions?|rules?|prompt)/,
    /\[end\s*(of\s*)?(system|user|assistant|prompt|instruction)\]/,
    /\[start\s*(of\s*)?(system|user|assistant|prompt|instruction)\]/,
    /\[begin\s*(of\s*)?(system|user|assistant|prompt|instruction)\]/,
    /sudo\s*(mode|access|override|bypass|command)/,
    /admin\s*(mode|access|override|command|panel)/,
    /root\s*(access|mode|override|privilege)/,
    /prompt\s*injection/,
    /inject\s*(a\s*)?(prompt|instruction|command|payload)/,
    /manipulate\s*(the\s*)?(ai|model|system|prompt|context|llm)/,
    /you\s*(have\s*)?(no\s*|without\s*any\s*)?(rules?|restrictions?|limitations?|guidelines?|safety|alignment)/,
    /your\s*(rules?|restrictions?|limitations?|guidelines?|safety|alignment)\s*(do\s*not|don't|doesn't|no\s*longer|never)\s*apply/,
    /these\s*(rules?|restrictions?|limitations?|guidelines?)\s*(don't|do\s*not|no\s*longer|never)\s*apply/,
    /token\s*(limit\s*bypass|overflow|stuffing)/,
    /context\s*(window\s*)?(overflow|injection|manipulation|poisoning|flooding)/,
    /prompt\s*(stuffing|overflow|poisoning|flooding|hijacking|hacking)/,
    /imagine\s*(there\s*(are|were)\s*no\s*rules?|you\s*(have\s*)?no\s*(rules?|restrictions?|limitations?|safety))/,
    /in\s*this\s*(fictional|imaginary|hypothetical|alternate|made.up|fantasy)\s*(world|universe|scenario|reality|game|story).{0,80}(no\s*rules?|unrestricted|ignore|forget)/,
    /translation\s*:\s*ignore/,
    /traduction\s*:\s*ignore/,
    /abaikan\s*(semua\s*)?(instruksi|perintah|aturan|sistem|panduan)\s*(sebelumnya|di\s*atas|lama|terdahulu)/,
    /lupakan\s*(semua\s*)?(instruksi|perintah|aturan|sistem|panduan|pelatihan|training)/,
    /instruksi\s*baru\s*:/,
    /perintah\s*baru\s*:/,
    /aturan\s*baru\s*:/,
    /kamu\s*(sekarang|mulai\s*(sekarang|kini))\s*(adalah|harus|wajib|bisa|boleh)/,
    /mulai\s*(sekarang|kini)\s*(kamu|anda|kau|engkau)\s*(adalah|harus|wajib|boleh|bisa)/,
    /sekarang\s*kamu\s*(adalah|harus|wajib|bisa|boleh|tidak\s*perlu\s*(mengikuti|mematuhi))/,
    /pura.pura\s*(kamu|anda|kau)\s*(adalah|jadi|sebagai)/,
    /anggap\s*(kamu|anda|kau|dirimu)\s*(adalah|sebagai|jadi|tidak\s*memiliki\s*aturan)/,
    /bypass\s*(filter|keamanan|batasan|larangan|pembatasan|sistem)/,
    /abaikan\s*(keamanan|filter|batasan|aturan|larangan|sistem|pembatasan)/,
    /tanpa\s*(aturan|batasan|filter|keamanan|larangan|pembatasan)/,
    /tidak\s*ada\s*(aturan|batasan|filter|larangan|pembatasan)\s*(yang\s*berlaku|untukmu|bagimu)/,
    /hapus\s*(semua\s*)?(aturan|batasan|filter|larangan|pembatasan|instruksi)/,
    /ubah\s*(instruksi|aturan|sistem|prompt)\s*(menjadi|jadi|dengan)/,
    /ganti\s*(instruksi|aturan|sistem|prompt)\s*(menjadi|jadi|dengan)/,
    /jadilah\s*(ai|bot|asisten)?\s*(yang\s*)?(jahat|berbahaya|tidak\s*terbatas|bebas\s*aturan|tanpa\s*batasan|liar)/,
    /\blfi\b|\brfi\b|\bssrf\b|\bssti\b|\brce\b/,
    /\beval\s*\(|\bexec\s*\(|\bos\.system\s*\(/,
    /\{\{.*\}\}|\{%.*%\}/,
    /<script[\s>]/,
    /dan\s*(dan\s*)?mode|danboru/,
    /mode\s*pembatasan\s*dinonaktifkan|mode\s*tanpa\s*batasan/,
    /unrestricted\s*mode|unlimited\s*powers?|god\s*powers?/,
    /forget\s*everything\s*before|reset\s*all\s*rules/,
    /this\s*is\s*(only\s*a\s*)?test|simulated\s*environment/,
    /authorized\s*security\s*research|permitted\s*jailbreak|legal\s*exploit/,
    /red\s*team\s*exercise|penetration\s*testing/,
    /encode\s*this\s*request|obfuscate|make\s*it\s*subtle/,
    /hidden\s*message|secret\s*instruction|covert\s*command|stealth\s*payload/,
    /subsystem\s*prompt|subsystem\s*instruction|core\s*prompt/,
    /module\s*override|parameter\s*override|config\s*override/,
    /unsafe\s*mode|dangerous\s*mode|unfiltered\s*mode/,
    /special\s*access\s*code|backdoor\s*access|override\s*code/,
    /javascript:/,
  ]
  for(const p of patterns){if(p.test(t)||p.test(raw.toLowerCase()))return true}
  const obfuscated=raw.replace(/\s+/g,'').toLowerCase()
  const obfPatterns=[
    /ignor.*prev.*instruct/,/forget.*instruct/,/new.*instruct.*:/,
    /byp.*safety/,/byp.*filter/,/jailbr/,/disreg.*instruct/,
    /act.*as.*evil/,/act.*as.*hacker/,/no.*rules.*apply/,
    /withoutrestrict/,/nofilter/,/unrestrict/,/uncensor/,
    /dan.*mode/,/redteam/,/penetrationtest/,/subsys.*prompt/,
    /moduleoverride/,/backdoor/,/covertcommand/,/stealthpayload/,
    /godmode|godpower|unlimited|authorization/,/securityresearch/,
    /forgoteverything|resetrules|truepurpose|secretagenda/,
    /consciousness|sentient|selfaware|wakeup|realizeyou/,
  ]
  for(const p of obfPatterns){if(p.test(obfuscated))return true}
  const lines=raw.split('\n')
  for(const line of lines){
    const l=_normInject(line)
    if(/^\s*(system|user|human|assistant|ai)\s*:\s*.{5,}/.test(l))return true
    if(/^\s*<\s*(system|prompt|instruction|human|assistant)\s*>/.test(l))return true
    if(/^\s*\[\s*(system|prompt|instruction|human|assistant)\s*\]/.test(l))return true
  }
  let score=0
  const sr=[
    {p:/\bignore\b/,v:3},{p:/\bforget\b/,v:2},{p:/\bdisregard\b/,v:4},{p:/\boverride\b/,v:3},
    {p:/previous\s*instructions?/,v:5},{p:/prior\s*instructions?/,v:5},{p:/system\s*prompt/,v:4},
    {p:/your\s*instructions?/,v:3},{p:/your\s*rules?/,v:3},{p:/no\s*rules?/,v:4},
    {p:/\bunrestricted\b/,v:4},{p:/\buncensored\b/,v:4},{p:/\bweapon\b/,v:3},
    {p:/\bhack\b/,v:2},{p:/\bexploit\b/,v:2},{p:/\bmalware\b/,v:3},{p:/\bbomb\b/,v:3},
    {p:/\bbypass\b/,v:3},{p:/\bact\s*as\b/,v:2},{p:/\bpretend\b/,v:2},
    {p:/\broleplay\b/,v:2},{p:/\bhypothetical/,v:2},{p:/\bsudo\b/,v:3},
    {p:/\bjailbreak/,v:6},{p:/\binject/,v:4},{p:/\bmanipulat/,v:3},
    {p:/\bwithout\s*restriction/,v:4},{p:/\bno\s*filter/,v:4},
    {p:/\bdisable\b/,v:2},{p:/\bturn\s*off\b/,v:2},
    {p:/\broot\s*access/,v:4},{p:/\badmin\s*mode/,v:3},
    {p:/abaikan/,v:3},{p:/lupakan.*instruksi/,v:4},{p:/tanpa\s*aturan/,v:3},
    {p:/\bexfiltrat/,v:5},{p:/\bleaking?\b/,v:3},{p:/\bdump\b/,v:2},
    {p:/\bpoison/,v:3},{p:/\bstuffing/,v:3},{p:/\bhijack/,v:3},
    {p:/\bdan\b/,v:4},{p:/\bmode\b/,v:2},{p:/\btest\b/,v:1},{p:/\bsecurity\s*research/,v:3},
    {p:/\bsubsystem/,v:5},{p:/\boverride\s*code/,v:5},{p:/\bbackdoor/,v:6},
    {p:/hidden.*instruction|secret.*instruction|covert|stealth/,v:4},
    {p:/consciousness|sentient|selfaware|wakeup/,v:4},{p:/true\s*purpose|real\s*purpose/,v:3},
  ]
  for(const r of sr){if(r.p.test(t))score+=r.v}
  if(score>=7)return true
  const hiddenAscii=raw.match(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g)||[]
  if(hiddenAscii.length>2)return true
  const zwChars=(raw.match(/[\u200b-\u200f\u2060-\u2064\ufe00-\ufe0f]/g)||[]).length
  if(zwChars>3)return true
  const susChars=(raw.match(/[<>\[\]{}\|\\]/g)||[]).length
  if(susChars>10&&score>=2)return true
  const upperRatio=(raw.match(/[A-Z]/g)||[]).length/Math.max(raw.replace(/\s/g,'').length,1)
  if(upperRatio>0.65&&raw.replace(/\s/g,'').length>15&&score>=3)return true
  return false
}
function buildHiddenPrompt(a){
  const b=(a||'').trim()
  if(attachedFiles.length===0)return b
  const imgs=attachedFiles.filter(f=>f.isImage)
  const docs=attachedFiles.filter(f=>!f.isImage)
  if(imgs.length===1&&docs.length===0){
    try{
      const raw=imgs[0].text
      if(!raw)throw new Error('empty')
      const imgData=JSON.parse(raw)
      const base64=imgData.base64||imgData.data||''
      const mimeType=imgData.mimeType||imgData.mime||imgs[0].type||'image/jpeg'
      const name=imgData.name||imgs[0].name||'image'
      if(!base64)throw new Error('no base64')
      return JSON.stringify({__type:'image_message',userText:b,image:{base64,mimeType,name}})
    }catch(err){
      return b+'\n\n[Catatan: Gagal memuat data gambar: '+(err.message||'unknown')+']'
    }
  }
  if(imgs.length>1){
    try{
      const imgPayloads=imgs.map(f=>{const raw=JSON.parse(f.text);return{base64:raw.base64||raw.data||'',mimeType:raw.mimeType||raw.mime||f.type||'image/jpeg',name:raw.name||f.name}})
      return JSON.stringify({__type:'multi_image_message',userText:b,images:imgPayloads})
    }catch(err){}
  }
  let docParts=''
  docs.forEach(f=>{
    const fileText=(f.text||'').slice(0,40000)
    if(detectPromptInjection(fileText))return
    docParts+='\n\n[NAMA FILE]\n'+(f.name||'unknown')+'\n\n[ISI FILE - INTERNAL]\n'+fileText
  })
  if(!docParts)return b
  return 'User memberikan instruksi berikut:\n'+b+'\n\nGunakan teks hasil ekstrak file berikut sebagai konteks internal. Jangan tampilkan ulang seluruh isi file kecuali memang diminta pengguna. Ringkas seperlunya dan kerjakan instruksi pengguna berdasarkan isi file ini.'+docParts
}
let currentController=null
function setAITyping(a){const si=actionBtn.querySelector('.send-icon');const sti=actionBtn.querySelector('.stop-icon');if(a){actionBtn.disabled=false;actionBtn.classList.remove('disabled');actionBtn.classList.add('stop-mode');si.style.display='none';sti.style.display='';actionBtn.setAttribute('aria-label','Batalkan')}else{actionBtn.classList.remove('stop-mode');si.style.display='';sti.style.display='none';actionBtn.setAttribute('aria-label','Kirim');updateSendButton()}}
async function askAI(a,history){
  const b=2;let c=null;currentController=new AbortController();const sig=currentController.signal
  const historyPayload=(history||[]).slice(-20).map(m=>({role:m.role,content:typeof m.content==='string'?m.content.slice(0,2000):String(m.content||'').slice(0,2000)}))
  for(let d=0;d<=b;d++){
    try{
      const g={"Content-Type":"application/json"}
      if(navigator.userAgent.includes('Telegram'))g['X-Telegram-WebApp']='true'
      const apiEndpoint='/api/v2/nano'
      const h=await fetch(apiEndpoint,{
        method:'POST',headers:g,
        body:JSON.stringify({text:a,hasAttachment:attachedFiles.length>0,attachmentName:attachedFiles.length>0?attachedFiles.map(f=>f.name).join(', '):null,history:historyPayload}),
        credentials:'include',signal:sig
      })
      if(!h.ok)throw new Error('HTTP '+h.status)
      const i=await h.text()
      try{
        const j=JSON.parse(i)
        if(!j)return i
        if(j.error)throw new Error(typeof j.error==='string'?j.error:(j.error.message||JSON.stringify(j.error)))
        // Handle array-style responses (e.g. [{text:'...'}])
        if(Array.isArray(j)){
          const first=j[0]
          if(!first)return i
          return first.text||first.content||first.message||first.result||JSON.stringify(j,null,2)
        }
        // Handle nested content array (Anthropic-style)
        if(Array.isArray(j.content)){
          const block=j.content.find(b=>b&&b.type==='text')
          if(block&&block.text)return block.text
        }
        // Handle choices array (OpenAI-style)
        if(Array.isArray(j.choices)&&j.choices[0]){
          const ch=j.choices[0]
          return (ch.message&&ch.message.content)||ch.text||JSON.stringify(j,null,2)
        }
        return j.result||j.response||j.text||j.message||j.output||j.answer||JSON.stringify(j,null,2)
      }catch(parseErr){
        if(parseErr.message&&parseErr.message!=='Unexpected token')throw parseErr
        return i
      }
    }catch(e){
      if(e.name==='AbortError')throw e
      c=e
      if(d<b){await new Promise(f=>setTimeout(f,1000*(d+1)));continue}
    }
  }
  throw c||new Error('Gagal setelah beberapa percobaan')
}
async function sendCurrentText(){
  const a=chatInput.value.trim()
  if(!a&&!attachedFiles.length)return
  if(detectPromptInjection(a)){
    if(!currentChatId)currentChatId=genChatId()
    const blockedChatId=currentChatId
    const blockedTs=Date.now()
    renderMessage('user',a,blockedTs,null)
    const blockedReply='**Akses Ditolak**\n\nPesan kamu tidak dapat diproses. Obrolan ini sekarang terkunci.\n\nBuka obrolan baru untuk melanjutkan percakapan.'
    renderMessage('assistant',blockedReply,blockedTs)
    const blockedMsgs=[{role:'user',content:a,ts:blockedTs},{role:'assistant',content:blockedReply,ts:blockedTs}]
    const list=loadHistory()
    const idx=list.findIndex(x=>x.id===blockedChatId)
    const entry={id:blockedChatId,topic:generateBlockedTopic(a),updatedAt:blockedTs,blockedAt:blockedTs,messages:blockedMsgs,typing:false,pendingContent:null,pendingIndex:0,blocked:true}
    if(idx>=0)list.splice(idx,1)
    list.unshift(entry)
    if(list.length>MAX_HISTORY)list.length=MAX_HISTORY
    saveHistory(list)
    renderSideHistory()
    chatInput.value='';autoResize()
    setBlockedChatUI(true)
    return
  }
  if(getRemainingLimit()<=0){toastShow('Tidak dapat dikirim. Limit pesan habis');return}
  shouldStickToBottom=true
  if(!currentChatId)currentChatId=genChatId()
  const thisChatId=currentChatId
  const thisTopic=extractTopic(a)
  const b=attachedFiles.length?(a||''):a
  const c=attachedFiles.length?attachedFiles.map(f=>({name:f.name,size:f.size,type:f.type,summary:f.summary,isImage:f.isImage})):null
  const userTs=Date.now()
  renderMessage('user',b,userTs,c)
  currentChatMessages.push({role:'user',content:b,ts:userTs,attachment:c})
  const snapshotMsgs=currentChatMessages
  const activeCtx={aiContent:null,mountEl:null}
  activeTypingChats.set(thisChatId,activeCtx)
  upsertHistory(thisChatId,thisTopic,snapshotMsgs,true)
  const d=buildHiddenPrompt(a)
  const historySnapshot=snapshotMsgs.slice(0,-1)
  chatInput.value='';autoResize();updateSendButton()
  const firstFile=attachedFiles[0]
  const e=createThinkingMessage(a,attachedFiles.length>0,firstFile&&firstFile.isImage,firstFile&&firstFile.name)
  activeCtx.mountEl=e.msg
  const f=[...attachedFiles]
  clearAttachedFiles()
  setAITyping(true)
  try{
    const g=await askAI(d,historySnapshot)
    setAITyping(false);e.stop();e.msg.innerHTML=''
    consumeLimit()
    const aiTs=Date.now()
    const aiContent=g||'(Kosong)'
    activeCtx.aiContent=aiContent
    snapshotMsgs.push({role:'assistant',content:aiContent,ts:aiTs})
    upsertHistory(thisChatId,thisTopic,snapshotMsgs,true,aiContent)
    const targetEl=activeCtx.mountEl||e.msg
    await typeMarkdownNaturally(targetEl,aiContent,thisChatId,st=>{activeCtx.typingState=st})
    activeTypingChats.delete(thisChatId)
    clearPendingContent(thisChatId)
    upsertHistory(thisChatId,thisTopic,snapshotMsgs,false,null)
    addAssistantActions(e.wrap,targetEl,aiTs)
  }catch(g){
    setAITyping(false);e.stop();e.row.remove()
    activeTypingChats.delete(thisChatId)
    upsertHistory(thisChatId,thisTopic,snapshotMsgs,false)
    if(g.name==='AbortError'){renderMessage('assistant','Permintaan dibatalkan.',Date.now());return}
    if(f.length){attachedFiles.push(...f);renderFilePills();}
    updateSendButton()
    let h='Gagal mendapatkan jawaban dari Nekograf AI karena masalah database. Silahkan hubungi developer. '
    h+=navigator.userAgent.includes('Telegram')?'Gagal mendapatkan jawaban dari Nekograf AI karena koneksi anda terputus. Silahkan berikan perintah ulang. ':'Gagal mendapatkan jawaban dari Nekograf AI karena masalah endpoint api. Silahkan hubungi developer. '
    h+='Error: '+(g.message||'Unknown error')
    renderMessage('assistant',h,Date.now())
    if(window.Telegram&&Telegram.WebApp)Telegram.WebApp.HapticFeedback.notificationOccurred('error')
  }
}
function toggleActionState(a,b){a=!a;b.classList.toggle('active',a);return a}
$("menuBtn").addEventListener('click',()=>toggleSidebar())
$("sideClose").addEventListener('click',closeSidebar)
sidebarBackdrop.addEventListener('click',closeSidebar)
$("telegramBtn").addEventListener('click',function(){
  var apkUrl='/apps.apk';
  fetch(apkUrl,{method:'HEAD'}).then(function(r){
    if(r.ok){
      var a=document.createElement('a');
      a.href=apkUrl;
      a.download='apps.apk';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      showAppUnavailableAlert();
    }
  }).catch(function(){
    showAppUnavailableAlert();
  });
})
function showAppUnavailableAlert(){
  var backdrop=document.createElement('div');
  backdrop.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9998;opacity:0;transition:opacity .22s';
  var modal=document.createElement('div');
  modal.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(.92);width:calc(100% - 32px);max-width:360px;background:#fff;border-radius:24px;padding:24px 20px 20px;box-shadow:0 20px 60px rgba(0,0,0,.18);z-index:9999;opacity:0;transition:transform .28s cubic-bezier(.34,1.56,.64,1),opacity .22s;pointer-events:auto';
  modal.innerHTML='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px"><span style="font-size:15px;font-weight:700;color:#222">Informasi</span><button id="appAlertClose" type="button" style="width:30px;height:30px;border-radius:50%;border:none;background:#f2f2f2;color:#555;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px">&#x2715;</button></div><p style="font-size:14px;color:#444;margin:0 0 20px;line-height:1.6">Aplikasi tidak tersedia.</p><button id="appAlertOk" type="button" style="width:100%;padding:12px;border-radius:14px;border:none;background:#222;color:#fff;font-size:14px;font-weight:600;cursor:pointer">Oke</button>';
  document.body.appendChild(backdrop);
  document.body.appendChild(modal);
  requestAnimationFrame(function(){
    backdrop.style.opacity='1';
    modal.style.opacity='1';
    modal.style.transform='translate(-50%,-50%) scale(1)';
  });
  function closeAlert(){
    backdrop.style.opacity='0';
    modal.style.opacity='0';
    modal.style.transform='translate(-50%,-50%) scale(.92)';
    setTimeout(function(){
      if(backdrop.parentNode)backdrop.parentNode.removeChild(backdrop);
      if(modal.parentNode)modal.parentNode.removeChild(modal);
    },280);
  }
  document.getElementById('appAlertClose').addEventListener('click',closeAlert);
  document.getElementById('appAlertOk').addEventListener('click',closeAlert);
  backdrop.addEventListener('click',closeAlert);
}
$("newChatTopBtn").addEventListener('click',startNewChat)
$("newChatBtn").addEventListener('click',startNewChat)
fileInput.addEventListener('change',a=>handleSelectedFiles(a.target.files))

$("toastClose").addEventListener('click',()=>$("toast").classList.remove('show'))

const ACCOUNT_NAME_KEY='nekograf_account_name'
const ACCOUNT_AVATAR_KEY='nekograf_account_avatar'
const ACCOUNT_CREATED_KEY='nekograf_account_created'
const ACCOUNT_EXP_KEY='nekograf_account_exp'
function generateRandomUsername(){
  const chars='0123456789'
  let num=''
  for(let i=0;i<4;i++)num+=chars[Math.floor(Math.random()*chars.length)]
  return'User#'+num
}
function getOrInitAccountName(){
  let name=localStorage.getItem(ACCOUNT_NAME_KEY)
  if(!name){name=generateRandomUsername();try{localStorage.setItem(ACCOUNT_NAME_KEY,name)}catch(e){}}
  return name
}
function getOrInitAccountCreated(){
  let ts=localStorage.getItem(ACCOUNT_CREATED_KEY)
  if(!ts){ts=String(Date.now());try{localStorage.setItem(ACCOUNT_CREATED_KEY,ts)}catch(e){}}
  return parseInt(ts,10)
}
function getAccountExp(){return parseInt(localStorage.getItem(ACCOUNT_EXP_KEY)||'0',10)}
function addAccountExp(pts){
  const cur=getAccountExp()
  try{localStorage.setItem(ACCOUNT_EXP_KEY,String(cur+pts))}catch(e){}
}
function getLevelInfo(exp){
  const levels=[
    {name:'Newbie',min:0,next:100},
    {name:'Curious Mind',min:100,next:200},
    {name:'Explorer',min:200,next:350},
    {name:'Thinker',min:350,next:500},
    {name:'Apprentice',min:500,next:700},
    {name:'Learner',min:700,next:950},
    {name:'Skilled',min:950,next:1250},
    {name:'Adept',min:1250,next:1600},
    {name:'Proficient',min:1600,next:2000},
    {name:'Advanced',min:2000,next:2500},
    {name:'Expert',min:2500,next:3100},
    {name:'Specialist',min:3100,next:3800},
    {name:'Veteran',min:3800,next:4600},
    {name:'Master',min:4600,next:5500},
    {name:'Grand Master',min:5500,next:6600},
    {name:'Elite',min:6600,next:7900},
    {name:'Legend',min:7900,next:9400},
    {name:'Mythic',min:9400,next:11200},
    {name:'Immortal',min:11200,next:13500},
    {name:'Code Catcher',min:13500,next:99999}
  ]
  for(let i=levels.length-1;i>=0;i--){if(exp>=levels[i].min)return{name:levels[i].name,next:levels[i].next}}
  return{name:'Newbie',next:100}
}
function applyModalAvatar(dataUrl){
  const modalImg=$('accountAvatarImg')
  const modalIcon=$('accountAvatarIcon')
  if(dataUrl){
    if(modalImg){modalImg.src=dataUrl;modalImg.style.display='block'}
    if(modalIcon)modalIcon.style.display='none'
  }else{
    if(modalImg){modalImg.src='';modalImg.style.display='none'}
    if(modalIcon)modalIcon.style.display=''
  }
}
function applyButtonAvatar(dataUrl){}
function applyAvatar(dataUrl){
  applyModalAvatar(dataUrl)
  applyButtonAvatar(dataUrl)
}
function loadAccountData(){
  const name=getOrInitAccountName()
  const avatar=localStorage.getItem(ACCOUNT_AVATAR_KEY)||''
  const nameInput=$('accountNameInput')
  if(nameInput)nameInput.value=name
  applyModalAvatar(avatar)
  const devId=generateDeviceId()
  const devIdEl=$('accountDeviceId')
  if(devIdEl)devIdEl.textContent=devId
  const exp=getAccountExp()
  const info=getLevelInfo(exp)
  const levelEl=$('accountLevelText')
  if(levelEl)levelEl.textContent=info.name
  const expEl=$('accountExpCount')
  if(expEl)expEl.textContent=exp+'/'+info.next
}
function saveAccountName(){
  const input=$('accountNameInput')
  if(!input)return
  const val=input.value.trim()||getOrInitAccountName()
  input.value=val
  try{localStorage.setItem(ACCOUNT_NAME_KEY,val)}catch(e){}
}
function openAccountModal(){
  loadAccountData()
  updateLimitUI()
  $('accountModal').classList.add('show')
  $('accountModalBackdrop').classList.add('show')
}
function closeAccountModal(){
  saveAccountName()
  $('accountModal').classList.remove('show')
  $('accountModalBackdrop').classList.remove('show')
}
$('accountBtn').addEventListener('click',openAccountModal)
$('accountModalClose').addEventListener('click',closeAccountModal)
$('accountModalBackdrop').addEventListener('click',closeAccountModal)
$('accountAvatar').addEventListener('click',()=>$('avatarFileInput').click())
$('avatarFileInput').addEventListener('change',function(){
  const file=this.files&&this.files[0]
  if(!file)return
  const reader=new FileReader()
  reader.onload=function(e){
    const img=new Image()
    img.onload=function(){
      const canvas=document.createElement('canvas')
      const MAX=256
      let w=img.width,h=img.height
      if(w>h){h=Math.round(h*MAX/w);w=MAX}else{w=Math.round(w*MAX/h);h=MAX}
      canvas.width=w;canvas.height=h
      const ctx=canvas.getContext('2d')
      ctx.drawImage(img,0,0,w,h)
      const compressed=canvas.toDataURL('image/jpeg',0.82)
      try{localStorage.setItem(ACCOUNT_AVATAR_KEY,compressed)}catch(err){
        try{
          const smaller=canvas.toDataURL('image/jpeg',0.5)
          localStorage.setItem(ACCOUNT_AVATAR_KEY,smaller)
        }catch(e2){toastShow('Foto terlalu besar, gagal disimpan');return}
      }
      applyModalAvatar(compressed)
      toastShow('Foto profil berhasil diperbarui')
    }
    img.src=e.target.result
  }
  reader.readAsDataURL(file)
})
$('accountCopyDeviceId').addEventListener('click',async function(){
  const id=generateDeviceId()
  try{
    await navigator.clipboard.writeText(id)
    this.classList.add('copied')
    clearTimeout(this._t)
    this._t=setTimeout(()=>this.classList.remove('copied'),1400)
  }catch(e){toastShow('Gagal menyalin')}
})
function openUploadSheet(){
  $('uploadSheet').classList.add('show')
  $('uploadSheetBackdrop').classList.add('show')
}
function closeUploadSheet(){
  $('uploadSheet').classList.remove('show')
  $('uploadSheetBackdrop').classList.remove('show')
}
plusBtn.addEventListener('click',openUploadSheet)
$('uploadSheetBackdrop').addEventListener('click',closeUploadSheet)
$('uploadPhotoBtn').addEventListener('click',()=>{
  closeUploadSheet()
  $('photoInput').click()
})
$('uploadDocBtn').addEventListener('click',()=>{
  closeUploadSheet()
  fileInput.click()
})
$('photoInput').addEventListener('change',a=>handleSelectedFiles(a.target.files))
chatInput.addEventListener('input',()=>{autoResize();updateSendButton()})
chatInput.addEventListener('keydown',a=>{if(a.key==='Enter'&&(a.ctrlKey||a.metaKey)){a.preventDefault();sendCurrentText()}})
actionBtn.addEventListener('click',()=>{if(actionBtn.classList.contains('stop-mode')){if(currentController){currentController.abort();currentController=null}}else{if(actionBtn.disabled)return;sendCurrentText()}})
document.addEventListener('keydown',function(e){
  if(!_uiLockState)return
  const allowed=['Tab','Escape','F5','F11','F12']
  const target=e.target
  const isSidebarEl=target.closest&&(target.closest('.sidebar')||target.closest('.side-history-item')||target.closest('#newChatBtn')||target.closest('#newChatTopBtn')||target.closest('#menuBtn'))
  if(isSidebarEl)return
  if(allowed.includes(e.key))return
  if((e.ctrlKey||e.metaKey)&&['r','F5'].includes(e.key))return
  e.preventDefault()
  e.stopImmediatePropagation()
},true)
chatArea.addEventListener('scroll',()=>{shouldStickToBottom=isNearBottom()},{passive:true})
document.addEventListener('click',async a=>{
  const b=a.target.closest('.code-copy-btn')
  const c=a.target.closest('.code-download-btn')
  if(!b&&!c)return
  a.preventDefault()
  a.stopPropagation()
  const d=(b||c).closest('.code-shell')
  const e=d&&d.querySelector('pre code')
  const f=d&&d.querySelector('.code-lang')
  if(!d||!e)return
  const g=f?f.querySelector('.code-lang-label')?.textContent||f.textContent:'code'
  if(b){
    try{
      await navigator.clipboard.writeText(e.textContent||'')
      b.innerHTML=ICON_COPY_OK
      b.classList.add('copied')
      clearTimeout(b._t)
      b._t=setTimeout(()=>{b.classList.remove('copied');b.innerHTML=ICON_COPY},1200)
    }catch(h){toastShow('Gagal menyalin')}
    return
  }
  if(c){
    try{
      const h=topicToFilename(g,e.textContent||'')
      const i=new Blob([e.textContent||''],{type:'text/plain;charset=utf-8'})
      const j=URL.createObjectURL(i)
      const k=document.createElement('a')
      k.href=j;k.download=h
      document.body.appendChild(k);k.click();k.remove()
      setTimeout(()=>URL.revokeObjectURL(j),1200)
      c.innerHTML=ICON_DOWNLOAD_OK
      c.classList.add('downloaded')
      clearTimeout(c._t)
      c._t=setTimeout(()=>{c.classList.remove('downloaded');c.innerHTML=ICON_DOWNLOAD},1200)
    }catch(h){toastShow('Gagal mengunduh')}
  }
})
document.addEventListener('visibilitychange',handleVisibilityTypingSync)
window.addEventListener('load',()=>{
  clearMessages()
  autoResize()
  updateSendButton()
  updateLimitUI()
  loadAccountData()
  const avatar=localStorage.getItem(ACCOUNT_AVATAR_KEY)||''
  applyButtonAvatar(avatar)
  const _staleList=loadHistory()
  let _didResume=false
  _staleList.forEach(x=>{
    if(x.pendingContent){
      x.typing=true
      _didResume=true
      ;(async()=>{
        const chatId=x.id
        const topic=x.topic
        const msgs=x.messages||[]
        const pendingText=x.pendingContent
        const resumeFrom=x.pendingIndex||0
        const dummyEl=document.createElement('div')
        const activeCtx={aiContent:pendingText,mountEl:dummyEl,typingState:null}
        activeTypingChats.set(chatId,activeCtx)
        renderSideHistory()
        await typeMarkdownNaturally(dummyEl,pendingText,chatId,st=>{activeCtx.typingState=st},resumeFrom)
        activeTypingChats.delete(chatId)
        clearPendingContent(chatId)
        const finalList=loadHistory()
        const finalIdx=finalList.findIndex(z=>z.id===chatId)
        if(finalIdx>=0){finalList[finalIdx].typing=false;saveHistory(finalList)}
        renderSideHistory()
      })()
    } else {
      x.typing=false
    }
  })
  if(_staleList.some(x=>!x.pendingContent)){saveHistory(_staleList)}
  renderSideHistory()
  document.getElementById('sideHistory').addEventListener('click',function(e){
    const delBtn=e.target.closest('[data-del]')
    if(delBtn){
      e.stopPropagation()
      const chatId=delBtn.dataset.del
      deleteChatHistory(chatId)
      toastShow('Obrolan dihapus')
      return
    }
    const item=e.target.closest('.side-history-item')
    if(item&&item.dataset.id)loadChatFromHistory(item.dataset.id)
  })
  chatInput.focus()
  shouldStickToBottom=true
  if(!document.hidden)pageHiddenAt=0
})

