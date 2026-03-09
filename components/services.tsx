'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 'vrata',
    title: 'Garážová Vrata',
    description: 'Sekční, rolovací a průmyslová vrata špičkové kvality s důrazem na bezpečnost a design.',
    image: 'https://qapi.cz/wp-content/uploads/2025/11/Pred-1.jpg',
    link: '#vrata',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
  },
  {
    id: 'servis',
    title: 'Servis Oken',
    description: 'Profesionální údržba, seřízení a opravy pro maximální životnost vašich oken.',
    image: 'https://qapi.cz/wp-content/uploads/2025/10/IMG_8266-1536x864.jpg',
    link: '#servis-oken',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
  {
    id: 'stinici',
    title: 'Stínící Technika',
    description: 'Žaluzie, rolety a markýzy pro dokonalou kontrolu světla a tepelný komfort.',
    image: 'https://qapi.cz/wp-content/uploads/2025/10/10.jpg',
    link: '#stinici',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
  },
];

export function Services() {
  return (
    <section id="sluzby" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.05),transparent_50%)]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tighter"
            >
              Naše <span className="text-primary italic font-light">portfolio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="mt-4 md:mt-8 text-base sm:text-lg text-white/60 font-light leading-relaxed"
            >
              Od návrhu až po realizaci. Nabízíme komplexní řešení pro váš domov či firmu, 
              kde se snoubí funkčnost s estetikou.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Link
              href="#rezervace"
              className="inline-flex items-center gap-3 text-primary uppercase tracking-[0.2em] font-bold text-xs hover:text-white transition-colors group"
            >
              Nezávazná poptávka
              <span className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-white/30 transition-colors bg-primary/10 group-hover:bg-primary/20">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[350px] sm:auto-rows-[400px] md:auto-rows-[450px] [perspective:2000px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.01, rotateY: index % 2 === 0 ? 1 : -1, rotateX: 1 }}
              className={`group relative overflow-hidden bg-muted/40 ${service.colSpan} ${service.rowSpan} rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5 hover:border-primary/20 transition-all duration-700 [transform-style:preserve-3d]`}
            >
              <Link href={service.link} className="absolute inset-0 z-20" />
              
              <motion.div className="absolute inset-0 w-full h-full" style={{ transform: "translateZ(-30px)" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-[0.16,1,0.3,1] group-hover:scale-105 opacity-50 group-hover:opacity-70 mix-blend-luminosity group-hover:mix-blend-normal"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10" />
              
              <div className="absolute inset-0 z-10 p-6 md:p-10 flex flex-col justify-end" style={{ transform: "translateZ(30px)" }}>
                <div className="transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight drop-shadow-lg">
                    {service.title}
                  </h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-700 ease-[0.16,1,0.3,1]">
                    <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-md pb-2 md:pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center border border-white/10 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:border-primary/50 group-hover:bg-primary/20 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
