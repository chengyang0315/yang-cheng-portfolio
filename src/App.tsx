import React from 'react';
import { Hero } from './components/Hero';
import './story.css';

const chapters = [
  { id: 'accounting', number: '01', title: 'Accounting', subtitle: 'Learning to read the numbers',
    context: 'UNDERGRADUATE · XI’AN JIAOTONG-LIVERPOOL UNIVERSITY',
    lead: 'My starting point was accounting.',
    paragraphs: [
      'At Xi’an Jiaotong-Liverpool University, I studied Financial Reporting, Taxation and Audit. These subjects shaped how I began to understand businesses through their numbers, rules and decisions.',
      'At campus talks by firms such as PwC and KPMG, accounting digitalisation was a recurring theme. By the time I was approaching graduation, the conversation was turning towards AI in accounting.'
    ], note: 'I wanted to understand the systems behind the numbers.', tags: ['Financial Reporting', 'Taxation', 'Audit'] },
  { id: 'systems', number: '02', title: 'Information Systems', subtitle: 'Following the digitalisation question',
    context: 'POSTGRADUATE · UNIVERSITY OF MELBOURNE',
    lead: 'That curiosity guided my next step.',
    paragraphs: [
      'I came to the University of Melbourne expecting to learn technology the traditional way—writing Python and SQL by hand. Along the way, I realised that stakeholder management matters even more: technology only creates value when it responds to real people, needs and decisions.',
      'As I studied, I became increasingly aware of AI’s presence across industries. What had first caught my attention in accounting was becoming a much broader question.'
    ], note: 'From one profession’s transformation to a wider curiosity about technology.', tags: ['Digitalisation', 'Digital BA', 'Business & Technology'] },
  { id: 'ai', number: '03', title: 'Exploring AI', subtitle: 'A new chapter, still taking shape',
    context: 'PRESENT · LEARNING & EXPLORATION', lead: '', paragraphs: [], note: '', tags: [] },
];

type AiTimelineItem = {
  stage: string;
  title: string;
  keywords: string;
  text: string;
  image?: string;
  imageAlt?: string;
};

const aiTimeline: AiTimelineItem[] = [
  { stage: 'FIRST CONTACT', title: 'Web AI', keywords: 'Doubao → Tencent Yuanbao → Kimi → DeepSeek',
    text: 'Doubao was the first AI I ever used. Friends introduced me to Tencent Yuanbao; Kimi became my writing companion; DeepSeek felt the most noticeably “AI” to me.' },
  { stage: 'FIRST PROOF', title: 'A thesis lifeline', keywords: 'Doubao · Graduation defence',
    text: 'Doubao helped me make the slides for my undergraduate thesis defence. That alone is enough to earn my gratitude ten thousand times over.' },
  { stage: 'FROM WEB TO APPS', title: 'Attachments & knowledge', keywords: 'Doubao App · Notion · Notion AI',
    text: 'I normally choose a browser over an app. Before postgraduate study, a pile of attachments finally made me install Doubao and Notion. Notion became my ideal knowledge-management space—and Notion AI made it feel almost limitless.' },
  { stage: 'A FRIEND’S TIP', title: 'ChatGPT meets Codex', keywords: 'ChatGPT · “C-laoshi” · Codex',
    text: 'Liang told me ChatGPT had carried her through a machine-learning thesis. I downloaded it immediately, then searched everywhere for the famous Codex—only to learn that ChatGPT and Codex had come together.' },
  { stage: 'TURNING POINT', title: 'The interview', keywords: 'Accounting or tech? · All in on AI',
    text: 'A poorly paid part-time accounting interview forced a question I had been avoiding: accounting or technology? My answer—“probably accounting”—felt dishonest. Over the next few days I went all in on learning AI, increasingly convinced that entry-level accounting work was changing fast.' },
  { stage: 'THE BARRIER FALLS', title: 'Vibe coding', keywords: 'Tokens · Google AI Studio · Gemini Plus',
    text: 'I resisted vibe coding because it contained the word “coding”. Then I discovered I could build without writing every line by hand. Tokens sounded expensive, and I am thrifty, so Google AI Studio’s free allowance—and a one-year Gemini Plus student offer—were irresistible, even if they belonged to separate systems.' },
  { stage: 'FIRST BUILD', title: 'ShareAU', keywords: 'Bill splitting · Vercel · GitHub',
    text: 'My first build: a shared-bill tracker for housemates, with repayment analytics that keep expenses and follow-ups visible.',
    image: '/projects/shareau.png', imageAlt: 'ShareAU repayment performance analytics interface' },
  { stage: 'SECOND EXPERIMENT', title: 'A travel & food map', keywords: 'JEV · Web browsing · Grounding · UX',
    text: 'My second experiment: an AI-assisted restaurant and itinerary planner with geographic boundaries and allergy safeguards.',
    image: '/projects/travel-gourmet-planner.png', imageAlt: 'Travel Gourmet Planner candidate restaurant interface' },
];

