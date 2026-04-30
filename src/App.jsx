import HomePage from './HomePage'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import TermsAndConditions from './pages/TermsAndConditions'
import DataPolicy from './pages/DataPolicy'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<DataPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
