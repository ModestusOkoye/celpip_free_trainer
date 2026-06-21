import { computeSkillStats, estimateBand } from '../utils/scoring';
import type { AttemptRecord } from '../types/content';
import { SkillBars } from './SkillBars';

export function ResultsSummary({ attempt, onRetry, onContinue }: { attempt: AttemptRecord; onRetry?: () => void; onContinue?: () => void }) {
  const percent = attempt.totalCount > 0 ? Math.round((attempt.correctCount / attempt.totalCount) * 100) : 0;
  const band = estimateBand(percent);
  const skillStats = computeSkillStats([attempt]);

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-3xl font-bold text-slate-50">
            {attempt.correctCount}/{attempt.totalCount}
          </p>
          <p className="text-sm text-slate-400">{percent}% correct</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-teal-300">{band.level}</p>
          <p className="max-w-xs text-xs text-slate-400">{band.note}</p>
        </div>
      </div>

      {attempt.autoSubmitted && (
        <p className="mt-3 rounded-md bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-300">
          Time ran out — this attempt was submitted automatically.
        </p>
      )}

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Skills tested in this set</p>
        <SkillBars stats={skillStats} />
      </div>

      <div className="mt-5 flex gap-2">
        {onRetry && (
          <button
            onClick={onRetry}
            className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 hover:border-teal-400"
          >
            Try again
          </button>
        )}
        {onContinue && (
          <button onClick={onContinue} className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-400">
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
