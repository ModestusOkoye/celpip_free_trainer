import type { Question } from '../types/content';

interface Props {
  question: Question;
  index: number;
  total: number;
  selected: number | null;
  onSelect: (index: number) => void;
  showResult: boolean; // true in study mode after answering, or after final submit
}

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

export function QuestionCard({ question, index, total, selected, onSelect, showResult }: Props) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
      <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
        <span>
          Question {index} of {total}
        </span>
        <span className="rounded-full bg-slate-700 px-2 py-0.5 text-slate-300">
          {SKILL_LABELS[question.skill] ?? question.skill}
        </span>
      </div>
      {question.refersTo && (
        <div className="mb-1 text-xs font-medium uppercase tracking-wide text-teal-400">{question.refersTo}</div>
      )}
      <p className="mb-3 font-medium text-slate-100">{question.prompt}</p>
      <div className="space-y-2">
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrectOpt = i === question.correctIndex;
          let classes = 'border-slate-600 hover:border-teal-500';
          if (showResult) {
            if (isCorrectOpt) classes = 'border-emerald-500 bg-emerald-500/10 text-emerald-200';
            else if (isSelected) classes = 'border-rose-500 bg-rose-500/10 text-rose-200';
            else classes = 'border-slate-700 opacity-70';
          } else if (isSelected) {
            classes = 'border-teal-400 bg-teal-400/10';
          }
          return (
            <button
              key={i}
              type="button"
              data-testid="qcard-option"
              disabled={showResult}
              onClick={() => onSelect(i)}
              className={`block w-full rounded-lg border px-3 py-2 text-left text-sm text-slate-100 transition-colors ${classes}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {showResult && (
        <div className="mt-3 space-y-1 rounded-lg bg-slate-900/60 p-3 text-sm">
          <p className="text-slate-200">
            <span className="font-semibold text-emerald-400">Correct answer: </span>
            {question.options[question.correctIndex]}
          </p>
          <p className="text-slate-300">{question.explanation}</p>
          {selected !== null && selected !== question.correctIndex && question.commonMistake && (
            <p className="text-amber-300">{question.commonMistake}</p>
          )}
        </div>
      )}
    </div>
  );
}
