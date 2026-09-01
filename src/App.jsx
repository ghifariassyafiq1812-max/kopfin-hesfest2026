import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Cooperative from './pages/Cooperative.jsx'
import CDCS from './pages/CDCS.jsx'
import CreditAssessment from './pages/CreditAssessment.jsx'
import RiskSharing from './pages/RiskSharing.jsx'
import Governance from './pages/Governance.jsx'
import Pilot from './pages/Pilot.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/koperasi" element={<Cooperative />} />
        <Route path="/cdcs" element={<CDCS />} />
        <Route path="/kredit" element={<CreditAssessment />} />
        <Route path="/risiko" element={<RiskSharing />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/pilot" element={<Pilot />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
