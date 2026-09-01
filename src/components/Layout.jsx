import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Beranda' },
  { to: '/koperasi', label: 'Koperasi' },
  { to: '/cdcs', label: 'CDCS' },
  { to: '/kredit', label: 'Penilaian Kredit' },
  { to: '/risiko', label: 'Risk Sharing' },
  { to: '/governance', label: 'Governance' },
  { to: '/pilot', label: 'Pilot & Analytics' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Global disclaimer banner */}
      <div className="bg-navy-800 text-navy-50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-2 text-xs sm:text-[13px] flex items-start gap-2">
          <span aria-hidden="true" className="mt-0.5">&#9888;</span>
          <p>
            Prototype presentasi kompetisi HESFEST 2026 — <strong>bukan</strong> layanan finansial
            aktif. KOPFIN adalah proposed model, CDCS adalah hypothesis to be validated. Seluruh
            angka berlabel DEMO / SIMULATED.
          </p>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-navy-100 bg-paper/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-700 font-display text-sm text-white">
                K
              </span>
              <span>
                <span className="block font-display text-lg leading-none text-navy-800">KOPFIN</span>
                <span className="block text-[11px] leading-none text-navy-400 mt-0.5">prototype demo</span>
              </span>
            </NavLink>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              className="lg:hidden kf-btn-secondary !px-3 !py-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Buka menu navigasi"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col gap-1">
                <span className="block h-0.5 w-4 bg-navy-700" />
                <span className="block h-0.5 w-4 bg-navy-700" />
                <span className="block h-0.5 w-4 bg-navy-700" />
              </div>
            </button>
          </div>

          {menuOpen && (
            <nav className="lg:hidden flex flex-col gap-1 pb-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-navy-100 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 text-sm text-navy-400">
          <p className="max-w-prose">
            KOPFIN adalah prototype presentasi berbasis esai "KOPFIN: Sinergi Koperasi dan Fintech
            untuk Pembiayaan UMKM yang Inklusif" (HESFEST 2026). Seluruh mekanisme mengikuti esai
            tanpa perubahan substansi; data koperasi, anggota, dan hasil pilot adalah data demo
            yang dibuat khusus untuk visualisasi.
          </p>
          <p className="mt-3 text-navy-300">© 2026 KOPFIN Prototype. Untuk keperluan kompetisi, bukan produk komersial.</p>
        </div>
      </footer>
    </div>
  )
}
