import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Code2, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
  onOpenJsonModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenResumeModal,
  onOpenJsonModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'experience', 'impact', 'skills', 'education'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Impact', href: '#impact', id: 'impact' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? isDark
              ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
              : 'bg-white/85 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight"
          >
            <span
              className={`font-display tracking-wide transition-colors ${
                isDark
                  ? 'text-white group-hover:text-cyan-400'
                  : 'text-slate-900 group-hover:text-cyan-600'
              }`}
            >
              Vicky Jotwani
            </span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`transition-colors relative py-1 text-sm uppercase tracking-wider font-semibold ${
                  activeSection === item.id
                    ? isDark
                      ? 'text-cyan-400'
                      : 'text-cyan-600'
                    : isDark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
                )}
              </a>
            ))}

            <button
              onClick={onOpenJsonModal}
              className={`flex items-center gap-1.5 text-xs font-mono py-1 transition-colors cursor-pointer ${
                isDark ? 'text-slate-400 hover:text-cyan-300' : 'text-slate-500 hover:text-cyan-700'
              }`}
              title="Inspect line-by-line structured JSON parsed from resume"
            >
              <Code2 className="w-4 h-4" />
              <span>Parsed JSON</span>
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                isDark
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={onOpenResumeModal}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-150 cursor-pointer ${
                isDark
                  ? 'bg-slate-800 text-slate-100 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-700/80 hover:text-white shadow-sm'
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>

            <a
              href="https://linkedin.com/in/vicky-jotwani-552371249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-sm cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-30 pt-20 px-6 backdrop-blur-xl md:hidden flex flex-col justify-between pb-8 ${
            isDark ? 'bg-slate-950/95 text-white' : 'bg-white/95 text-slate-900'
          }`}
        >
          <div className="space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Navigation
            </p>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-display font-medium py-2 border-b transition-colors ${
                    isDark ? 'border-slate-800/80 hover:text-cyan-400' : 'border-slate-200 hover:text-cyan-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJsonModal();
                }}
                className="flex items-center gap-2 text-base font-mono py-2 text-slate-400 hover:text-cyan-400 text-left"
              >
                <Code2 className="w-4 h-4" />
                <span>Inspect Structured JSON</span>
              </button>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-800/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 text-white font-medium text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download ATS Resume</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
