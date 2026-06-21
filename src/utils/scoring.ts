import type {
  AttemptAnswer,
  AttemptRecord,
  Question,
  SectionType,
  SkillTag,
  UserProgress,
} from '../types/content';

export interface GradedAnswer extends AttemptAnswer {
  question: Question;
}

export function gradeAnswers(
  questions: Question[],
  selections: Record<string, number | null>
): GradedAnswer[] {
  return questions.map((q) => {
    const selectedIndex = selections[q.id] ?? null;
    return {
      questionId: q.id,
      selectedIndex,
      correct: selectedIndex !== null && selectedIndex === q.correctIndex,
      skill: q.skill,
      question: q,
    };
  });
}

export function buildAttemptRecord(
  setId: string,
  sectionType: SectionType,
  mode: 'study' | 'exam',
  graded: GradedAnswer[],
  timeTakenSeconds: number,
  autoSubmitted: boolean
): AttemptRecord {
  return {
    id: `${setId}-${Date.now()}`,
    setId,
    sectionType,
    mode,
    date: new Date().toISOString(),
    answers: graded.map(({ question, ...rest }) => rest),
    correctCount: graded.filter((g) => g.correct).length,
    totalCount: graded.length,
    timeTakenSeconds,
    autoSubmitted,
  };
}

// CELPIP doesn't publish a fixed raw-score-to-level conversion table; this is
// a rough, clearly-unofficial mapping by percentage purely for practice
// feedback purposes.
export function estimateBand(percent: number): { level: string; note: string } {
  if (percent >= 90) return { level: 'CLB 10+', note: 'Very strong performance on this set.' };
  if (percent >= 80) return { level: 'CLB 8–9', note: 'Strong performance, close to advanced level.' };
  if (percent >= 65) return { level: 'CLB 7', note: 'Solid mid-range performance.' };
  if (percent >= 50) return { level: 'CLB 5–6', note: 'Developing — review missed skills below.' };
  return { level: 'CLB 4 and below', note: 'Foundational gaps — focus on core skills before timed practice.' };
}

export interface SkillStat {
  skill: SkillTag;
  correct: number;
  total: number;
  accuracy: number;
}

export function computeSkillStats(attempts: AttemptRecord[]): SkillStat[] {
  const map = new Map<SkillTag, { correct: number; total: number }>();
  for (const attempt of attempts) {
    for (const ans of attempt.answers) {
      const entry = map.get(ans.skill) ?? { correct: 0, total: 0 };
      entry.total += 1;
      if (ans.correct) entry.correct += 1;
      map.set(ans.skill, entry);
    }
  }
  return Array.from(map.entries())
    .map(([skill, { correct, total }]) => ({
      skill,
      correct,
      total,
      accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

export interface SectionStat {
  sectionType: SectionType;
  attemptsCount: number;
  correct: number;
  total: number;
  accuracy: number;
}

export function computeSectionStats(attempts: AttemptRecord[]): SectionStat[] {
  const types: SectionType[] = ['practiceTask', 'correspondence', 'diagram', 'information', 'viewpoints'];
  return types.map((sectionType) => {
    const matching = attempts.filter((a) => a.sectionType === sectionType);
    const correct = matching.reduce((sum, a) => sum + a.correctCount, 0);
    const total = matching.reduce((sum, a) => sum + a.totalCount, 0);
    return {
      sectionType,
      attemptsCount: matching.length,
      correct,
      total,
      accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
    };
  });
}

export function overallAverage(progress: UserProgress): number {
  const all = progress.attempts;
  if (all.length === 0) return 0;
  const totalCorrect = all.reduce((s, a) => s + a.correctCount, 0);
  const totalQ = all.reduce((s, a) => s + a.totalCount, 0);
  return totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;
}
