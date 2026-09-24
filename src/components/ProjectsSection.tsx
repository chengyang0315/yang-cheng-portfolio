import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Database } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto w-full hairline-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 hairline-b gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#B84724] mb-2 flex items-center gap-2">
            <span>03</span>
            <span className="text-[#8F8A81]">/</span>
            <span>SYSTEMS & ARTIFACTS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-[#181715]">
            Featured Projects
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 border transition-colors cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#181715] text-white border-[#181715]'
                : 'bg-[#FAF8F5] text-[#59554F] border-[#181715]/15 hover:border-[#181715]'
            }`}
          >
            ALL (04)
          </button>
          <button
            onClick={() => setActiveFilter('numbers')}
            className={`px-3 py-1.5 border transition-colors cursor-pointer ${
              activeFilter === 'numbers'
                ? 'bg-[#181715] text-white border-[#181715]'
                : 'bg-[#FAF8F5] text-[#59554F] border-[#181715]/15 hover:border-[#181715]'
            }`}
          >
            NUMBERS FOCUS
          </button>
          <button
            onClick={() => setActiveFilter('systems')}
            className={`px-3 py-1.5 border transition-colors cursor-pointer ${
              activeFilter === 'systems'
                ? 'bg-[#181715] text-white border-[#181715]'
                : 'bg-[#FAF8F5] text-[#59554F] border-[#181715]/15 hover:border-[#181715]'
            }`}
          >
            SYSTEMS ARCHITECTURE
          </button>
          <button
            onClick={() => setActiveFilter('ai')}
            className={`px-3 py-1.5 border transition-colors cursor-pointer ${
              activeFilter === 'ai'
                ? 'bg-[#181715] text-white border-[#181715]'
                : 'bg-[#FAF8F5] text-[#59554F] border-[#181715]/15 hover:border-[#181715]'
            }`}
          >
            AI & AGENTS
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#FAF8F5] border border-[#181715]/15 p-7 sm:p-9 flex flex-col justify-between hover:border-[#181715] transition-all duration-300"
          >
            <div>
              {/* Category & Number */}
              <div className="flex items-center justify-between pb-4 hairline-b text-xs font-mono text-[#8F8A81]">
                <span>NO. {project.num}</span>
                <span className="px-2 py-0.5 bg-[#F2EEE9] text-[#181715] font-medium uppercase border border-[#181715]/10">
                  {project.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="mt-6">
                <h3 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-[#181715] group-hover:text-[#B84724] transition-colors">
                  {project.title}
                </h3>
                <p className="font-display italic text-sm text-[#59554F] mt-1.5">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="mt-5 text-xs sm:text-sm font-body text-[#59554F] leading-relaxed">
                {project.description}
              </p>

              {/* Highlights Pill row */}
              <div className="mt-6 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#8F8A81]">
                  Primary Architectural Constraint:
                </div>
                <div className="p-3 bg-[#F7F4EF] text-xs font-body text-[#181715] border-l-2 border-[#181715]">
                  {project.problem}
                </div>
              </div>
            </div>

            {/* Bottom Tech & Action */}
            <div className="mt-8 pt-6 hairline-t flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-mono bg-[#F2EEE9] text-[#59554F]"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#8F8A81]">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <button
                id={`view-project-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#181715] group-hover:text-[#B84724] hover:underline underline-offset-4 cursor-pointer"
              >
                <span>SPECIFICATION</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal for Deep Architecture Review */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
