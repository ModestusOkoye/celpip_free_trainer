// ---------------------------------------------------------------------------
// CELPIP Reading Trainer — core content types
// This file is the single source of truth for the shape of every practice
// set. Read CONTENT_GUIDE.md before adding new sets so new data matches
// these shapes exactly.
// ---------------------------------------------------------------------------

export type SkillTag =
  | 'main-idea'
  | 'detail-scanning'
  | 'inference'
  | 'vocabulary-in-context'
  | 'tone-purpose'
  | 'matching-information'
  | 'diagram-interpretation'
  | 'viewpoint-opinion'
  | 'grammar-completion'
  | 'paraphrase-recognition';

export type Difficulty = 'foundation' | 'intermediate' | 'advanced';

export type SectionType =
  | 'practiceTask'
  | 'correspondence'
  | 'diagram'
  | 'information'
  | 'viewpoints';

export interface SectionMeta {
  type: SectionType;
  label: string;
  shortLabel: string;
  questionCount: number;
  timeLimitSeconds: number;
}

export const SECTION_META: Record<SectionType, SectionMeta> = {
  practiceTask: {
    type: 'practiceTask',
    label: 'Practice Task',
    shortLabel: 'Warm-up',
    questionCount: 1,
    timeLimitSeconds: 60,
  },
  correspondence: {
    type: 'correspondence',
    label: 'Part 1: Reading Correspondence',
    shortLabel: 'Correspondence',
    questionCount: 11,
    timeLimitSeconds: 11 * 60,
  },
  diagram: {
    type: 'diagram',
    label: 'Part 2: Reading to Apply a Diagram',
    shortLabel: 'Diagram',
    questionCount: 8,
    timeLimitSeconds: 9 * 60,
  },
  information: {
    type: 'information',
    label: 'Part 3: Reading for Information',
    shortLabel: 'Information',
    questionCount: 9,
    timeLimitSeconds: 10 * 60,
  },
  viewpoints: {
    type: 'viewpoints',
    label: 'Part 4: Reading for Viewpoints',
    shortLabel: 'Viewpoints',
    questionCount: 10,
    timeLimitSeconds: 13 * 60,
  },
};

// A question is either a standard multiple-choice question, or a
// "blank" question where the prompt contains a gap that's filled from
// a dropdown of options (used for grammar/completion items).
export type QuestionKind = 'mcq' | 'blank';

export interface BaseQuestion {
  id: string;
  kind: QuestionKind;
  /** The question text. For "blank" kind, use ___ to mark the gap. */
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Why a learner might pick the wrong answer — used in wrong-answer review. */
  commonMistake?: string;
  skill: SkillTag;
  /** Optional: which paragraph/message/section this question refers to (e.g. "B", "Reply", "Comment 2") */
  refersTo?: string;
}

export interface Question extends BaseQuestion {}

// ---------------------------------------------------------------------------
// Practice Task (warm-up)
// ---------------------------------------------------------------------------
export interface PracticeTaskSet {
  id: string;
  sectionType: 'practiceTask';
  title: string;
  difficulty: Difficulty;
  tags: string[];
  prompt: string;
  question: Question;
}

// ---------------------------------------------------------------------------
// Part 1 — Reading Correspondence
// ---------------------------------------------------------------------------
export interface Message {
  label: string; // e.g. "Email from Property Manager" or "Reply"
  from: string;
  to: string;
  subject: string;
  body: string; // use \n\n for paragraph breaks
}

export interface CorrespondenceSet {
  id: string;
  sectionType: 'correspondence';
  title: string;
  difficulty: Difficulty;
  tags: string[];
  messages: Message[]; // typically 1 or 2 (original + reply)
  questions: Question[]; // length should equal SECTION_META.correspondence.questionCount
}

// ---------------------------------------------------------------------------
// Part 2 — Reading to Apply a Diagram
// ---------------------------------------------------------------------------
export type DiagramData =
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'schedule'; items: { time: string; activity: string; location?: string; notes?: string }[] }
  | { kind: 'list'; items: { label: string; details: string }[] }
  | { kind: 'comparison'; categories: string[]; rows: { feature: string; values: string[] }[] };

