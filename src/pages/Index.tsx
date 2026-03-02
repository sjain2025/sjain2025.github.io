import { useState } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Resume from '@/components/sections/Resume';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Research from '@/components/sections/Research';
import Contact from '@/components/sections/Contact';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export type SectionView = 'hero' | 'about' | 'skills' | 'experience' | 'projects' | 'research' | 'contact';

const MENU_ITEMS: { id: SectionView; label: string }[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'Resume' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

const Index = () => {
  const [view, setView] = useState<SectionView>('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-background ${view === 'hero' ? 'h-screen overflow-hidden' : ''}`}>
      {/* Back to home — arrow only, matches nav style */}
      {view !== 'hero' && (
        <button
          type="button"
          onClick={() => setView('hero')}
          aria-label="Back to home"
          className="fixed top-6 left-6 z-50 flex items-center justify-center h-12 w-12 rounded-xl border border-slate-700/50 bg-slate-800/30 text-slate-300 hover:bg-slate-700/40 hover:border-slate-600/50 hover:text-slate-100 transition-all duration-200 shadow-lg"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      )}

      {/* Global nav menu — visible in every section */}
      <div className="fixed top-6 right-6 z-50">
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`h-11 w-11 rounded-xl border transition-all duration-200 aria-expanded:bg-slate-700/50 ${
                menuOpen
                  ? 'border-slate-500/60 bg-slate-700/50 text-slate-100'
                  : 'border-slate-700/50 bg-slate-800/30 text-slate-300 hover:bg-slate-700/40 hover:border-slate-600/50 hover:text-slate-100'
              }`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <X className="h-5 w-5 transition-transform duration-200" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-200" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            align="end"
            sideOffset={8}
            className="w-[180px] p-2 bg-transparent border-0 shadow-none"
          >
            <div className="animate-nav-item-in animate-nav-item-breathe absolute opacity-0 pointer-events-none" aria-hidden />
            <div className="flex flex-col gap-3">
              {MENU_ITEMS.map(({ id, label }, index) => (
                <DropdownMenuItem
                  key={id}
                  onClick={() => { setView(id); setMenuOpen(false); }}
                  className="rounded-xl px-4 py-2.5 text-[15px] font-medium text-slate-200 bg-[#0d0d0f] border border-slate-700/50 shadow-sm focus:outline-none cursor-pointer [animation:nav-item-in_0.35s_ease-out_backwards,nav-item-breathe_2.5s_ease-in-out_0.4s_infinite] w-full transition-colors duration-200 hover:bg-slate-700/40 hover:border-slate-600/50 data-[highlighted]:bg-slate-700/40 data-[highlighted]:border-slate-600/50 data-[highlighted]:text-slate-100 focus:bg-slate-700/40 focus:border-slate-600/50 focus:text-slate-100"
                  style={{ animationDelay: `${80 + index * 40}ms, 400ms` }}
                >
                  {label}
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {view === 'hero' && (
        <Hero onSelectSection={setView} />
      )}
      {view === 'about' && <Resume />}
      {view === 'skills' && <Skills />}
      {view === 'experience' && <Experience />}
      {view === 'projects' && <Projects />}
      {view === 'research' && <Research />}
      {view === 'contact' && <Contact />}
    </div>
  );
};

export default Index;
