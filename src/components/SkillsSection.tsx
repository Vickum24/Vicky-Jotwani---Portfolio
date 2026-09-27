import React, { useState } from 'react';
import { Layers, ShieldCheck, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface SkillsSectionProps {
  isDark: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDark }) => {
  const { skills } = resumeData;
  const [selectedGroup, setSelectedGroup] = useState<number | 'all'>('all');

  const toolsList = [
    { name: 'LexisNexis', desc: 'Sanctions, adverse media & legal entity verification' },
    { name: 'World-Check', desc: 'PEP screening, sanctions monitoring & regulatory watchlist checks' },
    { name: 'Bloomberg', desc: 'Entity ownership hierarchy, financial data & corporate structures' },
    { name: 'Jira', desc: 'End-to-end case workflows, SLA tracking & operational queues' },
    { name: 'Excel (Advanced)', desc: 'MIS reporting, productivity dashboards & reconciliation' },
    { name: 'MS Office Suite', desc: 'Senior leadership presentations, procedure manuals & audit papers' },
  ];

  const displayedSkills = selectedGroup === 'all'
    ? skills
    : [skills[selectedGroup]];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              <Layers className="w-4 h-4" />
              <span>Core Competencies & Toolchain</span>
            </div>
            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Key Skills & Domain Expertise
            </h2>
            <p className={`mt-3 text-base sm:text-lg max-w-xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Mastery across operational compliance, regulatory directives, complex fund structures, and enterprise risk systems.
            </p>
          </div>

          {/* Category Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => setSelectedGroup('all')}
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                selectedGroup === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : isDark
                  ? 'text-slate-300 hover:text-white bg-slate-900/60'
                  : 'text-slate-700 hover:text-slate-900 bg-slate-100'
              }`}
            >
              All Categories
            </button>
            {skills.map((group, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedGroup(idx)}
                className={`px-3.5 py-2 text-sm font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                  selectedGroup === idx
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : isDark
                    ? 'text-slate-300 hover:text-white bg-slate-900/60'
                    : 'text-slate-700 hover:text-slate-900 bg-slate-100'
                }`}
              >
                {group.category.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {displayedSkills.map((group, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover transition-all duration-200 ${
                isDark ? 'bg-slate-900/70 border-slate-800/90' : 'bg-white/80 border-slate-200/90'
              }`}
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/40">
                <h3 className={`font-display text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {group.category}
                </h3>
                <span className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold">
                  {group.skills.length} Capabilities
                </span>
              </div>

              <ul className="space-y-3.5">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <span className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-200 font-normal' : 'text-slate-700'}`}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dedicated Compliance Tools Section */}
        <div
          className={`p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-slate-800/50 gap-2">
            <div>
              <div className="flex items-center gap-2 text-sm font-mono text-emerald-400 uppercase tracking-widest mb-1 font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Enterprise Compliance Technology</span>
              </div>
              <h3 className={`font-display text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Tools & Systems from Resume
              </h3>
            </div>
            <span className="text-xs sm:text-sm text-slate-300 font-mono">
              LexisNexis · World-Check · Bloomberg · Jira · Excel · MS Office
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolsList.map((tool, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl transition-all duration-150 ${
                  isDark
                    ? 'bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40'
                    : 'bg-white border border-slate-200/90 hover:border-cyan-500/40 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className={`font-display text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {tool.name}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
