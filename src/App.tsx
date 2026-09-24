import React, { useEffect, useRef, useState } from 'react';
import { Hero } from './components/Hero';
import './story.css';

const chapters = [
  { id: 'accounting', number: '01', title: 'Accounting', subtitle: 'Learning to read the numbers', context: 'UNDERGRADUATE · XI’AN JIAOTONG-LIVERPOOL UNIVERSITY', lead: 'My starting point was accounting.', note: 'I wanted to understand the systems behind the numbers.', tags: ['Financial Reporting', 'Taxation', 'Audit'] },
  { id: 'systems', number: '02', title: 'Information Systems', subtitle: 'Following the digitalisation question', context: 'POSTGRADUATE · UNIVERSITY OF MELBOURNE', lead: 'That curiosity guided my next step.', note: 'From one profession’s transformation to a wider curiosity about technology.', tags: ['Digitalisation', 'Digital BA', 'Business & Technology'] },
  { id: 'ai', number: '03', title: 'Exploring AI', subtitle: 'A new chapter, still taking shape', context: 'PRESENT · LEARNING & EXPLORATION', lead: '', note: '', tags: [] },
];

const accountingParagraphs = [
  'At Xi’an Jiaotong-Liverpool University, I studied Financial Reporting, Taxation and Audit. These subjects shaped how I began to understand businesses through their numbers, rules and decisions.',
  'At campus talks by firms such as PwC and KPMG, accounting digitalisation was a recurring theme. By the time I was approaching graduation, the conversation was turning towards AI in accounting.',
];

const tagDetails: Record<string, string> = {
  'Financial Reporting': 'Built a disciplined approach to reading financial statements, tracing transactions and explaining performance. I focus on turning accounting evidence into a clear business story.',
  Taxation: 'Worked through tax rules by identifying the relevant facts, applying legislation and documenting assumptions. The same care now shapes how I test rule-based digital workflows.',
  Audit: 'Learned to treat evidence, controls and professional scepticism as one system. That mindset now informs how I think about AI verification, traceability and responsible automation.',
  Digitalisation: 'Explored how organisations redesign processes when information moves from paper and spreadsheets into connected systems. The emphasis is on measurable value and workable change.',
  'Digital BA': 'Translate stakeholder needs into requirements, process maps and testable outcomes. I value the conversation between people and technology as much as the technical solution.',
  'Business & Technology': 'Connect business decisions with data, systems and implementation constraints. My aim is to make technology useful, understandable and grounded in the people who use it.',
};

const systemsMilestones = [
  { title: 'Academic Foundation', text: 'I arrived at the University of Melbourne expecting to learn technology the traditional way—writing Python and SQL by hand—and gained a practical foundation in how information systems are built.' },
  { title: 'Digital Transformation', text: 'Project work showed me that stakeholder management matters even more. Technology creates value only when it responds to real people, needs and decisions.' },
  { title: 'AI Exploration', text: 'As AI spread across industries, the question that first appeared in accounting became much broader: how can intelligent systems support sound human judgement?' },
];

type ToolName = 'Doubao' | 'Kimi' | 'DeepSeek' | 'ChatGPT' | 'Codex' | 'Gemini' | 'Claude' | 'Grok';
type AiTool = { name: ToolName; icon: string; scenario: string; prompt: string };

