import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  )
}

export default App
