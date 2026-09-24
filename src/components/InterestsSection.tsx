import React, { useState } from 'react';
import { ESSAYS_AND_INTERESTS } from '../data/portfolioData';
import { InterestItem } from '../types';
import { BookOpen, FileText, Sparkles, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const InterestsSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<InterestItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Essay', 'Book', 'System Concept'];

  const filteredItems =
    selectedCategory === 'All'
      ? ESSAYS_AND_INTERESTS
      : ESSAYS_AND_INTERESTS.filter((item) => item.category === selectedCategory);

  return (
    <section id="interests" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 hairline-b gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#B84724] mb-2 flex items-center gap-2">
            <span>04</span>
            <span className="text-[#8F8A81]">/</span>
            <span>INTELLECTUAL INQUIRY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-[#181715]">
            Interests & Essays
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 border transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#181715] text-white border-[#181715]'
                  : 'bg-[#FAF8F5] text-[#59554F] border-[#181715]/15 hover:border-[#181715]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* List of Essays & Books */}
      <div className="mt-12 divide-y divide-[#181715]/10 border-y border-[#181715]/10">
        {filteredItems.map((item, idx) => {
          return (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-pointer hover:bg-[#F5F1EA] px-4 transition-colors"
            >
              <div className="md:w-1/4 flex items-baseline gap-3">
                <span className="text-xs font-mono text-[#8F8A81] group-hover:text-[#B84724]">
                  0{idx + 1}
                </span>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B84724]">
                    {item.category}
                  </span>
                  {item.authorOrRef && (
                    <div className="text-xs font-body text-[#8F8A81]">by {item.authorOrRef}</div>
                  )}
                  {item.date && (
                    <div className="text-[10px] font-mono text-[#8F8A81]">{item.date}</div>
                  )}
                </div>
              </div>

              <div className="md:w-2/4">
                <h3 className="font-display text-2xl font-light text-[#181715] group-hover:text-[#B84724] transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm font-body text-[#59554F] leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono bg-[#EFEAE2] text-[#59554F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:w-1/4 flex items-center md:justify-end text-xs font-mono text-[#181715] group-hover:text-[#B84724]">
                <span className="mr-2">READ REFLECTION</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Reading Reader Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-[#181715]/75 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative bg-[#FAF8F5] border border-[#181715] max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 p-6 sm:p-10 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 hairline-b text-xs font-mono text-[#8F8A81]">
                <span className="uppercase text-[#B84724] font-medium">
                  {activeItem.category} {activeItem.date ? `• ${activeItem.date}` : ''}
                </span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1 border border-[#181715]/20 hover:border-[#181715] cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              <h3 className="font-display text-3xl font-light text-[#181715] mt-6 tracking-tight">
                {activeItem.title}
              </h3>
              {activeItem.authorOrRef && (
                <div className="text-xs font-body text-[#8F8A81] mt-1">
                  Reference: {activeItem.authorOrRef}
                </div>
              )}

              <blockquote className="my-6 p-4 bg-[#F2EEE9] border-l-2 border-[#181715] font-display italic text-sm text-[#59554F]">
                {activeItem.summary}
              </blockquote>

              <div className="text-sm font-body text-[#181715] leading-relaxed space-y-4 pt-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#8F8A81] mb-2">
                  My Thoughts & Synthesis:
                </div>
                <p>{activeItem.thoughts}</p>
              </div>

              <div className="mt-8 pt-6 hairline-t flex justify-between items-center text-xs font-mono">
                <div className="flex flex-wrap gap-1.5">
                  {activeItem.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#F2EEE9] text-[#59554F]">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-3 py-1.5 border border-[#181715] hover:bg-[#181715] hover:text-white transition-colors cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
