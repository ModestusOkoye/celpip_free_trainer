import { useState } from 'react';
import type { AnySet, PracticeTaskSet, SectionType } from '../types/content';
import { SECTION_META } from '../types/content';
import { allSetsBySection } from '../data';

const SECTION_ORDER: SectionType[] = ['practiceTask', 'correspondence', 'diagram', 'information', 'viewpoints'];

interface Props {
  onStart: (set: AnySet | PracticeTaskSet, mode: 'study' | 'exam') => void;
  completedSetIds: Set<string>;
  /** Lifted up to App.tsx so the selected section survives Exit/re-entry round trips through the runner. */
  activeSection: SectionType;
  onChangeSection: (section: SectionType) => void;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  foundation: 'bg-emerald-500/15 text-emerald-300',
  intermediate: 'bg-amber-500/15 text-amber-300',
  advanced: 'bg-rose-500/15 text-rose-300',
};

export function PracticeHubPage({ onStart, completedSetIds, activeSection, onChangeSection }: Props) {
  const [pendingSet, setPendingSet] = useState<AnySet | PracticeTaskSet | null>(null);

  const sets = allSetsBySection[activeSection];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-slate-50">Practice by Section</h1>
        <p className="text-sm text-slate-400">Choose a section, pick a set, then choose Study or Exam mode.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {SECTION_ORDER.map((s) => {
          const meta = SECTION_META[s];
          const isActive = activeSection === s;
          return (
            <button
              key={s}
              onClick={() => onChangeSection(s)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {meta.shortLabel}
            </button>
          );
        })}
      </div>

      <p className="text-xs text-slate-400">
        {SECTION_META[activeSection].questionCount} question{SECTION_META[activeSection].questionCount === 1 ? '' : 's'} ·{' '}
        {Math.round(SECTION_META[activeSection].timeLimitSeconds / 60)} minute time limit
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {sets.map((set) => (
          <button
            key={set.id}
            onClick={() => setPendingSet(set)}
            className="flex flex-col items-start gap-2 rounded-xl border border-slate-700 bg-slate-800/60 p-4 text-left transition-colors hover:border-teal-500"
          >
            <div className="flex w-full items-center justify-between">
              <span className="font-semibold text-slate-100">{set.title}</span>
              {completedSetIds.has(set.id) && <span className="text-xs text-emerald-400">✓ Done</span>}
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${DIFFICULTY_COLORS[set.difficulty]}`}>
                {set.difficulty}
              </span>
              {set.tags.slice(0, 2).map((t) => (
                <span key={t} className="rounded-full bg-slate-700 px-2 py-0.5 text-xs text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {pendingSet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-xl border border-slate-700 bg-slate-900 p-5">
            <h3 className="mb-1 font-semibold text-slate-50">{pendingSet.title}</h3>
            <p className="mb-4 text-sm text-slate-400">How would you like to practice this set?</p>
            <div className="space-y-2">
              <button
                onClick={() => {
                  onStart(pendingSet, 'study');
                  setPendingSet(null);
                }}
                className="block w-full rounded-lg border border-teal-500 bg-teal-500/10 px-4 py-2.5 text-left text-sm"
              >
                <span className="font-semibold text-teal-300">Study Mode</span>
                <span className="block text-xs text-slate-400">See the correct answer and explanation right after each question.</span>
              </button>
              <button
                onClick={() => {
                  onStart(pendingSet, 'exam');
                  setPendingSet(null);
                }}
                className="block w-full rounded-lg border border-amber-500 bg-amber-500/10 px-4 py-2.5 text-left text-sm"
              >
                <span className="font-semibold text-amber-300">Exam Mode</span>
                <span className="block text-xs text-slate-400">Timed, no hints — auto-submits if time runs out.</span>
              </button>
            </div>
            <button onClick={() => setPendingSet(null)} className="mt-3 w-full text-center text-xs text-slate-500">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
