import React, { useState } from 'react'
import { DemoBadge, ScoreGauge, SectionHeading, StatusBadge } from '../components/Common.jsx'
import {
  anggotaList,
  computeCDCS,
  creditDecision,
  fintechScoreDemo,
} from '../data/demoData.js'

export default function CreditAssessment() {
  const [selectedId, setSelectedId] = useState(anggotaList[0].id)
  const [ran, setRan] = useState(false)

  const anggota = anggotaList.find((a) => a.id === selectedId)
  const fintech = fintechScoreDemo[selectedId]
  const cdcs = computeCDCS(anggota)
  const { combined, keputusan } = creditDecision(fintech.skorTradisional, cdcs)

  function runReview() {
    setRan(false)
    // simulate a brief "processing" moment for the demo
    setTimeout(() => setRan(true), 350)
  }

  return (
    <div className="page-shell">
      <SectionHeading
        eyebrow="Penilaian Kredit"
        title="Skor fintech + CDCS, keputusan tetap independen"
        description="CDCS melengkapi, bukan menggantikan, skoring fintech. Fintech tetap mengambil keputusan akhir secara independen berdasarkan kombinasi keduanya."
      />
      <div className="mb-6"><DemoBadge>SIMULASI KEPUTUSAN KREDIT</DemoBadge></div>

      <div className="mb-6 flex flex-wrap gap-2">
        {anggotaList.map((a) => (
          <button
            key={a.id}
            onClick={() => {
              setSelectedId(a.id)
              setRan(false)
            }}
            className={selectedId === a.id ? 'nav-link-active' : 'nav-link'}
          >
            {a.nama}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Role separation */}
        <div className="kf-card p-6">
          <p className="kf-label mb-4">Pemisahan peran</p>
          <div className="space-y-4">
            <RoleRow
              actor="Koperasi"
              role="Menyediakan data kelembagaan anggota (riwayat, partisipasi, stabilitas usaha)."
            />
            <RoleRow
              actor="Mesin CDCS"
              role="Mengolah data koperasi menjadi skor terstandardisasi (bukan keputusan)."
            />
            <RoleRow
              actor="Fintech"
              role="Menggabungkan CDCS dengan skor tradisionalnya sendiri dan mengambil keputusan akhir secara independen."
            />
          </div>

          <div className="kf-divider my-5" />

          <p className="kf-label mb-2">Sumber skor tradisional fintech</p>
          <p className="text-sm text-navy-500">{fintech.sumber}</p>
        </div>

        {/* Review runner */}
        <div className="kf-card p-6 flex flex-col">
          <p className="kf-label mb-4">Input skor — {anggota.nama}</p>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <MiniScore label="Skor Tradisional Fintech" value={fintech.skorTradisional} />
            <MiniScore label="Skor CDCS" value={cdcs} />
          </div>

          <button onClick={runReview} className="kf-btn-primary self-start">
            Run Credit Review
          </button>

          {ran && (
            <div className="mt-6 kf-card bg-navy-50 border-navy-100 p-5 flex flex-col items-center text-center">
              <ScoreGauge score={combined} accent="#C08A28" size={140} label="Skor Gabungan (50/50)" />
              <div className="mt-4">
                <StatusBadge status={keputusan} />
              </div>
              <p className="mt-3 text-xs text-navy-400 max-w-prose leading-relaxed">
                Keputusan ini disimulasikan dari kombinasi skor tradisional dan CDCS dengan bobot
                50/50 sebagai baseline demo. Dalam praktiknya, fintech dapat menetapkan bobot dan
                kebijakan risiko sendiri.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function RoleRow({ actor, role }) {
  return (
    <div className="flex gap-3">
      <div className="h-2 w-2 mt-1.5 rounded-full bg-gold-400 shrink-0" />
      <div>
        <p className="text-sm font-medium text-navy-800">{actor}</p>
        <p className="text-sm text-navy-500">{role}</p>
      </div>
    </div>
  )
}

function MiniScore({ label, value }) {
  return (
    <div className="rounded-md border border-navy-100 p-3">
      <p className="text-xs text-navy-400">{label}</p>
      <p className="font-display text-2xl text-navy-800 mt-0.5">{value}</p>
    </div>
  )
}
