import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ProposedBadge, SectionHeading } from '../components/Common.jsx'
import { riskSharingLayers } from '../data/demoData.js'

export default function RiskSharing() {
  return (
    <div className="page-shell">
      <SectionHeading
        eyebrow="Struktur Risiko"
        title="Risk sharing tiga lapisan"
        description="Risiko gagal bayar dibagi ke tiga pihak dengan porsi berbeda, agar tidak ada satu pihak yang menanggung seluruh eksposur."
      />
      <div className="mb-8"><ProposedBadge>PROPOSED PILOT BASELINE</ProposedBadge></div>

      <div className="grid gap-8 lg:grid-cols-[380px,1fr] items-start">
        <div className="kf-card p-6">
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={riskSharingLayers}
                  dataKey="persentase"
                  nameKey="nama"
                  cx="50%"
                  cy="50%"
                  innerRadius={64}
                  outerRadius={110}
                  paddingAngle={2}
                >
                  {riskSharingLayers.map((layer) => (
                    <Cell key={layer.id} fill={layer.warna} stroke="#F6F4EF" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value}%`, name]}
                  contentStyle={{ borderRadius: 8, border: '1px solid #D6E1E9', fontSize: 13 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            {riskSharingLayers.map((layer) => (
              <div key={layer.id} className="flex items-center gap-2 text-sm">
                <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: layer.warna }} />
                <span className="text-navy-600">{layer.nama}</span>
                <span className="ml-auto font-mono text-navy-500">{layer.persentase}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {riskSharingLayers.map((layer, idx) => (
            <div key={layer.id} className="kf-card p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm text-white"
                    style={{ backgroundColor: layer.warna }}
                  >
                    {idx + 1}
                  </span>
                  <p className="font-medium text-navy-800">{layer.nama}</p>
                </div>
                <span className="font-display text-xl text-navy-800">{layer.persentase}%</span>
              </div>
              <p className="mt-3 text-sm text-navy-500 leading-relaxed">{layer.deskripsi}</p>
            </div>
          ))}

          <div className="kf-card p-5 bg-navy-50 border-navy-100">
            <p className="text-sm text-navy-500 leading-relaxed">
              Porsi ini adalah baseline yang diajukan untuk periode pilot awal. Struktur ini dapat
              disesuaikan seiring data outcome pembiayaran nyata terkumpul — bukan angka final
              yang tetap selamanya.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
