import { useMemo, useRef, useState } from 'react';
import type {
  AnySet,
  AttemptRecord,
  PracticeTaskSet,
  Question,
} from '../types/content';
import { SECTION_META } from '../types/content';
import { useCountdown } from '../utils/useCountdown';
import { gradeAnswers, buildAttemptRecord } from '../utils/scoring';
import { TimerBar } from './TimerBar';
import { ProgressDots } from './ProgressDots';
import { QuestionCard } from './QuestionCard';
import { MessageCard } from './MessageCard';
import { ArticleCard } from './ArticleCard';
import { CommentCard } from './CommentCard';
import { DiagramView } from './DiagramView';
import { InfoParagraphsView } from './InfoParagraphsView';
import { ResultsSummary } from './ResultsSummary';

interface Props {
  set: AnySet | PracticeTaskSet;
  mode: 'study' | 'exam';
  onComplete: (attempt: AttemptRecord) => void;
  onExit: () => void;
  onRetry: () => void;
}

function splitQuestions(set: AnySet | PracticeTaskSet): { standalone: Question[]; inline: Question[]; all: Question[] } {
  if (set.sectionType === 'practiceTask') {
    return { standalone: [set.question], inline: [], all: [set.question] };
  }
  const standalone = set.questions.filter((q) => q.kind === 'mcq');
  const inline = set.questions.filter((q) => q.kind === 'blank');
  return { standalone, inline, all: set.questions };
}

export function PracticeRunner({ set, mode, onComplete, onExit, onRetry }: Props) {
  const meta = SECTION_META[set.sectionType];
  const { standalone, inline, all } = useMemo(() => splitQuestions(set), [set]);
  const hasStandalone = standalone.length > 0;

  const [selections, setSelections] = useState<Record<string, number | null>>(() => {
    const init: Record<string, number | null> = {};
    all.forEach((q) => (init[q.id] = null));
    return init;
  });
  const [stdIndex, setStdIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [attempt, setAttempt] = useState<AttemptRecord | null>(null);
  const startedAt = useRef(Date.now());

  const finalize = (auto: boolean) => {
    if (submitted) return;
    const graded = gradeAnswers(all, selections);
    const timeTaken = Math.round((Date.now() - startedAt.current) / 1000);
    const rec = buildAttemptRecord(set.id, set.sectionType, mode, graded, timeTaken, auto);
    setAttempt(rec);
    setAutoSubmitted(auto);
    setSubmitted(true);
    onComplete(rec);
  };

  const countdown = useCountdown({
    totalSeconds: meta.timeLimitSeconds,
    autoStart: true,
    onExpire: () => {
      if (mode === 'exam') finalize(true);
    },
  });

  const select = (qId: string, idx: number) => setSelections((prev) => ({ ...prev, [qId]: idx }));
  const revealFor = (qId: string) => (mode === 'study' ? selections[qId] !== null : submitted);

  const current = hasStandalone ? standalone[stdIndex] : null;
  const isLast = stdIndex === standalone.length - 1;
  const answeredFlags = standalone.map((q) => selections[q.id] !== null);

  const submitWithConfirm = () => {
    const unanswered = all.filter((q) => selections[q.id] === null).length;
    if (unanswered > 0) {
      const proceed = window.confirm(
        `${unanswered} question${unanswered === 1 ? '' : 's'} still unanswered. Submit anyway?`
      );
      if (!proceed) return;
    }
    finalize(false);
  };

  const goNext = () => {
    if (!current) return;
    if (selections[current.id] === null) {
      const proceed = window.confirm("You haven't answered this question yet. Skip it and continue?");
      if (!proceed) return;
    }
    if (isLast) {
      submitWithConfirm();
    } else {
      setStdIndex((i) => i + 1);
    }
  };

  const goPrev = () => setStdIndex((i) => Math.max(0, i - 1));

  if (submitted && attempt) {
    return (
      <div className="space-y-4">
        <ResultsSummary attempt={{ ...attempt, autoSubmitted }} onRetry={onRetry} onContinue={onExit} />
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Review</p>
          <div className="space-y-3">
            {all.map((q, i) => (
              <QuestionCard
                key={q.id}
                question={q}
                index={i + 1}
                total={all.length}
                selected={selections[q.id]}
                onSelect={() => {}}
                showResult
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <TimerBar formatted={countdown.formatted} percentLeft={countdown.percentLeft} isCritical={countdown.isCritical} />
        <div className="flex items-center gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
              mode === 'study' ? 'bg-teal-500/15 text-teal-300' : 'bg-amber-500/15 text-amber-300'
            }`}
          >
            {mode === 'study' ? 'Study Mode' : 'Exam Mode'}
          </span>
          <button onClick={onExit} className="text-xs font-medium text-slate-400 hover:text-slate-200">
            Exit
          </button>
        </div>
      </div>

      {/* Reading content */}
      {set.sectionType === 'practiceTask' && (
        <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4 text-sm leading-relaxed text-slate-200">
          {set.prompt}
        </div>
      )}

      {set.sectionType === 'correspondence' && (
        <div className="space-y-3">
          {set.messages.map((msg, i) => (
            <MessageCard key={i} message={msg} questions={all} selections={selections} onSelect={select} revealFor={revealFor} />
          ))}
        </div>
      )}

      {set.sectionType === 'diagram' && (
        <div className="space-y-3">
          <p className="text-sm text-slate-300">{set.context}</p>
          <DiagramView data={set.diagramData} title={set.diagramTitle} />
          <MessageCard
            message={set.applicationMessage}
            questions={all}
            selections={selections}
            onSelect={select}
            revealFor={revealFor}
          />
        </div>
      )}

      {set.sectionType === 'information' && <InfoParagraphsView intro={set.introText} paragraphs={set.paragraphs} />}

      {set.sectionType === 'viewpoints' && (
        <div className="space-y-3">
          <ArticleCard article={set.article} />
          {set.comments.map((c, i) => (
            <CommentCard
              key={i}
              comment={c}
              index={i + 1}
              questions={all}
              selections={selections}
              onSelect={select}
              revealFor={revealFor}
            />
          ))}
        </div>
      )}

      {hasStandalone ? (
        <>
          {inline.length > 0 && (
            <p className="text-xs text-slate-400">
              {`Don't forget to complete the dropdown blanks above — ${
                inline.filter((q) => selections[q.id] !== null).length
              }/${inline.length} done.`}
            </p>
          )}

          <ProgressDots total={standalone.length} currentIndex={stdIndex} answeredFlags={answeredFlags} />

          {current && (
            <QuestionCard
              question={current}
              index={stdIndex + 1}
              total={standalone.length}
              selected={selections[current.id]}
              onSelect={(idx) => select(current.id, idx)}
              showResult={revealFor(current.id)}
            />
          )}

          <div className="flex justify-between">
            <button
              onClick={goPrev}
              disabled={stdIndex === 0}
              className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 disabled:opacity-40"
            >
              Previous
            </button>
            <button onClick={goNext} data-testid="runner-next" className="rounded-lg bg-teal-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-400">
              {isLast ? 'Submit Section' : 'Next'}
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-xs text-slate-400">
            {`${inline.filter((q) => selections[q.id] !== null).length}/${inline.length} blanks completed`}
          </p>
          <div className="flex justify-end">
            <button
              onClick={submitWithConfirm}
              data-testid="runner-next"
              className="rounded-lg bg-teal-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-teal-400"
            >
              Submit Section
            </button>
          </div>
        </>
      )}
    </div>
  );
}
