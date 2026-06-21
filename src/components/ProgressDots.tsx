interface Props {
  total: number;
  currentIndex: number; // 0-based
  answeredFlags: boolean[]; // length = total
}

export function ProgressDots({ total, currentIndex, answeredFlags }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-400">
        Question {currentIndex + 1} of {total}
      </span>
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: total }).map((_, i) => {
          let cls = 'bg-slate-600';
          if (i === currentIndex) cls = 'bg-teal-400';
          else if (answeredFlags[i]) cls = 'bg-emerald-500/70';
          return <span key={i} className={`h-2 w-2 rounded-full ${cls}`} />;
        })}
      </div>
    </div>
  );
}
