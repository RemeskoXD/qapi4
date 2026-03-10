'use client';

import { motion } from 'motion/react';
import { PhoneCall, CalendarCheck, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: PhoneCall,
    title: 'Zavoláte nebo nám napíšete',
  },
  {
    icon: CalendarCheck,
    title: 'Domluvíme termín bezplatné revizní kontroly',
  },
  {
    icon: Users,
    title: 'Poradíme a navrhneme profesionální řešení',
  },
  {
    icon: Clock,
    title: 'Rychlá, precizní montáž od odborníků',
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em]">Služby</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Jak to u nás funguje?
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-muted/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center relative group hover:border-secondary/30 hover:bg-muted/50 transition-all duration-500 shadow-xl"
                >
                  <div className="absolute -top-4 -left-4 text-6xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 pointer-events-none">
                    {index + 1}
                  </div>
                  <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">{step.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 bg-secondary/10 border border-secondary/20 rounded-3xl p-8 md:p-10"
        >
          <div className="text-center md:text-left">
            <p className="text-white/80 text-lg md:text-xl font-light">
              Odborné zaměření a poradenství naším kvalifikovaným<br className="hidden md:block" />
              servisním poradcem nabízíme <strong className="text-white bg-red-600 px-2 py-1 rounded ml-1 uppercase text-sm tracking-wider">Zdarma a nezávazně</strong>
            </p>
          </div>
          <Link
            href="#rezervace"
            className="px-8 py-4 bg-white text-secondary font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
          >
            Rezervujte si termín
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
