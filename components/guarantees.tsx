'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Clock, Wrench, ThumbsUp } from 'lucide-react';

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Záruka až 5 let',
    description: 'Na naše produkty a montáž poskytujeme prodlouženou záruku.',
  },
  {
    icon: Clock,
    title: 'Servis do 24 hodin',
    description: 'V případě havárie nebo poruchy přijedeme do druhého dne.',
  },
  {
    icon: Wrench,
    title: 'Česká výroba',
    description: 'Spolupracujeme s prověřenými českými výrobci a dodavateli.',
  },
  {
    icon: ThumbsUp,
    title: '10+ let zkušeností',
    description: 'Tisíce úspěšných realizací a spokojených zákazníků.',
  },
];

export function Guarantees() {
  return (
    <section className="py-16 bg-background relative border-t border-white/5 z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-muted/20 backdrop-blur-xl border border-white/5 hover:border-primary/20 hover:bg-muted/40 transition-all duration-700 group shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-background/50 flex items-center justify-center mb-6 group-hover:bg-primary/10 border border-white/10 group-hover:border-primary/30 transition-colors duration-700 shadow-inner">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
