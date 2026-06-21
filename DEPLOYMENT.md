# Deployment Guide (DEPLOYMENT.md)

## Why this app won't hit the "blank page on refresh" problem

The old build used routing that could break on a hard refresh on Vercel. This rebuild deliberately avoids that: there's no React Router at all. Every "page" (Home, Practice Hub, Dashboard, etc.) is just internal component state inside `App.tsx` — the whole app lives at a single URL (`/`). Refreshing the page always reloads the same single route, so there's nothing to break. This also means **you do not need a `vercel.json` rewrite rule** — Vercel's default static handling is enough.

## 1. Run it locally first

```bash
cd celpip
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Click through each section once before deploying.

## 2. Push to GitHub

From inside the `celpip` folder:

```bash
git init
git add .
git commit -m "Initial commit: CELPIP Reading Trainer"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

If you don't have an empty GitHub repo yet, create one first at github.com (don't initialize it with a README, so there's no merge conflict on first push).

## 3. Connect to Vercel

1. Go to vercel.com and sign in (GitHub login is easiest).
2. Click **Add New → Project**, then select the GitHub repo you just pushed.
3. Vercel will auto-detect the framework as **Vite**. Confirm these settings (they should already be filled in correctly):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**.

That's it — no environment variables, no `vercel.json`, no extra config needed for this app, since everything runs client-side with `localStorage`.

## 4. If something does go wrong

- **Build fails on Vercel but works locally:** almost always a case-sensitivity issue (Vercel's Linux build environment is case-sensitive; your local machine might not be). Double-check every `import` path matches the actual filename casing exactly.
- **Blank page after deploy, no errors in the build log:** open the deployed URL's browser console (F12). A blank page with a console error almost always means a runtime error in `App.tsx` or one of the pages — check the error against the source.
- **Old version still showing after a new push:** Vercel deploys are usually instant, but do a hard refresh (Ctrl/Cmd+Shift+R) — browsers cache aggressively.
- **404 on the deployed URL itself:** check the Vercel project's "Output Directory" setting is `dist`, not `build` (that's the CRA convention, not Vite's).

## 5. Live-site test checklist

Once deployed, click through:
- [ ] Home page loads, stats show 0s on a first visit
- [ ] Practice Hub: open one set from each of the 4 sections, in both Study and Exam mode
- [ ] A timer counts down and the progress dots update as you answer
- [ ] Submitting (or letting Exam Mode time out) shows a score + band estimate
- [ ] Full Simulation runs all 5 sections back-to-back and shows a combined score at the end
- [ ] Vocabulary: browse by category, then run a Meaning Match quiz and a Word in Context quiz
- [ ] Dashboard reflects the attempts you just made (average score, section accuracy, recent history)
- [ ] Refresh the page mid-session — the app reloads cleanly (no blank page, no broken route)
- [ ] On a phone-width browser window (or real phone), the sidebar collapses into a hamburger menu and everything is still usable

## Local quality checks (run any time you change content or code)

```bash
npm run validate   # checks all practice-set data is structurally correct
npm run build       # confirms TypeScript + production build are clean
npm test            # runs the smoke tests (a full practice run, a vocab quiz, and a full simulation)
```
