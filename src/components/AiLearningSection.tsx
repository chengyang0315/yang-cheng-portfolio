import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AI_LEARNING_STAGES } from '../data/portfolioData';
import { AiLearningStage } from '../types';
import { AiSandbox } from './AiSandbox';
import {
  ChevronRight,
  BookOpen,
  Code2,
  Database,
  Cpu,
  Hammer,
  Compass,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';

const STAGE_ICONS: Record<string, React.ElementType> = {
  '01': BookOpen,
  '02': Code2,
  '03': Database,
  '04': Cpu,
  '05': Hammer,
  '06': Compass
};

export const AiLearningSection: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('stage-01');
  const selectedStage: AiLearningStage =
    AI_LEARNING_STAGES.find((s) => s.id === selectedStageId) || AI_LEARNING_STAGES[0];

  const StageIcon = STAGE_ICONS[selectedStage.num] || Sparkles;

  return (
    <section id="ailab" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 hairline-b gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#B84724] mb-2 flex items-center gap-2">
            <span>02</span>
            <span className="text-[#8F8A81]">/</span>
            <span>LEARNING & EXPERIMENTATION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-[#181715]">
            HOW I LEARN AI
          </h2>
        </div>

        {/* Narrative boundary disclaimer */}
        <div className="max-w-md p-4 bg-[#F2EEE9] border border-[#181715]/10 text-xs text-[#59554F] font-body leading-relaxed">
          <strong className="text-[#181715] font-semibold block mb-1">
            Note on Perspective:
          </strong>
          I am not an AI veteran or theorist claiming mastery. I am an Accounting graduate who fell in love with information systems and is methodically learning how machine learning models function from the ground up through continuous experimentation, building, and reflection.
        </div>
      </div>

      {/* Visual Learning Timeline Navigation (01 - 06) */}
      <div className="mt-12">
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8F8A81] mb-4">
          Six-Stage Evolutionary Timeline:
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {AI_LEARNING_STAGES.map((stage) => {
            const isSelected = stage.id === selectedStageId;
            const Icon = STAGE_ICONS[stage.num] || Sparkles;
            return (
              <button
                key={stage.id}
                id={`stage-tab-${stage.num}`}
                onClick={() => setSelectedStageId(stage.id)}
                className={`group p-4 text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? 'bg-[#181715] text-[#FAF8F5] border-[#181715]'
                    : 'bg-[#FAF8F5] text-[#181715] border-[#181715]/15 hover:border-[#181715]/40 hover:bg-[#F5F1EA]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? 'text-[#B84724]' : 'text-[#8F8A81]'}>
                    {stage.num}
                  </span>
                  <Icon size={14} className={isSelected ? 'text-white' : 'text-[#8F8A81]'} />
                </div>
                <div>
                  <div className={`font-display text-base tracking-tight font-medium ${isSelected ? 'text-white' : 'text-[#181715]'}`}>
                    {stage.title}
                  </div>
                  <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-white/60' : 'text-[#8F8A81]'}`}>
                    {stage.timeframe}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Stage Detail View */}
      <motion.div
        key={selectedStage.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 bg-[#FAF8F5] border border-[#181715]/15 p-6 sm:p-10"
      >
        {/* Stage Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 hairline-b gap-4">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 border border-[#181715]/20 flex items-center justify-center font-display text-xl bg-[#F2EEE9]">
              {selectedStage.num}
            </span>
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-light text-[#181715] tracking-tight">
                {selectedStage.title}
              </h3>
              <p className="text-xs font-mono text-[#8F8A81] mt-0.5">
                TIMEFRAME: {selectedStage.timeframe}
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-body text-[#59554F] max-w-lg md:text-right">
            {selectedStage.overview}
          </p>
        </div>

        {/* 5 Core Required Structural Dimensions */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Left Column: What I Learned & Why I Learned It */}
          <div className="space-y-8">
            {/* 1. What I Learned */}
            <div className="bg-[#FBF9F5] p-6 border border-[#181715]/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold mb-3">
                <CheckCircle2 size={15} className="text-[#B84724]" />
                <span>WHAT I LEARNED</span>
              </div>
              <ul className="space-y-2.5">
                {selectedStage.whatILearned.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[#181715]">
                    <span className="text-[#B84724] font-mono text-xs mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Why I Learned It */}
            <div className="bg-[#FBF9F5] p-6 border border-[#181715]/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold mb-3">
                <HelpCircle size={15} className="text-[#181715]" />
                <span>WHY I LEARNED IT</span>
              </div>
              <p className="text-xs sm:text-sm font-body text-[#59554F] leading-relaxed">
                {selectedStage.whyILearnedIt}
              </p>
            </div>
          </div>

          {/* Right Column: What I Built, What Challenged Me, What I Want to Learn Next */}
          <div className="space-y-8">
            {/* 3. What I Built */}
            <div className="bg-[#FBF9F5] p-6 border border-[#181715]/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold mb-3">
                <Hammer size={15} className="text-[#B84724]" />
                <span>WHAT I BUILT</span>
              </div>
              <div className="space-y-3">
                {selectedStage.whatIBuilt.map((artifact, idx) => (
                  <div key={idx} className="p-3.5 bg-[#FAF8F5] border border-[#181715]/10">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-medium text-sm text-[#181715]">
                        {artifact.name}
                      </span>
                      <div className="flex gap-1">
                        {artifact.tags.map((t) => (
                          <span
                            key={t}
                            className="px-1.5 py-0.5 text-[10px] font-mono bg-[#EFEAE2] text-[#59554F]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs font-body text-[#59554F] mt-1.5 leading-relaxed">
                      {artifact.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. What Challenged Me */}
            <div className="bg-[#FBF9F5] p-6 border border-[#181715]/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold mb-3">
                <AlertCircle size={15} className="text-[#B84724]" />
                <span>WHAT CHALLENGED ME</span>
              </div>
              <p className="text-xs sm:text-sm font-body text-[#59554F] leading-relaxed">
                {selectedStage.whatChallengedMe}
              </p>
            </div>

            {/* 5. What I Want to Learn Next */}
            <div className="bg-[#181715] text-[#FAF8F5] p-6 border border-[#181715]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B84724] font-semibold mb-2">
                <Sparkles size={14} />
                <span>WHAT I WANT TO LEARN NEXT</span>
              </div>
              <p className="text-xs sm:text-sm font-body text-white/90 leading-relaxed">
                {selectedStage.whatIWantToLearnNext}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Embedded Interactive Sandbox (Artifact) */}
      <AiSandbox />
    </section>
  );
};
