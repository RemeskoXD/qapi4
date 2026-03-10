'use client';

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function MapSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 relative bg-background border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_70%)]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
              Kde působíme
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Působíme po celé <span className="text-primary italic font-light">ČR</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-white/60 font-light max-w-2xl mx-auto"
          >
            Ať už jste z Prahy, Brna, Ostravy nebo menšího města, naši technici jsou připraveni vyrazit k vám.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_-20px_rgba(212,175,55,0.15)] bg-muted/20 backdrop-blur-xl p-4"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden relative bg-black/50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660505.4124976764!2d13.19515664152526!3d49.74205937142722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948fd7dd8243%3A0x2400af0f66164098!2zxIxlc2vDoSByZXB1Ymxpa2E!5e0!3m2!1scs!2scz!4v1709845123456!5m2!1scs!2scz" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%) contrast(120%)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(17,24,39,0.8)_100%)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
