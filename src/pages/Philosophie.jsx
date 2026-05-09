import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Philosophie() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative bg-slate-950 min-h-screen font-sans text-gray-200 overflow-hidden selection:bg-cyan-500/30">
            
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="fixed top-[-50%] left-[-50%] w-[200%] h-[200%] pointer-events-none z-0"
                style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, transparent 40%)' }}
            />

            <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
                <div className="bg-slate-950/60 backdrop-blur-2xl border border-cyan-500/20 rounded-full px-6 py-3 flex justify-between items-center shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                    <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group">
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        <span className="text-sm font-bold tracking-widest uppercase">Startseite</span>
                    </Link>
                    <Link to="/contact" className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 font-bold text-sm uppercase tracking-widest transition-all duration-300">
                        Kontakt
                    </Link>
                </div>
            </header>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 space-y-20">
                
                <motion.section 
                    initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                    className="text-center pt-10"
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 mt-2 tracking-tight drop-shadow-lg">
                        Qualitäts<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">philosophie</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Wir sind nicht nur ein Reinigungsservice. Wir sind die Hüter des Wertes Ihrer Immobilie. Erleben Sie den „Chefsache“-Standard.
                    </p>
                </motion.section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}
                        className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-10 hover:border-red-500/30 transition-colors"
                    >
                        <h3 className="text-2xl font-bold text-gray-300 mb-4">Das Problem im Markt</h3>
                        <p className="text-gray-400 leading-relaxed font-light">
                            Die Anonymität großer Konzerne führt oft dazu, dass sich Kunden vernachlässigt fühlen. Fehlende persönliche Verantwortung führt zu Qualitätseinbußen, versteckten Kosten und Frustration bei der Kontaktaufnahme.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-10 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-4 relative z-10">Unsere Antwort</h3>
                        <p className="text-gray-300 leading-relaxed font-light relative z-10">
                            Das „Chefsache“-Modell. Jedes Objekt ist Chefsache. Arasim und Kedzierski überwachen persönlich die Standards und eliminieren die typischen Fehler von Massendienstleistern. Ihre Immobilie ist bei uns in besten Händen.
                        </p>
                    </motion.div>
                </section>

                <section className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-500/50 p-2 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
                            <img src="/hausmeister.png" alt="Gründer" className="w-full h-full object-cover object-top rounded-full filter grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Unser Gesicht, Ihre Garantie</h2>
                        <p className="text-gray-400 text-lg font-light mb-6">
                            Wir verstecken uns nicht hinter Hotlines. Wenn Sie uns anrufen, sprechen Sie mit den Entscheidungsträgern. Jedes Projekt ist die Visitenkarte unserer Familie.
                        </p>
                        <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 italic text-xl text-gray-200">
                            „Ihr Seelenfrieden ist unsere Priorität. Wir übernehmen die volle Verantwortung für jeden Quadratmeter Ihrer Immobilie.“
                        </blockquote>
                    </motion.div>
                </section>

                <motion.section 
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-center text-white mb-10">Warum Wir?</h2>
                    <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-sm shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-cyan-500/10 border-b border-cyan-500/20">
                                    <th className="p-6 text-cyan-400 font-bold uppercase tracking-wider">Service-Merkmal</th>
                                    <th className="p-6 text-gray-400 font-semibold uppercase tracking-wider">Standard-Firma</th>
                                    <th className="p-6 text-white font-bold uppercase tracking-wider">Arasim & Kedzierski</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300 font-light">
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-6 font-medium">Kommunikation</td>
                                    <td className="p-6">Hotline / Formulare</td>
                                    <td className="p-6 text-cyan-300">Direkt zum Chef</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-6 font-medium">Qualitätskontrolle</td>
                                    <td className="p-6">Stichprobenartig</td>
                                    <td className="p-6 text-cyan-300">Kontinuierlich, durch Inhaber</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-6 font-medium">Reaktionszeit</td>
                                    <td className="p-6">48-72 Stunden</td>
                                    <td className="p-6 text-cyan-300">Meist innerhalb von 24h</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="p-6 font-medium">Verantwortung</td>
                                    <td className="p-6">Verteilt / Unklar</td>
                                    <td className="p-6 text-cyan-300 font-bold">Persönlich (Unser Name)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                <motion.section 
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}
                    className="text-center bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 rounded-3xl p-12 shadow-[0_0_40px_rgba(6,182,212,0.15)]"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Bereit für einen neuen Standard?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Setzen Sie auf Partner, die sich nicht scheuen, Verantwortung zu übernehmen. Lassen Sie uns gemeinsam etwas Dauerhaftes schaffen.</p>
                    
                    <motion.div
                        animate={{ rotate: [0, -1, 1, -1, 1, 0], scale: [1, 1.02, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                        className="inline-block"
                    >
                        <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-cyan-500 text-slate-950 font-bold tracking-widest uppercase hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-colors duration-300">
                            Zusammenarbeit starten
                        </Link>
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
}