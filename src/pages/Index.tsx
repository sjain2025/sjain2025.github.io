import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import Resume from '@/components/sections/Resume';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Research from '@/components/sections/Research';
import Contact from '@/components/sections/Contact';

export type SectionView = 'hero' | 'about' | 'skills' | 'experience' | 'projects' | 'research' | 'contact';

const Index = () => {
  const [view, setView] = useState<SectionView>('hero');

  return (
    <div className={`min-h-screen bg-background ${view === 'hero' ? 'h-screen overflow-hidden' : ''}`}>
      {view !== 'hero' && (
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setView('hero'); }}
          className="fixed top-4 left-4 z-50 px-4 py-2 rounded-lg bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 text-sm font-medium transition-colors"
        >
          ← Back to home
        </a>
      )}
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
