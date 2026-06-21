import type { Comment, Question } from '../types/content';
import { InlineBlankBody } from './InlineBlankBody';

interface Props {
  comment: Comment;
  index: number;
  questions: Question[];
  selections: Record<string, number | null>;
  onSelect: (questionId: string, index: number) => void;
  revealFor: (questionId: string) => boolean;
}

export function CommentCard({ comment, index, questions, selections, onSelect, revealFor }: Props) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-3.5">
      <p className="mb-1.5 text-xs font-semibold text-teal-300">
        Comment {index} — {comment.author}
      </p>
      <div className="text-sm">
        <InlineBlankBody body={comment.body} questions={questions} selections={selections} onSelect={onSelect} revealFor={revealFor} />
      </div>
    </div>
  );
}
