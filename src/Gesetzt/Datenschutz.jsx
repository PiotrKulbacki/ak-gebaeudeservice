import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Datenschutz() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative min-h-screen bg-slate-950 selection:bg-emerald-500/30 font-sans flex flex-col items-center py-20 px-4 sm:px-6 overflow-hidden">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

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
                    Datenschutz
                </h1>

                <div className="space-y-8 text-gray-300 font-light leading-relaxed">
                    <p className="text-lg">
                        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Hier informieren wir Sie gemäß Art. 13 DSGVO über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten bei der Nutzung unserer Website. Unsere Website kann grundsätzlich ohne Registrierung oder Erstellung eines Benutzerkontos genutzt werden.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">1. Verantwortliche Stelle</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/5 rounded-2xl p-6 border border-white/5">
                            <div>
                                <p className="font-bold text-white mb-2">Arasim & Kędzierski Gebäudeservice</p>
                                <p>Patryk Kędzierski<br />Melli-Beese-Str. 68<br />12487 Berlin<br />Deutschland</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-2"><br className="hidden sm:block"/></p>
                                <p>Samuel Arasim<br />Färberstr. 12<br />12555 Berlin<br />Deutschland</p>
                                <div className="mt-4">
                                    <p>E-Mail: <a href="mailto:info@akgebaeudeservice.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">info@akgebaeudeservice.com</a></p>
                                    <p>Telefon: <a href="tel:+491621940328" className="text-emerald-400 hover:text-emerald-300 transition-colors">+49 162 1940328</a></p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">2. SSL- bzw. TLS-Verschlüsselung</h2>
                        <p>
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns über unser Kontaktformular senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">3. Hosting und Infrastruktur (Vercel)</h2>
                        <p className="mb-4">
                            Unsere Website wird bei <strong>Vercel</strong> gehostet (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA).
                        </p>
                        <p className="mb-4">
                            Beim Besuch unserer Website erfasst Vercel automatisch Informationen in sogenannten Server-Log-Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>
                        <ul className="list-none space-y-2 ml-2 mb-4">
                            {[
                                "IP-Adresse des zugreifenden Rechners",
                                "Datum und Uhrzeit des Abrufs",
                                "Name und URL der abgerufenen Datei",
                                "Website, von der aus der Zugriff erfolgt (Referrer-URL)",
                                "Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-gray-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p>
                            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines reibungslosen Verbindungsaufbaus und der Systemsicherheit. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">4. Vercel Analytics & Speed Insights</h2>
                        <p>
                            Wir nutzen die Analysedienste von Vercel, um die Geschwindigkeit und Performance unserer Website zu messen und anonyme Besucherstatistiken zu erstellen. Dabei werden keine personenbezogenen Daten (wie vollständige IP-Adressen) dauerhaft gespeichert, die eine direkte Identifizierung des Nutzers ermöglichen. Die Verarbeitung dient unserem berechtigten Interesse an der fortlaufenden Optimierung und fehlerfreien Darstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">5. Kontaktformular, Dateiupload und E-Mail-Kommunikation</h2>
                        <p className="mb-4">
                            Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Vorname, Nachname, E-Mail, ggf. Telefonnummer, Nachrichtentext) sowie <strong>sämtliche von Ihnen freiwillig hochgeladenen Dateien (Anhänge)</strong> zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                        </p>
                        <p className="mb-4 font-medium text-emerald-300">
                            Wichtiger Hinweis zum Dateiupload:
                        </p>
                        <p className="mb-4 italic border-l-2 border-emerald-500 pl-4 py-1">
                            Bitte laden Sie keine Dokumente mit besonders sensiblen Daten (z. B. Gesundheitsdaten, private vertrauliche Dokumente) hoch. Die von Ihnen übermittelten Dateien werden ausschließlich zur Erstellung eines Angebots bzw. Bearbeitung Ihres Anliegens verwendet und nicht öffentlich zugänglich gemacht.
                        </p>
                        <p className="mb-4">
                            Der E-Mail-Versand und Empfang erfolgt über die gesicherten Server von <strong>Google Workspace</strong> (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland), mit der wir einen Vertrag zur Auftragsverarbeitung abgeschlossen haben.
                        </p>
                        <p>
                            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen (z.B. Angebotserstellung) erforderlich ist. Wir speichern Ihre Daten nur so lange, wie es für die Bearbeitung Ihrer Anfrage oder aufgrund gesetzlicher Aufbewahrungsfristen (z. B. steuerrechtliche Pflichten bei Auftragserteilung) erforderlich ist.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">6. Cookies</h2>
                        <p>
                            Auf dieser Website verwenden wir ausschließlich technisch notwendige Cookies, die für den reibungslosen Betrieb der Seite unerlässlich sind. Es erfolgt keine Speicherung oder Auswertung personenbezogener Daten durch Cookies zu Analyse- oder Werbezwecken Dritter (kein Google Analytics, Meta Pixel o.ä.).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">7. Ihre Rechte nach DSGVO</h2>
                        <p className="mb-4">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche:</p>
                        <ul className="list-none space-y-2 ml-2">
                            {[
                                "Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und Zweck der Datenverarbeitung (Art. 15 DSGVO)",
                                "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                                "Löschung Ihrer Daten (Art. 17 DSGVO)",
                                "Einschränkung der Datenverarbeitung (Art. 18 DSGVO)",
                                "Datenübertragbarkeit (Art. 20 DSGVO)",
                                "Widerspruch gegen die künftige Verarbeitung Ihrer Daten (Art. 21 DSGVO)"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start text-gray-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">
                            Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu (Art. 77 DSGVO). Für die Ausübung Ihrer Rechte können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 border-b border-white/10 pb-2">8. Aktualisierung dieser Hinweise</h2>
                        <p>
                            Diese Datenschutzerklärung wurde zuletzt im Mai 2026 aktualisiert. Änderungen aufgrund technischer Entwicklungen oder gesetzlicher Vorgaben sind jederzeit möglich.
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