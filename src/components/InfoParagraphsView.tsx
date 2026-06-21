import type { InfoParagraph } from '../types/content';

export function InfoParagraphsView({ intro, paragraphs }: { intro?: string; paragraphs: InfoParagraph[] }) {
  return (
    <div className="space-y-3">
      {intro && <p className="text-sm text-slate-300">{intro}</p>}
      {paragraphs.map((p) => (
        <div key={p.label} className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-400">
            Paragraph {p.label}
            {p.heading ? ` — ${p.heading}` : ''}
          </p>
          <p className="text-sm leading-relaxed text-slate-200">{p.text}</p>
        </div>
      ))}
    </div>
  );
}
