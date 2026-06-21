import type { Message, Question } from '../types/content';
import { InlineBlankBody } from './InlineBlankBody';

interface Props {
  message: Message;
  questions: Question[];
  selections: Record<string, number | null>;
  onSelect: (questionId: string, index: number) => void;
  revealFor: (questionId: string) => boolean;
}

export function MessageCard({ message, questions, selections, onSelect, revealFor }: Props) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
      <div className="mb-3 space-y-0.5 border-b border-slate-700 pb-2 text-xs text-slate-400">
        <p className="text-sm font-semibold text-amber-400">{message.label}</p>
        <p>
          <span className="text-slate-500">From:</span> {message.from}
        </p>
        <p>
          <span className="text-slate-500">To:</span> {message.to}
        </p>
        <p>
          <span className="text-slate-500">Subject:</span> {message.subject}
        </p>
      </div>
      <InlineBlankBody body={message.body} questions={questions} selections={selections} onSelect={onSelect} revealFor={revealFor} />
    </div>
  );
}
