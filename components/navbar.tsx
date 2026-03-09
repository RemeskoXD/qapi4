'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vrata', href: '#vrata' },
    { name: 'Servis oken', href: '#servis-oken' },
    { name: 'Stínící technika', href: '#stinici' },
    { name: 'O nás', href: '#o-nas' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 [perspective:1000px] ${
        isScrolled || isMobileMenuOpen ? 'bg-background/80 backdrop-blur-2xl border-b border-white/5 py-3 md:py-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)]' : 'bg-gradient-to-b from-background/80 via-background/40 to-transparent py-4 md:py-8'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between relative [transform-style:preserve-3d]">
        <Link href="/" className="flex items-center gap-2 group z-10">
          <motion.div 
            whileHover={{ scale: 1.05, rotateY: 10 }}
            className="relative w-[160px] h-[48px] sm:w-[180px] sm:h-[54px] md:w-[224px] md:h-[64px] transition-transform duration-300"
          >
            <Image
              src="https://qapi.cz/wp-content/uploads/2025/10/Logo-Bile.png"
              alt="QAPI Logo"
              fill
              className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2 w-full max-w-2xl pointer-events-none">
          <div className="flex items-center gap-8 pointer-events-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[11px] font-bold text-white/90 hover:text-primary transition-colors uppercase tracking-[0.25em] group overflow-hidden"
              >
                <motion.span whileHover={{ y: -2 }} className="inline-block transition-transform duration-300">
                  {link.name}
                </motion.span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-6 z-10">
          <a href="tel:+420702835964" className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors group">
            <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="transition-transform duration-300">
              <Phone className="w-4 h-4 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] text-secondary" />
            </motion.div>
            <span className="text-sm font-bold tracking-widest">+420 702 835 964</span>
          </a>
          <Link
            href="#rezervace"
            className="relative px-7 py-3 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-white transition-all duration-500 shadow-[0_5px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 overflow-hidden group"
          >
            <span className="relative z-10">Rezervovat</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] md:hidden origin-top [transform-style:preserve-3d] max-h-[calc(100dvh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-bold text-white/80 hover:text-primary transition-colors uppercase tracking-wider py-3 border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="#rezervace"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-6 px-6 py-4 bg-primary text-primary-foreground font-bold text-center uppercase tracking-wider rounded-xl shadow-[0_10px_20px_rgba(212,175,55,0.3)]"
                >
                  Rezervovat termín
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
