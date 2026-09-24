import React from 'react';
import { ProfileGallery } from './ProfileGallery';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps { onExploreClick: () => void; }

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => (
  <section id="hero" className="dossier-hero">
    <div className="dossier-kicker">PERSONAL DOSSIER <span>01 — INTRODUCTION</span></div>

    <div className="dossier-profile">
      <ProfileGallery />
      <div className="dossier-bio">
        <dl>
          <div><dt>NAME:</dt><dd className="dossier-name">Kami</dd></div>
        </dl>
        <nav className="dossier-socials" aria-label="Contact and social links">
          <a href="mailto:chengyang869@email.com" target="_blank" rel="noopener noreferrer" aria-label="Email Kami">
            <Mail aria-hidden="true" /><span>Email</span><ArrowUpRight className="social-arrow" aria-hidden="true" />
          </a>
          <a href="https://github.com/chengyang0315" target="_blank" rel="noopener noreferrer" aria-label="Kami on GitHub">
            <Github aria-hidden="true" /><span>GitHub</span><ArrowUpRight className="social-arrow" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/kami-cheng-580083293" target="_blank" rel="noopener noreferrer" aria-label="Kami on LinkedIn">
            <Linkedin aria-hidden="true" /><span>LinkedIn</span><ArrowUpRight className="social-arrow" aria-hidden="true" />
          </a>
        </nav>
        <div className="dossier-schools" aria-label="Education">
          <figure className="school-mark school-mark-xjtlu">
            <img src="/education/xjtlu-crest.webp" alt="Xi’an Jiaotong-Liverpool University crest" width={240} height={310} />
            <figcaption>Xi’an Jiaotong-Liverpool University</figcaption>
          </figure>
          <figure className="school-mark school-mark-unimelb">
            <img src="/education/unimelb-logo.webp" alt="The University of Melbourne logo" width={300} height={190} />
            <figcaption>The University of Melbourne</figcaption>
          </figure>
        </div>
        <div className="dossier-about"><span>ABOUT ME:</span><p>Focused on merging accounting principles with AI-driven systems.</p></div>
      </div>
    </div>

    <div className="dossier-statement">
      <h1><span><i>from</i> NUMBERS <i>to</i> SYSTEMS,</span><span><i>from</i> SYSTEMS <i>to</i> AI.</span></h1>
      <p>ACCOUNTING <b>+</b> SYSTEMS <b>+</b> AI</p>
    </div>

    <div className="dossier-lower">
      <figure className="dossier-archive">
        <div className="portrait-frame"><span className="portrait-orbit" aria-hidden="true" /><img src="/portrait.jpg" alt="Archival portrait of Kami" width={1536} height={1024} loading="lazy" /></div>
        <figcaption><span>ARCHIVAL PORTRAIT</span><span>VERIFIED ID</span></figcaption>
      </figure>
    </div>

    <button id="hero-scroll-btn" onClick={onExploreClick} className="dossier-scroll" aria-label="Scroll to exploration"><ArrowDown size={14} /> SCROLL TO EXPLORE</button>
  </section>
);
