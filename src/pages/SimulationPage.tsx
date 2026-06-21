import { useMemo, useState } from 'react';
import type { AnySet, AttemptRecord, PracticeTaskSet, SectionType, SimulationRecord } from '../types/content';
import { SECTION_META } from '../types/content';
import { allSetsBySection } from '../data';
import { PracticeRunner } from '../components/PracticeRunner';
import { estimateBand } from '../utils/scoring';

const SECTION_ORDER: SectionType[] = ['practiceTask', 'correspondence', 'diagram', 'information', 'viewpoints'];

interface Props {
  onComplete: (sim: SimulationRecord) => void;
  onExit: () => void;
}

function pickRandomSet(section: SectionType): AnySet | PracticeTaskSet {
  const options = allSetsBySection[section];
  return options[Math.floor(Math.random() * options.length)];
}

export function SimulationPage({ onComplete, onExit }: Props) {
  const [phase, setPhase] = useState<'intro' | 'running' | 'done'>('intro');
  const [sectionIndex, setSectionIndex] = useState(0);
  const [attempts, setAttempts] = useState<AttemptRecord[]>([]);
  const [simRecord, setSimRecord] = useState<SimulationRecord | null>(null);

  // Lock in the chosen sets for this run once, at start.
  const chosenSets = useMemo(() => SECTION_ORDER.map((s) => pickRandomSet(s)), [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  const totalMinutes = SECTION_ORDER.reduce((sum, s) => sum + SECTION_META[s].timeLimitSeconds, 0) / 60;

  const handleSectionComplete = (attempt: AttemptRecord) => {
    setAttempts((prev) => [...prev, attempt]);
  };

  const handleSectionExit = () => {
    if (sectionIndex < SECTION_ORDER.length - 1) {
      setSectionIndex((i) => i + 1);
      return;
    }
    // Last section just finished — `attempts` here already reflects it, since
    // this only fires from a user click on the results screen that renders
    // after handleSectionComplete's state update has flushed.
    const scored = attempts.filter((a) => a.sectionType !== 'practiceTask');
    const totalCorrect = scored.reduce((s, a) => s + a.correctCount, 0);
    const totalQuestions = scored.reduce((s, a) => s + a.totalCount, 0);
    const rec: SimulationRecord = {
      id: `sim-${Date.now()}`,
      date: new Date().toISOString(),
      sectionAttempts: attempts,
      totalCorrect,
      totalQuestions,
    };
    setSimRecord(rec);
    onComplete(rec);
    setPhase('done');
  };

  if (phase === 'intro') {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-slate-50">Full Reading Simulation</h1>
        <p className="text-sm text-slate-400">
          This runs the warm-up Practice Task followed by all four CELPIP Reading parts, back-to-back, under exam timing — no
          hints, auto-submit if time runs out. Total time: about {Math.round(totalMinutes)} minutes.
        </p>
        <ol className="space-y-2 text-sm text-slate-300">
          {SECTION_ORDER.map((s, i) => (
            <li key={s} className="flex items-center gap-2 rounded-lg bg-slate-800/60 px-3 py-2">
              <span className="text-xs font-semibold text-teal-400">{i + 1}.</span>
              {SECTION_META[s].label} — {Math.round(SECTION_META[s].timeLimitSeconds / 60)} min
            </li>
          ))}
        </ol>
        <div className="flex gap-2">
          <button onClick={onExit} className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300">
            Cancel
          </button>
          <button
            onClick={() => setPhase('running')}
            className="rounded-lg bg-teal-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-400"
          >
            Start Simulation
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'running') {
    const sectionType = SECTION_ORDER[sectionIndex];
    const set = chosenSets[sectionIndex];
    return (
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Section {sectionIndex + 1} of {SECTION_ORDER.length} — {SECTION_META[sectionType].label}
        </p>
        <PracticeRunner
          key={set.id}
          set={set}
          mode="exam"
          onComplete={handleSectionComplete}
          onExit={handleSectionExit}
          onRetry={handleSectionExit}
        />
      </div>
    );
  }

  // phase === 'done'
  const scored = attempts.filter((a) => a.sectionType !== 'practiceTask');
  const totalCorrect = simRecord?.totalCorrect ?? scored.reduce((s, a) => s + a.correctCount, 0);
  const totalQuestions = simRecord?.totalQuestions ?? scored.reduce((s, a) => s + a.totalCount, 0);
  const percent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const band = estimateBand(percent);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-slate-50">Simulation Complete</h1>
      <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
        <p className="text-3xl font-bold text-slate-50">
          {totalCorrect}/{totalQuestions}
        </p>
        <p className="text-sm text-slate-400">{percent}% correct across Parts 1–4</p>
        <p className="mt-2 text-lg font-semibold text-teal-300">{band.level}</p>
        <p className="text-xs text-slate-400">{band.note}</p>
      </div>
      <div className="space-y-2">
        {attempts.map((a) => (
          <div key={a.id} className="flex items-center justify-between rounded-lg bg-slate-800/60 px-3 py-2 text-sm">
            <span className="text-slate-300">{SECTION_META[a.sectionType].label}</span>
            <span className="text-slate-400">
              {a.correctCount}/{a.totalCount}
              {a.sectionType === 'practiceTask' && ' (not scored)'}
            </span>
          </div>
        ))}
      </div>
      <button onClick={onExit} className="rounded-lg bg-teal-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-400">
        Done
      </button>
    </div>
  );
}
