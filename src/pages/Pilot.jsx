import React, { useState } from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { DemoBadge, SectionHeading, StatTile } from '../components/Common.jsx'
import { feedbackLoop, pilotMonthly, pilotSummary } from '../data/demoData.js'

export default function Pilot() {
  const [showBoth, setShowBoth] = useState(true)

  return (
    <div className="page-shell space-y-12">
      <div>
        <SectionHeading
          eyebrow="Dashboard Pilot"
          title="Dengan CDCS vs tanpa CDCS"
          description="Perbandingan simulasi performa penyaluran pembiayaan selama periode pilot 6 bulan."
        />
        <DemoBadge>DATA SIMULASI — HASIL PILOT SESUNGGUHNYA BELUM ADA</DemoBadge>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile
          label="Tingkat Persetujuan (dengan CDCS)"
          value={`${pilotSummary.denganCDCS.tingkatPersetujuan}%`}
          sub={`vs ${pilotSummary.tanpaCDCS.tingkatPersetujuan}% tanpa CDCS`}
          tone="moss"
        />
        <StatTile
          label="Tingkat Gagal Bayar (dengan CDCS)"
          value={`${pilotSummary.denganCDCS.tingkatGagalBayar}%`}
          sub={`vs ${pilotSummary.tanpaCDCS.tingkatGagalBayar}% tanpa CDCS`}
          tone="gold"
        />
        <StatTile
          label="Rata-rata Waktu Pencairan"
          value={pilotSummary.denganCDCS.rataRataPencairan}
          sub={`vs ${pilotSummary.tanpaCDCS.rataRataPencairan} tanpa CDCS`}
          tone="navy"
        />
      </div>

      <div className="kf-card p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="kf-label">Tingkat persetujuan pembiayaan per bulan (%)</p>
          <button
            onClick={() => setShowBoth((v) => !v)}
            className="kf-btn-secondary !py-1.5 !px-3 text-xs"
          >
            {showBoth ? 'Tampilkan hanya WITH CDCS' : 'Tampilkan keduanya'}
          </button>
        </div>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={pilotMonthly} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#EEF3F6" />
              <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: '#4E7994' }} />
              <YAxis tick={{ fontSize: 12, fill: '#4E7994' }} unit="%" />
              <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #D6E1E9', fontSize: 13 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              {showBoth && (
                <Line
                  type="monotone"
                  dataKey="tanpaCDCS"
                  name="Tanpa CDCS"
                  stroke="#82A2B9"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              )}
              <Line
                type="monotone"
                dataKey="denganCDCS"
                name="Dengan CDCS"
                stroke="#C08A28"
                strokeWidth={2.5}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Feedback loop */}
      <div>
        <SectionHeading
          eyebrow="Feedback Loop"
          title="SCALE atau RECALIBRATE — bukan selalu skala penuh"
          description="Hasil pilot menentukan langkah berikutnya. Kedua jalur ini sama-sama dianggap sebagai hasil yang sah."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="kf-card p-6 border-moss-400/30">
            <p className="badge-pass mb-3">JIKA PREDIKTIF → SCALE</p>
            <p className="text-sm text-navy-600 leading-relaxed">{feedbackLoop.kondisiScale.syarat}</p>
            <p className="mt-3 text-sm font-medium text-navy-800">{feedbackLoop.kondisiScale.tindakan}</p>
          </div>
          <div className="kf-card p-6 border-clay-500/30">
            <p className="badge-fail mb-3">JIKA TIDAK → RECALIBRATE</p>
            <p className="text-sm text-navy-600 leading-relaxed">{feedbackLoop.kondisiRecalibrate.syarat}</p>
            <p className="mt-3 text-sm font-medium text-navy-800">{feedbackLoop.kondisiRecalibrate.tindakan}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-navy-400 max-w-prose leading-relaxed">{feedbackLoop.catatan}</p>
      </div>
    </div>
  )
}
