import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Binary, Cpu, Calculator } from 'lucide-react';

export const ConceptualBridge: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'numbers' | 'systems' | 'ai'>('all');

  const pillars = [
    {
      id: 'numbers',
      step: 'PHASE 01',
      title: 'NUMBERS',
      subtitle: 'The Discipline of Truth & Verification',
      icon: Calculator,
      tags: ['Accounting', 'Business', 'Financial Thinking', 'Audit Rigor'],
      quote: 'If debits do not equal credits, the system has failed. There is zero tolerance for ambiguity.',
      description:
        'My foundation is in accounting—a discipline built over 500 years to bring order to human commerce. Accounting taught me how value flows, how businesses make decisions, and most importantly, the necessity of invariant verification. In accounting, an unverified assertion is a liability.',
      keyAspects: [
        { label: 'Dual Parity', desc: 'Every debit must balance a credit; energy is conserved.' },
        { label: 'Audit Trail', desc: 'Every summary figure must drill down to source documents.' },
        { label: 'Business Reality', desc: 'Understanding cash flow, margins, and operational trade-offs.' }
      ]
    },
    {
      id: 'systems',
      step: 'PHASE 02',
      title: 'SYSTEMS',
      subtitle: 'The Architecture of Scale & Persistence',
      icon: Binary,
      tags: ['Information Systems', 'Databases', 'Programming', 'Business Analysis', 'Enterprise Systems'],
      quote: 'Spreadsheets are fragile illusions; databases are the resilient bedrock of the enterprise.',
      description:
        'Moving into Information Systems was the natural evolution. I realized that the accounting ledger is simply a relational state-machine. By studying database theory, 3NF schemas, Python, and enterprise architecture, I learned to translate accounting rules into deterministic software.',
      keyAspects: [
        { label: 'Relational Integrity', desc: 'ACID transactions, foreign keys, and normalization.' },
        { label: 'Software Craft', desc: 'Python, TypeScript, API design, and modular engineering.' },
        { label: 'Enterprise Flow', desc: 'Understanding ERP lifecycles: Procure-to-Pay, Order-to-Cash.' }
      ]
    },
    {
      id: 'ai',
      step: 'PHASE 03',
      title: 'AI',
      subtitle: 'The Frontier of Reasoning & Autonomous Learning',
      icon: Cpu,
      tags: ['AI Learning', 'Experimentation', 'Future Projects', 'Continuous Learning'],
      quote: 'AI needs an auditor’s conscience. High confidence without grounded verification is just hallucination.',
      description:
        'Entering the AI domain, my objective is not to be a spectator but an active explorer and builder. By studying transformer mechanics, autograd, and prompt engineering, I build systems that connect probabilistic generative models to deterministic database constraints.',
      keyAspects: [
        { label: 'Grounded Reasoning', desc: 'Constraining LLMs with strict schemas and AST parsing.' },
        { label: 'Hands-on Building', desc: 'Building practical tools rather than theoretical summaries.' },
        { label: 'Continuous Inquiry', desc: 'Staying deeply curious, humble, and experimentation-driven.' }
      ]
    }
  ];

  const filteredPillars = activeTab === 'all' ? pillars : pillars.filter((p) => p.id === activeTab);

  return (
    <section id="conceptual-framework" className="py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 hairline-b gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#B84724] mb-2 flex items-center gap-2">
            <span>THE NARRATIVE STRUCTURE</span>
            <span className="text-[#8F8A81]">/</span>
            <span>THREE PILLARS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-light tracking-tight text-[#181715]">
            From Numbers to Systems, <br />
            <span className="italic font-serif">from Systems to AI.</span>
          </h2>
        </div>

        {/* Filter / View selector */}
        <div className="flex items-center gap-2 p-1 bg-[#F2EEE9] border border-[#181715]/10 text-xs font-mono">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 transition-colors cursor-pointer ${
              activeTab === 'all' ? 'bg-[#181715] text-[#FAF8F5]' : 'text-[#59554F] hover:text-[#181715]'
            }`}
          >
            TRIAD VIEW
          </button>
          <button
            onClick={() => setActiveTab('numbers')}
            className={`px-3 py-1 transition-colors cursor-pointer ${
              activeTab === 'numbers' ? 'bg-[#181715] text-[#FAF8F5]' : 'text-[#59554F] hover:text-[#181715]'
            }`}
          >
            NUMBERS
          </button>
          <button
            onClick={() => setActiveTab('systems')}
            className={`px-3 py-1 transition-colors cursor-pointer ${
              activeTab === 'systems' ? 'bg-[#181715] text-[#FAF8F5]' : 'text-[#59554F] hover:text-[#181715]'
            }`}
          >
            SYSTEMS
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-3 py-1 transition-colors cursor-pointer ${
              activeTab === 'ai' ? 'bg-[#181715] text-[#FAF8F5]' : 'text-[#59554F] hover:text-[#181715]'
            }`}
          >
            AI
          </button>
        </div>
      </div>

      {/* Triad Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#181715]/15 mt-10 border border-[#181715]/15">
        {filteredPillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="bg-[#FAF8F5] p-7 sm:p-9 flex flex-col justify-between hover:bg-[#F7F4EF] transition-colors duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 hairline-b text-xs font-mono text-[#8F8A81]">
                  <span>{pillar.step}</span>
                  <Icon size={16} className="text-[#181715]" />
                </div>

                {/* Title */}
                <div className="mt-6">
                  <h3 className="font-display text-3xl font-light tracking-tight text-[#181715]">
                    {pillar.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[#B84724] font-mono mt-1">
                    {pillar.subtitle}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono bg-[#F2EEE9] text-[#59554F] border border-[#181715]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Editorial Quote */}
                <blockquote className="my-6 pl-3 border-l-2 border-[#B84724] font-display italic text-sm text-[#59554F]">
                  &ldquo;{pillar.quote}&rdquo;
                </blockquote>

                {/* Description */}
                <p className="text-sm font-body text-[#59554F] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Key Aspects breakdown */}
              <div className="mt-8 pt-6 hairline-t">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#8F8A81] mb-3">
                  Core Mechanics
                </div>
                <div className="space-y-2.5">
                  {pillar.keyAspects.map((aspect) => (
                    <div key={aspect.label} className="text-xs">
                      <span className="font-semibold text-[#181715] font-body mr-1.5">
                        {aspect.label}:
                      </span>
                      <span className="text-[#59554F] font-body">{aspect.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Synthesis Footnote */}
      <div className="mt-8 p-6 bg-[#F2EEE9] border border-[#181715]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#181715]" />
          <span className="font-body text-[#181715] font-medium">
            The Synthesis:
          </span>
          <span className="text-[#59554F]">
            Accounting supplies the rigorous standard of truth; Information Systems supplies the scalable architecture; AI supplies the reasoning interface.
          </span>
        </div>
        <div className="font-mono text-[#8F8A81] text-[11px] shrink-0">
          INVARIANT: DEBITS ≡ CREDITS ≡ REASONED OUTPUT
        </div>
      </div>
    </section>
  );
};
