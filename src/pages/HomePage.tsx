import { BookOpenText, Timer, GraduationCap, BarChart3, Sparkles } from 'lucide-react';
import type { UserProgress } from '../types/content';
import { overallAverage } from '../utils/scoring';
import type { TopPage } from '../components/Sidebar';

interface Props {
  progress: UserProgress;
  onNavigate: (page: TopPage) => void;
}

export function HomePage({ progress, onNavigate }: Props) {
  const avg = overallAverage(progress);
  const totalAttempts = progress.attempts.length + progress.simulations.length;

  const cards: { page: TopPage; title: string; desc: string; icon: typeof BookOpenText }[] = [
    {
      page: 'practiceHub',
      title: 'Practice by Section',
      desc: 'Work through Correspondence, Diagram, Information, or Viewpoints one set at a time.',
      icon: BookOpenText,
    },
    {
      page: 'simulation',
      title: 'Full Simulation',
      desc: 'Run all five sections back-to-back under real CELPIP timing.',
      icon: Timer,
    },
    {
      page: 'vocab',
      title: 'Vocabulary',
      desc: 'Learn Canadian everyday words and quiz yourself by category.',
      icon: GraduationCap,
    },
    {
      page: 'dashboard',
      title: 'Dashboard',
      desc: 'See your progress, strengths, and where to focus next.',
      icon: BarChart3,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
        <p className="flex items-center gap-2 text-sm font-medium text-teal-300">
          <Sparkles size={16} /> Welcome back
        </p>
        <h1 className="mt-1 text-2xl font-bold text-slate-50">CELPIP Reading Trainer</h1>
        <p className="mt-2 max-w-xl text-sm text-slate-300">
          Practice every CELPIP Reading task type with realistic Canadian contexts — emails, schedules, notices, and opinion
          pieces — and track exactly which skills need more work.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div>
            <p className="text-2xl font-bold text-slate-50">{totalAttempts}</p>
            <p className="text-slate-400">Sets completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-50">{avg}%</p>
            <p className="text-slate-400">Average score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-400">{progress.streak}</p>
            <p className="text-slate-400">Day streak</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {cards.map(({ page, title, desc, icon: Icon }) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className="flex flex-col items-start gap-2 rounded-xl border border-slate-700 bg-slate-800/60 p-4 text-left transition-colors hover:border-teal-500"
          >
            <Icon size={20} className="text-teal-400" />
            <span className="font-semibold text-slate-100">{title}</span>
            <span className="text-xs text-slate-400">{desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
