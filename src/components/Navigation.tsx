import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionId } from '../types';
import { X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const MENU_ITEMS = [
  { id: 'journey', label: 'JOURNEY', num: '01', desc: 'From Numbers to Systems to AI' },
  { id: 'ailab', label: 'AI LAB', num: '02', desc: 'How I Learn AI & Experimentation' },
  { id: 'projects', label: 'PROJECTS', num: '03', desc: 'Bridging Accounting, Systems & AI' },
  { id: 'interests', label: 'INTERESTS', num: '04', desc: 'Essays, Books & Systems Thinking' },
  { id: 'resume', label: 'RESUME', num: '05', desc: 'Curriculum Vitae & Technical Skills' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleItemClick = (id: string) => {
    setIsMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#181715]/10'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand / Name */}
          <button
            id="nav-brand-btn"
            onClick={() => handleItemClick('hero')}
            className="group text-left flex items-baseline gap-3 cursor-pointer focus:outline-none"
            aria-label="Yang Cheng Home"
          >
            <span className="font-display text-xl sm:text-2xl font-normal tracking-tight text-[#181715] transition-opacity group-hover:opacity-75">
              YANG CHENG
            </span>
            <span className="hidden md:inline-block text-[11px] uppercase tracking-widest text-[#8F8A81] font-body font-medium">
              Accounting → Systems → AI
            </span>
          </button>

          {/* Right Controls: Desktop subtle links + [MENU] button */}
          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="hidden lg:flex items-center gap-7 text-[12px] font-body tracking-wider uppercase">
              {MENU_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`desktop-nav-link-${item.id}`}
                    onClick={() => handleItemClick(item.id)}
                    className={`transition-colors py-1 cursor-pointer relative ${
                      isActive
                        ? 'text-[#181715] font-semibold'
                        : 'text-[#59554F] hover:text-[#181715]'
                    }`}
                  >
                    <span className="text-[#8F8A81] mr-1.5 text-[10px] font-mono">{item.num}</span>
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#181715]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* The primary [MENU] button requested */}
            <button
              id="menu-trigger-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#181715]/25 hover:border-[#181715] text-[12px] font-body uppercase tracking-wider text-[#181715] transition-all duration-200 cursor-pointer hover:bg-[#181715] hover:text-[#FAF8F5]"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="font-mono text-[10px] text-[#8F8A81] group-hover:text-white">●</span>
              <span>MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* Editorial Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="fullscreen-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#181715] text-[#FAF8F5] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full pb-8 border-b border-white/15">
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-tight text-white">YANG CHENG</span>
                <span className="text-xs uppercase tracking-widest text-[#8F8A81] font-body mt-1">
                  Portfolio Index
                </span>
              </div>
              <button
                id="menu-close-btn"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FAF8F5]/80 hover:text-white px-3 py-1.5 border border-white/20 hover:border-white transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <span>CLOSE</span>
                <X size={16} />
              </button>
            </div>

            {/* Menu Nav Links with Editorial Stagger */}
            <div className="max-w-4xl mx-auto w-full py-10 sm:py-16 my-auto">
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {MENU_ITEMS.map((item, idx) => {
                  return (
                    <motion.button
                      key={item.id}
                      id={`overlay-menu-item-${item.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 * idx, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => handleItemClick(item.id)}
                      className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-3 border-b border-white/10 hover:border-white/40 transition-colors text-left cursor-pointer"
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="font-mono text-xs text-[#8F8A81] group-hover:text-[#B84724] transition-colors">
                          {item.num}
                        </span>
                        <span className="font-display text-3xl sm:text-5xl font-light tracking-tight text-white/90 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300">
                          {item.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-2 sm:mt-0 text-xs text-[#8F8A81] font-body group-hover:text-white/80 transition-colors">
                        <span>{item.desc}</span>
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Overlay Footer Note */}
            <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8F8A81]">
              <div className="font-body">
                <span className="text-white">CORE STATEMENT:</span> &ldquo;From numbers to systems, from systems to AI.&rdquo;
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="mailto:chengyang869@gmail.com"
                  className="hover:text-white transition-colors underline underline-offset-4"
                >
                  chengyang869@gmail.com
                </a>
                <span>2026 Edition</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
