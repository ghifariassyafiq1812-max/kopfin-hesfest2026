// =============================================================================
// demoData.js
// SELURUH data pada file ini berlabel DEMO / SIMULATED.
// Tidak ada data identitas nyata maupun hasil penelitian empiris yang digunakan.
// Angka-angka dibuat khusus untuk keperluan visualisasi prototype KOPFIN
// (esai HESFEST 2026), bukan hasil pilot yang sesungguhnya.
// =============================================================================

export const DEMO_NOTICE =
  'Seluruh data pada halaman ini adalah DEMO / SIMULATED, dibuat untuk keperluan visualisasi. Bukan data identitas nyata atau hasil penelitian empiris.'

// -----------------------------------------------------------------------------
// KOPERASI (Cooperatives) — dengan governance indicators
// -----------------------------------------------------------------------------
export const koperasiList = [
  {
    id: 'kop-01',
    nama: 'Koperasi Maju Bersama',
    lokasi: 'Sleman, DI Yogyakarta',
    tahunBerdiri: 2011,
    jumlahAnggota: 214,
    status: 'PILOT ELIGIBLE',
    sektorUtama: 'Simpan Pinjam & UMKM Kuliner',
    governance: {
      transparansiLaporan: 88,
      rapatAnggotaRutin: 92,
      auditEksternal: 80,
      tingkatKreditMacet: 4.1, // persen, makin rendah makin baik
      partisipasiAnggota: 76,
    },
    catatan:
      'Laporan keuangan diaudit eksternal 2 tahun berturut-turut, RAT rutin dilaksanakan setiap tahun.',
  },
  {
    id: 'kop-02',
    nama: 'Koperasi Sejahtera Mandiri',
    lokasi: 'Bantul, DI Yogyakarta',
    tahunBerdiri: 2015,
    jumlahAnggota: 132,
    status: 'UNDER REVIEW',
    sektorUtama: 'Simpan Pinjam & Kerajinan',
    governance: {
      transparansiLaporan: 65,
      rapatAnggotaRutin: 70,
      auditEksternal: 40,
      tingkatKreditMacet: 7.8,
      partisipasiAnggota: 58,
    },
    catatan:
      'Belum memiliki audit eksternal independen; RAT terlaksana namun dokumentasi minim.',
  },
  {
    id: 'kop-03',
    nama: 'Koperasi Tani Makmur',
    lokasi: 'Kulon Progo, DI Yogyakarta',
    tahunBerdiri: 2009,
    jumlahAnggota: 98,
    status: 'FAIL',
    sektorUtama: 'Simpan Pinjam Pertanian',
    governance: {
      transparansiLaporan: 32,
      rapatAnggotaRutin: 41,
      auditEksternal: 0,
      tingkatKreditMacet: 18.6,
      partisipasiAnggota: 29,
    },
    catatan:
      'Tidak ada audit eksternal, tingkat kredit macet jauh di atas ambang batas, RAT tidak terlaksana 2 tahun terakhir. Ditolak pada tahap governance screening.',
  },
  {
    id: 'kop-04',
    nama: 'Koperasi Karya Utama',
    lokasi: 'Gunungkidul, DI Yogyakarta',
    tahunBerdiri: 2018,
    jumlahAnggota: 71,
    status: 'UNDER REVIEW',
    sektorUtama: 'Simpan Pinjam & Peternakan',
    governance: {
      transparansiLaporan: 70,
      rapatAnggotaRutin: 68,
      auditEksternal: 55,
      tingkatKreditMacet: 6.2,
      partisipasiAnggota: 61,
    },
    catatan: 'Koperasi relatif baru, rekam jejak governance masih dibangun.',
  },
]

// -----------------------------------------------------------------------------
// ANGGOTA (Members) — terhubung ke koperasi via koperasiId
// -----------------------------------------------------------------------------
export const anggotaList = [
  {
    id: 'agt-001',
    koperasiId: 'kop-01',
    nama: 'Ahmad Pratama',
    usaha: 'Warung Mie Ayam "Bahagia"',
    lamaKeanggotaan: 6, // tahun
    riwayatSimpanPinjam: 84, // skor 0-100, simulasi
    partisipasiRapat: 90, // persen kehadiran RAT, simulasi
    stabilitasUsaha: 78,
    rekamJejakKomunitas: 82,
    pinjamanSebelumnya: [
      { tahun: 2022, jumlah: 5000000, status: 'LUNAS' },
      { tahun: 2023, jumlah: 8000000, status: 'LUNAS' },
      { tahun: 2024, jumlah: 12000000, status: 'BERJALAN LANCAR' },
    ],
  },
  {
    id: 'agt-002',
    koperasiId: 'kop-01',
    nama: 'Siti Rahayu',
    usaha: 'Konveksi Rumahan "Rahayu Jaya"',
    lamaKeanggotaan: 4,
    riwayatSimpanPinjam: 71,
    partisipasiRapat: 75,
    stabilitasUsaha: 69,
    rekamJejakKomunitas: 73,
    pinjamanSebelumnya: [
      { tahun: 2023, jumlah: 6000000, status: 'LUNAS' },
      { tahun: 2024, jumlah: 9000000, status: 'BERJALAN LANCAR' },
    ],
  },
  {
    id: 'agt-003',
    koperasiId: 'kop-01',
    nama: 'Budi Santoso',
    usaha: 'Bengkel Motor "Santoso Motor"',
    lamaKeanggotaan: 2,
    riwayatSimpanPinjam: 58,
    partisipasiRapat: 62,
    stabilitasUsaha: 55,
    rekamJejakKomunitas: 60,
    pinjamanSebelumnya: [{ tahun: 2024, jumlah: 4000000, status: 'BERJALAN LANCAR' }],
  },
  {
    id: 'agt-004',
    koperasiId: 'kop-02',
    nama: 'Wulan Sari',
    usaha: 'Kerajinan Batik "Sari Indah"',
    lamaKeanggotaan: 3,
    riwayatSimpanPinjam: 63,
    partisipasiRapat: 55,
    stabilitasUsaha: 60,
    rekamJejakKomunitas: 58,
    pinjamanSebelumnya: [{ tahun: 2023, jumlah: 5000000, status: 'BERJALAN LANCAR' }],
  },
]

