import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import type { TopPage } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { PracticeHubPage } from './pages/PracticeHubPage';
import { SimulationPage } from './pages/SimulationPage';
import { VocabPage } from './pages/VocabPage';
import { DashboardPage } from './pages/DashboardPage';
import { PracticeRunner } from './components/PracticeRunner';
import { loadProgress, saveProgress, resetProgress, bumpStreak } from './utils/storage';
import type {
  AnySet,
  AttemptRecord,
  PracticeTaskSet,
  SectionType,
  SimulationRecord,
  UserProgress,
  VocabQuizResult,
} from './types/content';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => loadProgress());
  const [topPage, setTopPage] = useState<TopPage>('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeRun, setActiveRun] = useState<{ set: AnySet | PracticeTaskSet; mode: 'study' | 'exam' } | null>(null);
  // Lifted up from PracticeHubPage so the chosen section survives Exit/Continue
  // round trips back from the PracticeRunner (PracticeHubPage gets freshly
  // mounted each time we return to it, which would otherwise reset this).
  const [practiceSection, setPracticeSection] = useState<SectionType>('correspondence');

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const handleAttemptComplete = (attempt: AttemptRecord) => {
    setProgress((prev) => bumpStreak({ ...prev, attempts: [...prev.attempts, attempt] }));
  };

  const handleSimulationComplete = (sim: SimulationRecord) => {
    setProgress((prev) => bumpStreak({ ...prev, simulations: [...prev.simulations, sim] }));
  };

  const handleVocabQuizComplete = (result: VocabQuizResult) => {
    setProgress((prev) => {
      const missedSet = new Set(prev.missedVocabIds);
      result.missedWordIds.forEach((id) => missedSet.add(id));
      return bumpStreak({
        ...prev,
        vocabQuizzes: [...prev.vocabQuizzes, result],
        missedVocabIds: Array.from(missedSet),
      });
    });
  };

  const completedSetIds = new Set(progress.attempts.map((a) => a.setId));

  const navigate = (page: TopPage) => {
    setActiveRun(null);
    setTopPage(page);
  };

  let content: React.ReactNode;

  if (activeRun) {
    content = (
      <PracticeRunner
        key={activeRun.set.id}
        set={activeRun.set}
        mode={activeRun.mode}
        onComplete={handleAttemptComplete}
        onExit={() => setActiveRun(null)}
        onRetry={() => setActiveRun({ ...activeRun })}
      />
    );
  } else {
    switch (topPage) {
      case 'home':
        content = <HomePage progress={progress} onNavigate={navigate} />;
        break;
      case 'practiceHub':
        content = (
          <PracticeHubPage
            completedSetIds={completedSetIds}
            onStart={(set, mode) => setActiveRun({ set, mode })}
            activeSection={practiceSection}
            onChangeSection={setPracticeSection}
          />
        );
        break;
      case 'simulation':
        content = <SimulationPage onComplete={handleSimulationComplete} onExit={() => navigate('home')} />;
        break;
      case 'vocab':
        content = <VocabPage missedVocabIds={progress.missedVocabIds} onQuizComplete={handleVocabQuizComplete} />;
        break;
      case 'dashboard':
        content = (
          <DashboardPage
            progress={progress}
            onNavigate={navigate}
            onReset={() => setProgress(resetProgress())}
          />
        );
        break;
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <Sidebar
        active={topPage}
        onNavigate={navigate}
        mobileOpen={mobileOpen}
        onOpenMobile={() => setMobileOpen(true)}
        onCloseMobile={() => setMobileOpen(false)}
        streak={progress.streak}
      />
      <main className="flex-1 overflow-y-auto px-4 py-5 md:px-8 md:py-8">
        <div className="mx-auto max-w-3xl">{content}</div>
      </main>
    </div>
  );
}
