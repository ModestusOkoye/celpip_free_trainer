import type { SkillStat } from '../utils/scoring';

const SKILL_LABELS: Record<string, string> = {
  'main-idea': 'Main Idea',
  'detail-scanning': 'Detail Scanning',
  inference: 'Inference',
  'vocabulary-in-context': 'Vocabulary in Context',
  'tone-purpose': 'Tone & Purpose',
  'matching-information': 'Matching Information',
  'diagram-interpretation': 'Diagram Interpretation',
  'viewpoint-opinion': 'Viewpoint & Opinion',
  'grammar-completion': 'Grammar & Completion',
  'paraphrase-recognition': 'Paraphrase Recognition',
};

export function SkillBars({ stats, limit }: { stats: SkillStat[]; limit?: number }) {
  const shown = limit ? stats.slice(0, limit) : stats;
  if (shown.length === 0) {
    return <p className="text-sm text-slate-400">No data yet — complete a few practice sets to see skill breakdown.</p>;
  }
  return (
    <div className="space-y-2.5">
      {shown.map((s) => {
        const barColor = s.accuracy >= 70 ? 'bg-emerald-500' : s.accuracy >= 40 ? 'bg-amber-400' : 'bg-rose-500';
        return (
          <div key={s.skill}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-slate-300">{SKILL_LABELS[s.skill] ?? s.skill}</span>
              <span className="text-slate-400">
                {s.correct}/{s.total} · {s.accuracy}%
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-700">
              <div className={`h-full ${barColor}`} style={{ width: `${s.accuracy}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