// -----------------------------------------------------------------------------
// CDCS — Cooperative Data Credit Score
// PROPOSED BASELINE — VALIDATION REQUIRED
// Bobot komponen bersifat simulasi awal untuk didemokan, mengikuti struktur
// pada esai HESFEST 2026, belum divalidasi secara empiris.
// -----------------------------------------------------------------------------
export const cdcsWeights = {
  riwayatSimpanPinjam: 0.35,
  partisipasiRapat: 0.2,
  stabilitasUsaha: 0.25,
  rekamJejakKomunitas: 0.2,
}

export const cdcsComponentLabels = {
  riwayatSimpanPinjam: 'Riwayat Simpan Pinjam',
  partisipasiRapat: 'Partisipasi Kelembagaan (RAT)',
  stabilitasUsaha: 'Stabilitas Usaha',
  rekamJejakKomunitas: 'Rekam Jejak Komunitas',
}

export function computeCDCS(components) {
  const score =
    components.riwayatSimpanPinjam * cdcsWeights.riwayatSimpanPinjam +
    components.partisipasiRapat * cdcsWeights.partisipasiRapat +
    components.stabilitasUsaha * cdcsWeights.stabilitasUsaha +
    components.rekamJejakKomunitas * cdcsWeights.rekamJejakKomunitas
  return Math.round(score * 10) / 10
}

// -----------------------------------------------------------------------------
// CREDIT ASSESSMENT — gabungan skor fintech (tradisional) + CDCS
// Keputusan akhir tetap independen di tangan fintech (bukan otomatis dari CDCS)
// -----------------------------------------------------------------------------
export const fintechScoreDemo = {
  'agt-001': { skorTradisional: 68, sumber: 'Simulasi biro kredit + data transaksi digital' },
  'agt-002': { skorTradisional: 55, sumber: 'Simulasi biro kredit + data transaksi digital' },
  'agt-003': { skorTradisional: 42, sumber: 'Simulasi biro kredit + data transaksi digital (tipis/thin-file)' },
  'agt-004': { skorTradisional: 48, sumber: 'Simulasi biro kredit + data transaksi digital (tipis/thin-file)' },
}

export function creditDecision(skorTradisional, cdcsScore) {
  const combined = Math.round((skorTradisional * 0.5 + cdcsScore * 0.5) * 10) / 10
  let keputusan
  if (combined >= 70) keputusan = 'DISETUJUI'
  else if (combined >= 50) keputusan = 'DISETUJUI DENGAN SYARAT'
  else keputusan = 'DITOLAK — PERLU PENDAMPINGAN'
  return { combined, keputusan }
}

// -----------------------------------------------------------------------------
// RISK SHARING — three-layer, PROPOSED PILOT BASELINE
// -----------------------------------------------------------------------------
export const riskSharingLayers = [
  {
    id: 'layer-1',
    nama: 'Koperasi (Lapisan Pertama / First-Loss Buffer)',
    persentase: 12.5,
    deskripsi:
      'Koperasi menanggung porsi risiko pertama melalui dana cadangan risiko internal, mencerminkan perannya dalam seleksi dan pembinaan anggota.',
    warna: '#C08A28',
  },
  {
    id: 'layer-2',
    nama: 'Fasilitas Penjaminan Bersama / Risk-Sharing Pool',
    persentase: 65,
    deskripsi:
      'Porsi terbesar risiko ditanggung bersama melalui skema penjaminan yang didukung ekosistem koperasi-fintech, sesuai kerangka sandbox POJK.',
    warna: '#16324B',
  },
  {
    id: 'layer-3',
    nama: 'Fintech Lender (Lapisan Ketiga)',
    persentase: 22.5,
    deskripsi:
      'Fintech menanggung sisa risiko sesuai kapasitas modal dan mandat penyaluran pembiayaannya.',
    warna: '#B04C36',
  },
]

