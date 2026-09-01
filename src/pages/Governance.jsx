import React from 'react'
import { DemoBadge, FlowDiagram, SectionHeading, StatusBadge } from '../components/Common.jsx'
import { dataConsentSteps, koperasiList, riskFlags, screeningPipeline } from '../data/demoData.js'

const FLAG_STYLE = {
  TINGGI: 'badge-fail',
  SEDANG: 'badge-review',
  RENDAH: 'badge-proposed',
}

export default function Governance() {
  const failedKoperasi = koperasiList.find((k) => k.status === 'FAIL')

  return (
    <div className="page-shell space-y-14">
      <div>
        <SectionHeading
          eyebrow="Governance"
          title="Pipeline screening & alur persetujuan data"
          description="Screening dirancang agar benar-benar bisa menolak koperasi yang tidak memenuhi ambang batas governance — bukan formalitas yang selalu meloloskan."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
          <div className="kf-card p-6">
            <FlowDiagram steps={screeningPipeline} />
          </div>

          <div className="kf-card p-6 bg-clay-500/5 border-clay-500/20">
            <p className="kf-label mb-2 text-clay-600">Contoh penolakan nyata dalam data demo</p>
            {failedKoperasi && (
              <>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-navy-800">{failedKoperasi.nama}</p>
                  <StatusBadge status={failedKoperasi.status} />
                </div>
                <p className="text-sm text-navy-500 leading-relaxed">{failedKoperasi.catatan}</p>
              </>
            )}
            <div className="mt-4"><DemoBadge /></div>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading eyebrow="Risk Flags" title="Penanda risiko aktif" />
        <div className="grid gap-4 sm:grid-cols-3">
          {riskFlags.map((flag) => (
            <div key={flag.id} className="kf-card p-5">
              <span className={FLAG_STYLE[flag.level]}>{flag.level}</span>
              <p className="mt-3 font-medium text-navy-800 text-sm">{flag.label}</p>
              <p className="mt-1 text-xs text-navy-400">Contoh: {flag.contoh}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionHeading
          eyebrow="Perlindungan Data"
          title="Alur persetujuan data anggota"
          description="Mengikuti kerangka POJK 19/2025 — anggota mengendalikan datanya sendiri di setiap tahap."
        />
        <div className="kf-card p-6">
          <FlowDiagram steps={dataConsentSteps} />
        </div>
      </div>
    </div>
  )
}
