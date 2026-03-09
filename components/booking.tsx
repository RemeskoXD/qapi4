'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { cs } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import { CheckCircle2, ChevronRight, MapPin, Calendar as CalendarIcon, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

export function Booking() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [service, setService] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  
  const availableTimes = ['08:00', '09:30', '11:00', '13:00', '14:30', '16:00'];

  const serviceOptions: Record<string, { types: { id: string, label: string, img: string }[], colors?: { id: string, label: string, hex: string }[] }> = {
    'Garážová vrata': {
      types: [
        { id: 'sekcni', label: 'Sekční vrata', img: 'https://qapi.cz/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-15.08.16.jpeg' },
        { id: 'rolovaci', label: 'Rolovací vrata', img: 'https://qapi.cz/wp-content/uploads/2025/10/IMG_6817.jpg' },
        { id: 'dvoukridla', label: 'Dvoukřídlá vrata', img: 'https://qapi.cz/wp-content/uploads/2025/10/po-2.jpg' },
      ],
      colors: [
        { id: 'antracit', label: 'Antracit', hex: '#333333' },
        { id: 'bila', label: 'Bílá', hex: '#FFFFFF' },
        { id: 'zlaty-dub', label: 'Zlatý dub', hex: '#8B5A2B' },
        { id: 'orech', label: 'Ořech', hex: '#5C4033' },
        { id: 'mahagon', label: 'Mahagon', hex: '#4C0000' },
      ]
    },
    'Servis oken': {
      types: [
        { id: 'plastova', label: 'Plastová okna', img: 'https://qapi.cz/wp-content/uploads/2025/10/IMG_8265.jpg' },
        { id: 'drevena', label: 'Dřevěná okna', img: 'https://qapi.cz/wp-content/uploads/2025/10/IMG_8266-1536x864.jpg' },
        { id: 'hlinikova', label: 'Hliníková okna', img: 'https://qapi.cz/wp-content/uploads/2025/10/po-2.jpg' },
      ]
    },
    'Stínící technika': {
      types: [
        { id: 'zaluzie', label: 'Venkovní žaluzie', img: 'https://qapi.cz/wp-content/uploads/2025/10/4.jpg' },
        { id: 'rolety', label: 'Venkovní rolety', img: 'https://qapi.cz/wp-content/uploads/2025/10/10.jpg' },
        { id: 'markyzy', label: 'Markýzy', img: 'https://qapi.cz/wp-content/uploads/2025/10/IMG_6817.jpg' },
      ],
      colors: [
        { id: 'stribrna', label: 'Stříbrná', hex: '#C0C0C0' },
        { id: 'antracit', label: 'Antracit', hex: '#333333' },
        { id: 'bila', label: 'Bílá', hex: '#FFFFFF' },
      ]
    },
    'Průmyslová vrata': {
      types: [
        { id: 'sekcni-prum', label: 'Sekční průmyslová', img: 'https://qapi.cz/wp-content/uploads/2025/10/prumyslova-vrata-qapi.jpg' },
        { id: 'rychlobezna', label: 'Rychloběžná', img: 'https://qapi.cz/wp-content/uploads/2025/10/vrata-qapi-uvod-original.jpg' },
      ],
      colors: [
        { id: 'modra', label: 'Modrá', hex: '#003366' },
        { id: 'cervena', label: 'Červená', hex: '#CC0000' },
        { id: 'stribrna', label: 'Stříbrná', hex: '#C0C0C0' },
        { id: 'antracit', label: 'Antracit', hex: '#333333' },
      ]
    }
  };

  const handleNext = () => setStep(s => Math.min(s + 1, 5));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  return (
    <section id="rezervace" className="py-32 bg-background relative overflow-hidden [perspective:1000px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto [transform-style:preserve-3d]">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tighter drop-shadow-lg"
            >
              Rezervujte si <span className="text-primary italic font-light">termín</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="mt-6 text-base sm:text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
            >
              Vyberte si službu, čas a zadejte své údaje. Náš tým se vám bude plně věnovat.
            </motion.p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8 md:mb-12 relative">
            <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-white/5 -z-10 shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
            {[
              { num: 1, label: 'Služba' },
              { num: 2, label: 'Detaily' },
              { num: 3, label: 'Termín' },
              { num: 4, label: 'Údaje' },
              { num: 5, label: 'Hotovo' }
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center gap-2 md:gap-3 bg-muted px-1 sm:px-2 md:px-4">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 shadow-lg text-xs sm:text-sm md:text-base ${
                  step >= s.num ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.5)] scale-110' : 'bg-background border border-white/10 text-white/40'
                }`}>
                  {step > s.num ? <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6" /> : s.num}
                </div>
                <span className={`text-[9px] sm:text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest font-bold hidden sm:block ${
                  step >= s.num ? 'text-primary drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]' : 'text-white/40'
                }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Form Container */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -50, rotateY: -15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-muted/30 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] [transform-style:preserve-3d]"
          >
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-6" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-2xl font-display font-bold text-white mb-8">Jakou službu poptáváte?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Garážová vrata', 'Servis oken', 'Stínící technika', 'Průmyslová vrata'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setService(item)}
                      className={`p-6 rounded-2xl border text-left transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                        service === item 
                          ? 'border-primary bg-primary/10 text-primary shadow-[0_0_20px_rgba(212,175,55,0.2)]' 
                          : 'border-white/5 hover:border-primary/30 text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="font-bold text-lg">{item}</div>
                      <div className="text-sm opacity-60 mt-2 font-light">Profesionální řešení na míru</div>
                    </button>
                  ))}
                </div>
                <div className="mt-8 md:mt-12 flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={!service}
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
                  >
                    Pokračovat <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="space-y-8" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-2xl font-display font-bold text-white mb-8">Upřesněte detaily</h3>
                
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-white">Vyberte typ</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {serviceOptions[service]?.types.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`relative overflow-hidden rounded-2xl border text-left transition-all duration-500 transform hover:-translate-y-1 h-32 group ${
                          selectedType === type.id 
                            ? 'border-primary shadow-[0_0_30px_rgba(212,175,55,0.3)]' 
                            : 'border-white/5 hover:border-primary/30'
                        }`}
                      >
                        <Image src={type.img} alt={type.label} fill className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                        <div className="absolute bottom-4 left-4 font-bold text-lg text-white z-10">{type.label}</div>
                        {selectedType === type.id && (
                          <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10">
                            <CheckCircle2 className="w-4 h-4 text-background" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {serviceOptions[service]?.colors && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-bold text-white">Vyberte barvu</h4>
                    <div className="flex flex-wrap gap-4">
                      {serviceOptions[service].colors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => setSelectedColor(color.id)}
                          className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                            selectedColor === color.id ? 'scale-110' : 'hover:scale-105 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <div 
                            className={`w-12 h-12 rounded-full border-2 shadow-lg ${selectedColor === color.id ? 'border-primary' : 'border-white/20'}`}
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className={`text-xs ${selectedColor === color.id ? 'text-primary font-bold' : 'text-white/60'}`}>
                            {color.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 md:mt-12 flex flex-col-reverse sm:flex-row justify-between gap-4">
                  <button
                    onClick={handlePrev}
                    className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:border-white/30 hover:bg-white/5 transition-colors text-center"
                  >
                    Zpět
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!selectedType || (serviceOptions[service]?.colors && !selectedColor)}
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
                  >
                    Pokračovat <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <div className="space-y-8" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-2xl font-display font-bold text-white mb-8">Vyberte si termín</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="flex justify-center bg-muted/30 p-4 md:p-6 rounded-2xl border border-white/5 shadow-inner overflow-x-auto">
                    <style>{`
                      .rdp { --rdp-cell-size: 35px; --rdp-accent-color: var(--color-primary); --rdp-background-color: var(--color-background); margin: 0; }
                      @media (min-width: 768px) { .rdp { --rdp-cell-size: 40px; } }
                      .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover { background-color: var(--color-primary); color: var(--color-background); font-weight: bold; box-shadow: 0 0 15px rgba(212,175,55,0.5); }
                      .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { background-color: rgba(255,255,255,0.1); }
                      .rdp-day_today { font-weight: bold; color: var(--color-primary); }
                    `}</style>
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      locale={cs}
                      disabled={{ before: new Date() }}
                      className="text-white"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Dostupné časy
                    </h4>
                    {selectedDate ? (
                      <div className="grid grid-cols-2 gap-4">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-4 rounded-xl border text-center transition-all duration-300 transform hover:-translate-y-1 ${
                              selectedTime === time
                                ? 'border-primary bg-primary text-primary-foreground font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                                : 'border-white/5 hover:border-primary/50 text-white hover:bg-white/5'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-white/40 font-light border border-dashed border-white/10 rounded-2xl p-6 text-center bg-muted/10">
                        Nejprve prosím vyberte datum v kalendáři
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-8 md:mt-12 flex flex-col-reverse sm:flex-row justify-between gap-4">
                  <button
                    onClick={handlePrev}
                    className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:border-white/30 hover:bg-white/5 transition-colors text-center"
                  >
                    Zpět
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!selectedDate || !selectedTime}
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
                  >
                    Pokračovat <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: User Details */}
            {step === 4 && (
              <div className="space-y-8" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-2xl font-display font-bold text-white mb-8">Vaše údaje</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 flex items-center gap-2 uppercase tracking-widest">
                      <User className="w-4 h-4 text-primary" /> Jméno a příjmení
                    </label>
                    <input type="text" className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all placeholder:text-white/20 shadow-inner" placeholder="Jan Novák" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 flex items-center gap-2 uppercase tracking-widest">
                      <Phone className="w-4 h-4 text-primary" /> Telefon
                    </label>
                    <input type="tel" className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all placeholder:text-white/20 shadow-inner" placeholder="+420 123 456 789" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 flex items-center gap-2 uppercase tracking-widest">
                      <Mail className="w-4 h-4 text-primary" /> E-mail
                    </label>
                    <input type="email" className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all placeholder:text-white/20 shadow-inner" placeholder="jan@novak.cz" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 flex items-center gap-2 uppercase tracking-widest">
                      <MapPin className="w-4 h-4 text-primary" /> Adresa realizace
                    </label>
                    <input type="text" className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all placeholder:text-white/20 shadow-inner" placeholder="Ulice, Město, PSČ" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-white/60 flex items-center gap-2 uppercase tracking-widest">
                      <MessageSquare className="w-4 h-4 text-primary" /> Poznámka (volitelné)
                    </label>
                    <textarea rows={3} className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all resize-none placeholder:text-white/20 shadow-inner" placeholder="Specifikujte vaše požadavky..." />
                  </div>
                </div>

                <div className="mt-8 md:mt-12 flex flex-col-reverse sm:flex-row justify-between gap-4">
                  <button
                    onClick={handlePrev}
                    className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:border-white/30 hover:bg-white/5 transition-colors text-center"
                  >
                    Zpět
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
                  >
                    Dokončit rezervaci <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <div className="text-center py-12 space-y-6" style={{ transform: "translateZ(20px)" }}>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, duration: 1 }}
                  className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/50 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                >
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </motion.div>
                <h3 className="text-3xl font-display font-bold text-white drop-shadow-lg">Rezervace úspěšná</h3>
                <p className="text-white/60 font-light max-w-md mx-auto leading-relaxed">
                  Děkujeme za vaši rezervaci. Na zadaný e-mail jsme vám zaslali potvrzení. 
                  Náš technik se s vámi brzy spojí.
                </p>
                <div className="pt-8">
                  <button
                    onClick={() => {
                      setStep(1);
                      setSelectedDate(undefined);
                      setSelectedTime(null);
                      setService('');
                      setSelectedType('');
                      setSelectedColor('');
                    }}
                    className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:border-white/30 hover:bg-white/5 transition-colors"
                  >
                    Nová rezervace
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
