import React, { useState } from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Printer, Download, Mail, Copy, Check } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 hairline-b gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#B84724] mb-2 flex items-center gap-2">
            <span>05</span>
            <span className="text-[#8F8A81]">/</span>
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-[#181715]">
            Resume & Credentials
          </h2>
        </div>

        {/* Action buttons: Print / Copy Email */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#181715]/20 hover:border-[#181715] bg-[#FAF8F5] text-[#181715] transition-colors cursor-pointer"
          >
            {copiedEmail ? <Check size={13} className="text-emerald-700" /> : <Copy size={13} />}
            <span>{copiedEmail ? 'EMAIL COPIED' : 'COPY EMAIL'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#181715] text-[#FAF8F5] hover:bg-[#B84724] transition-colors cursor-pointer"
          >
            <Printer size={13} />
            <span>PRINT CV</span>
          </button>
        </div>
      </div>

      {/* Editorial CV Sheet Container */}
      <div className="mt-12 bg-[#FAF8F5] border border-[#181715]/15 p-8 sm:p-14 print:border-0 print:p-0">
        {/* CV Header */}
        <div className="pb-8 hairline-b">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-light tracking-tight text-[#181715]">
                {RESUME_DATA.name}
              </h3>
              <p className="font-body text-xs sm:text-sm uppercase tracking-widest text-[#B84724] mt-1 font-semibold">
                {RESUME_DATA.title}
              </p>
            </div>
            <div className="text-xs font-mono text-[#59554F] sm:text-right space-y-1">
              <div>{RESUME_DATA.email}</div>
              <div>{RESUME_DATA.location}</div>
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm font-body text-[#59554F] leading-relaxed max-w-4xl">
            {RESUME_DATA.summary}
          </p>
        </div>

        {/* CV Body Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Experience & Projects */}
          <div className="lg:col-span-8 space-y-10">
            {/* Experience */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold pb-3 hairline-b mb-6">
                EXPERIENCE & RESEARCH
              </div>
              <div className="space-y-8">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <div className="font-display text-lg font-medium text-[#181715]">
                        {exp.role}
                      </div>
                      <div className="text-xs font-mono text-[#8F8A81]">{exp.period}</div>
                    </div>
                    <div className="text-xs font-body text-[#B84724] font-medium">
                      {exp.organization}
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-body text-[#59554F] leading-relaxed">
                          <span className="text-[#181715] font-mono mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {exp.skillsApplied.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[10px] font-mono bg-[#F2EEE9] text-[#59554F]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold pb-3 hairline-b mb-6">
                EDUCATION
              </div>
              <div className="space-y-6">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <div className="font-display text-lg font-medium text-[#181715]">
                        {edu.degree}
                      </div>
                      <div className="text-xs font-mono text-[#8F8A81]">{edu.period}</div>
                    </div>
                    <div className="text-xs font-body text-[#59554F] font-medium">
                      {edu.school} {edu.honors && `— ${edu.honors}`}
                    </div>
                    <p className="text-xs font-body text-[#8F8A81] leading-relaxed">
                      {edu.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Certifications */}
          <div className="lg:col-span-4 space-y-10">
            {/* Skills Divided by Triad */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold pb-3 hairline-b mb-6">
                TECHNICAL ARSENAL
              </div>
              <div className="space-y-6">
                {RESUME_DATA.skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="space-y-2">
                    <div className="text-xs font-mono text-[#B84724] font-semibold">
                      {skillGroup.category}
                    </div>
                    <div className="space-y-1">
                      {skillGroup.items.map((item) => (
                        <div
                          key={item}
                          className="text-xs font-body text-[#181715] flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 bg-[#181715] rounded-full" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#181715] font-semibold pb-3 hairline-b mb-6">
                CERTIFICATIONS
              </div>
              <div className="space-y-4">
                {RESUME_DATA.certifications.map((cert) => (
                  <div key={cert.name} className="space-y-0.5 text-xs">
                    <div className="font-body font-medium text-[#181715]">{cert.name}</div>
                    <div className="text-[11px] font-mono text-[#8F8A81]">
                      {cert.issuer} • {cert.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
