import React, { useState } from 'react';
import { Terminal, CheckCircle, AlertTriangle, ArrowRight, Play, RefreshCw } from 'lucide-react';

interface PipelineStep {
  step: string;
  name: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  output: string;
}

export const AiSandbox: React.FC = () => {
  const sampleQueries = [
    {
      label: 'Balance Invariant Query',
      query: 'Find all journal entries in October where total debits do not equal total credits',
      schema: 'general_ledger_entries(entry_id, date, account_code, debit_amount, credit_amount, is_posted)',
      generatedSql: `SELECT entry_id, SUM(debit_amount) AS debits, SUM(credit_amount) AS credits,
       ABS(SUM(debit_amount) - SUM(credit_amount)) AS imbalance
FROM general_ledger_entries
WHERE date BETWEEN '2026-10-01' AND '2026-10-31'
GROUP BY entry_id
HAVING ABS(SUM(debit_amount) - SUM(credit_amount)) > 0.001
ORDER BY imbalance DESC;`,
      invariantCheck: 'PASSED: Query directly asserts double-entry parity rule (SUM(debits) - SUM(credits) != 0).',
      resultExplanation:
        'Discovered 2 out-of-balance entries (JE #40912 with $4,500 difference and JE #41003 with $0.12 rounding error).'
    },
    {
      label: 'Anti-Double Counting Check',
      query: 'Calculate Q3 consolidated revenue without duplicating intercompany transfers',
      schema: 'entity_revenues(entity_id, parent_id, quarter, reported_rev, intercompany_elimination)',
      generatedSql: `SELECT SUM(reported_rev - COALESCE(intercompany_elimination, 0)) AS net_consolidated_revenue
FROM entity_revenues
WHERE quarter = '2026-Q3';`,
      invariantCheck: 'PASSED: Intercompany elimination verified against parent-subsidiary hierarchy graph.',
      resultExplanation:
        'Consolidated Q3 Net Revenue: $18.42M (Eliminated $3.15M in intercompany billing).'
    },
    {
      label: 'Unusual Weekend Postings',
      query: 'Flag manual journal entries created on weekends exceeding $50,000 threshold',
      schema: 'journal_headers(id, created_by, created_at, source_type, total_amount)',
      generatedSql: `SELECT id, created_by, created_at, total_amount
FROM journal_headers
WHERE source_type = 'MANUAL'
  AND EXTRACT(DOW FROM created_at) IN (0, 6)
  AND total_amount > 50000;`,
      invariantCheck: 'PASSED: Internal control rule (SOX 404 segregation of duties) validated.',
      resultExplanation:
        '3 flagged weekend postings found for user [sys_cfo_proxy], queued for supervisory audit approval.'
    }
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(3); // default completed
  const currentScenario = sampleQueries[selectedIdx];

  const handleRun = () => {
    setIsRunning(true);
    setActiveStep(0);
    setTimeout(() => setActiveStep(1), 500);
    setTimeout(() => setActiveStep(2), 1100);
    setTimeout(() => {
      setActiveStep(3);
      setIsRunning(false);
    }, 1700);
  };

  return (
    <div className="mt-12 bg-[#FAF8F5] border border-[#181715]/15 p-6 sm:p-9">
      {/* Sandbox Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 hairline-b gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B84724]">
            <Terminal size={14} />
            <span>INTERACTIVE ARTIFACT • EXPERIMENTAL REASONING</span>
          </div>
          <h4 className="font-display text-2xl text-[#181715] mt-1 tracking-tight">
            The Invariant-Guarded Query Engine
          </h4>
        </div>
        <div className="text-xs font-mono text-[#8F8A81]">
          STATUS: <span className="text-emerald-700 font-semibold">DETERMINISTIC GUARDRAIL ACTIVE</span>
        </div>
      </div>

      <p className="text-xs sm:text-sm font-body text-[#59554F] mt-4 leading-relaxed">
        This interactive sandbox demonstrates my core learning thesis: LLMs are powerful for translating ambiguous human intent into queries, but an accounting guardrail must check domain invariants (such as debit/credit balance equality and elimination rules) before execution.
      </p>

      {/* Query Presets */}
      <div className="mt-6">
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8F8A81] mb-2">
          Select Experimental Scenario:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {sampleQueries.map((sample, idx) => (
            <button
              key={sample.label}
              onClick={() => {
                setSelectedIdx(idx);
                setActiveStep(3);
              }}
              className={`p-3 text-left text-xs transition-all border cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-[#181715] text-[#FAF8F5] border-[#181715]'
                  : 'bg-[#FAF8F5] text-[#181715] border-[#181715]/15 hover:border-[#181715]/40'
              }`}
            >
              <div className="font-mono text-[10px] text-[#B84724] mb-1">0{idx + 1}</div>
              <div className="font-medium font-body line-clamp-1">{sample.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Execution Area */}
      <div className="mt-6 bg-[#F2EEE9] border border-[#181715]/10 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 hairline-b">
          <div className="text-xs font-mono text-[#181715]">
            <span className="text-[#8F8A81]">PROMPT INPUT:</span> &ldquo;{currentScenario.query}&rdquo;
          </div>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#181715] text-[#FAF8F5] hover:bg-[#B84724] transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer"
          >
            {isRunning ? (
              <>
                <RefreshCw size={12} className="animate-spin" />
                <span>EVALUATING...</span>
              </>
            ) : (
              <>
                <Play size={12} />
                <span>RE-RUN PIPELINE</span>
              </>
            )}
          </button>
        </div>

        {/* Pipeline Stages Visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-5">
          {/* Stage 1 */}
          <div
            className={`p-3.5 border transition-all text-xs ${
              activeStep >= 0
                ? 'bg-[#FAF8F5] border-[#181715]/30 text-[#181715]'
                : 'opacity-40 border-[#181715]/10'
            }`}
          >
            <div className="text-[10px] font-mono text-[#8F8A81]">STEP 01</div>
            <div className="font-semibold font-body mt-0.5">Schema Mapping</div>
            <div className="text-[11px] font-mono text-[#59554F] mt-2 truncate">
              {currentScenario.schema}
            </div>
          </div>

          {/* Stage 2 */}
          <div
            className={`p-3.5 border transition-all text-xs ${
              activeStep >= 1
                ? 'bg-[#FAF8F5] border-[#181715]/30 text-[#181715]'
                : 'opacity-40 border-[#181715]/10'
            }`}
          >
            <div className="text-[10px] font-mono text-[#8F8A81]">STEP 02</div>
            <div className="font-semibold font-body mt-0.5">AST Generation</div>
            <div className="text-[11px] font-mono text-[#59554F] mt-2">
              Structured SQL Compilation
            </div>
          </div>

          {/* Stage 3 */}
          <div
            className={`p-3.5 border transition-all text-xs ${
              activeStep >= 2
                ? 'bg-[#FAF8F5] border-emerald-600/40 text-[#181715]'
                : 'opacity-40 border-[#181715]/10'
            }`}
          >
            <div className="text-[10px] font-mono text-emerald-700">STEP 03 • INVARIANT CHECK</div>
            <div className="font-semibold font-body mt-0.5 flex items-center gap-1">
              <CheckCircle size={12} className="text-emerald-700" />
              <span>Accounting Guard</span>
            </div>
            <div className="text-[11px] font-mono text-emerald-800 mt-2">
              Non-Zero Parity Passed
            </div>
          </div>

          {/* Stage 4 */}
          <div
            className={`p-3.5 border transition-all text-xs ${
              activeStep >= 3
                ? 'bg-[#181715] text-[#FAF8F5] border-[#181715]'
                : 'opacity-40 border-[#181715]/10'
            }`}
          >
            <div className="text-[10px] font-mono text-[#8F8A81]">STEP 04</div>
            <div className="font-semibold font-body mt-0.5">Grounded Output</div>
            <div className="text-[11px] font-mono text-white/80 mt-2">
              Verified Audit Output
            </div>
          </div>
        </div>

        {/* Output Console */}
        <div className="mt-5 bg-[#181715] text-[#FAF8F5] p-4 sm:p-5 font-mono text-xs overflow-x-auto">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-[#8F8A81]">
            <span>COMPILED SQL EXECUTION ARTIFACT</span>
            <span>DIALECT: PostgreSQL 16</span>
          </div>
          <pre className="py-3 text-emerald-400 font-mono text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap">
            {currentScenario.generatedSql}
          </pre>
          <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
            <span className="text-[#B84724]">
              {currentScenario.invariantCheck}
            </span>
            <span className="text-[#8F8A81]">{currentScenario.resultExplanation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
