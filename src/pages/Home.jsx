import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

function AnimatedNumber({ from, to, suffix = "", duration = 1.2 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.5 });
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

    useEffect(() => {
        if (inView) {
            animate(count, to, { duration: duration, ease: "easeOut" });
        } else {
            count.set(from);
        }
    }, [inView, count, to, duration, from]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isMenuOpen]);

    const items = [
        { label: 'Leistungen', href: '#leistungen' },
        { label: 'AK-Standard', href: '#ak-standard' },
        { label: 'Philosophie', href: '/philosophie' },
        { label: 'Über uns', href: '#uberuns' },
    ];

    return (
        <>
            <header ref={menuRef} className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-500">
                <div className="bg-slate-950/60 backdrop-blur-2xl border border-cyan-500/20 rounded-full px-4 sm:px-4 py-3 flex justify-between items-center shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                    
                <div className="flex items-center -ml-6 m">
                        <div className="relative flex items-center h-12 sm:h-16 custom-md:h-20 w-24 sm:w-32 custom-md:w-40 transition-all duration-300">
                            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-[1.5] origin-left"></div>
                            <img 
                                src="/logo5.png" 
                                alt="Logo Gebäudeservice Arasim & Kedzierski" 
                                className="relative z-1 h-full w-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] scale-[1.6] custom-md:scale-[1.8] origin-left" 
                            />
                        </div>
                    </div>

                    {/* Futurystyczne Menu (Desktop) */}
                    <nav className="hidden custom-md:flex items-center gap-12 ml-8">
                        {items.map((item, index) => {
                            // ZMIANA: hover:text-emerald-400 zamiast cyan
                            const linkClasses = "relative text-gray-300 text-base font-medium tracking-widest uppercase hover:text-emerald-400 transition-colors duration-300 group";
                            // ZMIANA: bg-emerald-400 oraz shadow dopasowany do zieleni (rgba: 16,185,129)
                            const hoverLine = <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>;

                            if (item.href.startsWith('#')) {
                                return (
                                    <a key={index} href={item.href} className={linkClasses}>
                                        {item.label}
                                        {hoverLine}
                                    </a>
                                );
                            } 
                            
                            return (
                                <Link key={index} to={item.href} className={linkClasses}>
                                    {item.label}
                                    {hoverLine}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Cyber-przycisk Kontakt */}
                    <div className="hidden custom-md:block">
                        {/* ZMIANA: border-emerald-500/50 oraz cienie (shadow) w kolorze emerald */}
                        <Link to='/contact' className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-bold text-white bg-slate-900 border border-emerald-500/50 rounded-full hover:bg-slate-800 group shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all duration-300">
                            {/* ZMIANA: Tło wypełniające przycisk po najechaniu na bg-emerald-500 */}
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-500 rounded-full group-hover:w-60 group-hover:h-60"></span>
                            <span className="relative flex items-center gap-2 text-base uppercase tracking-wider group-hover:text-slate-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                Kontakt
                            </span>
                        </Link>
                    </div>

                    {/* Hamburger dla urządzeń mobilnych (Neonowy design) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative flex flex-col justify-center items-center w-10 h-10 border border-emerald-500/30 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 transition-all duration-300 custom-md:hidden z-50 group"
                    >
                        {isMenuOpen ? (
                            <span className="text-emerald-400 text-xl">✕</span>
                        ) : (
                            <>
                                <span className="w-4 h-[2px] bg-emerald-400 mb-1 group-hover:w-5 transition-all"></span>
                                <span className="w-5 h-[2px] bg-emerald-400 mb-1"></span>
                                <span className="w-3 h-[2px] bg-emerald-400 group-hover:w-5 transition-all"></span>
                            </>
                        )}
                    </button>
                </div>

                {/* Rozwijane menu mobilne w stylu Glassmorphism */}
                <div
                    className={`absolute top-full left-0 w-full mt-4 bg-slate-950/90 backdrop-blur-2xl border border-cyan-500/20 rounded-3xl transition-all duration-500 overflow-hidden custom-md:hidden ${
                        isMenuOpen ? 'max-h-96 opacity-100 py-6 shadow-[0_0_30px_rgba(6,182,212,0.2)]' : 'max-h-0 opacity-0 py-0 border-transparent'}`} >
                    <div className="flex flex-col gap-6 px-6 text-center text-gray-300">
                        {items.map((item, index) => (
                            <a 
                                key={index} 
                                href={item.href} 
                                className="hover:text-cyan-400 transition-colors tracking-widest uppercase text-sm" 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div
                            className="flex justify-center items-center cursor-pointer mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                            onClick={() => {
                                setIsMenuOpen(false);
                                navigate('/contact');
                            }}
                        >
                            <span>Kontakt</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Nowoczesna Sekcja Hero */}
            <section className="relative w-full min-h-[100vh] flex items-center justify-center mt-0 overflow-hidden pb-12">
                
                {/* Zdjęcie w tle z kinowym gradientem */}
                <div className="absolute inset-0 z-0">
                    {/* Zdjęcie 1: Tylko dla Mobile w pionie (Portrait) */}
                    <img 
                        src="/hausmeister.png" 
                        alt="Hausmeister Portrait" 
                        className="absolute -top-12 left-0 w-full h-[calc(100%+3rem)] object-cover object-top md:hidden landscape:hidden" 
                    />
                    
                    {/* Zdjęcie 2: Dla Desktopu ORAZ Mobile w poziomie (Landscape) */}
                    <img 
                        src="/hausmeister4.png" 
                        alt="Hausmeister Landscape" 
                        className="absolute inset-0 object-cover object-top w-full h-full mt-20 md:mt-28 hidden md:block landscape:block" 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/30 to-slate-950"></div>
                </div>

                {/* Kontener z treścią */}
                <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto pt-32 sm:pt-40 pb-10">
                    
                    {/* NAGŁÓWEK - Na telefonach wyświetli się jako pierwszy (order-1), na komputerach jako drugi (md:order-2) */}
                    <h1 className="order-1 md:order-2 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 md:mb-6 tracking-tight leading-tight drop-shadow-2xl">
                        Die Komplettlösung für Ihre <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Immobilienpflege</span>
                    </h1>

                    {/* ODZNAKA Z OPINIAMI - Na telefonach wyświetli się jako druga (order-2), na komputerach na samej górze (md:order-1) */}
                    <a 
                        href="https://www.google.com/maps/place/https://www.google.com/maps/place/PSP+Hausmeisterservice+Arasim+%26+Kedzierski/@0,0,10z/data=!4m6!3m5!1s0xab2c3fdc2c364fdd:0x7c849dba496dd5f!8m2!3d52.4929698!4d13.4247318!16s%2Fg%2F11xh25shxv?hl=pl&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        // Zmniejszono odstępy wewnętrzne (px, py) na telefonach
                        className="order-2 md:order-1 flex items-center gap-2 md:gap-3 mb-8 px-3.5 py-1.5 md:px-5 md:py-2.5 rounded-full bg-slate-900/60 border border-white/20 backdrop-blur-md hover:bg-slate-900/80 transition-colors duration-300 shadow-lg"
                    >
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                // Zmniejszono gwiazdki z w-4 na w-3.5 tylko dla telefonów
                                <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.954L10 0l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"/></svg>
                            ))}
                        </div>
                        {/* Zmniejszono czcionkę na text-xs na telefonach */}
                        <span className="text-gray-100 text-xs md:text-sm font-medium tracking-wide">Von Kunden mit 5.0 bewertet</span>
                    </a>

                    {/* SZKLANY KONTENER NA TEKST - Zawsze na trzecim miejscu (order-3) */}
                    <div className="order-3 bg-slate-950/50 backdrop-blur-lg border border-white/10 rounded-2xl p-5 md:p-6 mb-10 max-w-2xl shadow-2xl">
                        <p className="text-gray-100 text-lg md:text-xl leading-relaxed font-light">
                            Von der gründlichen Reinigung über die Gartenpflege bis hin zum zuverlässigen Winterdienst. Lehnen Sie sich zurück – wir kümmern uns um den Rest mit höchster Qualität.
                        </p>
                    </div>

                    {/* Przyciski Akcji - Zawsze na czwartym miejscu (order-4) */}
                    <div className="order-4 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                        <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-base uppercase tracking-widest hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
                            Kostenloses Angebot
                        </Link>
                        <a href="#leistungen" className="px-8 py-4 rounded-full bg-slate-900/40 text-white font-bold text-base uppercase tracking-widest border border-white/20 hover:bg-slate-900/70 hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-300 backdrop-blur-md">
                            Unsere Leistungen
                        </a>
                    </div>
                </div>
            </section>

            <section id="leistungen" className="relative bg-slate-950 py-24 px-6 overflow-hidden" style={{ scrollMarginTop: '80px' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Unsere Professionellen <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Dienstleistungen</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                            Professionell, zuverlässig und auf Ihre Bedürfnisse zugeschnitten. Wir bieten ein breites Spektrum an Services für Ihre Immobilie.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { 
                                title: "Hausmeisterservice", 
                                desc: "Wartung und Betreuung von Liegenschaften, Kontrolle technischer Anlagen und Brandschutz", 
                                img: "/Kafelki/Hausmeisterservice.png", 
                                details: (
                                    <>
                                        <p className="mb-4 text-gray-300 leading-relaxed">
                                            Ein reibungsloser Ablauf im Hintergrund ist das Fundament jeder rentablen Immobilie. Als Ihr proaktiver Service vor Ort sind wir das Bindeglied zwischen Eigentümer, Verwaltung und Mietern. Wir erkennen Instandhaltungsbedarfe, bevor sie zu teuren Notfällen werden, beheben kleine Mängel sofort selbst und entlasten Sie spürbar vom zeitaufwendigen Tagesgeschäft.
                                        </p>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">So entlasten wir Ihre Verwaltung:</h4>
                                        <ul className="space-y-3 mb-6 text-gray-300">
                                            <li className="flex items-start"><span className="text-emerald-500 mr-3 text-xl">🔧</span> <span><strong>Anlagenkontrolle & Dokumentation:</strong> Regelmäßige Inspektion von Haus- und Betriebstechnik (Heizung, Beleuchtung) inklusive Zählerstandserfassungen für Ihre Abrechnungen.</span></li>
                                            <li className="flex items-start"><span className="text-emerald-500 mr-3 text-xl">🛡️</span> <span><strong>Sicherheit & Brandschutz:</strong> Gewissenhafte Freihaltung von Fluchtwegen und Kontrolle der Brandschutzeinrichtungen zum Schutz vor rechtlichen Haftungsrisiken.</span></li>
                                            <li className="flex items-start"><span className="text-emerald-500 mr-3 text-xl">🛠️</span> <span><strong>Effiziente Kleinreparaturen:</strong> Tropfende Hähne, klemmende Türen oder defekte Leuchtmittel beheben wir sofort – das erspart Ihnen die teure und langwierige Beauftragung von Fremdfirmen.</span></li>
                                            <li className="flex items-start"><span className="text-emerald-500 mr-3 text-xl">🤝</span> <span><strong>Mieterbetreuung als Puffer:</strong> Wir sind der erste Ansprechpartner vor Ort. Wir lösen Routineprobleme direkt und leiten nur das an Sie weiter, was wirklich Ihren Schreibtisch erreichen muss.</span></li>
                                        </ul>
                                    </>
                                )
                            },
                            { 
                                title: "Büroreinigung", 
                                desc: "Hygienische Sauberkeit für Ihre Arbeitsplätze, Küchen und Sanitäranlagen", 
                                img: "/Kafelki/service2.png", // Pamiętaj, żeby podmienić ten plik u siebie w folderze!
                                details: (
                                    <>
                                        <p className="mb-4 text-gray-300 leading-relaxed">
                                            Ein sauberes Büro ist nicht nur die Visitenkarte Ihres Unternehmens gegenüber Kunden, sondern auch die wichtigste Grundlage für ein produktives und gesundes Arbeitsklima. Wir sorgen mit unserer professionellen Unterhaltsreinigung für kompromisslose Hygiene an jedem Arbeitsplatz – zuverlässig, diskret und außerhalb Ihrer Kernarbeitszeiten.
                                        </p>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Unsere Leistungen im Überblick:</h4>
                                        <ul className="space-y-3 mb-6 text-gray-300">
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🖥️</span> <span><strong>Arbeitsplatzreinigung:</strong> Schonende und gründliche Reinigung von Schreibtischen, Monitoren und Telefonen.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">✨</span> <span><strong>Sanitär & Küche:</strong> Hygienische Tiefenreinigung und Desinfektion von Waschräumen und Mitarbeiterküchen.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🧹</span> <span><strong>Bodenpflege:</strong> Fachgerechtes Staubsaugen und Wischen aller Bodenbeläge (Teppich, Laminat, Fliesen).</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🗑️</span> <span><strong>Müllentsorgung:</strong> Regelmäßige Leerung von Papierkörben sowie fachgerechte Entsorgung.</span></li>
                                        </ul>
                                    </>
                                )
                            },
                            {
                                title: "Bauendreinigung",
                                desc: "Effiziente Beseitigung von Baustaub und Schmutz für eine perfekte Schlüsselübergabe.",
                                img: "/Kafelki/service3.png", 
                                details: (
                                    <>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Bezugsfertig und makellos:</h4>
                                        <p className="text-gray-300 mb-4 font-light leading-relaxed">
                                            Nach Abschluss der Bau- oder Renovierungsarbeiten hinterlassen Handwerker oft hartnäckigen Schmutz. Wir sorgen für den finalen Glanz, damit Sie Ihr Objekt termingerecht und in perfektem Zustand übergeben oder beziehen können.
                                        </p>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Unsere Leistungen umfassen:</h4>
                                        <ul className="space-y-3 mb-8 text-gray-300 font-light">
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">🧹</span> 
                                                <span><strong>Baugrobreinigung:</strong> Fachgerechte Entsorgung von Bauschutt, Verpackungsmaterial und grobem Dreck während der Bauphase.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">✨</span> 
                                                <span><strong>Baufeinreinigung:</strong> Gründliche Entfernung von Baustaub, Farbspritzern, Mörtelresten und Klebestreifen.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">⏱️</span> 
                                                <span><strong>Termintreue Garantiert:</strong> Wir arbeiten flexibel und pünktlich, damit Ihre Bauabnahme reibungslos abläuft.</span>
                                            </li>
                                        </ul>
                                    </>
                                )
                            },
                            { 
                                title: "Grünflächenpflege", 
                                desc: "Rasen mähen, Sträucher schneiden, Gartenpflege", 
                                img: "/Kafelki/service4.png",
                                details: (
                                    <>
                                        <p className="mb-4 text-gray-300 leading-relaxed">
                                            Eine gepflegte Außenanlage ist die Visitenkarte Ihrer Immobilie und steigert ihren Wert spürbar. Doch wir gehen über das bloße Rasenmähen hinaus: Wir denken proaktiv mit. Wir erkennen kranke Pflanzen rechtzeitig, beugen Wildwuchs vor und sorgen dafür, dass Ihre Grünanlagen nicht nur optisch makellos, sondern auch sicher und nachhaltig gesund sind.
                                        </p>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Unser Service für Ihre Außenanlagen:</h4>
                                        <ul className="space-y-3 mb-6 text-gray-300">
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🌿</span> <span><strong>Ganzheitliche Rasenpflege:</strong> Nicht nur Mähen, sondern auch fachgerechtes Vertikutieren, Nachsäen und Düngen für einen dichten, robusten Rasen ohne Moos.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🛡️</span> <span><strong>Sicherer Baum- & Heckenschnitt:</strong> Optischer Formschnitt und präventive Entfernung von Totholz zur Erfüllung Ihrer Verkehrssicherungspflicht – das schützt Passanten und parkende Autos.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🌱</span> <span><strong>Umweltschonende Unkrautentfernung:</strong> Saubere Wege und Beete ganz ohne verbotene chemische Keulen, plus zuverlässige Beseitigung von rutschigem Herbstlaub.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🚛</span> <span><strong>Komplette Grünschnittentsorgung:</strong> Wir lassen keine unschönen Haufen liegen. Der gesamte Beschnitt wird von uns sofort mitgenommen und fachgerecht sowie umweltschonend entsorgt.</span></li>
                                        </ul>
                                    </>
                                )
                            },
                            { 
                                title: "Graffitientfernung", 
                                desc: "Rückstandslose Beseitigung und präventiver Schutz für Ihre Fassaden", 
                                img: "/Kafelki/service5.png", 
                                details: (
                                    <>
                                        <p className="mb-4 text-gray-300 leading-relaxed">
                                            Vandalismus ist ärgerlich, aber eine falsche Reinigung macht es oft noch schlimmer. Wir entfernen Schmierereien nicht einfach nur oberflächlich, sondern sorgen dafür, dass weder unschöne Farbschatten noch Schäden an der Bausubstanz zurückbleiben. Und wir denken weiter: Mit cleverer Prävention machen wir Ihre Immobilie für Sprüher langfristig unattraktiv.
                                        </p>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Unser Experten-Ansatz für Ihre Fassade:</h4>
                                        <ul className="space-y-3 mb-6 text-gray-300">
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🛡️</span> <span><strong>Anti-Graffiti-Beschichtung:</strong> Auf Wunsch tragen wir eine unsichtbare „Opferschicht“ auf. Neue Graffitis können danach ganz einfach und kostengünstig mit Heißwasser abgewaschen werden – ohne aggressive Chemie.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">👻</span> <span><strong>Keine Schattenbildung (Ghosting):</strong> Wer nur mit Hochdruck arbeitet, drückt die Farbe tief in den Stein. Wir ziehen die Pigmente mit speziellen, porentiefen Lösemitteln restlos aus dem Untergrund.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">⚡</span> <span><strong>Schnelle Reaktion (Broken-Window-Theorie):</strong> Ein Graffiti zieht oft schnell weitere an. Durch unsere zügige Entfernung nehmen wir den Sprayern die „Bühne“ und verhindern weitere Schmierereien.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🌱</span> <span><strong>Gesetzeskonforme Entsorgung:</strong> Abgewaschene Lacke sind oft hochgiftig. Wir fangen das Schmutzwasser fachgerecht auf und entsorgen es nach strengen deutschen Umweltauflagen – das schützt Sie als Eigentümer vor empfindlichen Bußgeldern.</span></li>
                                        </ul>
                                    </>
                                )
                            },
                            { 
                                title: "Winterdienst", 
                                desc: "Schneeräumung und Streudienst für Ihre rechtliche und finanzielle Sicherheit", 
                                img: "/Kafelki/service6.png", 
                                details: (
                                    <>
                                        <p className="mb-4 text-gray-300 leading-relaxed">
                                            Schnee und Glatteis sind nicht nur ein Hindernis, sondern vor allem ein enormes Haftungsrisiko für jeden Immobilienbesitzer. Mit unserem professionellen Winterdienst können Sie auch bei Minusgraden entspannt schlafen. Wir räumen und streuen zuverlässig, noch bevor der erste Fußgänger Ihre Wege betritt – und nehmen Ihnen dabei die volle juristische Verantwortung ab.
                                        </p>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Sicherheit, die weiter denkt:</h4>
                                        <ul className="space-y-3 mb-6 text-gray-300">
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">⚖️</span> <span><strong>Haftungsübernahme:</strong> Wir übernehmen Ihre gesetzliche Verkehrssicherungspflicht. Kommt es trotz Räumung zu einem Sturz, sind Sie rechtlich und finanziell durch unsere Versicherung geschützt.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">📝</span> <span><strong>Lückenlose Dokumentation:</strong> Jeder unserer Einsätze wird exakt mit Datum und Uhrzeit protokolliert. Im Schadensfall ist dieses Tourenbuch Ihr wasserdichter Nachweis für die Versicherung.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">📡</span> <span><strong>24/7 Wetter-Monitoring:</strong> Wir warten nicht, bis der Schnee meterhoch liegt. Durch ständige Beobachtung lokaler Wetterdaten (inklusive Blitzeis-Warnungen) sind unsere Teams oft schon präventiv vor Ort.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🐾</span> <span><strong>Umwelt- & Materialschonend:</strong> Streusalz ist in Berlin oft verboten, schadet Pflanzen und greift Tierpfoten an. Wir nutzen vorrangig umweltfreundliche, abstumpfende Granulate, die effektiv sichern und Ihre Pflastersteine schonen.</span></li>
                                        </ul>
                                    </>
                                )
                            },
                            { 
                                title: "Entrümpelung & Umzug", 
                                desc: "Diskrete Räumung und besenreine Übergabe von Wohnungen und Gewerbe", 
                                img: "/Kafelki/service7.png", 
                                details: (
                                    <>
                                        <p className="mb-4 text-gray-300 leading-relaxed">
                                            Eine Haushaltsauflösung oder Firmenräumung ist oft mit emotionalem und zeitlichem Stress verbunden. Wir nehmen Ihnen diese Last komplett ab. Ob vollgestellter Keller, komplexer Firmenumzug oder eine sensible Nachlassräumung – wir arbeiten zügig, diskret und übergeben Ihre Räumlichkeiten exakt so, wie Vermieter oder Käufer es erwarten.
                                        </p>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Warum wir der richtige Partner sind:</h4>
                                        <ul className="space-y-3 mb-6 text-gray-300">
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🤫</span> <span><strong>Absolute Diskretion:</strong> Besonders bei sensiblen Fällen (wie Nachlässen oder Messie-Wohnungen) agieren wir äußerst respektvoll. Wir arbeiten zügig und diskret, um unnötiges Aufsehen in der Nachbarschaft zu vermeiden.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">♻️</span> <span><strong>Mülltrennung spart Ihr Geld:</strong> Wir werfen nicht einfach alles in einen teuren Mischcontainer. Durch unsere strikte Vorab-Trennung von Holz, Metall und Sondermüll senken wir die Entsorgungskosten auf dem Recyclinghof massiv.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🧹</span> <span><strong>Besenreine Übergabegarantie:</strong> Wir tragen nicht nur Kisten raus. Wir entfernen Spinnweben, fegen gründlich durch, ziehen auf Wunsch alte Nägel aus den Wänden und hinterlassen den Raum bereit für die Schlüsselübergabe.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">📦</span> <span><strong>Alles aus einer Hand:</strong> Sie müssen einen Teil der Möbel in ein neues Büro oder eine andere Wohnung transportieren und den Rest entsorgen? Wir kombinieren Umzug und Entrümpelung nahtlos in einem Einsatz.</span></li>
                                        </ul>
                                    </>
                                )
                            },
                            { 
                                title: "Fensterreinigung innen & außen", 
                                desc: "Streifenfreier Glanz für Glasflächen, Rahmen, Falze und Rollläden", 
                                img: "/Kafelki/service8.png", 
                                details: (
                                    <>
                                        <p className="mb-4 text-gray-300 leading-relaxed">
                                            Strahlend saubere Fenster bringen nicht nur mehr Tageslicht in Ihre Räume, sondern werten Ihre gesamte Immobilie optisch sofort auf. Während viele Anbieter das Glas nur oberflächlich abziehen, verstehen wir unter einer professionellen Fensterreinigung das komplette Paket. Wir kümmern uns um die versteckten Details, die oft übersehen werden, und garantieren Ihnen einen buchstäblich ungetrübten Ausblick.
                                        </p>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Unsere Definition von echten sauberen Fenstern:</h4>
                                        <ul className="space-y-3 mb-6 text-gray-300">
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">✨</span> <span><strong>Streifenfreie Brillanz:</strong> Wir nutzen professionelles Equipment und spezielle Einwascher, die auch bei direkter Sonneneinstrahlung absolut streifen- und schlierenfreie Glasflächen hinterlassen.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🔍</span> <span><strong>Rahmen- & Falzreinigung:</strong> Der „Aha-Effekt“ für unsere Kunden: Wir reinigen nicht nur die Scheibe, sondern wischen die Rahmen feucht ab und entfernen den hartnäckigen, schwarzen Schmutz aus den inneren Fensterfalzen und Dichtungen.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">☀️</span> <span><strong>Jalousien & Rollläden:</strong> Was nützt ein sauberes Fenster, wenn die Jalousie davor staubig ist? Auf Wunsch reinigen wir Rollläden, Außenjalousien und Raffstores fachgerecht gleich mit.</span></li>
                                            <li className="flex items-start"><span className="text-cyan-500 mr-3 text-xl">🛡️</span> <span><strong>Kratzfrei & Materialschonend:</strong> Egal ob empfindliches Wärmeschutzglas, getönte Scheiben oder historische Holzrahmen – wir verwenden ausschließlich weiche, kratzfreie Mikrofasern und pH-neutrale Reinigungsmittel, die das Material schützen.</span></li>
                                        </ul>
                                    </>
                                )
                            },
                            {
                                title: "Maler- & Spachtelarbeiten",
                                desc: "Frische Farben und glatte Wände für ein neues Wohngefühl oder den Mieterwechsel.",
                                img: "/Kafelki/Maler.png",
                                details: (
                                    <>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Professionelle Wandgestaltung:</h4>
                                        <p className="text-gray-300 mb-4 font-light leading-relaxed">
                                            Ob Ausbesserungen nach einem Umzug oder ein komplett neuer Anstrich – wir sorgen für saubere Kanten i perfekte Oberflächen.
                                        </p>
                                        <ul className="space-y-3 mb-8 text-gray-300 font-light">
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">🖌️</span> 
                                                <span><strong>Innenanstrich:</strong> Sauberer Anstrich von Wänden und Decken mit hochwertigen Farben.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">🧱</span> 
                                                <span><strong>Spachteln & Glätten:</strong> Verspachteln von Löchern, Rissen und Unebenheiten für eine makellose Optik.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">🛡️</span> 
                                                <span><strong>Abdeckservice:</strong> Wir schützen Ihre Böden und Möbel sorgfältig vor Farbspritzern.</span>
                                            </li>
                                        </ul>
                                    </>
                                )
                            },
                            {
                                title: "Kleinreparaturen",
                                desc: "Schnelle Hilfe bei defekten Türklinken, klemmenden Fenstern oder losen Scharnieren.",
                                img: "/Kafelki/Kleinreparaturen.png",
                                details: (
                                    <>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Werterhalt Ihrer Immobilie:</h4>
                                        <p className="text-gray-300 mb-4 font-light leading-relaxed">
                                            Oft sind es die kleinen Dinge, die im Alltag stören. Wir erledigen kleine Instandsetzungen schnell und unkompliziert, bevor daraus größere Schäden entstehen.
                                        </p>
                                        <ul className="space-y-3 mb-8 text-gray-300 font-light">
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">🚪</span> 
                                                <span><strong>Türen & Fenster:</strong> Einstellen von Scharnieren, Austausch von Klinken oder Dichtungen.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">🔌</span> 
                                                <span><strong>Hardware-Check:</strong> Festschrauben von lockeren Steckdosenabdeckungen oder Leisten.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">✅</span> 
                                                <span><strong>Hausmeister-Service:</strong> Allgemeine technische Überprüfung und Behebung kleinerer Mängel.</span>
                                            </li>
                                        </ul>
                                    </>
                                )
                            },
                            {
                                title: "Montageservice",
                                desc: "Fachgerechte Montage von Regalen, Lampen, Gardinenstangen und Kleinmöbeln.",
                                img: "/Kafelki/Montageservice.png",
                                details: (
                                    <>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Wir bringen es an die Wand:</h4>
                                        <p className="text-gray-300 mb-4 font-light leading-relaxed">
                                            Sie haben neu eingekauft oder sind gerade umgezogen? Wir unterstützen Sie beim Aufbau und der sicheren Befestigung Ihrer Einrichtung.
                                        </p>
                                        <ul className="space-y-3 mb-8 text-gray-300 font-light">
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">🖼️</span> 
                                                <span><strong>Wandmontage:</strong> Sicheres Aufhängen von Bildern, Spiegeln, Regalen und TV-Halterungen.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">💡</span> 
                                                <span><strong>Lampen & Leuchten:</strong> Installation und Austausch von Decken- und Wandleuchten.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">📦</span> 
                                                <span><strong>Möbelaufbau:</strong> Montage von Regalsystemen, Schränken und anderen Einrichtungsgegenständen.</span>
                                            </li>
                                        </ul>
                                    </>
                                )
                            },
                            {
                                title: "Silikon- & Fugenarbeiten",
                                desc: "Erneuerung von alten Fugen in Bad und Küche für eine hygienische und frische Optik.",
                                img: "/Kafelki/Silikon.png",
                                details: (
                                    <>
                                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Schutz vor Feuchtigkeit:</h4>
                                        <p className="text-gray-300 mb-4 font-light leading-relaxed">
                                            Alte, rissige oder schimmelige Fugen sehen nicht nur unschön aus, sondern können zu Wasserschäden führen. Wir erneuern sie professionell.
                                        </p>
                                        <ul className="space-y-3 mb-8 text-gray-300 font-light">
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">🚿</span> 
                                                <span><strong>Sanitärfugen:</strong> Erneuerung von Silikonfugen an Duschen, Badewannen i Waschbecken.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">🍳</span> 
                                                <span><strong>Küchenbereich:</strong> Abdichten von Arbeitsplatten i Fliesenspiegeln.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-emerald-500 mr-3 text-xl">🧽</span> 
                                                <span><strong>Schimmelschutz:</strong> Entfernung alter Fugenmassen und fachgerechte Neuabdichtung.</span>
                                            </li>
                                        </ul>
                                    </>
                                )
                            }
                        ].map((service, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    // ZMIANA ZACHOWANIA PO KLIKNIĘCIU: Jeśli jest 'link', przenieś tam. Jeśli jest 'details', otwórz pop-up.
                                    onClick={() => {
                                        if (service.link) {
                                            navigate(service.link);
                                        } else if (service.details) {
                                            setSelectedService(service);
                                        }
                                    }}
                                    className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-slate-900/40 border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-2 transition-colors duration-500 backdrop-blur-md cursor-pointer"
                                >
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow relative">
                                        <div className="absolute top-0 left-6 w-10 h-[2px] bg-emerald-500 group-hover:w-16 transition-all duration-300"></div>
                                        <h3 className="text-xl font-bold text-white mb-3 mt-2 tracking-wide group-hover:text-emerald-400 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                                            {service.desc}
                                        </p>

                                        <div className="mt-4 flex items-center text-emerald-400 text-sm font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <span>Mehr erfahren</span>
                                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="ak-standard" className="relative bg-slate-950 py-24 px-6 md:px-10 overflow-hidden" style={{ scrollMarginTop: '80px' }}>
                
                {/* Abstrakcyjne, luksusowe tło */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/10 blur-[150px] rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    
                    {/* Główny przekaz - Uderzenie w emocje klienta */}
                    <div className="text-center mb-16 md:mb-24">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block"
                        >
                            Das Rundum-Sorglos-Versprechen
                        </motion.span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Ihre Immobilie auf <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Autopilot.</span>
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                            Vergessen Sie unzuverlässige Dienstleister und ständige Nachkontrollen. Wir übernehmen die volle Verantwortung, denken proaktiv mit und halten Ihnen den Rücken frei – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
                        </p>
                    </div>

                    {/* 4 Filary Wartości */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                        {[
                            {
                                icon: "👁️",
                                title: "Wir sehen, was getan werden muss",
                                desc: "Kaputte Glühbirne? Ein tropfendes Rohr? Wir warten nicht auf Ihren Anruf. Unser Team meldet und behebt kleine Mängel proaktiv, bevor sie zu großen Problemen werden."
                            },
                            {
                                icon: "📈",
                                title: "Werterhalt statt nur Optik",
                                desc: "Wir putzen nicht nur oberflächlich. Durch fachgerechte Reinigung und Pflege mit professionellen Mitteln schützen wir die Bausubstanz und steigern den Wert Ihrer Immobilie langfristig."
                            },
                            {
                                icon: "🤝",
                                title: "Ein fester Ansprechpartner",
                                desc: "Keine Warteschleifen, keine wechselnden Subunternehmer. Sie kommunizieren direkt mit den Inhabern. Schnelle Entscheidungen und 100%ige Verlässlichkeit sind garantiert."
                            },
                            {
                                icon: "🔍",
                                title: "Absolute Transparenz",
                                desc: "Sie wissen immer, wofür Sie bezahlen. Keine versteckten Kosten. Auf Wunsch dokumentieren wir unsere Arbeit digital, sodass Sie auch aus der Ferne immer im Bilde sind."
                            }
                        ].map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="flex gap-6 p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-900/60 transition-all duration-300 group"
                            >
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sekcja: Jak zacząć? (Proces w 3 krokach) */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/20 rounded-[2rem] p-10 md:p-16 relative overflow-hidden">
                        
                        {/* Dekoracyjne linie w tle */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
                        
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">In 3 Schritten zur sorgenfreien Immobilie</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                            {/* Linia łącząca kroki (tylko desktop) */}
                            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-white/10 z-0">
                                <div className="absolute top-0 left-0 h-full bg-emerald-500 w-1/2"></div>
                            </div>

                            {[
                                { step: "01", title: "Anfrage senden", desc: "Kontaktieren Sie uns unverbindlich. Wir melden uns umgehend bei Ihnen zurück." },
                                { step: "02", title: "Vor-Ort-Analyse", desc: "Wir besichtigen Ihr Objekt kostenlos und erstellen ein maßgeschneidertes Konzept." },
                                { step: "03", title: "Zurücklehnen", desc: "Wir übernehmen die Arbeit. Sie genießen eine perfekt gepflegte Immobilie." }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    className="relative z-10 text-center"
                                >
                                    <div className="w-24 h-24 mx-auto bg-slate-950 border-2 border-emerald-500 rounded-full flex items-center justify-center text-3xl font-black text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                        {item.step}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                    <p className="text-gray-400 font-light text-sm md:text-base px-4">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to Action na samym dole procesu */}
                        <div className="mt-16 text-center">
                            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-emerald-500 text-slate-950 font-bold tracking-widest uppercase hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105 transition-all duration-300">
                                Jetzt Schritt 01 machen
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
            
            <section id="uberuns" className="relative bg-slate-950 py-24 px-6 overflow-hidden scroll-mt-20">
                <div className="relative z-10 max-w-6xl mx-auto">
                    
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Unsere <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Versprechen</span> an Sie
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                            Als dynamisches Unternehmen legen wir Wert auf Qualität, direkten Kontakt und höchste Kundenzufriedenheit. Ihr Objekt ist bei uns Chefsache.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {[
                            { isNumber: true, value: 100, suffix: "%", label: "Engagement", desc: "Wir behandeln Ihr Objekt wie unser eigenes", icon: "🤝" },
                            { highlight: "Direkt", label: "Ein Ansprechpartner", desc: "Persönliche Betreuung ohne Warteschleifen", icon: "👤" },
                            { highlight: "Modern", label: "Beste Ausrüstung", desc: "Effiziente und umweltschonende Technik", icon: "🛠️" },
                            { highlight: "24/7", label: "Erreichbarkeit", desc: "Schnelle Reaktion, besonders im Notfall", icon: "⚡" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                                className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">{stat.icon}</div>
                                
                                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2 drop-shadow-md min-h-[60px] flex items-center justify-center">
                                    {stat.isNumber ? (
                                        <AnimatedNumber from={0} to={stat.value} suffix={stat.suffix} />
                                    ) : (
                                        stat.highlight
                                    )}
                                </div>

                                <h4 className="text-lg font-bold text-emerald-400 mb-1">{stat.label}</h4>
                                <p className="text-sm text-gray-400 font-light">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center flex flex-col items-center">
                        <p className="text-xl text-gray-300 font-light mb-8 max-w-xl">
                            Testen Sie unseren Service. Wir erstellen Ihnen gerne ein unverbindliches und maßgeschneidertes Konzept für Ihre Immobilie.
                        </p>
                        
                        <motion.div
                            animate={{ 
                                scale: [1, 1.03, 1],
                                // ZMIANA: zielone wartości rgba w animacji pulsowania
                                boxShadow: [
                                    "0px 0px 20px rgba(16, 185, 129, 0.2)",
                                    "0px 0px 40px rgba(16, 185, 129, 0.6)",
                                    "0px 0px 20px rgba(16, 185, 129, 0.2)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="rounded-full"
                        >
                            <Link to="/contact" className="inline-block px-12 py-5 rounded-full bg-slate-900 border border-emerald-500 text-emerald-400 font-bold tracking-widest uppercase hover:bg-emerald-500 hover:text-slate-900 transition-colors duration-300">
                                Angebot Anfordern
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </section>

            <footer className="relative bg-slate-950 border-t border-white/5 pt-12 pb-8 overflow-hidden z-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

                    {/* Sekcja Logo - Wielkie i bez tła */}
                    <div className="mb-6">
                        <img 
                            src="/logo5.png" 
                            alt="Arasim & Kedzierski Gebäudeservice" 
                            className="h-32 sm:h-44 md:h-52 w-auto object-contain" 
                        />
                    </div>

                    {/* Główne Dane Kontaktowe */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12 text-gray-300">
    
                        {/* Telefon */}
                        <a href="tel:+491621940328" className="flex items-center group hover:text-emerald-400 transition-colors duration-300">
                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 mr-3 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-slate-900 transition-all duration-300">
                                <svg className="w-5 h-5 text-emerald-500 group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <span className="text-lg tracking-wide font-light">+49 162 1940328</span>
                        </a>

                        <div className="hidden md:block w-1 h-1 rounded-full bg-emerald-500/50"></div>

                        {/* Email */}
                        <a href="mailto:info@akgebaeudeservice.com" className="flex items-center group hover:text-emerald-400 transition-colors duration-300">
                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 mr-3 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-slate-900 transition-all duration-300">
                                <svg className="w-5 h-5 text-emerald-500 group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <span className="text-lg tracking-wide font-light">info@akgebaeudeservice.com</span>
                        </a>
                    </div>

                    {/* Dolna belka: Prawa i Linki prawne */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-gray-500">
                        <p className="mb-4 md:mb-0 text-center md:text-left font-light tracking-wide">
                            © {new Date().getFullYear()} Arasim & Kedzierski Gebäudeservice. Alle Rechte vorbehalten.
                        </p>
                        <div className="flex gap-8">
                            <Link to="/impressum" className="hover:text-green-500 transition-colors duration-300 tracking-widest uppercase text-[10px]">
                                Impressum
                            </Link>
                            <Link to="/datenschutz" className="hover:text-green-500 transition-colors duration-300 tracking-widest uppercase text-[10px]">
                                Datenschutz
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </footer>
            {/* --- SYSTEM POP-UP (MODAL) --- */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
                        // Zamknięcie modala po kliknięciu w tło
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col max-h-[90vh]"
                            // Zatrzymanie zamykania, gdy klikniemy w same okienko
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Nagłówek Modala ze zdjęciem w tle */}
                            <div className="relative h-40 sm:h-48 w-full overflow-hidden shrink-0">
                                <img src={selectedService.img} alt={selectedService.title} className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                                {/* Przycisk zamykania (Krzyżyk) */}
                                <button 
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-950/50 text-white border border-white/20 hover:bg-emerald-500 hover:text-slate-900 hover:border-emerald-500 transition-all duration-300 backdrop-blur-md z-10"
                                >
                                    ✕
                                </button>
                                <h3 className="absolute bottom-4 left-6 text-2xl sm:text-3xl font-bold text-white tracking-wide">
                                    {selectedService.title}
                                </h3>
                            </div>

                            {/* Treść Modala (scrollowana, jeśli tekst jest długi) */}
                            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                                {selectedService.details ? (
                                    selectedService.details
                                ) : (
                                    <p className="text-gray-400 italic text-center py-10">Weitere Details folgen in Kürze...</p>
                                )}
                                
                                {/* Przycisk Call To Action na dole Modala */}
                                <div className="mt-8 flex justify-center border-t border-white/10 pt-6">
                                    <button 
                                        onClick={() => {
                                            const serviceName = selectedService.title;
                                            setSelectedService(null);
                                            navigate('/contact', { state: {preselectedService: serviceName} });
                                        }}
                                        className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold tracking-widest uppercase text-sm hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
                                    >
                                        Angebot anfordern
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
