import type { VocabWord } from '../types/content';

export interface VocabQuizQuestion {
  word: VocabWord;
  prompt: string;
  options: string[];
  correctIndex: number;
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickDistractors(pool: VocabWord[], exclude: VocabWord, count: number): VocabWord[] {
  const candidates = pool.filter((w) => w.id !== exclude.id);
  return shuffle(candidates).slice(0, count);
}

export function buildMeaningQuestion(word: VocabWord, allWords: VocabWord[]): VocabQuizQuestion {
  const distractors = pickDistractors(allWords, word, 3);
  const options = shuffle([word.meaning, ...distractors.map((d) => d.meaning)]);
  return {
    word,
    prompt: `What does "${word.term}" mean?`,
    options,
    correctIndex: options.indexOf(word.meaning),
  };
}

export function buildContextQuestion(word: VocabWord, allWords: VocabWord[]): VocabQuizQuestion {
  // Replace the term in the example sentence with a blank, case-insensitively.
  const re = new RegExp(word.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  const blanked = word.example.replace(re, '_____');
  const distractors = pickDistractors(allWords, word, 3);
  const options = shuffle([word.term, ...distractors.map((d) => d.term)]);
  return {
    word,
    prompt: blanked,
    options,
    correctIndex: options.indexOf(word.term),
  };
}

export function buildQuizSet(
  words: VocabWord[],
  allWords: VocabWord[],
  kind: 'meaning' | 'context',
  count: number
): VocabQuizQuestion[] {
  const chosen = shuffle(words).slice(0, Math.min(count, words.length));
  return chosen.map((w) => (kind === 'meaning' ? buildMeaningQuestion(w, allWords) : buildContextQuestion(w, allWords)));
}
