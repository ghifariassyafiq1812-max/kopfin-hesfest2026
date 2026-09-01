import React, { useMemo, useState } from 'react'
import { ProposedBadge, ScoreGauge, SectionHeading } from '../components/Common.jsx'
import {
  anggotaList,
  cdcsComponentLabels,
  cdcsWeights,
  computeCDCS,
} from '../data/demoData.js'

export default function CDCS() {
  const [selectedId, setSelectedId] = useState(anggotaList[0].id)
  const base = anggotaList.find((a) => a.id === selectedId)

  const [components, setComponents] = useState({
    riwayatSimpanPinjam: base.riwayatSimpanPinjam,
    partisipasiRapat: base.partisipasiRapat,
    stabilitasUsaha: base.stabilitasUsaha,
    rekamJejakKomunitas: base.rekamJejakKomunitas,
  })

  function selectAnggota(id) {
    const a = anggotaList.find((x) => x.id === id)
    setSelectedId(id)
    setComponents({
      riwayatSimpanPinjam: a.riwayatSimpanPinjam,
      partisipasiRapat: a.partisipasiRapat,
      stabilitasUsaha: a.stabilitasUsaha,
      rekamJejakKomunitas: a.rekamJejakKomunitas,
    })
  }

  const score = useMemo(() => computeCDCS(components), [components])

  return (
    <div className="page-shell">
      <SectionHeading
        eyebrow="Mesin Skor"
        title="CDCS — Cooperative Data Credit Score"
        description="Geser komponen untuk melihat sensitivitas skor. Formula ditampilkan secara transparan, tidak disembunyikan sebagai black box."
      />
      <div className="mb-6"><ProposedBadge>PROPOSED BASELINE — VALIDATION REQUIRED</ProposedBadge></div>

      <div className="mb-6 flex flex-wrap gap-2">
        {anggotaList.map((a) => (
          <button
            key={a.id}
            onClick={() => selectAnggota(a.id)}
            className={selectedId === a.id ? 'nav-link-active' : 'nav-link'}
          >
            {a.nama}
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
        {/* Sliders */}
        <div className="kf-card p-6 space-y-6">
          {Object.entries(cdcsComponentLabels).map(([key, label]) => (
            <div key={key}>
              <div className="flex justify-between items-baseline mb-1.5">
                <label htmlFor={key} className="text-sm font-medium text-navy-700">{label}</label>
                <span className="font-mono text-sm text-navy-500">
                  {components[key]} <span className="text-navy-300">· bobot {Math.round(cdcsWeights[key] * 100)}%</span>
                </span>
              </div>
              <input
                id={key}
                type="range"
                min={0}
                max={100}
                value={components[key]}
                onChange={(e) =>
                  setComponents((c) => ({ ...c, [key]: Number(e.target.value) }))
                }
                className="w-full accent-navy-700"
              />
            </div>
          ))}

          <div className="kf-divider" />

          <div>
            <p className="kf-label mb-2">Formula transparan</p>
            <div className="kf-card bg-navy-50 border-navy-100 p-4 font-mono text-[13px] leading-relaxed text-navy-700">
              CDCS = ({cdcsWeights.riwayatSimpanPinjam} × Riwayat) + ({cdcsWeights.partisipasiRapat} × Partisipasi)<br />
              &nbsp;&nbsp;&nbsp;&nbsp;+ ({cdcsWeights.stabilitasUsaha} × Stabilitas) + ({cdcsWeights.rekamJejakKomunitas} × RekamJejak)
            </div>
            <p className="mt-2 text-xs text-navy-400">
              Bobot komponen adalah baseline awal untuk simulasi — belum divalidasi terhadap
              data outcome pembayaran nyata.
            </p>
          </div>
        </div>

        {/* Gauge result */}
        <div className="kf-card p-6 flex flex-col items-center text-center">
          <p className="kf-label mb-4">Skor CDCS Terhitung</p>
          <ScoreGauge score={score} accent="#16324B" size={160} />
          <p className="mt-4 text-sm text-navy-500">
            {score >= 70
              ? 'Skor tinggi — indikasi rekam jejak kelembagaan kuat (simulasi).'
              : score >= 50
              ? 'Skor menengah — perlu pertimbangan tambahan (simulasi).'
              : 'Skor rendah — indikasi risiko lebih tinggi (simulasi).'}
          </p>
          <div className="kf-divider w-full my-5" />
          <p className="text-xs text-navy-400 leading-relaxed">
            Skor ini adalah salah satu input ke Penilaian Kredit, bukan keputusan akhir.
            Keputusan kredit tetap berada di tangan fintech secara independen.
          </p>
        </div>
      </div>
    </div>
  )
}