const tools: Record<ToolName, AiTool> = {
  Doubao: { name: 'Doubao', icon: '/tools/doubao.webp', scenario: 'My first AI companion—and the tool that helped structure my undergraduate thesis defence slides.', prompt: 'Turn this thesis outline into a concise defence deck with one claim and one piece of evidence per slide.' },
  Kimi: { name: 'Kimi', icon: '/tools/kimi.webp', scenario: 'My long-form writing companion for reorganising drafts and finding a clearer narrative.', prompt: 'Keep my meaning and voice, but tighten this section into a logical three-part argument.' },
  DeepSeek: { name: 'DeepSeek', icon: '/tools/deepseek.webp', scenario: 'A useful comparison point for checking how different models reason and phrase the same answer.', prompt: 'Solve this problem step by step, then list the assumptions that could make the answer wrong.' },
  ChatGPT: { name: 'ChatGPT', icon: '/tools/chatgpt.webp', scenario: 'The bridge from everyday AI use into technical learning, Codex and building real products.', prompt: 'Explain this Python or SQL concept to a business student, then give me one tiny exercise.' },
  Codex: { name: 'Codex', icon: '/tools/chatgpt.webp', scenario: 'My hands-on vibe-coding workspace for turning product ideas into working interfaces, testing them and improving the code.', prompt: 'Inspect this project, implement the interaction, run the relevant checks and show me the result locally.' },
  Gemini: { name: 'Gemini', icon: '/tools/gemini.webp', scenario: 'Google AI Studio gave me an accessible place to turn a product idea into my first working interface.', prompt: 'Build a simple shared-bill tool for housemates with transparent balances and repayment status.' },
  Claude: { name: 'Claude', icon: '/tools/claude.webp', scenario: 'I use it to challenge product structure, clarify writing and compare implementation choices.', prompt: 'Review this user flow. Identify friction, unclear states and the smallest useful improvement.' },
  Grok: { name: 'Grok', icon: '/tools/grok.webp', scenario: 'Another model lens for quick exploration and comparing current product or technology perspectives.', prompt: 'Give me three distinct ways to frame this feature, with the trade-off of each.' },
};

type AiTimelineItem = { stage: string; title: string; text: string; toolNames?: ToolName[]; keywords?: string; image?: string; imageAlt?: string };

const aiTimeline: AiTimelineItem[] = [
  { stage: 'FIRST CONTACT', title: 'Web AI', toolNames: ['Doubao', 'Kimi', 'DeepSeek'], text: 'Doubao was the first AI I ever used. Kimi became my writing companion, while DeepSeek gave me a noticeably different model voice. Doubao also helped turn my undergraduate thesis into a clear defence deck—my first proof that AI could materially improve my work.' },
  { stage: 'FROM WEB TO APPS', title: 'Attachments & knowledge', toolNames: ['Doubao'], keywords: 'Notion · Notion AI', text: 'I normally choose a browser over an app. A pile of postgraduate attachments finally changed that: I installed Doubao and Notion, then discovered how AI could support a living knowledge system.' },
  { stage: 'A FRIEND’S TIP', title: 'ChatGPT meets Codex', toolNames: ['ChatGPT'], keywords: '“C-laoshi” · Codex', text: 'A friend told me ChatGPT had carried her through a machine-learning thesis. I downloaded it immediately, searched for Codex, and found my route from asking questions to making things.' },
  { stage: 'TURNING POINT', title: 'The interview', keywords: 'Accounting or tech? · All in on AI', text: 'A poorly paid part-time accounting interview forced a question I had been avoiding: accounting or technology? My answer—“probably accounting”—felt dishonest. Over the next few days I went all in on learning AI, increasingly convinced that entry-level accounting work was changing fast.' },
  { stage: 'THE BARRIER FALLS', title: 'Vibe coding', toolNames: ['Codex', 'Gemini', 'Claude', 'Grok'], keywords: 'Tokens · Google AI Studio', text: 'I resisted vibe coding because it contained the word “coding”. Free access to Google AI Studio lowered the barrier, and I learned that product judgement mattered as much as typing every line by hand.' },
  { stage: 'FIRST BUILD', title: 'ShareAU', keywords: 'Bill splitting · Vercel · GitHub', text: 'A shared-bill tracker for housemates, with repayment analytics that keep expenses and follow-ups visible.', image: '/projects/shareau.png', imageAlt: 'ShareAU repayment performance analytics interface' },
  { stage: 'SECOND EXPERIMENT', title: 'A travel & food map', keywords: 'Web browsing · Grounding · UX', text: 'An AI-assisted restaurant and itinerary planner with geographic boundaries and allergy safeguards.', image: '/projects/travel-gourmet-planner.png', imageAlt: 'Travel Gourmet Planner candidate restaurant interface' },
];

