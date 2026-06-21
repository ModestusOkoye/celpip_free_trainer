import type { Article } from '../types/content';

export function ArticleCard({ article }: { article: Article }) {
  const paragraphs = article.body.split(/\n\n+/);
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
      <h3 className="text-base font-semibold text-slate-50">{article.title}</h3>
      {article.author && <p className="mb-3 text-xs text-slate-400">{article.author}</p>}
      <div className="space-y-3 text-sm leading-relaxed text-slate-200">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
