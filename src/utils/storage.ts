import { EMPTY_PROGRESS } from '../types/content';
import type { UserProgress } from '../types/content';

const STORAGE_KEY = 'celpip-trainer-progress-v1';

export function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(EMPTY_PROGRESS);
    const parsed = JSON.parse(raw) as UserProgress;
    // Defensive merge in case shape evolves between versions
    return { ...structuredClone(EMPTY_PROGRESS), ...parsed };
  } catch {
    return structuredClone(EMPTY_PROGRESS);
  }
}

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage may be unavailable (private browsing, quota) — fail silently
  }
}

export function resetProgress(): UserProgress {
  const fresh = structuredClone(EMPTY_PROGRESS);
  saveProgress(fresh);
  return fresh;
}

function isYesterday(prevISO: string, todayISO: string): boolean {
  const prev = new Date(prevISO);
  const today = new Date(todayISO);
  const diffDays = Math.round(
    (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
      Date.UTC(prev.getFullYear(), prev.getMonth(), prev.getDate())) /
      86400000
  );
  return diffDays === 1;
}

function isSameDay(aISO: string, bISO: string): boolean {
  const a = new Date(aISO);
  const b = new Date(bISO);
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** Updates streak based on today's date vs the last practice date. Call once per completed activity. */
export function bumpStreak(progress: UserProgress): UserProgress {
  const todayISO = new Date().toISOString();
  if (!progress.lastPracticeDate) {
    return { ...progress, streak: 1, lastPracticeDate: todayISO };
  }
  if (isSameDay(progress.lastPracticeDate, todayISO)) {
    return { ...progress, lastPracticeDate: todayISO };
  }
  if (isYesterday(progress.lastPracticeDate, todayISO)) {
    return { ...progress, streak: progress.streak + 1, lastPracticeDate: todayISO };
  }
  return { ...progress, streak: 1, lastPracticeDate: todayISO };
}
