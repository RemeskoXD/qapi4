'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Key } from 'lucide-react';
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
      <div className="container relative z-10 px-4 sm:px-6 md:px-12 flex flex-col items-center text-center mt-24 md:mt-20 pb-32 md:pb-0 [transform-style:preserve-3d]">
        {/* Promotional Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 group cursor-pointer"
        >
          <Link href="#rezervace" className="inline-block">
            <div className="relative px-4 py-2 md:px-5 md:py-2 flex items-center gap-2 md:gap-3 rounded-full border border-white/20 bg-background/40 backdrop-blur-md hover:border-secondary/50 hover:bg-background/60 transition-all duration-300">
              <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                <Key className="w-3 h-3 text-secondary" />
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <span className="text-white font-bold text-[10px] md:text-xs tracking-wider uppercase">Kontrola oken ZDARMA</span>
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="text-primary text-[10px] md:text-xs font-medium">a servis se slevou až 30%</span>
              </div>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 ml-1" />
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-background/20 backdrop-blur-md mb-8 md:mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-white/60 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em]">
            Poctivá česká vrata na míru
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[140px] font-bold text-white leading-[0.9] tracking-tight max-w-7xl drop-shadow-2xl flex flex-col items-center"
        >
          <span>Dokonalost v</span>
          <span className="text-primary italic font-light tracking-normal transform hover:scale-105 transition-transform duration-500 cursor-default mt-2 md:mt-4">každém detailu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 text-base sm:text-lg md:text-2xl text-white/70 max-w-3xl font-light leading-relaxed px-4 tracking-wide"
        >
          Špičková garážová vrata, designová stínící technika a profesionální servis oken. 
          Spojujeme inovativní technologie s nadčasovým designem pro váš domov.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="#rezervace"
            className="group relative w-full sm:w-auto px-8 md:px-10 py-4 bg-primary text-primary-foreground font-bold text-xs md:text-sm uppercase tracking-[0.15em] overflow-hidden rounded-xl shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.4)] transition-all duration-500 transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative flex items-center justify-center gap-3 group-hover:text-primary-foreground transition-colors duration-300">
              Nezávazná poptávka
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </span>
          </Link>
          <Link
            href="#sluzby"
            className="group w-full sm:w-auto px-8 md:px-10 py-4 bg-background/50 backdrop-blur-md border border-white/20 text-white font-bold text-xs md:text-sm uppercase tracking-[0.15em] hover:border-white/40 hover:bg-background/80 transition-all duration-500 rounded-xl shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 text-center"
          >
            Prohlédnout produkty
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 z-20 [@media(max-height:700px)]:hidden"
      >
        <span className="text-xs text-white/40 uppercase tracking-[0.3em] font-bold">Objevte více</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center p-2 bg-muted/30 backdrop-blur-sm"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