export default function App() {
  const explore = () => document.getElementById('contents')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return <div className="min-h-screen bg-[#FAF8F5] text-[#181715] font-body">
    <header className="story-nav"><a href="#hero" aria-label="Yang Cheng Home">YANG CHENG</a><a href="#contents">CONTENTS <span aria-hidden="true">↗</span></a></header>
    <main>
      <Hero onExploreClick={explore} />
      <section className="story-contents story-page" id="contents" aria-labelledby="contents-title">
        <div className="story-eyebrow">02 / CONTENTS</div>
        <h2 id="contents-title">A path in<br /><em>three chapters.</em></h2>
        <nav aria-label="Story chapters">{chapters.map(c => <a href={`#${c.id}`} key={c.id}><span className="chapter-number">{c.number}</span><span><strong>{c.title}</strong><small>{c.subtitle}</small></span><span className="chapter-arrow" aria-hidden="true">↗</span></a>)}</nav>
      </section>
      {chapters.filter(c => c.id !== 'ai').map(c => <section className="story-page story-chapter" id={c.id} key={c.id} aria-labelledby={`${c.id}-title`}>
        <div className="story-eyebrow">{c.number} / {c.context}</div>
        <div className="story-chapter-layout"><div><h2 id={`${c.id}-title`}>{c.title}</h2><p className="story-note">{c.note}</p>
        {c.id === 'accounting' && <figure className="accounting-credential">
          <img src="/credentials/cpa-australia-associate.png" alt="CPA Australia Associate badge" loading="lazy" />
          <figcaption>CPA Australia · Associate</figcaption>
        </figure>}</div>
        <div className="story-copy"><h3>{c.lead}</h3>{c.paragraphs.map(p => <p key={p}>{p}</p>)}<ul className="story-tags">{c.tags.map(t => <li key={t}>{t}</li>)}</ul></div></div>
        <a className="story-back" href="#contents">↑ BACK TO CONTENTS</a>
      </section>)}
      <section className="story-page story-chapter ai-timeline-section" id="ai" aria-labelledby="ai-title">
        <div className="story-eyebrow">03 / PRESENT · LEARNING &amp; EXPLORATION</div>
        <div className="ai-timeline-heading">
          <h2 id="ai-title">My AI<br /><em>learning path.</em></h2>
          <p>For a business student with almost no technical background, AI is finally beginning to make sense. I am still exploring.</p>
        </div>
        <p className="timeline-instruction">SCROLL HORIZONTALLY <span aria-hidden="true">→</span></p>
        <div className="ai-timeline" tabIndex={0} aria-label="Horizontal timeline of Kami’s AI learning journey">
          <ol className="ai-timeline-track">
            {aiTimeline.map((item, index) => <li className="ai-milestone" key={item.title}>
              <span className="timeline-dot" aria-hidden="true" />
              <article className={`timeline-card${item.image ? ' has-preview' : ''}`}>
                <div className="timeline-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{item.stage}</span></div>
                <h3>{item.title}</h3>
                {item.image && <img className="timeline-project-image" src={item.image} alt={item.imageAlt} loading="lazy" />}
                <p>{item.text}</p>
                <strong>{item.keywords}</strong>
              </article>
            </li>)}
          </ol>
        </div>
        <a className="story-back" href="#contents">↑ BACK TO CONTENTS</a>
      </section>
    </main>
    <footer className="story-footer"><p>Let’s keep the conversation going.</p><a href="mailto:chengyang869@email.com">chengyang869@email.com ↗</a><a href="#hero">BACK TO TOP ↑</a></footer>
  </div>;
}
