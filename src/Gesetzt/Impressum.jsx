import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Impressum() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen bg-slate-950 selection:bg-emerald-500/30 font-sans flex flex-col items-center py-20 px-4 sm:px-6 overflow-hidden">
            
            {/* Tło - Świetlne akcenty */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Powrót na stronę główną */}
            <header className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
                <div className="bg-slate-950/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group">
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        <span className="text-sm font-bold tracking-widest uppercase">Startseite</span>
                    </Link>
                </div>
            </header>

            <main className="relative z-10 w-full max-w-4xl mx-auto mt-12 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                
                <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                    Impressum
                </h1>

                <div className="space-y-8 text-gray-300 font-light leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">Angaben gemäß § 5 TMG</h2>
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                            <p className="font-bold text-white mb-4">Arasim & Kędzierski Gebäudeservice GbR</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-emerald-400 font-medium mb-1">Vertreten durch:</p>
                                    <p>Patryk Kędzierski<br />Melli-Beese-Str. 68<br />12487 Berlin<br />Deutschland</p>
                                </div>
                                <div>
                                    <p className="text-emerald-400 font-medium mb-1">Und durch:</p>
                                    <p>Samuel Arasim<br />Färberstr. 12<br />12555 Berlin<br />Deutschland</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">Kontakt</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center"><span className="w-24 font-medium text-gray-400">Telefon:</span> <a href="tel:+491621940328" className="text-white hover:text-emerald-400 transition-colors">+49 162 1940328</a></li>
                            <li className="flex items-center"><span className="w-24 font-medium text-gray-400">E-Mail:</span> <a href="mailto:info@akgebaeudeservice.com" className="text-white hover:text-emerald-400 transition-colors">info@akgebaeudeservice.com</a></li>
                            <li className="flex items-center"><span className="w-24 font-medium text-gray-400">Website:</span> <a href="https://www.akgebaeudeservice.com" className="text-white hover:text-emerald-400 transition-colors">www.akgebaeudeservice.com</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">Umsatzsteuer-ID</h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            <span className="text-amber-400 font-medium tracking-wider">DE XXX XXX XXX (Albo ta opcja albo na ponizej - zalezy jaki macie rodzaj dzialalnosci)</span>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">Umsatzsteuer</h2>
                        <p>
                            Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet und ausgewiesen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">Angaben zur Berufshaftpflichtversicherung</h2>
                        <p className="mb-2"><strong className="text-white">Name und Sitz des Versicherers:</strong></p>
                        <p>
                            HanseMerkur Versicherungsgruppe<br />
                            Siegfried-Wedells-Platz 1<br />
                            20354 Hamburg
                        </p>
                        <p className="mt-2"><strong className="text-white">Geltungsraum der Versicherung:</strong> Deutschland</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                        <p>Patryk Kędzierski & Samuel Arasim</p>
                        <div><p>Färberstr. 12<br />12555 Berlin<br />Deutschland</p></div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">EU-Streitschlichtung</h2>
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br />
                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h2>
                        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">Haftung für Inhalte & Links</h2>
                        <p className="mb-4">
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                        </p>
                        <p>
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">Urheberrecht</h2>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte, Texte, Logos, Grafiken und Bilder auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        </p>
                    </section>

                    <div className="flex justify-center mt-12">
                        <img 
                            src="/logo5.png" 
                            alt="Logo Arasim & Kędzierski" 
                            className="h-24 sm:h-44 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                        />
                    </div>

                </div>
            </main>
        </div>
    );
}