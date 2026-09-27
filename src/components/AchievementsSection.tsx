import React, { useState } from 'react';
import { Award, ShieldAlert, Users, Zap, CheckCircle, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface AchievementsSectionProps {
  isDark: boolean;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ isDark }) => {
  const { achievements } = resumeData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Achievements' },
    { id: 'leadership', label: 'People Leadership' },
    { id: 'operations', label: 'Operational SLAs' },
    { id: 'risk', label: 'Risk & Compliance' },
    { id: 'global', label: 'Global Institutions' },
  ];

  const filteredAchievements = activeCategory === 'all'
    ? achievements
    : achievements.filter((a) => a.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'leadership':
        return <Users className="w-4 h-4 text-emerald-400" />;
      case 'operations':
        return <Zap className="w-4 h-4 text-amber-400" />;
      case 'risk':
        return <ShieldAlert className="w-4 h-4 text-cyan-400" />;
      case 'global':
      default:
        return <Award className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="impact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              <Award className="w-4 h-4" />
              <span>Measurable Outcomes & Milestones</span>
            </div>
            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Key Achievements & Impact
            </h2>
            <p className={`mt-3 text-base sm:text-lg max-w-xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Quantified milestones, operational turnarounds, and leadership accomplishments extracted directly from career milestones.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : isDark
                    ? 'text-slate-300 hover:text-white bg-slate-900/60'
                    : 'text-slate-700 hover:text-slate-900 bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Big Numbers Stat Row (Only numbers from resume) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className={`p-6 rounded-2xl glass-panel ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-cyan-400 tabular-nums">
              12+
            </div>
            <div className={`text-sm sm:text-base font-bold mt-2 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
              Analysts Managed & Coached
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
              SG Analytics & IndusInd Bank
            </div>
          </div>

          <div className={`p-6 rounded-2xl glass-panel ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-emerald-400 tabular-nums">
              9+
            </div>
            <div className={`text-sm sm:text-base font-bold mt-2 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
              Years Leadership Track Record
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
              Banking & Investor Services
            </div>
          </div>

          <div className={`p-6 rounded-2xl glass-panel ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-sky-400 tabular-nums">
              6
            </div>
            <div className={`text-sm sm:text-base font-bold mt-2 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
              Global Tier-1 Organizations
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
              Banks, Funds & KPO Leaders
            </div>
          </div>

          <div className={`p-6 rounded-2xl glass-panel ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-amber-400 tabular-nums">
              100%
            </div>
            <div className={`text-sm sm:text-base font-bold mt-2 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
              SLA & Regulatory Compliance
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
              FATF, EU Directives, Sanctions
            </div>
          </div>
        </div>

        {/* Trophy-Like Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between transition-all duration-200 group ${
                isDark ? 'bg-slate-900/70 border-slate-800/90' : 'bg-white/80 border-slate-200/90'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10">
                      {getCategoryIcon(item.category)}
                    </div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      {item.sourceRole}
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                    {item.metric}
                  </span>
                </div>

                <h3
                  className={`font-display text-xl font-bold tracking-tight mb-2.5 group-hover:text-cyan-400 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>

                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.context}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified in Resume
                </span>
                <span className="font-mono uppercase text-xs font-semibold text-slate-400">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
