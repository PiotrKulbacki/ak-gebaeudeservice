// src/components/ScrollToTop.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Funkcja sprawdzająca pozycję scrolla
  useEffect(() => {
      const toggleVisibility = () => {
          if (window.scrollY > 300) {
              setIsVisible(true);
          } else {
              setIsVisible(false);
          }
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Funkcja przewijająca płynnie do góry
  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  };

  return (
      <AnimatePresence>
          {isVisible && (
              <motion.button
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] p-3 md:p-4 rounded-full bg-slate-900/60 backdrop-blur-md border border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  aria-label="Nach oben scrollen"
              >
                  {/* Ikona strzałki, która dodatkowo podskakuje przy najechaniu myszką */}
                  <svg 
                      className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:-translate-y-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                  >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"></path>
                  </svg>
              </motion.button>
          )}
      </AnimatePresence>
  );
}