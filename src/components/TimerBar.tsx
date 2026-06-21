interface Props {
  formatted: string;
  percentLeft: number; // 0 to 1
  isCritical: boolean;
  paused?: boolean;
}

export function TimerBar({ formatted, percentLeft, isCritical, paused }: Props) {
  const barColor = isCritical ? 'bg-amber-400' : 'bg-teal-400';
  return (
    <div className="flex items-center gap-3 rounded-lg bg-slate-800/80 px-3 py-2">
      <span
        className={`font-mono text-sm font-semibold tabular-nums ${
          isCritical ? 'text-amber-300' : 'text-slate-100'
        }`}
      >
        {formatted}
      </span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-700">
        <div
          className={`h-full ${barColor} transition-[width] duration-1000 ease-linear`}
          style={{ width: `${Math.max(0, Math.min(1, percentLeft)) * 100}%` }}
        />
      </div>
      {paused && <span className="text-xs font-medium text-slate-400">Paused</span>}
    </div>
  );
}
