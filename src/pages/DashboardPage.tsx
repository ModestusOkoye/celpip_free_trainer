import type { AttemptRecord, UserProgress } from '../types/content';
import { SECTION_META } from '../types/content';
import { computeSectionStats, computeSkillStats, overallAverage } from '../utils/scoring';
import { SkillBars } from '../components/SkillBars';
import type { TopPage } from '../components/Sidebar';

interface Props {
  progress: UserProgress;
  onNavigate: (page: TopPage) => void;
  onReset: () => void;
}

export function DashboardPage({ progress, onNavigate, onReset }: Props) {
  const allAttempts: AttemptRecord[] = [...progress.attempts, ...progress.simulations.flatMap((s) => s.sectionAttempts)];
  const avg = overallAverage({ ...progress, attempts: allAttempts });
  const sectionStats = computeSectionStats(allAttempts).filter((s) => s.sectionType !== 'practiceTask');
  const skillStats = computeSkillStats(allAttempts);
  const weakestSkills = skillStats.slice(0, 3);

  const attemptedSections = sectionStats.filter((s) => s.attemptsCount > 0);
  const bestSection = attemptedSections.length > 0 ? attemptedSections.reduce((a, b) => (a.accuracy >= b.accuracy ? a : b)) : null;
  const weakestSection = attemptedSections.length > 0 ? attemptedSections.reduce((a, b) => (a.accuracy <= b.accuracy ? a : b)) : null;

  const recentHistory = [
    ...progress.attempts.map((a) => ({ date: a.date, label: SECTION_META[a.sectionType].label, score: `${a.correctCount}/${a.totalCount}` })),
    ...progress.simulations.map((s) => ({ date: s.date, label: 'Full Simulation', score: `${s.totalCorrect}/${s.totalQuestions}` })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  const totalSets = progress.attempts.length + progress.simulations.length;

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-bold text-slate-50">Dashboard</h1>

      {totalSets === 0 ? (
        <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5 text-sm text-slate-300">
          {"You haven't completed any practice sets yet. "}
          <button onClick={() => onNavigate('practiceHub')} className="font-semibold text-teal-400 underline">
            Start your first one
          </button>
          .
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatBox label="Sets completed" value={String(totalSets)} />
            <StatBox label="Average score" value={`${avg}%`} />
            <StatBox label="Day streak" value={String(progress.streak)} accent="amber" />
            <StatBox label="Best section" value={bestSection ? SECTION_META[bestSection.sectionType].shortLabel : '—'} accent="emerald" />
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Accuracy by section</p>
            <div className="space-y-2.5">
              {sectionStats.map((s) => (
                <div key={s.sectionType}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-slate-300">{SECTION_META[s.sectionType].shortLabel}</span>
                    <span className="text-slate-400">
                      {s.attemptsCount > 0 ? `${s.correct}/${s.total} · ${s.accuracy}%` : 'Not attempted'}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-700">
                    <div
                      className={`h-full ${s.accuracy >= 70 ? 'bg-emerald-500' : s.accuracy >= 40 ? 'bg-amber-400' : 'bg-rose-500'}`}
                      style={{ width: `${s.accuracy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Skills — weakest first</p>
            <SkillBars stats={skillStats} />
          </div>

          {weakestSection && (
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
              <p className="text-sm font-semibold text-amber-300">Recommended next practice</p>
              <p className="mt-1 text-sm text-slate-300">
                {SECTION_META[weakestSection.sectionType].label} is your weakest section at {weakestSection.accuracy}% accuracy
                {weakestSkills[0] ? `, particularly questions testing ${weakestSkills[0].skill.replace(/-/g, ' ')}` : ''}.
              </p>
              <button
                onClick={() => onNavigate('practiceHub')}
                className="mt-2 rounded-lg bg-amber-500 px-4 py-1.5 text-sm font-semibold text-slate-950 hover:bg-amber-400"
              >
                Practice this section
              </button>
            </div>
          )}

          <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Recent history</p>
            <div className="space-y-1.5">
              {recentHistory.map((h, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">{h.label}</span>
                  <span className="text-slate-500">{new Date(h.date).toLocaleDateString()}</span>
                  <span className="font-medium text-slate-200">{h.score}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <button
        onClick={() => {
          if (window.confirm('Reset all saved progress? This cannot be undone.')) onReset();
        }}
        className="text-xs text-slate-500 underline"
      >
        Reset progress
      </button>
    </div>
  );
}

function StatBox({ label, value, accent }: { label: string; value: string; accent?: 'amber' | 'emerald' }) {
  const color = accent === 'amber' ? 'text-amber-400' : accent === 'emerald' ? 'text-emerald-400' : 'text-slate-50';
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-3.5">
      <p className={`text-xl font-bold ${color}`}>{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
}
