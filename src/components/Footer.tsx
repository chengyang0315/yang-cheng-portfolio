import React, { useState } from 'react';
import { ArrowUp, Mail, Copy, Check } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('chengyang869@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="hairline-t bg-[#FAF8F5] text-[#181715] pt-16 sm:pt-24 pb-12 px-6 sm:px-10 max-w-7xl mx-auto w-full">
      {/* Top Editorial Call to Connection */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 hairline-b gap-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B84724] mb-3">
            OPEN FOR COLLABORATION & INQUIRY
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#181715]">
            Building the bridge between truth, systems, and intelligence.
          </h2>
          <p className="mt-4 text-sm sm:text-base font-body text-[#59554F] leading-relaxed">
            Whether you are an engineering team building enterprise data pipelines, an auditor seeking grounded AI tools, or a researcher exploring deterministic guardrails—I would welcome the conversation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href="mailto:chengyang869@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#181715] text-[#FAF8F5] hover:bg-[#B84724] transition-colors text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            <Mail size={14} />
            <span>chengyang869@gmail.com</span>
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-3 border border-[#181715]/20 hover:border-[#181715] bg-[#FAF8F5] text-[#181715] transition-colors text-xs font-mono uppercase tracking-widest cursor-pointer"
          >
            {copied ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
            <span>{copied ? 'COPIED' : 'COPY'}</span>
          </button>
        </div>
      </div>

      {/* Bottom Legal, Statement, & Scroll to Top */}
      <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8F8A81] font-mono">
        <div>
          <span className="font-semibold text-[#181715]">YANG CHENG</span> • &ldquo;From numbers to systems, from systems to AI.&rdquo;
        </div>

        <div className="flex items-center gap-6">
          <span>PORTFOLIO DOSSIER 2026</span>
          <button
            onClick={onScrollToTop}
            className="inline-flex items-center gap-1.5 text-[#181715] hover:text-[#B84724] transition-colors cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
