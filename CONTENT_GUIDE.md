# Adding More Content (CONTENT_GUIDE.md)

Right now the app ships with a working foundation, not the full 80 sets:

| Section | Seeded | Target | File |
|---|---|---|---|
| Practice Task (warm-up) | 5 | — (a handful is enough) | `src/data/practiceTask.ts` |
| Part 1: Correspondence | 20 | 20 — reached | `src/data/correspondence.ts` |
| Part 2: Diagram | 20 | 20 — reached | `src/data/diagram.ts` |
| Part 3: Information | 20 | 20 — reached | `src/data/information.ts` |
| Part 4: Viewpoints | 20 | 20 — reached | `src/data/viewpoints.ts` |
| Vocabulary | 50 words | — (50 is a solid base) | `src/data/vocab.ts` |

The original 80-set target has been reached. Everything below still applies if you ever want to add more on top of this.

## The golden rule

Every shape is defined once in `src/types/content.ts`. Never write a new set free-form — copy the shape of an existing set in the matching file and edit the content. The validator (see below) will catch most structural mistakes immediately.

## Workflow for adding a batch

1. Open the relevant file in `src/data/` (e.g. `correspondence.ts`) and copy one existing set object as a template.
2. Give it a new unique `id` following the existing pattern (`corr-004`, `corr-005`, ...).
3. Write new, original content — don't lightly reword an existing set.
4. Run `npm run validate`. This checks question counts, duplicate ids, `correctIndex` ranges, and that every `{{...}}` inline-blank token has a matching question with that exact id, and vice versa.
5. Run `npm run build` to confirm TypeScript and the production build are still clean.
6. Run `npm test` to confirm the existing smoke tests still pass.

## Shape reference, per section (corrected against real exam examples)

### Correspondence (Part 1, 11 questions)
`messages` is 1–2 emails. **Match the realism level of a real exam letter**: specific dates, dollar amounts, named places and people, a clear complication (something went wrong, needs explaining, or needs a decision), and a resolution or next step. The 6 standalone `mcq` questions refer to Message 1 — make wrong options genuinely plausible, not obviously wrong. The 5 `blank` questions are embedded in Message 2's `body` via `{{<id>}}` tokens.

### Diagram (Part 2, 8 questions)
**This is not a diagram next to a list of separate questions.** The real format is: a rich diagram (`diagramData`, one of `table`/`schedule`/`list`/`comparison` — make it detailed, like a real flyer or notice with multiple options/businesses/cross-referencing rules, not a bare data table) followed by exactly one `applicationMessage` (same `Message` shape as Correspondence) where **all 8 questions are `kind: 'blank'`**, embedded via `{{<id>}}` tokens directly in that message's body. There are no standalone `mcq` questions in this section — the whole point is applying diagram facts while filling in a message. See `diag-001` ("Downtown Bike Rental Options") as the reference example.

### Information (Part 3, 9 questions)
Exactly 4 `paragraphs` labelled `A`–`D`. **Do not give paragraphs a `heading`** — that gives away the content and defeats the matching task (the type still allows an optional `heading` field, but leave it unset). All 9 questions follow one uniform template: a statement that must be matched to the paragraph that contains it. Every question's `options` array should be exactly `['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D', 'Not given in any paragraph']`, and **a couple of the 9 statements per set should genuinely have "Not given" as the correct answer** — don't make every statement map neatly to a paragraph, that's unrealistic and easier than the real exam.

### Viewpoints (Part 4, 10 questions)
One `article` plus **exactly one** reader `comment` (not multiple named commenters debating each other — that was an earlier mistake, corrected now). 7 standalone `mcq` questions about the article itself (main idea, detail, inference, tone, what different people quoted *within* the article would agree/disagree about), then 3 `blank` questions embedded in that single comment via `{{<id>}}` tokens. See `view-001` as the reference example.

Every question (any kind) needs: `id`, `kind`, `prompt`, `options`, `correctIndex`, `explanation`, `skill` (one of the 10 `SkillTag` values), and optionally `commonMistake` and `refersTo`.

## Adding vocabulary

Add entries to `src/data/vocab.ts` following the existing `VocabWord` shape. The example sentence should actually contain the term (the validator warns if it doesn't look like it does).

## Batching with Claude

A good prompt for a future session: "Add 5 more Part 2 Diagram sets following CONTENT_GUIDE.md exactly — rich diagram + one applicationMessage with all 8 blanks, Canadian contexts only — then run validate, build, and test to confirm." Point it at this file and `src/types/content.ts`.