function CredentialBadge() {
  const [open, setOpen] = useState(false);
  const move = (event: React.PointerEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--rx', `${-((event.clientY - rect.top) / rect.height - .5) * 10}deg`);
    event.currentTarget.style.setProperty('--ry', `${((event.clientX - rect.left) / rect.width - .5) * 10}deg`);
  };
  const reset = (event: React.PointerEvent<HTMLButtonElement>) => { event.currentTarget.style.setProperty('--rx', '0deg'); event.currentTarget.style.setProperty('--ry', '0deg'); };
  return <div className={`credential-wrap${open ? ' is-open' : ''}`}>
    <button className="accounting-credential" type="button" aria-expanded={open} aria-controls="credential-detail" onClick={() => setOpen(value => !value)} onPointerMove={move} onPointerLeave={reset}>
      <img src="/credentials/cpa-australia-associate.png" alt="CPA Australia Associate badge" />
      <span>CPA Australia · Associate</span>
    </button>
    <aside className="credential-popover" id="credential-detail" aria-hidden={!open}>
      <span className="credential-status"><i /> Active credential</span><strong>Associate Member</strong><small>Verified · 2026</small><p>Audit discipline × data systems × responsible AI.</p>
    </aside>
  </div>;
}

function SkillTags({ tags }: { tags: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  return <div className="skill-explorer">
    <ul className="story-tags">{tags.map(tag => <li key={tag}><button type="button" className={selected === tag ? 'is-selected' : ''} aria-expanded={selected === tag} onClick={() => setSelected(selected === tag ? null : tag)}>{tag}</button></li>)}</ul>
    {selected && <aside className="skill-detail" key={selected}><div><span>FIELD NOTE</span><button type="button" onClick={() => setSelected(null)} aria-label="Close skill detail">×</button></div><strong>{selected}</strong><p>{tagDetails[selected]}</p></aside>}
  </div>;
}

function SystemsJourney() {
  const [active, setActive] = useState<number | null>(null);
  return <div className="systems-journey">
    <p className="systems-summary">Technology became meaningful when I stopped seeing it only as code and started seeing it as a way to connect people, information and decisions.</p>
    <div className="systems-nodes" role="tablist" aria-label="Information Systems milestones">{systemsMilestones.map((item, index) => <button key={item.title} type="button" role="tab" aria-selected={active === index} className={active === index ? 'is-active' : ''} onClick={() => setActive(active === index ? null : index)}><span>0{index + 1}</span>{item.title}</button>)}</div>
    {active !== null && <div className="systems-detail" role="tabpanel" key={active}><strong>{systemsMilestones[active].title}</strong><p>{systemsMilestones[active].text}</p></div>}
  </div>;
}

function AiTimeline() {
  const scroller = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const hasInteracted = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const updateActive = () => {
    const root = scroller.current;
    if (!root) return;
    const center = root.getBoundingClientRect().left + root.clientWidth / 2;
    const cards = Array.from(root.querySelectorAll<HTMLElement>('.ai-milestone'));
    let closest = 0;
    let distance = Infinity;
    cards.forEach((card, index) => { const box = card.getBoundingClientRect(); const next = Math.abs(box.left + box.width / 2 - center); if (next < distance) { distance = next; closest = index; } });
    setActiveIndex(closest);
  };
  const onScroll = () => { if (!hasInteracted.current) return; if (frame.current) cancelAnimationFrame(frame.current); frame.current = requestAnimationFrame(updateActive); };
  useEffect(() => {
    const root = scroller.current;
    let resetTimer: number | undefined;
    if (root) {
      root.style.scrollSnapType = 'none';
      root.scrollLeft = 0;
      frame.current = requestAnimationFrame(() => requestAnimationFrame(() => {
        root.style.scrollSnapType = '';
        root.scrollLeft = 0;
        setActiveIndex(0);
      }));
      resetTimer = window.setTimeout(() => {
        hasInteracted.current = false;
        root.scrollLeft = 0;
        setActiveIndex(0);
      }, 350);
    }
    setActiveIndex(0);
    return () => { if (resetTimer) clearTimeout(resetTimer); if (frame.current) cancelAnimationFrame(frame.current); };
  }, []);
  return <><div className="timeline-progress" aria-live="polite"><span>{String(activeIndex + 1).padStart(2, '0')} / {String(aiTimeline.length).padStart(2, '0')}</span><div><i style={{ width: `${((activeIndex + 1) / aiTimeline.length) * 100}%` }} /></div></div>
    <div className="ai-timeline" ref={scroller} onScroll={onScroll} onWheel={event => { if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) hasInteracted.current = true; }} onPointerDown={() => { hasInteracted.current = true; }} onKeyDown={event => { if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) hasInteracted.current = true; }} tabIndex={0} aria-label="Horizontal timeline of Kami’s AI learning journey"><ol className="ai-timeline-track">
      {aiTimeline.map((item, index) => <li className={`ai-milestone${activeIndex === index ? ' is-active' : ''}`} key={item.title}><span className="timeline-dot" aria-hidden="true" /><article className={`timeline-card${item.image ? ' has-preview' : ''}`}>
        <div className="timeline-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{item.stage}</span></div><h3>{item.title}</h3>{item.image && <img className="timeline-project-image" src={item.image} alt={item.imageAlt} loading="lazy" />}<p>{item.text}</p>
        {item.toolNames && <div className="tool-pills">{item.toolNames.map(name => { const tool = tools[name]; const key = `${index}-${name}`; return <button type="button" className={selectedTool === key ? 'is-selected' : ''} aria-expanded={selectedTool === key} onClick={() => setSelectedTool(selectedTool === key ? null : key)} key={name}><img src={tool.icon} alt="" />{name}</button>; })}</div>}
        {item.keywords && <strong className="timeline-keywords">{item.keywords}</strong>}
        {item.toolNames?.map(name => { const key = `${index}-${name}`; return selectedTool === key ? <aside className="tool-detail" key={key}><button type="button" aria-label="Close tool detail" onClick={() => setSelectedTool(null)}>×</button><b>{tools[name].name} in practice</b><p>{tools[name].scenario}</p><code>“{tools[name].prompt}”</code></aside> : null; })}
      </article></li>)}
    </ol></div></>;
}

