import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, CheckCircle2, ArrowUpRight, Database, Terminal, ShieldAlert } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#181715]/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FAF8F5] border border-[#181715] max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-10 shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 hairline-b">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#B84724]">
                PROJECT {project.num}
              </span>
              <span className="text-[#8F8A81]">/</span>
              <span className="text-xs uppercase font-mono px-2 py-0.5 bg-[#F2EEE9] border border-[#181715]/10">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 border border-[#181715]/20 hover:border-[#181715] hover:bg-[#181715] hover:text-white transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X size={16} />
            </button>
          </div>

          {/* Title & Tagline */}
          <div className="mt-6">
            <h3 className="font-display text-3xl sm:text-4xl font-light text-[#181715] tracking-tight">
              {project.title}
            </h3>
            <p className="font-display italic text-base sm:text-lg text-[#59554F] mt-2">
              {project.tagline}
            </p>
          </div>

          {/* Metrics bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
            {project.metricsOrHighlights.map((m) => (
              <div key={m.label} className="p-3.5 bg-[#F2EEE9] border border-[#181715]/10 text-xs">
                <div className="text-[10px] font-mono text-[#8F8A81] uppercase">{m.label}</div>
                <div className="font-semibold font-body text-[#181715] text-sm mt-0.5">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Architectural Breakdown */}
          <div className="space-y-6 text-xs sm:text-sm font-body">
            {/* The Problem */}
            <div className="p-5 bg-[#FDFBF7] border-l-2 border-[#B84724]">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#B84724] font-semibold mb-1">
                <ShieldAlert size={14} />
                <span>THE CORE PROBLEM</span>
              </div>
              <p className="text-[#181715] leading-relaxed">{project.problem}</p>
            </div>

            {/* Accounting Foundation */}
            <div className="p-5 bg-[#FAF8F5] border border-[#181715]/15">
              <div className="text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold mb-2">
                1. ACCOUNTING FOUNDATION (THE NUMBERS)
              </div>
              <p className="text-[#59554F] leading-relaxed">{project.accountingFoundation}</p>
            </div>

            {/* System Architecture */}
            <div className="p-5 bg-[#FAF8F5] border border-[#181715]/15">
              <div className="text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold mb-2">
                2. SYSTEM ARCHITECTURE (THE SYSTEMS)
              </div>
              <p className="text-[#59554F] leading-relaxed">{project.systemArchitecture}</p>
            </div>

            {/* AI Implementation */}
            <div className="p-5 bg-[#FAF8F5] border border-[#181715]/15">
              <div className="text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold mb-2">
                3. AI & REASONING (THE AI LAYER)
              </div>
              <p className="text-[#59554F] leading-relaxed">{project.aiImplementation}</p>
            </div>

            {/* Key Takeaways */}
            <div className="p-5 bg-[#181715] text-[#FAF8F5]">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B84724] font-semibold mb-3">
                KEY ENGINEERING & DOMAIN TAKEAWAYS
              </div>
              <ul className="space-y-2">
                {project.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                    <CheckCircle2 size={13} className="text-[#B84724] mt-0.5 shrink-0" />
                    <span className="text-white/90">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack & Footer */}
          <div className="mt-8 pt-6 hairline-t flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-[#F2EEE9] border border-[#181715]/10 text-[#181715]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#181715] hover:bg-[#181715] hover:text-white transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              CLOSE SPECIFICATION
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