export interface DiagramSet {
  id: string;
  sectionType: 'diagram';
  title: string;
  difficulty: Difficulty;
  tags: string[];
  context: string; // short intro paragraph setting the scene
  diagramTitle: string;
  diagramData: DiagramData;
  /** The message a reader fills in by applying facts from the diagram. All questions for this set are embedded here as {{id}} blank tokens. */
  applicationMessage: Message;
  questions: Question[]; // all kind: 'blank', referenced via {{id}} tokens inside applicationMessage.body
}

// ---------------------------------------------------------------------------
// Part 3 — Reading for Information
// ---------------------------------------------------------------------------
export interface InfoParagraph {
  label: string; // "A" | "B" | "C" | "D"
  heading?: string;
  text: string;
}

export interface InfoSet {
  id: string;
  sectionType: 'information';
  title: string;
  difficulty: Difficulty;
  tags: string[];
  introText?: string;
  paragraphs: InfoParagraph[]; // exactly 4, labelled A-D
  questions: Question[];
}

// ---------------------------------------------------------------------------
// Part 4 — Reading for Viewpoints
// ---------------------------------------------------------------------------
export interface Article {
  title: string;
  author?: string;
  body: string;
}

export interface Comment {
  author: string;
  body: string; // may contain ___ for blank-style questions
}

export interface ViewpointSet {
  id: string;
  sectionType: 'viewpoints';
  title: string;
  difficulty: Difficulty;
  tags: string[];
  article: Article;
  comments: Comment[];
  questions: Question[];
}

export type AnySet = CorrespondenceSet | DiagramSet | InfoSet | ViewpointSet;

// ---------------------------------------------------------------------------
// Vocabulary
// ---------------------------------------------------------------------------
export type VocabCategory =
  | 'workplace-communication'
  | 'housing-rentals'
  | 'healthcare-appointments'
  | 'banking-billing'
  | 'public-transportation'
  | 'school-training'
  | 'government-community'
  | 'scheduling-availability'
  | 'complaints-requests'
  | 'policies-rules';

export const VOCAB_CATEGORY_LABELS: Record<VocabCategory, string> = {
  'workplace-communication': 'Workplace Communication',
  'housing-rentals': 'Housing & Rentals',
  'healthcare-appointments': 'Healthcare & Appointments',
  'banking-billing': 'Banking & Billing',
  'public-transportation': 'Public Transportation',
  'school-training': 'School & Training',
  'government-community': 'Government & Community Services',
  'scheduling-availability': 'Scheduling & Availability',
  'complaints-requests': 'Complaints & Requests',
  'policies-rules': 'Policies & Rules',
};

export interface VocabWord {
  id: string;
  term: string;
  category: VocabCategory;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'idiom' | 'phrasal-verb' | 'expression';
  meaning: string; // plain-English meaning
  example: string; // example sentence in a Canadian context
  /** Word/phrase choices used for "word in context" quiz mode (3 distractors + the right term, app builds this) */
}

// ---------------------------------------------------------------------------
// User progress / persistence
// ---------------------------------------------------------------------------
export interface AttemptAnswer {
  questionId: string;
  selectedIndex: number | null; // null = skipped
  correct: boolean;
  skill: SkillTag;
}

export interface AttemptRecord {
  id: string; // unique attempt id
  setId: string;
  sectionType: SectionType;
  mode: 'study' | 'exam';
  date: string; // ISO string
  answers: AttemptAnswer[];
  correctCount: number;
  totalCount: number;
  timeTakenSeconds: number;
  autoSubmitted: boolean;
}

export interface SimulationRecord {
  id: string;
  date: string;
  sectionAttempts: AttemptRecord[]; // one per section, in CELPIP order
  totalCorrect: number;
  totalQuestions: number;
}

export interface VocabQuizResult {
  date: string;
  category: VocabCategory | 'mixed';
  correctCount: number;
  totalCount: number;
  missedWordIds: string[];
}

export interface UserProgress {
  attempts: AttemptRecord[];
  simulations: SimulationRecord[];
  vocabQuizzes: VocabQuizResult[];
  missedVocabIds: string[];
  streak: number;
  lastPracticeDate: string | null;
}

export const EMPTY_PROGRESS: UserProgress = {
  attempts: [],
  simulations: [],
  vocabQuizzes: [],
  missedVocabIds: [],
  streak: 0,
  lastPracticeDate: null,
};
