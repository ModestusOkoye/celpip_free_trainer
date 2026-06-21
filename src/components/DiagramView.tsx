import type { DiagramData } from '../types/content';

export function DiagramView({ data, title }: { data: DiagramData; title: string }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-amber-400">{title}</h3>
      {data.kind === 'table' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-600 text-slate-400">
                {data.headers.map((h, i) => (
                  <th key={i} className="px-2 py-1.5 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-slate-800 text-slate-200">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-2 py-1.5">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data.kind === 'schedule' && (
        <ul className="space-y-2">
          {data.items.map((item, i) => (
            <li key={i} className="rounded-lg bg-slate-900/50 p-2.5 text-sm">
              <div className="font-semibold text-teal-300">{item.time}</div>
              <div className="text-slate-100">{item.activity}</div>
              {item.location && <div className="text-slate-400">{item.location}</div>}
              {item.notes && <div className="mt-1 text-xs italic text-slate-500">{item.notes}</div>}
            </li>
          ))}
        </ul>
      )}

      {data.kind === 'list' && (
        <ul className="space-y-2">
          {data.items.map((item, i) => (
            <li key={i} className="rounded-lg bg-slate-900/50 p-2.5 text-sm">
              <div className="font-semibold text-teal-300">{item.label}</div>
              <div className="text-slate-200">{item.details}</div>
            </li>
          ))}
        </ul>
      )}

      {data.kind === 'comparison' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-600 text-slate-400">
                <th className="px-2 py-1.5 font-medium">Feature</th>
                {data.categories.map((c, i) => (
                  <th key={i} className="px-2 py-1.5 font-medium">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-slate-800 text-slate-200">
                  <td className="px-2 py-1.5 font-medium text-slate-300">{row.feature}</td>
                  {row.values.map((v, vi) => (
                    <td key={vi} className="px-2 py-1.5">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