// -----------------------------------------------------------------------------
// GOVERNANCE — pipeline screening, risk flags, data consent flow
// -----------------------------------------------------------------------------
export const screeningPipeline = [
  {
    id: 'step-1',
    nama: 'Verifikasi Legalitas Koperasi',
    deskripsi: 'Pengecekan badan hukum, izin usaha simpan pinjam, dan status aktif di kemenkopUKM.',
  },
  {
    id: 'step-2',
    nama: 'Audit Governance & Laporan Keuangan',
    deskripsi: 'Evaluasi transparansi laporan, keberadaan audit eksternal, dan keteraturan RAT.',
  },
  {
    id: 'step-3',
    nama: 'Analisis Rasio Kredit Macet (NPL)',
    deskripsi: 'Koperasi dengan NPL di atas ambang batas ditandai sebagai risiko tinggi.',
  },
  {
    id: 'step-4',
    nama: 'Skoring CDCS Tingkat Anggota',
    deskripsi: 'Perhitungan skor CDCS untuk anggota yang diajukan dalam kelompok pembiayaan.',
  },
  {
    id: 'step-5',
    nama: 'Keputusan Kelayakan Pilot',
    deskripsi: 'Keputusan akhir: PILOT ELIGIBLE, UNDER REVIEW, atau FAIL — bukan selalu meloloskan.',
  },
]

export const riskFlags = [
  { id: 'flag-1', level: 'TINGGI', label: 'NPL di atas 15%', contoh: 'Koperasi Tani Makmur' },
  { id: 'flag-2', level: 'SEDANG', label: 'Audit eksternal belum ada', contoh: 'Koperasi Sejahtera Mandiri' },
  { id: 'flag-3', level: 'RENDAH', label: 'RAT terlaksana namun dokumentasi minim', contoh: 'Koperasi Karya Utama' },
]

export const dataConsentSteps = [
  { id: 'consent-1', nama: 'Persetujuan Anggota', deskripsi: 'Anggota koperasi memberikan persetujuan eksplisit sebelum data simpan-pinjamnya dibagikan ke fintech mitra.' },
  { id: 'consent-2', nama: 'Anonimisasi & Agregasi Awal', deskripsi: 'Data individu dianonimkan sebagian sebelum diproses ke mesin skoring CDCS.' },
  { id: 'consent-3', nama: 'Akses Terbatas Fintech', deskripsi: 'Fintech menerima skor hasil olahan (CDCS), bukan data transaksi mentah anggota.' },
  { id: 'consent-4', nama: 'Hak Tarik Kembali', deskripsi: 'Anggota dapat menarik persetujuan penggunaan data kapan saja sesuai POJK 19/2025.' },
]

// -----------------------------------------------------------------------------
// PILOT & ANALYTICS — WITH vs WITHOUT CDCS (SIMULATED)
// -----------------------------------------------------------------------------
export const pilotMonthly = [
  { bulan: 'Bulan 1', tanpaCDCS: 41, denganCDCS: 41 },
  { bulan: 'Bulan 2', tanpaCDCS: 43, denganCDCS: 47 },
  { bulan: 'Bulan 3', tanpaCDCS: 40, denganCDCS: 52 },
  { bulan: 'Bulan 4', tanpaCDCS: 44, denganCDCS: 58 },
  { bulan: 'Bulan 5', tanpaCDCS: 42, denganCDCS: 63 },
  { bulan: 'Bulan 6', tanpaCDCS: 45, denganCDCS: 67 },
]

export const pilotSummary = {
  tanpaCDCS: {
    tingkatPersetujuan: 42.5,
    tingkatGagalBayar: 11.2,
    rataRataPencairan: '5.8 hari',
  },
  denganCDCS: {
    tingkatPersetujuan: 61.3,
    tingkatGagalBayar: 6.4,
    rataRataPencairan: '3.1 hari',
  },
}

export const feedbackLoop = {
  kondisiScale: {
    syarat: 'Jika CDCS terbukti prediktif terhadap tingkat gagal bayar secara konsisten selama periode pilot',
    tindakan: 'SCALE — perluas ke lebih banyak koperasi & wilayah pilot',
  },
  kondisiRecalibrate: {
    syarat: 'Jika korelasi CDCS terhadap outcome pembayaran lemah atau tidak signifikan',
    tindakan: 'RECALIBRATE — tinjau ulang bobot komponen dan struktur skor sebelum pilot lanjutan',
  },
  catatan:
    'Feedback loop ini sengaja tidak selalu mengarah ke skala penuh — RECALIBRATE adalah hasil yang sah dan diharapkan jika data pilot menunjukkan performa lemah.',
}

// -----------------------------------------------------------------------------
// REGULATORY REFERENCES (untuk halaman Home / Verify)
// -----------------------------------------------------------------------------
export const regulatoryRefs = [
  { id: 'pojk-29', label: 'POJK 29/2024', deskripsi: 'Kerangka regulasi terkait Layanan Pendanaan Bersama (fintech lending) yang menjadi rujukan mekanisme risk-sharing.' },
  { id: 'pojk-19', label: 'POJK 19/2025', deskripsi: 'Kerangka regulasi terkait perlindungan data konsumen sektor jasa keuangan, menjadi dasar alur data consent KOPFIN.' },
]
