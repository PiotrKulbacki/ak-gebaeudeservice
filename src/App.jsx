import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';
import ScrollToTop from './ScrollToTop';

const ContactForm = lazy(() => import('./pages/ContactForm'));
const Impressum = lazy(() => import('./Gesetzt/Impressum'));
const Datenschutz = lazy(() => import('./Gesetzt/Datenschutz'));
const ServiceHausmeister = lazy(() => import('./pages/ServiceHausmeister'));

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route
            path="/leistungen/hausmeisterservice"
            element={<ServiceHausmeister />}
          />
          <Route path="/philosophie" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}