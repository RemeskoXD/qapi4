'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function KontaktSection() {
  return (
    <section id="kontakt" className="py-32 relative [perspective:1000px] bg-background border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg"
          >
            <span className="text-primary italic font-light">Kontaktujte</span> nás
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Jsme tu pro vás. Neváhejte se na nás obrátit s jakýmkoliv dotazem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Phone, title: 'Telefon', value: '+420 702 835 964', link: 'tel:+420702835964' },
            { icon: Mail, title: 'E-mail', value: 'info@qapi.cz', link: 'mailto:info@qapi.cz' },
            { icon: MapPin, title: 'Adresa', value: 'Působíme v rámci celé ČR', link: '#' },
            { icon: Clock, title: 'Otevírací doba', value: 'Po - Pá: 8:00 - 17:00', link: '#' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a 
                key={i} 
                href={item.link} 
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.02, rotateX: 5, rotateY: -5 }}
                className="bg-muted border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/30 transition-all duration-300 group shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.2)] [transform-style:preserve-3d]"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]" style={{ transform: "translateZ(20px)" }}>
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-white font-display font-bold text-xl mb-2" style={{ transform: "translateZ(10px)" }}>{item.title}</h3>
                <p className="text-white/60 font-light" style={{ transform: "translateZ(5px)" }}>{item.value}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
