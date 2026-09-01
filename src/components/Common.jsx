import React from 'react'

// -----------------------------------------------------------------------------
// DemoBadge — label wajib pada setiap angka/skor simulasi
// -----------------------------------------------------------------------------
export function DemoBadge({ children = 'DEMO DATA' }) {
  return (
    <span className="badge-demo">
      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
      {children}
    </span>
  )
}

export function ProposedBadge({ children = 'PROPOSED — VALIDATION REQUIRED' }) {
  return (
    <span className="badge-proposed">
      <span className="h-1.5 w-1.5 rounded-full bg-navy-500" />
      {children}
    </span>
  )
}

// -----------------------------------------------------------------------------
// StatusBadge — untuk status koperasi (PILOT ELIGIBLE / UNDER REVIEW / FAIL)
// dan status keputusan kredit
// -----------------------------------------------------------------------------
export function StatusBadge({ status }) {
  const map = {
    'PILOT ELIGIBLE': 'badge-pass',
    DISETUJUI: 'badge-pass',
    'UNDER REVIEW': 'badge-review',
    'DISETUJUI DENGAN SYARAT': 'badge-review',
    FAIL: 'badge-fail',
    'DITOLAK — PERLU PENDAMPINGAN': 'badge-fail',
  }
  const cls = map[status] || 'badge-proposed'
  return <span className={cls}>{status}</span>
}

// -----------------------------------------------------------------------------
// ScoreGauge — gauge lingkar sederhana untuk menampilkan skor 0-100
// -----------------------------------------------------------------------------
export function ScoreGauge({ score, label, size = 128, accent = '#16324B' }) {
  const radius = (size - 14) / 2
  const circumference = 2 * Math.PI * radius
  const clamped = Math.max(0, Math.min(100, score))
  const offset = circumference * (1 - clamped / 100)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E9EEF2"
            strokeWidth={10}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={accent}
            strokeWidth={10}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 400ms ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-2xl text-navy-800">{clamped.toFixed(1)}</span>
          <span className="text-[11px] text-navy-400">/ 100</span>
        </div>
      </div>
      {label && <span className="kf-label text-center">{label}</span>}
    </div>
  )
}

// -----------------------------------------------------------------------------
// FlowDiagram — diagram alur horizontal sederhana untuk pipeline/consent flow
// -----------------------------------------------------------------------------
export function FlowDiagram({ steps }) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, idx) => (
        <div key={step.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-700 font-mono text-xs text-white">
              {idx + 1}
            </div>
            {idx < steps.length - 1 && <div className="w-px flex-1 bg-navy-200" style={{ minHeight: 28 }} />}
          </div>
          <div className="pb-7">
            <p className="font-medium text-navy-800">{step.nama}</p>
            <p className="mt-0.5 text-sm text-navy-500">{step.deskripsi}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// -----------------------------------------------------------------------------
// SectionHeading — heading konsisten dengan eyebrow opsional
// -----------------------------------------------------------------------------
export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      {eyebrow && <p className="kf-label mb-1.5">{eyebrow}</p>}
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 max-w-prose text-navy-500">{description}</p>}
    </div>
  )
}

export function StatTile({ label, value, sub, tone = 'navy' }) {
  const toneMap = {
    navy: 'text-navy-800',
    gold: 'text-gold-500',
    moss: 'text-moss-500',
    clay: 'text-clay-500',
  }
  return (
    <div className="kf-card p-5">
      <p className="kf-label">{label}</p>
      <p className={`mt-1.5 font-display text-3xl ${toneMap[tone]}`}>{value}</p>
      {sub && <p className="mt-1 text-sm text-navy-400">{sub}</p>}
    </div>
  )
}
