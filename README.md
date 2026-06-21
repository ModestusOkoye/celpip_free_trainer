# CELPIP Reading Trainer

A rebuilt-from-scratch React + TypeScript app for practicing all four CELPIP Reading task types, with Study and Exam modes, full-simulation timing, vocabulary quizzes, and a progress dashboard — all stored locally in the browser (no backend).

This replaces a previous build where only a compiled `build/` folder existed with no editable source. This version is full, editable source: a Vite + React + TypeScript + Tailwind CSS v4 project.

## Why these tech choices

- **Vite** instead of Create React App — CRA is deprecated; Vite is the current standard, builds faster, and its dev server has none of CRA's known quirks.
- **Single self-contained build output** via `vite-plugin-singlefile` — Vite's default output is `<script type="module" src="...">`, and Chrome refuses to fetch ES modules over `file://` (it requires CORS, which a local file can't satisfy), so double-clicking a default Vite build's `index.html` shows a blank page. This project inlines the JS and CSS directly into `index.html` instead, so there's nothing left to fetch — it opens correctly straight from the filesystem, and deploys to Vercel exactly the same way.
- **No React Router** — every page is internal component state inside `App.tsx`. The whole app lives at a single URL, so a hard refresh on Vercel can never produce a "blank page / broken route" — there's only one route to begin with. See `DEPLOYMENT.md` for more on this.
- **Tailwind CSS v4** via the official Vite plugin (`@tailwindcss/vite`) — no separate PostCSS config needed.
- **localStorage** for all progress — no backend, no accounts, nothing to deploy beyond the static build.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run validate   # checks all practice-set content for structural errors
npm test            # runs the smoke test suite (full practice run, vocab quiz, full simulation)
```

## What's included right now

| Section | Sets seeded | Notes |
|---|---|---|
| Practice Task (warm-up) | 5 | 1 question each, 1 min |
| Part 1: Reading Correspondence | 20 | 11 questions each (6 standalone + 5 inline grammar blanks), 11 min |
| Part 2: Reading to Apply a Diagram | 20 | 8 questions each, all embedded as blanks in one application message, 9 min |
| Part 3: Reading for Information | 20 | 9 questions each, 4 paragraphs A–D (no headers), some answers genuinely "Not given", 10 min |
| Part 4: Reading for Viewpoints | 20 | 10 questions each (7 standalone + 3 inline blanks in one reader comment), 13 min |
| Vocabulary | 50 words across all 10 Canadian-context categories | Meaning Match + Word in Context quiz modes |

This is the full original target of 80 practice sets. **See `CONTENT_GUIDE.md` if you ever want to add even more** — the format and validation workflow are documented there.

## Features implemented

- Study Mode (immediate explanation after each answer) and Exam Mode (no hints, auto-submits on timeout)
- Per-section countdown timer with a visual urgency state in the final 25% of time
- Full Simulation: warm-up + all 4 parts back-to-back under real CELPIP timing, with a combined score at the end
- Progress indicator ("Question X of Y"), confirm-before-skip, confirm-before-submit-with-unanswered-questions
- Per-attempt scoring: correct count, percentage, an unofficial CLB-style band estimate, and a skill-by-skill breakdown
- 10 tracked skills (main idea, detail scanning, inference, vocabulary in context, tone/purpose, matching information, diagram interpretation, viewpoint/opinion, grammar completion, paraphrase recognition)
- Wrong-answer review showing the correct answer, why it's correct, and (where written) why the common wrong choice is tempting
- Dashboard: sets completed, average score, accuracy by section, weakest skills, recommended next practice, recent history, day streak
- Vocabulary: browse by category, Meaning Match quiz, Word in Context quiz (auto-generated from example sentences), Review Missed mode
- Mobile-responsive sidebar (collapses to a hamburger menu under the `md` breakpoint)

## Project structure

```
celpip/
  src/
    types/content.ts          — every data shape (the schema), single source of truth
    data/                     — all seeded practice content + vocab
      practiceTask.ts  correspondence.ts  diagram.ts  information.ts  viewpoints.ts  vocab.ts  index.ts
    utils/
      storage.ts               — localStorage load/save/reset, streak logic
      scoring.ts               — grading, band estimate, skill/section stats
      useCountdown.ts          — the countdown timer hook
      parseInlineBlanks.ts     — parses {{questionId}} tokens in message/article bodies
      vocabQuiz.ts             — generates Meaning Match / Word in Context quiz questions
    components/                — shared UI: QuestionCard, TimerBar, DiagramView, MessageCard,
                                  ArticleCard, CommentCard, InfoParagraphsView, InlineBlankBody,
                                  PracticeRunner (the generic timed-session engine), Sidebar,
                                  SkillBars, ResultsSummary, ProgressDots
    pages/                      — HomePage, PracticeHubPage, SimulationPage, VocabPage, DashboardPage
    test/                       — vitest + React Testing Library smoke tests
    App.tsx                     — page-state routing + progress persistence wiring
  scripts/validateContent.ts    — `npm run validate`
  CONTENT_GUIDE.md               — how to add more practice sets in batches
  DEPLOYMENT.md                  — GitHub + Vercel deployment, step by step
```

## Known simplifications (worth knowing about)

- Inline grammar/completion blanks (Part 1's reply email, Part 4's last comment) are always visible alongside the passage rather than gated behind sequential one-at-a-time navigation, since they're contextually embedded in running text. The standalone comprehension questions for those same sections do use sequential navigation with a progress indicator, confirm-skip, etc.
- The band estimate is explicitly labelled as unofficial — CELPIP does not publish a public raw-score-to-CLB-level conversion table, so this is a reasonable approximation for practice feedback only, not a real score predictor.
