import { AiLearningStage, Project, InterestItem, ResumeData } from '../types';

export const AI_LEARNING_STAGES: AiLearningStage[] = [
  {
    id: 'stage-01',
    num: '01',
    title: 'FOUNDATIONS',
    timeframe: 'Month 1–2',
    overview: 'Unpacking the mathematical and conceptual roots behind modern neural architectures.',
    whatILearned: [
      'Matrix multiplication and vector transformations as geometric rotations of data',
      'Loss functions, gradient descent, and backpropagation mechanics',
      'The transition from statistical regression in financial modeling to high-dimensional representations',
      'Core probability, Bayes theorem, and entropy in information theory'
    ],
    whyILearnedIt:
      'In accounting, every number maps to a physical transaction and has an absolute audit trail. I refused to treat AI as a "black box" oracle; I needed to understand what happens to the math when inputs propagate through weights.',
    whatIBuilt: [
      {
        name: 'MicroGrad-NumPy',
        description: 'A tiny scalar and vector autograd engine built from scratch in Python to visualize forward and backward passes without PyTorch.',
        tags: ['Python', 'Calculus', 'Autograd']
      },
      {
        name: 'Financial Ratio Predictor',
        description: 'Logistic regression and shallow neural net predicting company distress using Altman Z-score indicators.',
        tags: ['NumPy', 'Scikit-Learn', 'Financial Analysis']
      }
    ],
    whatChallengedMe:
      'Moving away from deterministic accounting logic (where debit must exactly equal credit to the penny) to probabilistic reasoning where outputs have confidence intervals rather than boolean certitude.',
    whatIWantToLearnNext:
      'Deepen understanding of attention mechanisms and how positional encodings preserve sequential structure in time-series and token streams.'
  },
  {
    id: 'stage-02',
    num: '02',
    title: 'CODE',
    timeframe: 'Month 3–4',
    overview: 'Transitioning from Excel macros and financial modeling to full software engineering practices.',
    whatILearned: [
      'Python object-oriented programming, type hints, and asynchronous IO',
      'Data structures: HashMaps, Trees, Graphs, and computational complexity (Big O)',
      'Modern TypeScript & React for building intuitive interfaces for complex backend data',
      'Git version control, test-driven development (pytest), and clean modular architecture'
    ],
    whyILearnedIt:
      'Excel is the world’s most popular database, but it breaks under enterprise scale and lacks versioning. To build real information systems, I had to be able to write robust, maintainable code rather than scripts.',
    whatIBuilt: [
      {
        name: 'DoubleEntry.py',
        description: 'An immutable double-entry ledger library enforcing strict balance invariants, preventing negative cash transactions at the code level.',
        tags: ['Python', 'TDD', 'Data Structures']
      },
      {
        name: 'CLI Cash Flow Visualizer',
        description: 'Terminal-based waterfall chart generator for departmental P&L variance analysis.',
        tags: ['Rich CLI', 'Python', 'Financial Modeling']
      }
    ],
    whatChallengedMe:
      'Managing state mutation and asynchronous race conditions when multiple API calls update an in-memory ledger simultaneously.',
    whatIWantToLearnNext:
      'Advanced concurrent programming and stream processing (FastAPI background workers and Redis message queues).'
  },
  {
    id: 'stage-03',
    num: '03',
    title: 'DATA',
    timeframe: 'Month 5–6',
    overview: 'Relational database theory, SQL mastery, and unstructured data ingestion.',
    whatILearned: [
      'Relational modeling: 3rd Normal Form, Foreign Keys, Indexing strategies (B-Trees)',
      'Complex SQL: Window functions (PARTITION BY), recursive CTEs, and query execution plans (EXPLAIN ANALYZE)',
      'Document databases vs Relational ACID guarantees in financial systems',
      'Vector databases (pgvector, ChromaDB) and cosine similarity indexing for semantic search'
    ],
    whyILearnedIt:
      'Accountants spend 60% of their time cleaning and reconciling siloed data. Databases are the true backbone of enterprise software; understanding schemas is the prerequisite to extracting intelligence from them.',
    whatIBuilt: [
      {
        name: 'ERP Schema Normalizer',
        description: 'A tool that takes flat CSV transaction dumps and generates normalized 3NF PostgreSQL schemas with integrity constraints.',
        tags: ['PostgreSQL', 'SQL', 'Database Design']
      },
      {
        name: 'Taxonomy Embedder',
        description: 'A pgvector database storing XBRL financial taxonomy definitions with semantic search for ambiguous chart-of-accounts mapping.',
        tags: ['pgvector', 'PostgreSQL', 'Embeddings']
      }
    ],
    whatChallengedMe:
      'Optimizing query latency on joins across millions of journal entry lines while preserving historical audit timestamps.',
    whatIWantToLearnNext:
      'Graph databases (Neo4j) to map complex supply-chain counterparty relationships and beneficial ownership networks.'
  },
  {
    id: 'stage-04',
    num: '04',
    title: 'AI',
    timeframe: 'Month 7–8',
    overview: 'Transformer architectures, prompt engineering, structured outputs, and evaluation frameworks.',
    whatILearned: [
      'The Transformer architecture: Multi-head attention, self-attention mechanisms, and tokenization quirks',
      'Prompt engineering techniques: Chain-of-Thought, few-shot prompting, and system persona steering',
      'Constrained generation: Pydantic schemas, JSON-mode output, and regex-guided grammars',
      'Evaluation metrics for LLMs: RAG Triad (Context Relevance, Groundedness, Answer Relevance)'
    ],
    whyILearnedIt:
      'In accounting and law, a 95% accuracy rate is considered a critical failure—you cannot have a balance sheet that is "mostly" accurate. I needed to learn how to constrain AI models to output provably structured, verifiable data.',
    whatIBuilt: [
      {
        name: 'HallucinationGuard',
        description: 'A Python validator that compares LLM-generated financial summaries directly against source 10-K tables, flagging ungrounded numbers.',
        tags: ['Python', 'Evaluation', 'Grounded AI']
      },
      {
        name: 'Audit Prompt Benchmark',
        description: 'A set of 50 edge-case accounting scenarios testing how different LLMs handle ambiguous accrual vs cash timing.',
        tags: ['LLM Benchmarks', 'Prompting', 'Audit']
      }
    ],
    whatChallengedMe:
      'Handling numerical tokens in LLMs—standard tokenizers split large numbers unpredictably, leading to arithmetic mistakes without code-execution tools.',
    whatIWantToLearnNext:
      'Fine-tuning smaller open-weight models (Llama 3 / Mistral) specifically on structured financial tables and XBRL taxonomies.'
  },
  {
    id: 'stage-05',
    num: '05',
    title: 'BUILD',
    timeframe: 'Month 9–10',
    overview: 'Assembling complete end-to-end full-stack systems with LLM tool-calling and human-in-the-loop workflows.',
    whatILearned: [
      'Agentic tool-use: ReAct loops, deterministic code execution sandboxes, and state machines',
      'RAG architecture: Chunking strategies (semantic vs recursive), hybrid search (BM25 + Dense Vectors)',
      'Designing defensive UI: Highlighting citations, confidence flags, and "click-to-inspect source" drawers',
      'Production deployment, API rate-limiting, and telemetry logging'
    ],
    whyILearnedIt:
      'Knowledge is only validated when it turns into something that real people can touch, test, and break. Building end-to-end applications forced me to solve the edge cases between backend logic and human intent.',
    whatIBuilt: [
      {
        name: 'AccuQuery',
        description: 'Natural language to verified SQL query engine for financial ledgers with automated invariant validation.',
        tags: ['FastAPI', 'PostgreSQL', 'React', 'Gemini API']
      },
      {
        name: 'AuditRecon Pipeline',
        description: 'Automated journal entry anomaly detector pairing rule-based accounting sanity checks with vector outlier clustering.',
        tags: ['Python', 'FastAPI', 'TypeScript', 'Analytics']
      }
    ],
    whatChallengedMe:
      'Designing graceful failure states when an LLM fails to generate valid SQL or when the vector search returns low-confidence matches.',
    whatIWantToLearnNext:
      'Multi-agent debate architectures where one agent drafts an accounting memo and an "Auditor Agent" actively red-teams it against GAAP rules.'
  },
  {
    id: 'stage-06',
    num: '06',
    title: "WHAT'S NEXT",
    timeframe: 'Ongoing Horizon',
    overview: 'Exploring the convergence of autonomous AI agents, enterprise ERPs, and formal verification.',
    whatILearned: [
      'Continuous development requires staying humble and maintaining beginner mind',
      'The bridge between domain expertise (Accounting) and computer science is where the highest leverage lies',
      'AI will not replace accountants, but accountants who understand systems and AI will build the future of finance'
    ],
    whyILearnedIt:
      'The industry is moving from static reporting dashboards to proactive, autonomous business reasoning engines. I want to be at the architectural frontier.',
    whatIBuilt: [
      {
        name: 'OpenLedger-Spec',
        description: 'An open-source proposal for machine-readable, cryptographically verifiable financial event streams for autonomous agents.',
        tags: ['Research', 'Open Source', 'Architecture']
      }
    ],
    whatChallengedMe:
      'Balancing the rapid velocity of modern AI research papers with deep fundamental study of systems engineering and database theory.',
    whatIWantToLearnNext:
      'Formal methods (TLA+ and Rust) to guarantee zero-defect state transitions in financial software before AI agents interact with them.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'accuquery',
    num: '01',
    title: 'AccuQuery',
    category: 'Numbers → AI',
    tagline: 'Natural Language to Verified SQL Engine for Enterprise Financial Ledgers',
    description:
      'A specialized data exploration engine allowing business executives and auditors to query complex financial schemas in plain English. Unlike generic Text-to-SQL tools, AccuQuery integrates an accounting invariant guard that verifies debit/credit balance equality before returning results.',
    problem:
      'Generic AI models generate syntactically valid SQL that is financially meaningless—such as summing revenue across both parent and subsidiary companies (double counting), or grouping by dates across misaligned fiscal periods.',
    accountingFoundation:
      'Built upon GAAP revenue recognition principles, dual-entry debit/credit parity, and hierarchical chart-of-accounts aggregation structures.',
    systemArchitecture:
      'Client UI in React/TypeScript communicates with a FastAPI orchestrator. Schema metadata and column descriptions are indexed in a semantic catalog. The LLM produces an AST (Abstract Syntax Tree) which is evaluated against business constraints before executing on PostgreSQL.',
    aiImplementation:
      'Constrained LLM tool-calling with JSON schema enforcement, few-shot prompt chaining with domain-specific accounting ontology, and automatic SQL syntax and semantics sanitizer.',
    techStack: ['Python', 'PostgreSQL', 'TypeScript', 'FastAPI', 'Gemini API', 'Tailwind CSS'],
    keyTakeaways: [
      'Context matters more than model size: Providing rich column descriptions and relationship foreign keys outperformed brute-force large prompts.',
      'Accounting rules must live in deterministic code, not in the LLM’s memory.',
      'Auditors do not trust "just a number"—every answer must return the exact SQL query and drill-down transaction IDs.'
    ],
    metricsOrHighlights: [
      { label: 'Query Accuracy', value: '94.2% on financial benchmarks' },
      { label: 'Zero Double-Count', value: '100% enforcement via AST check' },
      { label: 'Avg Response', value: '1.4s query latency' }
    ],
    interactiveDemoId: 'accuquery'
  },
  {
    id: 'auditrecon',
    num: '02',
    title: 'AuditRecon Pipeline',
    category: 'Systems → AI',
    tagline: 'Hybrid Anomaly Detection for General Ledger Entries and Year-End Closes',
    description:
      'An enterprise anomaly detection engine that pairs deterministic audit rules (e.g. round-dollar transactions on weekends, unapproved manual journal entries) with unsupervised vector clustering to spot fraudulent or misclassified ledger transactions.',
    problem:
      'Year-end audit sampling tests fewer than 2% of total transactions due to manual constraints. Traditional rules create thousands of false alarms, causing alert fatigue for finance teams.',
    accountingFoundation:
      'Benford’s Law analysis, segregation of duties principles, temporal patterns of accrual adjustments, and balance sheet reconciliation logic.',
    systemArchitecture:
      'High-throughput data ingestion pipeline parsing SAP/NetSuite journal entry exports. Computes 14 engineered accounting feature vectors, combines them with text embeddings of transaction descriptions, and runs Isolation Forests with an LLM explainer.',
    aiImplementation:
      'Isolation Forest anomaly scoring combined with text embeddings. When an entry scores high on the anomaly index, an LLM generates an executive summary explaining why the transaction is unusual in plain language.',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'FastAPI', 'React', 'D3.js'],
    keyTakeaways: [
      'Combining deterministic domain rules with statistical machine learning reduces false positives by 68%.',
      'Clear explanations beat raw anomaly scores: Finance managers need to know *why* an entry is flagged, not just a 0.89 score.'
    ],
    metricsOrHighlights: [
      { label: 'False Positive Drop', value: '-68% vs traditional rule filters' },
      { label: 'Throughput', value: '50k entries parsed in under 3s' },
      { label: 'Audit Trail', value: 'Full deterministic replay log' }
    ],
    interactiveDemoId: 'audit_recon'
  },
  {
    id: 'entitygraph',
    num: '03',
    title: 'ERP Entity Navigator',
    category: 'Numbers → Systems',
    tagline: 'Interactive Structural Visualization of Enterprise Relational Schemas',
    description:
      'An architectural visualization tool built for business analysts and developers to explore entity relationships in ERP databases—tracing how a Purchase Order flows into Goods Receipt, Vendor Invoice, and Cash Disbursement.',
    problem:
      'New analysts entering corporate IT spend months struggling to understand labyrinthine legacy databases where tables have cryptic names like BSEG, BKPF, and EKPO.',
    accountingFoundation:
      'The complete Order-to-Cash (O2C) and Procure-to-Pay (P2P) lifecycle, internal control checkpoints, and matching principles (3-way match).',
    systemArchitecture:
      'Extracts database schema metadata (Foreign Keys, primary keys, table definitions) via SQL information_schema and renders an interactive, force-directed topological graph with search and schema documentation.',
    aiImplementation:
      'Uses LLM to automatically generate human-readable business descriptions for abbreviated database fields and recommend optimal query join paths between distant tables.',
    techStack: ['TypeScript', 'React', 'Canvas API', 'SQL Parser', 'Tailwind CSS'],
    keyTakeaways: [
      'Visualizing data flow bridges the communication gap between business accountants and software engineers.',
      'Entity relationship diagrams must reflect business processes, not just technical tables.'
    ],
    metricsOrHighlights: [
      { label: 'Tables Mapped', value: '45+ Core ERP entities' },
      { label: 'Onboarding Time', value: '-50% reduction in query lookup' }
    ],
    interactiveDemoId: 'schema_graph'
  },
  {
    id: 'disclosurelens',
    num: '04',
    title: 'DisclosureLens',
    category: 'Systems → AI',
    tagline: 'Grounded Footnote & XBRL Financial Filing Extraction Engine',
    description:
      'An intelligent document processor that indexes SEC 10-K and 10-Q filings, parses complex multi-tiered financial tables, and grounds extracted numbers directly to their exact page coordinates and footnotes.',
    problem:
      'Crucial corporate risks (off-balance sheet leases, debt covenants, revenue commitments) are buried in hundreds of pages of unstructured text footnotes rather than the main financial statements.',
    accountingFoundation:
      'US GAAP / IFRS disclosure requirements, footnote cross-referencing, and XBRL tagging taxonomies.',
    systemArchitecture:
      'PDF and XBRL parsing pipeline that separates tabular data from prose, generates structural hierarchical chunks, and stores them in vector and BM25 hybrid indices.',
    aiImplementation:
      'Table-aware multi-modal chunking, dual-retrieval reranking, and citation-strict answer generation with bounding-box coordinate tracking.',
    techStack: ['Python', 'PyPDF', 'ChromaDB', 'React', 'Tailwind CSS'],
    keyTakeaways: [
      'Financial tables cannot be chunked like normal prose: Row and column headers must be preserved in every single chunk to avoid contextual blindness.',
      'Direct visual bounding boxes on original PDFs generate immense user trust.'
    ],
    metricsOrHighlights: [
      { label: 'Precision', value: '98.5% footnote citation accuracy' },
      { label: 'Format Support', value: 'SEC EDGAR HTML, XBRL, PDF' }
    ],
    interactiveDemoId: 'xbrl_parser'
  }
];

