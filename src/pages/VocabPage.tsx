import { useEffect, useMemo, useRef, useState } from 'react';
import type { VocabCategory, VocabQuizResult } from '../types/content';
import { VOCAB_CATEGORY_LABELS } from '../types/content';
import { vocabWords } from '../data';
import { buildQuizSet } from '../utils/vocabQuiz';
import type { VocabQuizQuestion } from '../utils/vocabQuiz';

interface Props {
  missedVocabIds: string[];
  onQuizComplete: (result: VocabQuizResult) => void;
}

const CATEGORIES = Object.keys(VOCAB_CATEGORY_LABELS) as VocabCategory[];

type ViewState =
  | { mode: 'browse' }
  | { mode: 'setup' }
  | { mode: 'running'; questions: VocabQuizQuestion[]; category: VocabCategory | 'mixed' }
  | { mode: 'result'; questions: VocabQuizQuestion[]; selections: (number | null)[]; category: VocabCategory | 'mixed' };

export function VocabPage({ missedVocabIds, onQuizComplete }: Props) {
  const [view, setView] = useState<ViewState>({ mode: 'browse' });
  const [browseCategory, setBrowseCategory] = useState<VocabCategory | 'all'>('all');
  const [setupCategory, setSetupCategory] = useState<VocabCategory | 'all' | 'missed'>('all');
  const [setupKind, setSetupKind] = useState<'meaning' | 'context'>('meaning');

  const browseWords = useMemo(
    () => (browseCategory === 'all' ? vocabWords : vocabWords.filter((w) => w.category === browseCategory)),
    [browseCategory]
  );

  const missedWords = useMemo(() => vocabWords.filter((w) => missedVocabIds.includes(w.id)), [missedVocabIds]);

  const startQuiz = () => {
    let pool = vocabWords;
    let categoryLabel: VocabCategory | 'mixed' = 'mixed';
    if (setupCategory === 'missed') {
      pool = missedWords.length > 0 ? missedWords : vocabWords;
    } else if (setupCategory !== 'all') {
      pool = vocabWords.filter((w) => w.category === setupCategory);
      categoryLabel = setupCategory;
    }
    const questions = buildQuizSet(pool, vocabWords, setupKind, 10);
    setView({ mode: 'running', questions, category: categoryLabel });
  };

  if (view.mode === 'browse') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-50">Vocabulary</h1>
          <button
            onClick={() => setView({ mode: 'setup' })}
            className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-400"
          >
            Start a Quiz
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setBrowseCategory('all')}
            className={`rounded-full px-3 py-1.5 text-xs font-medium ${
              browseCategory === 'all' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'
            }`}
          >
            All ({vocabWords.length})
          </button>
          {CATEGORIES.map((c) => {
            const count = vocabWords.filter((w) => w.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setBrowseCategory(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  browseCategory === c ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {VOCAB_CATEGORY_LABELS[c]} ({count})
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {browseWords.map((w) => (
            <div key={w.id} className="rounded-xl border border-slate-700 bg-slate-800/60 p-3.5">
              <div className="flex items-baseline justify-between">
                <span className="font-semibold text-slate-100">{w.term}</span>
                <span className="text-xs italic text-slate-500">{w.partOfSpeech}</span>
              </div>
              <p className="mt-1 text-sm text-slate-300">{w.meaning}</p>
              <p className="mt-1 text-xs italic text-slate-500">"{w.example}"</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (view.mode === 'setup') {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-slate-50">Set up a quiz</h1>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Category</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSetupCategory('all')}
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                setupCategory === 'all' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'
              }`}
            >
              All (mixed)
            </button>
            <button
              onClick={() => setSetupCategory('missed')}
              disabled={missedWords.length === 0}
              className={`rounded-full px-3 py-1.5 text-xs font-medium disabled:opacity-40 ${
                setupCategory === 'missed' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
              }`}
            >
              Review Missed ({missedWords.length})
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setSetupCategory(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  setupCategory === c ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {VOCAB_CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Quiz type</p>
          <div className="flex gap-2">
            <button
              onClick={() => setSetupKind('meaning')}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                setupKind === 'meaning' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'
              }`}
            >
              Meaning Match
            </button>
            <button
              onClick={() => setSetupKind('context')}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                setupKind === 'context' ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-300'
              }`}
            >
              Word in Context
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setView({ mode: 'browse' })} className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300">
            Back
          </button>
          <button onClick={startQuiz} className="rounded-lg bg-teal-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-400">
            Start
          </button>
        </div>
      </div>
    );
  }

  if (view.mode === 'running') {
    return <QuizRunner questions={view.questions} category={view.category} onFinish={(selections) => setView({ mode: 'result', questions: view.questions, selections, category: view.category })} />;
  }

  // result
  return (
    <QuizResultView
      questions={view.questions}
      selections={view.selections}
      category={view.category}
      onQuizComplete={onQuizComplete}
      onBack={() => setView({ mode: 'browse' })}
    />
  );
}

function QuizResultView({
  questions,
  selections,
  category,
  onQuizComplete,
  onBack,
}: {
  questions: VocabQuizQuestion[];
  selections: (number | null)[];
  category: VocabCategory | 'mixed';
  onQuizComplete: (result: VocabQuizResult) => void;
  onBack: () => void;
}) {
  const correctCount = questions.filter((q, i) => selections[i] === q.correctIndex).length;
  const missed = questions.filter((q, i) => selections[i] !== q.correctIndex);
  const reportedRef = useRef(false);

  useEffect(() => {
    if (reportedRef.current) return;
    reportedRef.current = true;
    onQuizComplete({
      date: new Date().toISOString(),
      category,
      correctCount,
      totalCount: questions.length,
      missedWordIds: missed.map((m) => m.word.id),
    });
    // Intentionally runs once per mount of this result view (a fresh quiz
    // attempt), not on every prop change — onQuizComplete is reported exactly
    // once even under React StrictMode's dev-only double-invoke of effects.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-slate-50">Quiz Results</h1>
      <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
        <p className="text-3xl font-bold text-slate-50">
          {correctCount}/{questions.length}
        </p>
        <p className="text-sm text-slate-400">{Math.round((correctCount / questions.length) * 100)}% correct</p>
      </div>
      {missed.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Words to review</p>
          {missed.map((m) => (
            <div key={m.word.id} className="rounded-lg bg-slate-800/60 p-3 text-sm">
              <span className="font-semibold text-amber-300">{m.word.term}</span>
              <span className="text-slate-300"> — {m.word.meaning}</span>
            </div>
          ))}
        </div>
      )}
      <button onClick={onBack} className="rounded-lg bg-teal-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-400">
        Back to Vocabulary
      </button>
    </div>
  );
}

function QuizRunner({
  questions,
  onFinish,
}: {
  questions: VocabQuizQuestion[];
  category: VocabCategory | 'mixed';
  onFinish: (selections: (number | null)[]) => void;
}) {
  const [index, setIndex] = useState(0);
  const [selections, setSelections] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const current = questions[index];
  const selected = selections[index];
  const isLast = index === questions.length - 1;

  const select = (i: number) => {
    if (selected !== null) return; // lock after first choice, like a flashcard quiz
    const next = [...selections];
    next[index] = i;
    setSelections(next);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-400">
        Question {index + 1} of {questions.length}
      </p>
      <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
        <p className="mb-3 font-medium text-slate-100">{current.prompt}</p>
        <div className="space-y-2">
          {current.options.map((opt, i) => {
            let classes = 'border-slate-600 hover:border-teal-500';
            if (selected !== null) {
              if (i === current.correctIndex) classes = 'border-emerald-500 bg-emerald-500/10 text-emerald-200';
              else if (i === selected) classes = 'border-rose-500 bg-rose-500/10 text-rose-200';
              else classes = 'border-slate-700 opacity-60';
            }
            return (
              <button
                key={i}
                data-testid="vocab-option"
                onClick={() => select(i)}
                disabled={selected !== null}
                className={`block w-full rounded-lg border px-3 py-2 text-left text-sm text-slate-100 ${classes}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
      <button
        data-testid="vocab-next"
        onClick={() => (isLast ? onFinish(selections) : setIndex((i) => i + 1))}
        disabled={selected === null}
        className="rounded-lg bg-teal-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-400 disabled:opacity-40"
      >
        {isLast ? 'See Results' : 'Next'}
      </button>
    </div>
  );
}