export default function App() {
  const explore = () => document.getElementById('contents')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  return <div className="min-h-screen bg-[#FAF8F5] text-[#181715] font-body"><header className="story-nav"><a href="#hero" aria-label="Yang Cheng Home">YANG CHENG</a><a href="#contents">CONTENTS <span aria-hidden="true">↗</span></a></header><main>
    <Hero onExploreClick={explore} />
    <section className="story-contents story-page" id="contents" aria-labelledby="contents-title"><div className="story-eyebrow">02 / CONTENTS</div><h2 id="contents-title">A path in<br /><em>three chapters.</em></h2><nav aria-label="Story chapters">{chapters.map(c => <a href={`#${c.id}`} key={c.id}><span className="chapter-number">{c.number}</span><span><strong>{c.title}</strong><small>{c.subtitle}</small></span><span className="chapter-arrow" aria-hidden="true">↗</span></a>)}</nav></section>
    {chapters.filter(c => c.id !== 'ai').map(c => <section className="story-page story-chapter" id={c.id} key={c.id} aria-labelledby={`${c.id}-title`}><div className="story-eyebrow">{c.number} / {c.context}</div><div className="story-chapter-layout"><div><h2 id={`${c.id}-title`}>{c.title}</h2><p className="story-note">{c.note}</p>{c.id === 'accounting' && <CredentialBadge />}</div><div className="story-copy"><h3>{c.lead}</h3>{c.id === 'accounting' ? accountingParagraphs.map(p => <p key={p}>{p}</p>) : <SystemsJourney />}<SkillTags tags={c.tags} /></div></div><a className="story-back" href="#contents">↑ BACK TO CONTENTS</a></section>)}
    <section className="story-page story-chapter ai-timeline-section" id="ai" aria-labelledby="ai-title"><div className="story-eyebrow">03 / PRESENT · LEARNING &amp; EXPLORATION</div><div className="ai-timeline-heading"><h2 id="ai-title">My AI<br /><em>learning path.</em></h2><p>For a business student with almost no technical background, AI is finally beginning to make sense. I am still exploring.</p></div><p className="timeline-instruction">SCROLL HORIZONTALLY <span aria-hidden="true">→</span></p><AiTimeline /><a className="story-back" href="#contents">↑ BACK TO CONTENTS</a></section>
  </main><footer className="story-footer"><p>Let’s keep the conversation going.</p><a href="mailto:chengyang869@email.com">chengyang869@email.com ↗</a><a href="#hero">BACK TO TOP ↑</a></footer></div>;
}
