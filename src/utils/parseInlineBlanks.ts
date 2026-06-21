export type BodySegment = { type: 'text'; value: string } | { type: 'blank'; questionId: string };

const TOKEN_RE = /\{\{([\w-]+)\}\}/g;

export function parseInlineBlanks(body: string): BodySegment[] {
  const segments: BodySegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(body)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: body.slice(lastIndex, match.index) });
    }
    segments.push({ type: 'blank', questionId: match[1] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < body.length) {
    segments.push({ type: 'text', value: body.slice(lastIndex) });
  }
  return segments;
}
