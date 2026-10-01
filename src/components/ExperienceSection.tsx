import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { SectionDivider } from './components/SectionDivider';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementsSection } from './components/AchievementsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationAndExtraSection } from './components/EducationAndExtraSection';
import { Footer } from './components/Footer';
import { JsonViewerModal } from './components/JsonViewerModal';
import { ResumeDownloadModal } from './components/ResumeDownloadModal';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Check if user has explicit preference or default to dark
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* 1. Splash Screen with 1.4s cinematic monogram */}
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {/* 2. Reusable Futuristic Animated Canvas Background */}
      <AnimatedBackground isDark={isDark} />

      {/* Slim Fixed Scroll Progress Bar at very top of screen */}
      <ScrollProgressBar isDark={isDark} />

      {/* Subtle Custom Cursor follower effect */}
      <CustomCursor isDark={isDark} />

      {/* 3. Navigation Bar (Strict 3-Zone Top Bar Contract) */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenJsonModal={() => setIsJsonModalOpen(true)}
      />

      {/* 4. Main Body Content */}
      <main className="relative z-10 flex flex-col">
        <HeroSection
          isDark={isDark}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenJsonModal={() => setIsJsonModalOpen(true)}
        />

        <SectionDivider isDark={isDark} />

        <ExperienceSection isDark={isDark} />

        <SectionDivider isDark={isDark} />

        <AchievementsSection isDark={isDark} />

        <SectionDivider isDark={isDark} />

        <SkillsSection isDark={isDark} />

        <SectionDivider isDark={isDark} />

        <EducationAndExtraSection isDark={isDark} />
      </main>

      {/* 5. Footer with 1-click Contact & Clean Links */}
      <Footer
        isDark={isDark}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenJsonModal={() => setIsJsonModalOpen(true)}
      />

      {/* 6. Extracted Line-by-Line JSON Inspection Modal */}
      <JsonViewerModal
        isOpen={isJsonModalOpen}
        onClose={() => setIsJsonModalOpen(false)}
        isDark={isDark}
      />

      {/* 7. Printable ATS Executive Resume Modal */}
      <ResumeDownloadModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