export const ESSAYS_AND_INTERESTS: InterestItem[] = [
  {
    id: 'essay-01',
    title: "Why AI Needs an Auditor's Mindset",
    category: 'Essay',
    date: '2026',
    summary:
      'In traditional software engineering, "fail fast and break things" is celebrated. In accounting, a single unaccounted discrepancy can shut down a public firm. Why the next era of AI agents demands accounting discipline.',
    thoughts:
      'When an LLM outputs an answer, users treat it as conversational truth. But true reliability requires audit trails: every assertion must trace back to immutable source documents, every intermediate inference must be logged, and invariant boundaries must be enforced by deterministic code. Accounting has spent 500 years perfecting internal controls, separation of duties, and verification protocols. These are not bureaucratic relics—they are the exact architectural patterns needed to build safe, autonomous AI agents.',
    tags: ['AI Governance', 'Accounting Mindset', 'Audit Trails', 'Reliability']
  },
  {
    id: 'essay-02',
    title: 'Pacioli’s 1494 Invention & The Inherent Geometry of Databases',
    category: 'Essay',
    date: '2025',
    summary:
      'In 1494, Franciscan friar Luca Pacioli published the first treatise on double-entry bookkeeping. He was not just inventing business records—he was designing the first state-machine database.',
    thoughts:
      'Double-entry bookkeeping is fundamentally a conservation law: Assets = Liabilities + Equity. If you look closely, Pacioli created an append-only transaction ledger with cryptographic-like parity constraints centuries before relational databases or distributed ledgers. Understanding double-entry makes understanding database transactions (ACID properties, rollback logs, immutability) intuitive. The history of numbers is the history of systems.',
    tags: ['History of Accounting', 'Database Theory', 'State Machines']
  },
  {
    id: 'book-01',
    title: 'Designing Data-Intensive Applications',
    category: 'Book',
    authorOrRef: 'Martin Kleppmann',
    summary:
      'The definitive guide to the architecture of modern data storage, replication, partitioning, transactions, and consensus.',
    thoughts:
      'Reading Kleppmann while studying accounting was an eye-opener. The way distributed systems handle split-brain scenarios and consensus mirrors how multinational firms reconcile inter-company transfers across disparate currencies and reporting entities.',
    tags: ['Systems Architecture', 'Distributed Systems', 'Databases']
  },
  {
    id: 'book-02',
    title: 'The Design of Everyday Things',
    category: 'Book',
    authorOrRef: 'Don Norman',
    summary:
      'Fundamental principles of human-centered design, mental models, affordances, and feedback loops.',
    thoughts:
      'Financial software is notoriously hostile to users. Norman taught me that if an auditor makes a mistake because the interface was ambiguous, that is a system design failure, not user negligence.',
    tags: ['UX/UI Design', 'Mental Models', 'Ergonomics']
  },
  {
    id: 'concept-01',
    title: 'Invariant Checking in Autonomous Systems',
    category: 'System Concept',
    summary:
      'Enforcing strict mathematical constraints at compile-time and runtime that AI agents cannot breach.',
    thoughts:
      'Just as a debit cannot exist without a credit in accounting, an AI agent should never have direct write access to a production database without an intermediary validation layer that asserts invariant conditions.',
    tags: ['Software Engineering', 'Invariants', 'AI Safety']
  }
];

