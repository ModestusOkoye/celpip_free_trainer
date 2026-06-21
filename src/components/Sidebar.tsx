import { Home, BookOpenText, Timer, GraduationCap, BarChart3, X, Menu } from 'lucide-react';

export type TopPage = 'home' | 'practiceHub' | 'simulation' | 'vocab' | 'dashboard';

interface Props {
  active: TopPage;
  onNavigate: (page: TopPage) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  onOpenMobile: () => void;
  streak: number;
}

const NAV_ITEMS: { page: TopPage; label: string; icon: typeof Home }[] = [
  { page: 'home', label: 'Home', icon: Home },
  { page: 'practiceHub', label: 'Practice by Section', icon: BookOpenText },
  { page: 'simulation', label: 'Full Simulation', icon: Timer },
  { page: 'vocab', label: 'Vocabulary', icon: GraduationCap },
  { page: 'dashboard', label: 'Dashboard', icon: BarChart3 },
];

function NavList({ active, onNavigate }: { active: TopPage; onNavigate: (p: TopPage) => void }) {
  return (
    <nav className="flex flex-col gap-1 px-3">
      {NAV_ITEMS.map(({ page, label, icon: Icon }) => {
        const isActive = active === page;
        return (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
              isActive ? 'bg-teal-500/15 text-teal-300' : 'text-slate-300 hover:bg-slate-800 hover:text-slate-100'
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        );
      })}
    </nav>
  );
}

export function Sidebar({ active, onNavigate, mobileOpen, onCloseMobile, onOpenMobile, streak }: Props) {
  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3 md:hidden">
        <button onClick={onOpenMobile} aria-label="Open menu" className="text-slate-300">
          <Menu size={22} />
        </button>
        <span className="text-sm font-bold tracking-wide text-amber-400">CELPIP READING TRAINER</span>
        <span className="text-xs text-slate-400">🔥{streak}</span>
      </div>

      {/* Mobile overlay sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-72 bg-slate-900 pb-6 pt-4">
            <div className="mb-4 flex items-center justify-between px-4">
              <span className="text-sm font-bold tracking-wide text-amber-400">CELPIP TRAINER</span>
              <button onClick={onCloseMobile} aria-label="Close menu" className="text-slate-300">
                <X size={20} />
              </button>
            </div>
            <NavList
              active={active}
              onNavigate={(p) => {
                onNavigate(p);
                onCloseMobile();
              }}
            />
          </div>
          <div className="flex-1 bg-black/50" onClick={onCloseMobile} />
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden w-64 flex-shrink-0 flex-col border-r border-slate-800 bg-slate-900 py-5 md:flex">
        <div className="mb-6 px-4">
          <p className="text-base font-bold leading-tight tracking-wide text-amber-400">CELPIP</p>
          <p className="text-xs font-medium tracking-wide text-slate-400">Reading Trainer</p>
        </div>
        <NavList active={active} onNavigate={onNavigate} />
        <div className="mt-auto px-4 pt-6 text-xs text-slate-500">
          🔥 {streak} day streak
        </div>
      </aside>
    </>
  );
}
