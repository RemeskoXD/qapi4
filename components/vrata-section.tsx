'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function VrataSection() {
  return (
    <section id="vrata" className="py-20 md:py-24 lg:py-32 relative [perspective:1000px] bg-background border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg"
          >
            Garážová <span className="text-primary italic font-light">vrata</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Sekční, rolovací a průmyslová vrata špičkové kvality. Spojení bezpečnosti, izolace a dokonalého designu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] rounded-3xl overflow-hidden group shadow-[0_20px_50px_-20px_rgba(212,175,55,0.3)] border border-white/5 [transform-style:preserve-3d]"
          >
            <motion.div className="absolute inset-0 w-full h-full" style={{ transform: "translateZ(-30px)" }}>
              <Image
                src="https://qapi.cz/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-15.08.16.jpeg"
                alt="Sekční vrata"
                fill
                className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          </motion.div>
          <div className="space-y-8 [transform-style:preserve-3d]">
            <motion.h3 
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-bold text-white tracking-tight drop-shadow-lg"
            >
              Sekční <span className="text-primary italic font-light">vrata</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 font-light leading-relaxed text-lg"
            >
              Nejoblíbenější řešení pro moderní garáže. Vrata se otevírají svisle nahoru a jsou zavěšena pod stropem, 
              čímž šetří maximum prostoru. Nabízíme širokou škálu panelů, barev a imitací dřeva.
            </motion.p>
            <ul className="space-y-5">
              {['Vynikající tepelná izolace', 'Tichý a plynulý chod', 'Vysoká bezpečnost proti vloupání', 'Možnost integrovaných dveří'].map((item, index) => (
                <motion.li 
                  key={item} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 text-white/80 font-light group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link href="#rezervace" className="inline-flex items-center gap-3 text-primary uppercase tracking-[0.2em] font-bold text-xs hover:text-white transition-colors pt-8 group">
                Poptat sekční vrata 
                <span className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="space-y-8 order-2 lg:order-1 [transform-style:preserve-3d]">
            <motion.h3 
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-bold text-white tracking-tight drop-shadow-lg"
            >
              Rolovací <span className="text-primary italic font-light">vrata</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 font-light leading-relaxed text-lg"
            >
              Ideální řešení tam, kde je potřeba ušetřit místo pod stropem. Lamely se navíjejí do boxu nad otvorem, 
              což umožňuje využít celý prostor garáže.
            </motion.p>
            <ul className="space-y-5">
              {['Úspora místa pod stropem', 'Hliníkové lamely s izolací', 'Snadná údržba', 'Moderní vzhled'].map((item, index) => (
                <motion.li 
                  key={item} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 text-white/80 font-light group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link href="#rezervace" className="inline-flex items-center gap-3 text-primary uppercase tracking-[0.2em] font-bold text-xs hover:text-white transition-colors pt-8 group">
                Poptat rolovací vrata 
                <span className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] rounded-3xl overflow-hidden group order-1 lg:order-2 shadow-[0_20px_50px_-20px_rgba(212,175,55,0.3)] border border-white/5 [transform-style:preserve-3d]"
          >
            <motion.div className="absolute inset-0 w-full h-full" style={{ transform: "translateZ(-30px)" }}>
              <Image
                src="https://qapi.cz/wp-content/uploads/2025/11/Pred-1.jpg"
                alt="Rolovací vrata"
                fill
                className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1 [transform-style:preserve-3d]">
            <motion.h3 
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-bold text-white tracking-tight drop-shadow-lg"
            >
              Průmyslová <span className="text-primary italic font-light">vrata</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 font-light leading-relaxed text-lg"
            >
              Spolehlivá řešení pro výrobní haly, sklady a komerční objekty. 
              Vysoká odolnost, dlouhá životnost a možnost intenzivního používání.
            </motion.p>
            <ul className="space-y-5">
              {['Zesílená konstrukce', 'Vysoká frekvence otevírání', 'Různé typy kování', 'Možnost prosvětlovacích sekcí'].map((item, index) => (
                <motion.li 
                  key={item} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 text-white/80 font-light group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link href="#rezervace" className="inline-flex items-center gap-3 text-primary uppercase tracking-[0.2em] font-bold text-xs hover:text-white transition-colors pt-8 group">
                Poptat průmyslová vrata 
                <span className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] rounded-3xl overflow-hidden group order-1 lg:order-2 shadow-[0_20px_50px_-20px_rgba(212,175,55,0.3)] border border-white/5 [transform-style:preserve-3d]"
          >
            <motion.div className="absolute inset-0 w-full h-full" style={{ transform: "translateZ(-30px)" }}>
              <Image
                src="https://qapi.cz/wp-content/uploads/2025/10/prumyslova-vrata-qapi.jpg"
                alt="Průmyslová vrata"
                fill
                className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
