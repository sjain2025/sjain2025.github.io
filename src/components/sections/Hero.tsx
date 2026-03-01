import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';
import profileImage from '@/assets/8898.jpg';
import type { SectionView } from '@/pages/Index';

const NAME_TYPEWRITER = 'Soham Jain';

const INTRO_COMMAND = 'cat sections.txt';

const CLICKABLE_SECTIONS: { id: SectionView; label: string; description: string }[] = [
  { id: 'about', label: 'about', description: 'Resume' },
  { id: 'skills', label: 'skills', description: 'Skills' },
  { id: 'experience', label: 'experience', description: 'Experience' },
  { id: 'projects', label: 'projects', description: 'Projects' },
  { id: 'research', label: 'research', description: 'Research' },
  { id: 'contact', label: 'contact', description: 'Contact' },
];

type HeroProps = {
  onSelectSection: (section: SectionView) => void;
};

const NAME_TYPING_DURATION_MS = 900; // a little faster, still smooth (linear)
const TERMINAL_TYPING_MS = 70;

const Hero = ({ onSelectSection }: HeroProps) => {
  const [nameProgress, setNameProgress] = useState(0);
  const [terminalChars, setTerminalChars] = useState(0);
  const [showSections, setShowSections] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const nameStartRef = useRef<number | null>(null);

  // Name typing: linear progress so constant speed, no pausing (cursor looks like real typing)
  useEffect(() => {
    let rafId: number;
    const tick = (timestamp: number) => {
      if (nameStartRef.current === null) nameStartRef.current = timestamp;
      const elapsed = timestamp - nameStartRef.current;
      const t = Math.min(elapsed / NAME_TYPING_DURATION_MS, 1);
      // Linear: progress advances steadily, no slowdown at end
      setNameProgress(t * NAME_TYPEWRITER.length);
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const nameChars = Math.floor(nameProgress);
  const nameComplete = nameProgress >= NAME_TYPEWRITER.length;

  // Terminal typing: start at same time as name, type command then show sections
  useEffect(() => {
    if (terminalChars < INTRO_COMMAND.length) {
      const t = setTimeout(() => setTerminalChars((c) => c + 1), TERMINAL_TYPING_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowSections(true), 400);
    return () => clearTimeout(t);
  }, [terminalChars]);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 520);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0b0c0f]" />
      <div
        className="absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen py-14">
        {/* "Hi, I'm" + name with smooth typing, red-to-blue gradient */}
        <div className="text-center mb-8 lg:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            <span className="text-slate-300">Hi, I'm </span>
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-blue-500 bg-clip-text text-transparent">
              {NAME_TYPEWRITER.slice(0, nameChars)}
            </span>
            <span
              className={`inline-block w-1 h-[0.9em] align-middle bg-blue-500 ml-0.5 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: 'opacity 0.15s ease-out', transform: 'translateY(-2px)' }}
              aria-hidden
            />
          </h1>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-base sm:text-lg">
            <span className="rounded-md bg-slate-800/60 px-3 py-1.5 font-medium text-slate-300 ring-1 ring-slate-700/50">
              Software Engineer
            </span>
            <span className="text-slate-500" aria-hidden>·</span>
            <span className="rounded-md bg-slate-800/60 px-3 py-1.5 font-medium text-slate-300 ring-1 ring-slate-700/50">
              AI Researcher
            </span>
            <span className="text-slate-500" aria-hidden>·</span>
            <span className="rounded-md bg-slate-800/60 px-3 py-1.5 font-medium text-slate-300 ring-1 ring-slate-700/50">
              Innovator
            </span>
          </p>
        </div>

        {/* Terminal + image — narrower terminal, centered */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 w-full">
          <div
            className="w-full max-w-xl mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-slate-600/50 bg-[#1e1e24]"
            style={{
              boxShadow: '0 0 0 1px rgba(148, 163, 184, 0.08), 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px -10px rgba(59, 130, 246, 0.35), 0 0 100px -20px rgba(59, 130, 246, 0.2)',
            }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-[#2d2d2d]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" title="Close" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" title="Minimize" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" title="Maximize" />
              </div>
              <span className="flex-1 text-center text-xs font-mono text-slate-400 tracking-wide">portfolio — zsh</span>
            </div>
            <div className="p-4 sm:p-5 font-mono text-sm sm:text-base h-[360px] overflow-hidden flex flex-col bg-[#1a1a1f]">
              {/* Terminal: type command character by character, then show sections */}
              <div className="flex flex-wrap items-center gap-1 mb-2 shrink-0">
                <span className="text-emerald-400 shrink-0">{'~'}</span>
                <span className="text-slate-500 shrink-0">{' $ '}</span>
                <span className="text-slate-100">{INTRO_COMMAND.slice(0, terminalChars)}</span>
                {terminalChars < INTRO_COMMAND.length && (
                  <span
                    className={`inline-block w-1 h-4 align-middle bg-emerald-400 ml-0.5 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transition: 'opacity 0.15s ease-out', transform: 'translateY(-2px)' }}
                    aria-hidden
                  />
                )}
              </div>
              {showSections && (
                <div className="flex-1 flex flex-col justify-center gap-1 mt-2 min-h-0">
                  {CLICKABLE_SECTIONS.map(({ id, description }, index) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => onSelectSection(id)}
                      className="flex-1 min-h-0 flex items-center w-full text-left px-3 py-2 rounded-xl border border-transparent bg-transparent hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-200 font-mono text-sm sm:text-base text-slate-300 hover:text-emerald-400 animate-terminal-item-in"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      {description}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center lg:justify-end lg:ml-12 lg:items-start">
            <div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:h-[408px] lg:w-[408px] rounded-2xl overflow-hidden border border-slate-600/50 bg-[#1e1e24]"
              style={{
                boxShadow: '0 0 0 1px rgba(148, 163, 184, 0.08), 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px -10px rgba(59, 130, 246, 0.35), 0 0 100px -20px rgba(59, 130, 246, 0.2)',
              }}
            >
              <img
                src={profileImage}
                alt="Soham Jain"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href="mailto:jainsoham01@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center w-12 h-12 rounded-xl border border-slate-700/50 bg-slate-800/30 text-rose-400 hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-200"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/soham-jain1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-12 h-12 rounded-xl border border-slate-700/50 bg-slate-800/30 text-blue-400 hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/sjain2025"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-12 h-12 rounded-xl border border-slate-700/50 bg-slate-800/30 text-slate-300 hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.youtube.com/@CodingWithSohamJain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center justify-center w-12 h-12 rounded-xl border border-slate-700/50 bg-slate-800/30 text-red-500 hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-200"
          >
            <Youtube className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
