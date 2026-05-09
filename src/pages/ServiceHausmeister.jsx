import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ServiceHausmeister() {
    // Automatyczne przewijanie na samą górę po wejściu na stronę
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-950 min-h-screen font-sans text-gray-200 selection:bg-cyan-500/30">
            
            {/* Prosty, futurystyczny pasek nawigacji dla podstrony */}
            <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
                <div className="bg-slate-950/60 backdrop-blur-2xl border border-cyan-500/20 rounded-full px-6 py-3 flex justify-between items-center shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                    <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group">
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        <span className="text-sm font-bold tracking-widest uppercase">Zurück</span>
                    </Link>
                    <Link to="/contact" className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 font-bold text-sm uppercase tracking-widest transition-all duration-300">
                        Kontakt
                    </Link>
                </div>
            </header>

            {/* Sekcja Hero dla usługi */}
            <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/Kafelki/Hausmeisterservice.png" alt="Hausmeisterservice" className="absolute inset-0 object-cover w-full h-full opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950"></div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                        Dienstleistung
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                        Professioneller <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hausmeisterservice</span>
                    </h1>
                </motion.div>
            </section>

            {/* Główna treść */}
            <section className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 z-10 -mt-20">
                
                {/* Szklany blok z głównym opisem */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl mb-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ihr Objekt in besten Händen</h2>
                    <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                        Der reibungslose Betrieb einer Immobilie erfordert ständige Aufmerksamkeit, technisches Know-how und handwerkliches Geschick. Unser erfahrener Hausmeisterservice in Berlin und Brandenburg nimmt Ihnen diese Last ab. 
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed font-light">
                        Wir fungieren als erstes Bindeglied zwischen Eigentümern, Mietern und Handwerkern. Ob regelmäßige Objektkontrollen, die Überwachung technischer Anlagen oder schnelle Hilfe bei Kleinreparaturen – wir sorgen dafür, dass der Wert Ihrer Immobilie erhalten bleibt und sich die Bewohner rundum wohlfühlen.
                    </p>
                </motion.div>

                {/* Siatka z konkretnymi usługami (Features Grid) */}
                <h3 className="text-center text-2xl font-bold text-white mb-10 tracking-wide">Unsere Aufgabenbereiche</h3>
                
                {/* Dodano overflow-hidden, aby zapobiec paskom przewijania w poziomie podczas animacji */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 overflow-hidden py-4">
                    {[
                        { icon: "🔧", title: "Kleinreparaturen", desc: "Schnelle und fachgerechte Instandsetzung von kleinen Mängeln (z.B. defekte Glühbirnen, klemmende Türen)." },
                        { icon: "📋", title: "Objektkontrolle", desc: "Regelmäßige Inspektion der Gebäude, Treppenhäuser und Außenanlagen auf Sauberkeit und Sicherheit." },
                        { icon: "⚙️", title: "Techniküberwachung", desc: "Kontrolle der Heizungs-, Lüftungs- und Schließanlagen sowie Ablesen von Zählerständen." },
                        { icon: "👷", title: "Handwerkerkoordination", desc: "Einweisung und Überwachung von Fremdfirmen bei größeren Reparatur- oder Wartungsarbeiten." }
                    ].map((feature, idx) => {
                        // Sprawdzamy czy indeks jest parzysty, aby decydować o kierunku (lewo/prawo)
                        const isEven = idx % 2 === 0;

                        return (
                            <motion.div 
                                key={idx}
                                // Start: x ustawione na -150 lub 150, by wjeżdżały z krawędzi
                                initial={{ opacity: 0, x: isEven ? -150 : 150 }}
                                // Koniec: wracają na swoje miejsce (x: 0)
                                whileInView={{ opacity: 1, x: 0 }}
                                // once: false sprawia, że efekt powtarza się przy przewijaniu góra/dół
                                viewport={{ once: false, amount: 0.2 }}
                                // delay: idx * 0.15 odpowiada za kaskadowe wjeżdżanie 'po kolei'
                                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                                className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors duration-300 group"
                            >
                                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">{feature.icon}</div>
                                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                                <p className="text-gray-400 font-light">{feature.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action na dole */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/20 rounded-3xl p-10 md:p-16 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Interesse geweckt?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Lassen Sie uns besprechen, wie wir den Betrieb Ihrer Immobilie optimieren können. Wir erstellen Ihnen gerne ein unverbindliches Angebot.</p>
                    
                    {/* Dodany wrapper Framer Motion dla efektu wibracji */}
                    <motion.div
                        // Animacja rotacji odchyla przycisk o 2 stopnie w lewo i prawo, a delikatny scale lekko go powiększa
                        animate={{ 
                            rotate: [0, -2, 2, -2, 2, 0],
                            scale: [1, 1.02, 1]
                        }}
                        transition={{ 
                            duration: 0.5,           // Wibracja trwa pół sekundy
                            repeat: Infinity,        // Powtarzaj w nieskończoność
                            repeatDelay: 1.5,        // Czekaj 1.5 sekundy przed kolejną wibracją (żeby nie było to irytujące)
                            ease: "easeInOut" 
                        }}
                        className="inline-block"
                    >
                        <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold tracking-widest uppercase hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                            Jetzt Angebot anfordern
                        </Link>
                    </motion.div>
                </motion.div>

            </section>
        </div>
    );
}