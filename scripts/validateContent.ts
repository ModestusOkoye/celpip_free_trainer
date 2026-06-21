// Run with: npm run validate
// Checks structural integrity of every content file — catches mistakes like
// a wrong question count, an out-of-range correctIndex, or an inline {{q}}
// token in a message body that has no matching question entry.

import { SECTION_META } from '../src/types/content';
import {
  practiceTaskSets,
  correspondenceSets,
  diagramSets,
  infoSets,
  viewpointSets,
  vocabWords,
} from '../src/data';

let errors: string[] = [];
let warnings: string[] = [];

function fail(msg: string) {
  errors.push(msg);
}
function warn(msg: string) {
  warnings.push(msg);
}

const allQuestionIds = new Set<string>();
const allSetIds = new Set<string>();

function checkQuestionBasics(setId: string, q: { id: string; correctIndex: number; options: string[] }) {
  if (allQuestionIds.has(q.id)) fail(`Duplicate question id "${q.id}" (set ${setId})`);
  allQuestionIds.add(q.id);
  if (q.correctIndex < 0 || q.correctIndex >= q.options.length) {
    fail(`Question ${q.id}: correctIndex ${q.correctIndex} out of range for ${q.options.length} options`);
  }
  if (q.options.length < 2) fail(`Question ${q.id}: needs at least 2 options, has ${q.options.length}`);
}

function checkSetId(id: string) {
  if (allSetIds.has(id)) fail(`Duplicate set id "${id}"`);
  allSetIds.add(id);
}

function findTokens(body: string): string[] {
  const matches = body.matchAll(/\{\{([\w-]+)\}\}/g);
  return Array.from(matches).map((m) => m[1]);
}

// Practice tasks
for (const set of practiceTaskSets) {
  checkSetId(set.id);
  checkQuestionBasics(set.id, set.question);
  if (SECTION_META.practiceTask.questionCount !== 1) fail('practiceTask meta questionCount should be 1');
}

// Correspondence
for (const set of correspondenceSets) {
  checkSetId(set.id);
  set.questions.forEach((q) => checkQuestionBasics(set.id, q));
  const expected = SECTION_META.correspondence.questionCount;
  if (set.questions.length !== expected) {
    fail(`Correspondence set ${set.id}: has ${set.questions.length} questions, expected ${expected}`);
  }
  const inlineQIds = set.questions.filter((q) => q.kind === 'blank').map((q) => q.id);
  const tokensFound = set.messages.flatMap((m) => findTokens(m.body));
  for (const qid of inlineQIds) {
    if (!tokensFound.includes(qid)) warn(`Correspondence ${set.id}: blank question ${qid} has no {{${qid}}} token in any message body`);
  }
  for (const token of tokensFound) {
    if (!inlineQIds.includes(token)) fail(`Correspondence ${set.id}: token {{${token}}} in message body has no matching blank question`);
  }
}

// Diagram
for (const set of diagramSets) {
  checkSetId(set.id);
  set.questions.forEach((q) => checkQuestionBasics(set.id, q));
  const expected = SECTION_META.diagram.questionCount;
  if (set.questions.length !== expected) fail(`Diagram set ${set.id}: has ${set.questions.length} questions, expected ${expected}`);
  const nonBlank = set.questions.filter((q) => q.kind !== 'blank');
  if (nonBlank.length > 0) fail(`Diagram set ${set.id}: all questions should be kind 'blank' (embedded in applicationMessage), found ${nonBlank.length} of kind 'mcq'`);
  const inlineQIds = set.questions.map((q) => q.id);
  const tokensFound = findTokens(set.applicationMessage.body);
  for (const qid of inlineQIds) {
    if (!tokensFound.includes(qid)) fail(`Diagram ${set.id}: question ${qid} has no {{${qid}}} token in applicationMessage body`);
  }
  for (const token of tokensFound) {
    if (!inlineQIds.includes(token)) fail(`Diagram ${set.id}: token {{${token}}} in applicationMessage has no matching question`);
  }
}

// Information
for (const set of infoSets) {
  checkSetId(set.id);
  set.questions.forEach((q) => checkQuestionBasics(set.id, q));
  const expected = SECTION_META.information.questionCount;
  if (set.questions.length !== expected) fail(`Information set ${set.id}: has ${set.questions.length} questions, expected ${expected}`);
  if (set.paragraphs.length !== 4) fail(`Information set ${set.id}: should have exactly 4 paragraphs, has ${set.paragraphs.length}`);
  const labels = set.paragraphs.map((p) => p.label).sort();
  if (JSON.stringify(labels) !== JSON.stringify(['A', 'B', 'C', 'D'])) {
    fail(`Information set ${set.id}: paragraph labels should be A,B,C,D — got ${labels.join(',')}`);
  }
}

// Viewpoints
for (const set of viewpointSets) {
  checkSetId(set.id);
  set.questions.forEach((q) => checkQuestionBasics(set.id, q));
  const expected = SECTION_META.viewpoints.questionCount;
  if (set.questions.length !== expected) fail(`Viewpoints set ${set.id}: has ${set.questions.length} questions, expected ${expected}`);
  const inlineQIds = set.questions.filter((q) => q.kind === 'blank').map((q) => q.id);
  const tokensFound = [...set.comments.flatMap((c) => findTokens(c.body)), ...findTokens(set.article.body)];
  for (const qid of inlineQIds) {
    if (!tokensFound.includes(qid)) warn(`Viewpoints ${set.id}: blank question ${qid} has no {{${qid}}} token in article/comments`);
  }
  for (const token of tokensFound) {
    if (!inlineQIds.includes(token)) fail(`Viewpoints ${set.id}: token {{${token}}} has no matching blank question`);
  }
}

// Vocab
const vocabIds = new Set<string>();
for (const w of vocabWords) {
  if (vocabIds.has(w.id)) fail(`Duplicate vocab id "${w.id}"`);
  vocabIds.add(w.id);
  if (!w.example.toLowerCase().includes(w.term.toLowerCase().split(' ')[0])) {
    warn(`Vocab ${w.id} ("${w.term}"): example sentence may not actually contain the term — double check`);
  }
}

console.log(`Checked: ${practiceTaskSets.length} practice tasks, ${correspondenceSets.length} correspondence sets, ${diagramSets.length} diagram sets, ${infoSets.length} information sets, ${viewpointSets.length} viewpoint sets, ${vocabWords.length} vocab words.`);
console.log(`Total questions: ${allQuestionIds.size}`);

if (warnings.length > 0) {
  console.log(`\n${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log(`  ⚠ ${w}`));
}

if (errors.length > 0) {
  console.log(`\n${errors.length} ERROR(S):`);
  errors.forEach((e) => console.log(`  ✗ ${e}`));
  process.exit(1);
} else {
  console.log('\n✓ All content checks passed.');
}
