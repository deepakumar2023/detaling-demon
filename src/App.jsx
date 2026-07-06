import { Routes, Route } from 'react-router-dom'
import FloatingActions from './components/FloatingActions'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'

import CeramicCoating from './pages/services/CeramicCoating'
import CeramicCoatingLabocosmetica from './pages/services/CeramicCoatingLabocosmetica'
import CeramicCoatingOptiCoat from './pages/services/CeramicCoatingOptiCoat'
import PPF from './pages/services/PPF'
import PPFLubrizol from './pages/services/PPFLubrizol'
import PPFColorTexture from './pages/services/PPFColorTexture'
import PPFAdvancedChemistry from './pages/services/PPFAdvancedChemistry'
import PPFProtectionCoating from './pages/services/PPFProtectionCoating'
import SunroofProtection from './pages/services/SunroofProtection'
import PrecutPPF from './pages/services/PrecutPPF'
import WindowFilms from './pages/services/WindowFilms'
import BikeDetailing from './pages/services/BikeDetailing'
import CeramicWash from './pages/services/CeramicWash'
import SteamWash from './pages/services/SteamWash'
import MaintenanceWash from './pages/services/MaintenanceWash'
import SprayOnPPF from './pages/services/SprayOnPPF'
import CarDentingPainting from './pages/services/CarDentingPainting'
import WindshieldProtection from './pages/services/WindshieldProtection'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        
        {/* Service Routes */}
        <Route path="/services/ceramic-coating" element={<CeramicCoating />} />
        <Route path="/services/ceramic-coating/labocosmetica" element={<CeramicCoatingLabocosmetica />} />
        <Route path="/services/ceramic-coating/opti-coat" element={<CeramicCoatingOptiCoat />} />
        <Route path="/services/paint-protection-film" element={<PPF />} />
        <Route path="/services/paint-protection-film/lubrizol" element={<PPFLubrizol />} />
        <Route path="/services/paint-protection-film/color-texture" element={<PPFColorTexture />} />
        <Route path="/services/paint-protection-film/advanced-chemistry" element={<PPFAdvancedChemistry />} />
        <Route path="/services/paint-protection-film/protection-coating" element={<PPFProtectionCoating />} />
        <Route path="/services/sunroof-protection" element={<SunroofProtection />} />
        <Route path="/services/precut-ppf" element={<PrecutPPF />} />
        <Route path="/services/window-films" element={<WindowFilms />} />
        <Route path="/services/bike-detailing" element={<BikeDetailing />} />
        <Route path="/services/ceramic-wash" element={<CeramicWash />} />
        <Route path="/services/steam-wash" element={<SteamWash />} />
        <Route path="/services/maintenance-wash" element={<MaintenanceWash />} />
        <Route path="/services/spray-on-ppf" element={<SprayOnPPF />} />
        <Route path="/services/car-denting-painting" element={<CarDentingPainting />} />
        <Route path="/services/windshield-protection" element={<WindshieldProtection />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>

      <FloatingActions />
    </>
  )
}

export default App
