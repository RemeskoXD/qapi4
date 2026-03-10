'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Key, Phone, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background [perspective:1000px]">
      {/* Background Video with Parallax & Grid Overlay */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube-nocookie.com/embed/cMQFYabS5eU?autoplay=1&mute=1&controls=0&loop=1&playlist=cMQFYabS5eU&wmode=transparent&enablejsapi=1&rel=0&origin=https://qapi.cz"
            title="QAPI Background Video"
            allow="autoplay; encrypted-media"
            className="w-[300vw] h-[300vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-30 md:w-[150vw] md:h-[150vh] mix-blend-luminosity"
            style={{ border: 'none' }}
            tabIndex={-1}
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-90" />
        
        {/* Subtle Luxury Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 md:px-12 flex flex-col items-center text-center mt-24 md:mt-20 lg:mt-16 pb-24 md:pb-0 [transform-style:preserve-3d]">
        {/* Promotional Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 group cursor-pointer"
        >
          <Link href="#rezervace" className="inline-block">
            <div className="relative px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2 md:gap-3 rounded-full border border-white/20 bg-background/40 backdrop-blur-md hover:border-secondary/50 hover:bg-background/60 transition-all duration-300">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                <Key className="w-2.5 h-2.5 md:w-3 md:h-3 text-secondary" />
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <span className="text-white font-bold text-[9px] md:text-[10px] lg:text-xs tracking-wider uppercase">Kontrola oken ZDARMA</span>
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="text-primary text-[9px] md:text-[10px] lg:text-xs font-medium">a servis se slevou až 30%</span>
              </div>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 ml-1" />
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-white/10 bg-background/20 backdrop-blur-md mb-6 md:mb-8 lg:mb-10"
        >
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-white/80 text-[9px] md:text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.1em]">
            Více než 10 let na trhu
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[var(--text-h1)] font-bold text-white leading-[1.1] tracking-tight max-w-5xl 2xl:max-w-6xl drop-shadow-2xl flex flex-col items-center"
        >
          <span>Zastavte úniky tepla a</span>
          <span className="text-primary italic font-light tracking-normal transform hover:scale-105 transition-transform duration-500 cursor-default mt-1 md:mt-2 lg:mt-3">zabezpečte svůj domov.</span>
          <span>Definitivně.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 lg:mt-10 text-[var(--text-base)] text-white/80 max-w-2xl 2xl:max-w-3xl font-light leading-relaxed px-4 tracking-wide"
        >
          Špičková garážová vrata a profesionální servis oken, který vám ušetří tisíce za energie. 
          <strong className="text-white font-medium block mt-2">Spolehněte se na precizní technické zpracování bez kompromisů.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10 lg:mt-12 flex flex-col items-center gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 lg:gap-6 w-full sm:w-auto">
            <Link
              href="#rezervace"
              className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 lg:py-4 bg-primary text-primary-foreground font-bold text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.15em] overflow-hidden rounded-xl shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.4)] transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative flex items-center justify-center gap-2 md:gap-3 group-hover:text-primary-foreground transition-colors duration-300">
                Získat cenu do 2 minut
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </span>
            </Link>
            
            <a
              href="tel:+420702835964"
              className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 lg:py-4 bg-transparent border border-white/20 text-white font-bold text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.15em] rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-500 flex items-center justify-center gap-2 md:gap-3"
            >
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/70 group-hover:text-white transition-colors" />
              <span>Mám havárii (Volat)</span>
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-white/50 text-[10px] md:text-xs font-light tracking-wider uppercase mt-2">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-primary" /> Nezávazně</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-primary" /> Odezva do 24h</span>
          </div>
        </motion.div>
      </div>

      {/* Trust Bar (Halo Effect) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-xl border-t border-white/5 py-4 md:py-6"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden relative">
                  <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Klient" fill className="object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm">5 000+</span>
              <span className="text-white/50 text-xs uppercase tracking-wider">Úspěšných realizací</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm">4.9/5</span>
              <span className="text-white/50 text-xs uppercase tracking-wider">Hodnocení na Google</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholder for real certification logos */}
              <div className="text-white font-bold text-lg tracking-widest">SOMFY</div>
              <div className="text-white font-bold text-lg tracking-widest">VEKA</div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm">Certifikovaní</span>
              <span className="text-white/50 text-xs uppercase tracking-wider">Partneři</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
