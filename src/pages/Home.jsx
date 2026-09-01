import React from 'react'
import { Link } from 'react-router-dom'
import { DemoBadge, ProposedBadge, SectionHeading } from '../components/Common.jsx'
import { regulatoryRefs } from '../data/demoData.js'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-navy-100 bg-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <ProposedBadge>PROPOSED MODEL — HESFEST 2026</ProposedBadge>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Koperasi tahu siapa yang bisa dipercaya. Fintech punya modal untuk menyalurkannya.
            </h1>
            <p className="mt-4 max-w-prose text-navy-500 text-[15px] leading-relaxed">
              KOPFIN menghubungkan data kelembagaan koperasi dengan penilaian kredit fintech
              melalui skor bernama CDCS — tanpa mengambil alih peran pembinaan koperasi, dan tanpa
              menjanjikan bahwa modelnya pasti berhasil.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/koperasi" className="kf-btn-primary">Mulai jelajahi demo</Link>
              <Link to="/cdcs" className="kf-btn-secondary">Lihat mesin skor CDCS</Link>
            </div>
          </div>

          <div className="kf-card p-6">
            <p className="kf-label mb-3">Ringkasan alur</p>
            <ol className="space-y-3 text-sm">
              <li className="flex gap-3"><span className="font-mono text-navy-300">01</span><span>Koperasi menyaring & membina anggota UMKM seperti biasa.</span></li>
              <li className="flex gap-3"><span className="font-mono text-navy-300">02</span><span>Data simpan-pinjam & partisipasi diolah menjadi skor CDCS.</span></li>
              <li className="flex gap-3"><span className="font-mono text-navy-300">03</span><span>Fintech menggabungkan CDCS dengan skor tradisionalnya sendiri.</span></li>
              <li className="flex gap-3"><span className="font-mono text-navy-300">04</span><span>Risiko pembiayaan dibagi tiga lapisan, bukan ditanggung sendiri.</span></li>
            </ol>
          </div>
        </div>
      </section>

      <div className="page-shell space-y-14">
        {/* What / Why / How grid */}
        <section>
          <SectionHeading
            eyebrow="Konsep inti"
            title="Apa, mengapa, dan bagaimana KOPFIN bekerja"
          />
          <div className="grid gap-5 sm:grid-cols-3">
            <InfoCard
              title="Apa itu KOPFIN?"
              body="Koperasi-Fintech Integration: kerangka kerja yang menjembatani data kelembagaan koperasi simpan pinjam dengan mesin penilaian kredit fintech, agar anggota UMKM yang selama ini 'tidak terlihat' oleh biro kredit tradisional tetap bisa dinilai secara adil."
            />
            <InfoCard
              title="Mengapa dibutuhkan?"
              body="Banyak anggota koperasi punya rekam jejak simpan-pinjam yang baik secara lokal, tetapi tidak tercatat di sistem skoring fintech konvensional (thin-file). KOPFIN mencoba menjembatani celah data ini tanpa menggantikan peran koperasi."
            />
            <InfoCard
              title="Bagaimana cara kerjanya?"
              body="Empat komponen data anggota diberi bobot menjadi skor CDCS, digabung dengan skor tradisional fintech, lalu keputusan kredit tetap diambil secara independen oleh fintech — CDCS adalah masukan, bukan keputusan otomatis."
            />
          </div>
        </section>

        {/* Who bears risk */}
        <section>
          <SectionHeading
            eyebrow="Siapa menanggung risiko"
            title="Risiko dibagi, bukan dipindahkan"
            description="Struktur risk-sharing tiga lapisan dirancang agar tidak ada satu pihak yang menanggung seluruh risiko gagal bayar sendirian."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <RiskWhoCard label="Koperasi" pct="12,5%" desc="Lapisan pertama, dari dana cadangan risiko internal." />
            <RiskWhoCard label="Fasilitas Penjaminan Bersama" pct="65%" desc="Porsi terbesar, ditanggung skema penjaminan ekosistem." />
            <RiskWhoCard label="Fintech Lender" pct="22,5%" desc="Lapisan ketiga, sesuai kapasitas modal fintech." />
          </div>
          <Link to="/risiko" className="mt-4 inline-block text-sm font-medium text-navy-700 hover:text-gold-500">
            Lihat visualisasi lengkap risk sharing
          </Link>
        </section>

        {/* How verified */}
        <section>
          <SectionHeading
            eyebrow="Bagaimana diverifikasi"
            title="Kerangka regulasi & jalur validasi"
            description="KOPFIN dirancang mengikuti kerangka sandbox dan perlindungan data yang berlaku, dan secara eksplisit memperlakukan CDCS sebagai hipotesis yang harus diuji lewat pilot — bukan fakta yang sudah terbukti."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {regulatoryRefs.map((ref) => (
              <div key={ref.id} className="kf-card p-5">
                <p className="font-mono text-xs text-gold-500">{ref.label}</p>
                <p className="mt-1.5 text-sm text-navy-600">{ref.deskripsi}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 kf-card p-5 flex items-start gap-3">
            <DemoBadge>EPISTEMIC HONESTY</DemoBadge>
            <p className="text-sm text-navy-500">
              Prototype ini secara sengaja menampilkan jalur kegagalan: koperasi bisa ditolak
              (lihat halaman Governance), dan hasil pilot bisa mengarah ke RECALIBRATE, bukan
              selalu SCALE (lihat halaman Pilot).
            </p>
          </div>
        </section>

        {/* Journey CTA */}
        <section className="kf-card p-6 sm:p-8 bg-navy-800 border-navy-800 text-navy-50">
          <p className="text-xs font-medium uppercase tracking-wide text-gold-300">Demo journey · ±60 detik</p>
          <h3 className="mt-2 text-2xl text-white">Ikuti alur dari koperasi hingga hasil pilot</h3>
          <p className="mt-2 max-w-prose text-navy-200 text-sm">
            Koperasi → CDCS → Penilaian Kredit → Risk Sharing → Governance → Pilot & Analytics.
          </p>
          <Link to="/koperasi" className="mt-5 inline-flex kf-btn-gold">Mulai dari Koperasi</Link>
        </section>
      </div>
    </div>
  )
}

function InfoCard({ title, body }) {
  return (
    <div className="kf-card p-5">
      <h3 className="text-lg text-navy-800">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-500">{body}</p>
    </div>
  )
}

function RiskWhoCard({ label, pct, desc }) {
  return (
    <div className="kf-card p-5">
      <p className="font-display text-3xl text-navy-800">{pct}</p>
      <p className="mt-1 text-sm font-medium text-navy-700">{label}</p>
      <p className="mt-1 text-sm text-navy-400">{desc}</p>
    </div>
  )
}