export const RESUME_DATA: ResumeData = {
  name: 'Yang Cheng',
  title: 'Bridge Builder: Accounting • Information Systems • AI',
  location: 'Global / Remote',
  email: 'chengyang869@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  summary:
    'An Accounting graduate actively transitioning into Information Systems and AI. Combining the analytical rigor, audit discipline, and financial acumen of accounting with hands-on systems architecture, SQL databases, Python development, and generative AI pipelines. Dedicated to building reliable, transparent systems that bridge business reality with intelligent technology.',
  education: [
    {
      degree: 'Bachelor of Science in Accounting',
      school: 'University Program',
      period: 'Graduated with Honors',
      focus: 'Financial Accounting, Managerial Accounting, Auditing & Assurance, Corporate Finance, Tax Law, Accounting Information Systems.',
      honors: 'Top Academic Standing in Financial Modeling and Audit Analysis'
    },
    {
      degree: 'Post-Graduate Coursework & Intensive Specialization',
      school: 'Information Systems & Computer Science Curriculum',
      period: '2024 – Present',
      focus: 'Relational Database Design (PostgreSQL), Python Programming, Data Structures & Algorithms, Systems Analysis & Design, Enterprise Architecture (ERP), Machine Learning & Transformer Architectures.'
    }
  ],
  skills: [
    {
      category: 'Numbers & Financial Domain',
      items: [
        'US GAAP / IFRS Standards',
        'Financial Statement Analysis',
        'Audit & Internal Controls (SOX)',
        'Double-Entry Bookkeeping',
        'Cost Accounting & Variance Analysis',
        'XBRL Taxonomy & 10-K Filings'
      ]
    },
    {
      category: 'Systems & Engineering',
      items: [
        'Relational Databases (PostgreSQL, SQLite)',
        'Advanced SQL (CTEs, Window Functions, Optimization)',
        'Python (FastAPI, Pandas, NumPy, Pydantic)',
        'TypeScript & Modern React',
        'RESTful API Design & Architecture',
        'Git & CI/CD Pipelines'
      ]
    },
    {
      category: 'AI & Machine Learning',
      items: [
        'LLM Prompt Engineering & Few-Shot Chaining',
        'Structured Output & JSON Schema Enforcement',
        'RAG Architectures & Vector Search (pgvector, ChromaDB)',
        'Transformer Attention & Autograd Foundations',
        'Model Evaluation & Hallucination Guardrails',
        'AI Agent Tool-Calling Frameworks'
      ]
    }
  ],
  experience: [
    {
      role: 'Financial Systems & Data Analyst (Independent Projects & Research)',
      organization: 'Yang Cheng Studio / Lab',
      period: '2025 – Present',
      description: [
        'Architected and implemented AccuQuery, an open-source natural language to verified SQL query engine that eliminates financial double-counting errors using AST constraints.',
        'Engineered an automated journal entry anomaly detection pipeline (AuditRecon) combining Benford’s Law, temporal heuristics, and embedding-based outlier clustering.',
        'Documented "How I Learn AI"—a 6-stage structured curriculum translating abstract machine learning concepts into verified software artifacts.'
      ],
      skillsApplied: ['Python', 'PostgreSQL', 'FastAPI', 'Gemini API', 'React', 'System Design']
    },
    {
      role: 'Accounting & Audit Specialist',
      organization: 'Professional Services / Corporate Finance',
      period: 'Prior Experience',
      description: [
        'Conducted substantive audit procedures, trial balance reconciliations, and internal control testing for commercial clients.',
        'Automated repetitive manual reconciliation workflows using Python and advanced spreadsheet modeling, reducing month-end close cycle times.',
        'Analyzed general ledger transactions and identified misallocated expense accounts and unrecorded liabilities.'
      ],
      skillsApplied: ['Financial Auditing', 'General Ledger', 'Reconciliations', 'Process Optimization', 'Excel/VBA']
    }
  ],
  certifications: [
    {
      name: 'Advanced Relational Database Design & SQL Performance',
      issuer: 'Verified Curriculum',
      year: '2025'
    },
    {
      name: 'Deep Learning & Transformer Architectures Specialization',
      issuer: 'Technical Coursework',
      year: '2025'
    },
    {
      name: 'Accounting Information Systems & Internal Control Frameworks',
      issuer: 'Academic Institution',
      year: '2024'
    }
  ]
};
