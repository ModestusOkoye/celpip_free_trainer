import type { Question } from '../types/content';
import { parseInlineBlanks } from '../utils/parseInlineBlanks';

interface Props {
  body: string;
  questions: Question[]; // full question list for the set; we'll look up by id
  selections: Record<string, number | null>;
  onSelect: (questionId: string, index: number) => void;
  /** Per-question reveal check (study mode reveals as soon as answered; exam mode reveals only after submit) */
  revealFor: (questionId: string) => boolean;
}

export function InlineBlankBody({ body, questions, selections, onSelect, revealFor }: Props) {
  const paragraphs = body.split(/\n\n+/);

  return (
    <div className="space-y-3 leading-relaxed text-slate-200">
      {paragraphs.map((para, pIdx) => {
        const segments = parseInlineBlanks(para);
        const revealedNotes = segments
          .filter((s) => s.type === 'blank')
          .map((s) => questions.find((q) => q.id === (s as { questionId: string }).questionId))
          .filter((q): q is Question => !!q && revealFor(q.id));

        return (
          <div key={pIdx}>
            <p>
              {segments.map((seg, sIdx) => {
                if (seg.type === 'text') return <span key={sIdx}>{seg.value}</span>;

                const q = questions.find((qq) => qq.id === seg.questionId);
                if (!q) return null;
                const selected = selections[q.id] ?? null;
                const isCorrect = selected !== null && selected === q.correctIndex;
                const revealed = revealFor(q.id);

                let ringClass = 'border-slate-600 focus:border-teal-400';
                if (revealed) {
                  ringClass = isCorrect ? 'border-emerald-500 text-emerald-300' : 'border-rose-500 text-rose-300';
                } else if (selected !== null) {
                  ringClass = 'border-teal-500';
                }

                return (
                  <select
                    key={sIdx}
                    value={selected ?? ''}
                    disabled={revealed}
                    onChange={(e) => onSelect(q.id, Number(e.target.value))}
                    className={`mx-1 rounded-md border bg-slate-800 px-2 py-1 text-sm font-medium text-slate-100 outline-none ${ringClass}`}
                  >
                    <option value="" disabled>
                      select…
                    </option>
                    {q.options.map((opt, oi) => (
                      <option key={oi} value={oi}>
                        {opt}
                      </option>
                    ))}
                  </select>
                );
              })}
            </p>
            {revealedNotes.length > 0 && (
              <div className="mt-1.5 space-y-1 rounded-lg bg-slate-900/50 p-2.5 text-xs">
                {revealedNotes.map((q) => (
                  <p key={q.id} className="text-slate-400">
                    <span className="font-semibold text-emerald-400">{q.options[q.correctIndex]}: </span>
                    {q.explanation}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
