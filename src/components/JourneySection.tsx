import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Layers, Terminal } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const chapters = [
    {
      id: 'chapter-1',
      index: '01',
      tag: 'THE AWAKENING',
      title: 'The Ceiling of the Spreadsheet',
      time: 'Phase 1 • Accounting Foundations',
      intro:
        'I began in accounting, studying the centuries-old mechanics of the general ledger, corporate taxation, and financial auditing.',
      body:
        'In accounting school, you are taught that numbers represent absolute facts. But during real-world audit engagements, I saw the fragile reality: multi-billion-dollar corporate decisions resting on copy-pasted Excel workbooks with broken VLOOKUPs, unversioned tabs, and zero concurrency control. Reconciling mismatched intercompany accounts by hand at 2 AM was not just inefficient—it felt like an engineering crisis disguised as finance.',
      epiphany:
        'Accounting wasn’t flawed; the interface was. Double-entry bookkeeping is pure logic, but humans were forcing it into static spreadsheets rather than resilient relational state machines.',
      icon: BookOpen
    },
    {
      id: 'chapter-2',
      index: '02',
      tag: 'THE ARCHITECTURAL SHIFT',
      title: 'Speaking the Language of Schemas',
      time: 'Phase 2 • Information Systems',
      intro:
        'I decided I could not simply be a user of enterprise software; I needed to understand how data moves through the wire.',
      body:
        'I immersed myself in database theory and software engineering. Discovering Edgar F. Codd’s Relational Model was a revelation: 3rd Normal Form felt like the computer science counterpart to Luca Pacioli’s double-entry rules. I learned SQL, then Python, then TypeScript. Writing my first recursive CTE to aggregate nested general ledger account hierarchies felt like unlocking a superpower compared to manual pivot tables.',
      epiphany:
        'When you understand both the business purpose of a balance sheet and the relational indexing of the database beneath it, you can design systems that prevent errors before they ever reach an auditor.',
      icon: Layers
    },
    {
      id: 'chapter-3',
      index: '03',
      tag: 'THE COGNITIVE FRONTIER',
      title: 'Why AI Needs an Auditor’s Conscience',
      time: 'Phase 3 • Active AI Exploration',
      intro:
        'Entering machine learning and large language models, I noticed an immediate cultural clash between AI research and financial engineering.',
      body:
        'In machine learning, 90% benchmark accuracy is celebrated. In financial reporting or medical diagnostics, 10% hallucination is catastrophic. I realized that my background in accounting and internal controls gave me a distinct, critical perspective: generative models must not be allowed to act as unchecked arbiters. They need guardrails, deterministic compilers, and grounded verification pipelines.',
      epiphany:
        'My focus is not to replace human judgment with AI, but to build intelligent bridges: using AI to parse unstructured corporate disclosures and translate human intent into verified, invariant-safe system queries.',
      icon: Terminal
    }
  ];

  return (
    <section id="journey" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 hairline-b gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#B84724] mb-2 flex items-center gap-2">
            <span>01</span>
            <span className="text-[#8F8A81]">/</span>
            <span>NARRATIVE DOSSIER</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-[#181715]">
            The Journey
          </h2>
        </div>

        <p className="max-w-md text-sm text-[#59554F] font-body leading-relaxed">
          The personal story of stepping away from manual financial compliance toward software engineering, databases, and continuous AI learning.
        </p>
      </div>

      {/* Chapter Tabs & Story Reader */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
        {/* Left Column: Chapter Index */}
        <div className="lg:col-span-4 flex flex-col space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#8F8A81] mb-2">
            Chapters of Transition
          </div>
          {chapters.map((chapter, idx) => {
            const isSelected = selectedMilestone === idx;
            const Icon = chapter.icon;
            return (
              <button
                key={chapter.id}
                onClick={() => setSelectedMilestone(idx)}
                className={`group p-5 text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#181715] text-[#FAF8F5] border-[#181715]'
                    : 'bg-[#FAF8F5] text-[#181715] border-[#181715]/15 hover:border-[#181715]/40 hover:bg-[#F5F1EA]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={isSelected ? 'text-[#B84724]' : 'text-[#8F8A81]'}>
                    {chapter.index} • {chapter.tag}
                  </span>
                  <Icon size={14} className={isSelected ? 'text-white' : 'text-[#8F8A81]'} />
                </div>
                <h3 className={`font-display text-xl tracking-tight ${isSelected ? 'text-white' : 'text-[#181715]'}`}>
                  {chapter.title}
                </h3>
                <div className={`text-xs mt-1 font-body ${isSelected ? 'text-white/60' : 'text-[#8F8A81]'}`}>
                  {chapter.time}
                </div>
              </button>
            );
          })}

          {/* Core Philosophy Box */}
          <div className="mt-6 p-6 bg-[#F2EEE9] border border-[#181715]/10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#8F8A81] mb-2">
              Philosophical Anchor
            </div>
            <p className="font-display italic text-sm text-[#181715] leading-relaxed">
              &ldquo;Systems should make truth easy to verify and errors impossible to conceal.&rdquo;
            </p>
          </div>
        </div>

        {/* Right Column: Selected Chapter Deep Reading */}
        <div className="lg:col-span-8 bg-[#FAF8F5] border border-[#181715]/15 p-8 sm:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-6 hairline-b text-xs font-mono text-[#8F8A81]">
              <span>CHAPTER {chapters[selectedMilestone].index} OF 03</span>
              <span className="uppercase text-[#B84724] font-semibold">
                {chapters[selectedMilestone].time}
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-light text-[#181715] mt-6 tracking-tight">
              {chapters[selectedMilestone].title}
            </h3>

            <p className="text-base sm:text-lg font-display italic text-[#59554F] mt-4 leading-relaxed">
              &ldquo;{chapters[selectedMilestone].intro}&rdquo;
            </p>

            <div className="my-6 hairline-b" />

            <div className="prose prose-stone max-w-none text-[#181715] font-body text-sm sm:text-base leading-relaxed space-y-4">
              <p>{chapters[selectedMilestone].body}</p>
            </div>

            {/* The Epiphany Box */}
            <div className="mt-8 p-6 bg-[#F7F4EF] border-l-2 border-[#B84724]">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#B84724] font-semibold mb-1">
                KEY REALIZATION
              </div>
              <p className="text-sm font-body text-[#181715] font-medium leading-relaxed">
                {chapters[selectedMilestone].epiphany}
              </p>
            </div>
          </div>

          {/* Chapter navigation footer */}
          <div className="mt-10 pt-6 hairline-t flex items-center justify-between">
            <button
              onClick={() => setSelectedMilestone((prev) => (prev > 0 ? prev - 1 : prev))}
              disabled={selectedMilestone === 0}
              className={`text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                selectedMilestone === 0
                  ? 'text-[#8F8A81]/40 cursor-not-allowed'
                  : 'text-[#181715] hover:text-[#B84724]'
              }`}
            >
              ← PREVIOUS CHAPTER
            </button>

            <div className="flex gap-1.5">
              {chapters.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMilestone(i)}
                  className={`w-2.5 h-2.5 border transition-colors cursor-pointer ${
                    selectedMilestone === i
                      ? 'bg-[#181715] border-[#181715]'
                      : 'bg-transparent border-[#181715]/30'
                  }`}
                  aria-label={`Jump to chapter ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setSelectedMilestone((prev) => (prev < chapters.length - 1 ? prev + 1 : prev))
              }
              disabled={selectedMilestone === chapters.length - 1}
              className={`text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                selectedMilestone === chapters.length - 1
                  ? 'text-[#8F8A81]/40 cursor-not-allowed'
                  : 'text-[#181715] hover:text-[#B84724]'
              }`}
            >
              NEXT CHAPTER →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
