import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();

    const [formData, setFormData] = useState({
        is_company: true,
        service_type: location.state?.preselectedService || '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        attachments: null
    });

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, files } = e.target;
        let { value } = e.target;

        if (name === 'phone') {
            value = value
                .replace(/[^\d+\s]/g, '')
                .replace(/(?!^)\+/g, '');
        }

        if (name === 'attachments') {
            const maxSize = 15 * 1024 * 1024;
            const allowedTypes = [
                'image/png',
                'image/jpeg',
                'image/jpg',
                'image/gif',
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ];

            const newFiles = Array.from(files).filter(file => {
                if (!allowedTypes.includes(file.type)) {
                    alert(`Die Datei "${file.name}" hat ein falsches Format.`);
                    return false;
                }
                if (file.size > maxSize) {
                    alert(`Die Datei "${file.name}" überschreitet das Limit von 15MB.`);
                    return false;
                }
                return true;
            });

            const updatedFiles = formData.attachments
                ? [...formData.attachments, ...newFiles]
                : newFiles;

            if (updatedFiles.length > 3) {
                alert('Maximal 3 Dateien erlaubt.');
                return;
            }

            setFormData({ ...formData, attachments: updatedFiles });

        } else if (name === 'is_company') {
            setFormData({ ...formData, [name]: value === 'Gewerblich' });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleRemoveAttachment = (indexToRemove) => {
        const updatedFiles = formData.attachments.filter((_, index) => index !== indexToRemove);
        setFormData({ ...formData, attachments: updatedFiles });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        setError('');

        const form = new FormData();
        for (const key in formData) {
            if (key === 'attachments' && formData.attachments) {
                for (let file of formData.attachments) {
                    form.append('attachments', file);
                }
            } else {
                form.append(key, formData[key]);
            }
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: form 
            });

            let result = {};
            try {
                result = await response.json();
            } catch (error) {
                console.warn("Brak danych JSON w odpowiedzi:", error);
            }

            if (response.ok) {
                setModalMessage("Vielen Dank für Ihre Anfrage. Wir melden uns so schnell wie möglich bei Ihnen.");
                setShowModal(true);
            } else {
                setModalMessage(result.error || "Fehler beim Absenden des Formulars.");
                setShowModal(true);
            }
        } catch (err) {
            console.error("Fehler:", err);
            setError("Es ist ein Verbindungsfehler aufgetreten.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Wspólne klasy dla inputów, żeby kod był czysty
    const inputClasses = "w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300";

    return (
        <div className="relative min-h-screen bg-slate-950 selection:bg-cyan-500/30 font-sans flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6">
            
            {/* Tło - Świetlne akcenty */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Powrót na stronę główną (Glassmorphism Navbar Style) */}
            <header className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
                <div className="bg-slate-950/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group">
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        <span className="text-sm font-bold tracking-widest uppercase">Startseite</span>
                    </Link>
                </div>
            </header>

            <div className="relative z-10 w-full max-w-6xl mx-auto mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* LEWA KOLUMNA: Informacje Kontaktowe (Zastępstwo dla KontaktInfo.jsx) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
                                Lassen Sie uns <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">sprechen.</span>
                            </h1>
                            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                                Haben Sie Fragen zu unseren Leistungen oder benötigen Sie ein individuelles Angebot? Wir sind für Sie da – schnell, direkt und professionell.
                            </p>
                        </div>

                        {/* Karty kontaktowe w stylu Glassmorphism */}
                        <div className="flex flex-col gap-4 mt-8">
                            <a href="tel:+491621940328" className="flex items-center gap-6 p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300 group">
                                <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Telefon</p>
                                    <p className="text-xl text-white font-medium group-hover:text-cyan-400 transition-colors">+49 162 1940328</p>
                                </div>
                            </a>

                            <a href="mailto:info@akgebaeudeservice.com" className="flex items-center gap-6 p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 hover:bg-white/5 transition-all duration-300 group">
                                <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">E-Mail</p>
                                    <p className="text-lg sm:text-xl text-white font-medium group-hover:text-cyan-400 transition-colors truncate">info@akgebaeudeservice.com</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* PRAWA KOLUMNA: Szklany Formularz */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col space-y-5">
                            {error && <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-sm">{error}</div>}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <select name="is_company" value={formData.is_company ? 'Gewerblich' : 'Privatperson'} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer`}>
                                    <option value="Gewerblich" className="bg-slate-900 text-white">Gewerblich</option>
                                    <option value="Privatperson" className="bg-slate-900 text-white">Privatperson</option>
                                </select>

                                <select name="service_type" value={formData.service_type} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer`}>
                                    <option value="" className="bg-slate-900 text-gray-400">-- Dienstleistung --</option>
                                    <option value="Hausmeisterservice" className="bg-slate-900 text-white">Hausmeisterservice</option>
                                    <option value="Büroreinigung" className="bg-slate-900 text-white">Büroreinigung</option>
                                    <option value="Reinigungsarbeiten in der Höhe" className="bg-slate-900 text-white">Reinigungsarbeiten in der Höhe</option>
                                    <option value="Grünflächenpflege" className="bg-slate-900 text-white">Grünflächenpflege</option>
                                    <option value="Graffitientfernung" className="bg-slate-900 text-white">Graffitientfernung</option>
                                    <option value="Winterdienst" className="bg-slate-900 text-white">Winterdienst</option>
                                    <option value="Entrümpelung & Umzug" className="bg-slate-900 text-white">Entrümpelung & Umzug</option>
                                    <option value="Fensterreinigung innen & außen" className="bg-slate-900 text-white">Fensterreinigung innen & außen</option>
                                    <option value="Andere" className="bg-slate-900 text-white">Andere</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input type="text" name="first_name" placeholder="Vorname" required value={formData.first_name} disabled={isSubmitting} onChange={handleChange} className={inputClasses} />
                                <input type="text" name="last_name" placeholder="Nachname" required value={formData.last_name} disabled={isSubmitting} onChange={handleChange} className={inputClasses} />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input type="email" name="email" placeholder="E-Mail" required value={formData.email} disabled={isSubmitting} onChange={handleChange} className={inputClasses} />
                                <input type="tel" name="phone" placeholder="Telefonnummer (Optional)" value={formData.phone} disabled={isSubmitting} onChange={handleChange} className={inputClasses} />
                            </div>

                            <textarea name="message" placeholder="Ihre Nachricht an uns..." value={formData.message} disabled={isSubmitting} onChange={handleChange} rows={4} className={`${inputClasses} resize-none custom-scrollbar`} />

                            {/* Nowoczesne dodawanie plików */}
                            <div className="w-full">
                                <label className="flex items-center justify-center gap-3 w-full border-2 border-dashed border-white/20 rounded-xl p-4 cursor-pointer hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group">
                                    <svg className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                    <span className="text-gray-400 font-medium group-hover:text-cyan-400 transition-colors">Dateien hinzufügen (Bilder, PDFs...)</span>
                                    <input type="file" name="attachments" multiple onChange={handleChange} disabled={isSubmitting} className="hidden" />
                                </label>

                                {/* Lista dodanych plików */}
                                {formData.attachments && formData.attachments.length > 0 && (
                                    <ul className="mt-4 space-y-2">
                                        {formData.attachments.map((file, index) => (
                                            <motion.li
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                key={index}
                                                className="flex items-center justify-between px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                                            >
                                                <span className="truncate max-w-[80%]">
                                                    {file.name}
                                                </span>

                                                <button
                                                    type="button"
                                                    disabled={isSubmitting}
                                                    onClick={() => handleRemoveAttachment(index)}
                                                    className={`
                                                        text-red-400 transition-all p-1
                                                        ${
                                                            isSubmitting
                                                                ? 'opacity-40 cursor-not-allowed'
                                                                : 'hover:text-red-300 hover:scale-110'
                                                        }
                                                    `}
                                                >
                                                    <svg
                                                        className="w-4 h-4 pointer-events-none"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </motion.li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Przycisk Submit z animacją pulsowania */}
                            <motion.button
                                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                type="submit"
                                disabled={isSubmitting}
                                className={`
                                    w-full mt-4 py-4 rounded-xl
                                    bg-gradient-to-r from-cyan-500 to-blue-600
                                    text-white font-bold tracking-widest uppercase
                                    shadow-[0_0_20px_rgba(6,182,212,0.3)]
                                    transition-all duration-300
                                    flex items-center justify-center gap-3
                                    ${
                                        isSubmitting
                                            ? 'opacity-70 cursor-not-allowed'
                                            : 'hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]'
                                    }
                                `}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Wird gesendet...</span>
                                    </>
                                ) : (
                                    'Anfrage senden'
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* --- MROCZNY MODAL POTWIERDZENIA --- */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-8 max-w-md w-full text-center shadow-[0_0_50px_rgba(6,182,212,0.15)]"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Nachricht gesendet!</h3>
                            <p className="text-gray-400 mb-8">{modalMessage}</p>
                            <button 
                                onClick={() => { setShowModal(false); navigate('/'); }}
                                className="w-full py-3 rounded-full bg-slate-800 border border-cyan-500/50 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-slate-950 transition-colors duration-300"
                            >
                                Zurück zur Startseite
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};