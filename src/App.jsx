
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactForm from './pages/ContactForm'
import Impressum from './Gesetzt/Impressum';
import Datenschutz from './Gesetzt/Datenschutz';
import ScrollToTop from './ScrollToTop';
import ServiceHausmeister from './pages/ServiceHausmeister';
import Philosophie from './pages/Philosophie';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/datenschutz' element={<Datenschutz />} />
        <Route path="/leistungen/hausmeisterservice" element={<ServiceHausmeister />} />
        <Route path="/philosophie" element={<Philosophie />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}
