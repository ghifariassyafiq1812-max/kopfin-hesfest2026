import React, { useState } from 'react'
import { DemoBadge, SectionHeading, StatusBadge } from '../components/Common.jsx'
import { koperasiList, anggotaList } from '../data/demoData.js'

const GOV_LABELS = {
  transparansiLaporan: 'Transparansi Laporan',
  rapatAnggotaRutin: 'RAT Rutin',
  auditEksternal: 'Audit Eksternal',
  partisipasiAnggota: 'Partisipasi Anggota',
}

export default function Cooperative() {
  const [selectedKoperasi, setSelectedKoperasi] = useState(koperasiList[0].id)
  const [selectedAnggota, setSelectedAnggota] = useState(null)

  const koperasi = koperasiList.find((k) => k.id === selectedKoperasi)
  const members = anggotaList.filter((a) => a.koperasiId === selectedKoperasi)
  const anggota = anggotaList.find((a) => a.id === selectedAnggota)

  return (
    <div className="page-shell">
      <SectionHeading
        eyebrow="Direktori Koperasi"
        title="Koperasi mitra & indikator governance"
        description="Pilih koperasi untuk melihat indikator governance dan daftar anggota yang diajukan dalam kelompok pembiayaan."
      />
      <div className="mb-6"><DemoBadge /></div>

      <div className="grid gap-8 lg:grid-cols-[320px,1fr]">
        {/* Koperasi list */}
        <div className="space-y-3">
          {koperasiList.map((k) => (
            <button
              key={k.id}
              onClick={() => {
                setSelectedKoperasi(k.id)
                setSelectedAnggota(null)
              }}
              className={`w-full text-left kf-card p-4 transition-colors ${
                selectedKoperasi === k.id ? 'border-navy-500 ring-1 ring-navy-500' : 'hover:border-navy-300'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium text-navy-800">{k.nama}</p>
                <StatusBadge status={k.status} />
              </div>
              <p className="mt-1 text-xs text-navy-400">{k.lokasi} · berdiri {k.tahunBerdiri}</p>
              <p className="mt-1 text-xs text-navy-400">{k.jumlahAnggota} anggota terdaftar</p>
            </button>
          ))}
        </div>

        {/* Koperasi detail */}
        {koperasi && (
          <div className="space-y-6">
            <div className="kf-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-2xl">{koperasi.nama}</h2>
                  <p className="mt-1 text-sm text-navy-400">{koperasi.sektorUtama} · {koperasi.lokasi}</p>
                </div>
                <StatusBadge status={koperasi.status} />
              </div>
              <p className="mt-4 text-sm text-navy-600 leading-relaxed">{koperasi.catatan}</p>

              <div className="kf-divider my-5" />

              <p className="kf-label mb-3">Governance indicators (skor 0–100, kecuali NPL)</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(GOV_LABELS).map(([key, label]) => (
                  <GovBar key={key} label={label} value={koperasi.governance[key]} />
                ))}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-navy-600">Tingkat Kredit Macet (NPL)</span>
                    <span className={`font-mono ${koperasi.governance.tingkatKreditMacet > 15 ? 'text-clay-500' : koperasi.governance.tingkatKreditMacet > 7 ? 'text-gold-500' : 'text-moss-500'}`}>
                      {koperasi.governance.tingkatKreditMacet}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-navy-50 overflow-hidden">
                    <div
                      className={`h-full ${koperasi.governance.tingkatKreditMacet > 15 ? 'bg-clay-500' : koperasi.governance.tingkatKreditMacet > 7 ? 'bg-gold-400' : 'bg-moss-500'}`}
                      style={{ width: `${Math.min(100, koperasi.governance.tingkatKreditMacet * 5)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Members */}
            <div>
              <p className="kf-label mb-3">Anggota diajukan untuk kelompok pembiayaan ({members.length})</p>
              {members.length === 0 ? (
                <p className="text-sm text-navy-400">Belum ada anggota demo untuk koperasi ini.</p>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  {members.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedAnggota(m.id === selectedAnggota ? null : m.id)}
                      className={`text-left kf-card p-4 transition-colors ${
                        selectedAnggota === m.id ? 'border-gold-400 ring-1 ring-gold-400' : 'hover:border-navy-300'
                      }`}
                    >
                      <p className="font-medium text-navy-800">{m.nama}</p>
                      <p className="text-xs text-navy-400">{m.usaha}</p>
                      <p className="mt-1 text-xs text-navy-400">{m.lamaKeanggotaan} tahun keanggotaan</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {anggota && (
              <div className="kf-card p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl">{anggota.nama}</h3>
                    <p className="text-sm text-navy-400">{anggota.usaha}</p>
                  </div>
                  <DemoBadge>DATA ANGGOTA — DEMO</DemoBadge>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-4 text-sm">
                  <MiniStat label="Lama Keanggotaan" value={`${anggota.lamaKeanggotaan} thn`} />
                  <MiniStat label="Riwayat Simpan Pinjam" value={anggota.riwayatSimpanPinjam} />
                  <MiniStat label="Partisipasi RAT" value={`${anggota.partisipasiRapat}%`} />
                  <MiniStat label="Stabilitas Usaha" value={anggota.stabilitasUsaha} />
                </div>
                <div className="kf-divider my-4" />
                <p className="kf-label mb-2">Riwayat pinjaman</p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-navy-400">
                      <th className="py-1.5 font-normal">Tahun</th>
                      <th className="py-1.5 font-normal">Jumlah</th>
                      <th className="py-1.5 font-normal">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {anggota.pinjamanSebelumnya.map((p, i) => (
                      <tr key={i} className="border-t border-navy-100">
                        <td className="py-1.5">{p.tahun}</td>
                        <td className="py-1.5 font-mono">Rp {p.jumlah.toLocaleString('id-ID')}</td>
                        <td className="py-1.5">{p.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function GovBar({ label, value }) {
  const color = value >= 70 ? 'bg-moss-500' : value >= 45 ? 'bg-gold-400' : 'bg-clay-500'
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-navy-600">{label}</span>
        <span className="font-mono text-navy-500">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-navy-50 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

function MiniStat({ label, value }) {
  return (
    <div>
      <p className="text-navy-400 text-xs">{label}</p>
      <p className="font-mono text-navy-800 mt-0.5">{value}</p>
    </div>
  )
}
