import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Building2, Calendar, MapPin, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { resumeData, ExperienceItem } from '../data/resumeData';

interface ExperienceSectionProps {
  isDark: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDark }) => {
  const { experience } = resumeData;
  // Initially expand current role and first 2 roles
  const [expandedIds, setExpandedIds] = useState<string[]>(['sg-analytics', 'apex-fund-services']);
  const [selectedCompanyFilter, setSelectedCompanyFilter] = useState<string>('all');

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedIds(experience.map((e) => e.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  const filteredExperience = selectedCompanyFilter === 'all'
    ? experience
    : experience.filter((e) => e.id === selectedCompanyFilter);

  // Key measurable impact bullets auto-curated for the highlight panel
  const highImpactHighlights = [
    {
      company: 'SG Analytics',
      role: 'Senior Analyst – AML Compliance',
      highlight: 'Lead and coach a team of 12+ analysts, setting objectives, managing performance, and building team capability through structured feedback and workload planning.',
      metric: '12+ Team Coached',
    },
    {
      company: 'Apex Fund Services',
      role: 'Senior Associate – AML/KYC',
      highlight: 'Executed AML/KYC due diligence, sanctions screening, remediation, and periodic reviews for fund and investor-services clients, gaining direct exposure to complex fund and legal entity structures.',
      metric: 'Complex Fund Entities',
    },
    {
      company: 'IndusInd Bank Ltd',
      role: 'Chief Manager – Compliance & Onboarding',
      highlight: 'Monitored SLA adherence and operational performance metrics; implemented process improvements that reduced onboarding delays.',
      metric: 'Reduced Onboarding Delays',
    },
    {
      company: 'Standard Chartered',
      role: 'Senior Analyst – AML/KYC',
      highlight: 'Generated trend and progress reports on PEP screening and CDD effectiveness to guide team development and control improvement.',
      metric: 'PEP / CDD Analytics',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Career Journey & Leadership</span>
            </div>
            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Professional Experience
            </h2>
            <p className={`mt-3 text-base sm:text-lg max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Chronological leadership record across banking, investor services, and compliance operations.
              Every line captured verbatim from the original resume.
            </p>
          </div>

          {/* Controls: Expand/Collapse All + Filter */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={expandAll}
              className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-colors cursor-pointer ${
                isDark
                  ? 'border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-colors cursor-pointer ${
                isDark
                  ? 'border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Impact Highlights Panel (Auto-pulls the most measurable bullets) */}
        <div
          className={`mb-12 p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden ${
            isDark ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-50/80 border-slate-200/90'
          }`}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <h3 className={`text-base sm:text-lg font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Impact Highlights Panel · Verified Measurable Outcomes
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-mono text-slate-400">
              Direct Extract
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highImpactHighlights.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl transition-colors ${
                  isDark ? 'bg-slate-950/60 border border-slate-800/60' : 'bg-white border border-slate-200/80 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between text-sm mb-2.5">
                  <span className="font-bold text-cyan-400 text-base">{item.company}</span>
                  <span className="font-mono text-xs text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10">
                    {item.metric}
                  </span>
                </div>
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                  "{item.highlight}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <button
            onClick={() => setSelectedCompanyFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              selectedCompanyFilter === 'all'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : isDark
                ? 'text-slate-400 hover:text-white bg-slate-900/60'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            All Roles (6)
          </button>
          {experience.map((e) => (
            <button
              key={e.id}
              onClick={() => setSelectedCompanyFilter(e.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCompanyFilter === e.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : isDark
                  ? 'text-slate-400 hover:text-white bg-slate-900/60'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-100'
              }`}
            >
              {e.company}
            </button>
          ))}
        </div>

        {/* Story Cards / Timeline */}
        <div className="space-y-6">
          {filteredExperience.map((item, index) => {
            const isExpanded = expandedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`rounded-2xl glass-panel transition-all duration-200 overflow-hidden ${
                  isDark
                    ? 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
                    : 'bg-white/80 border-slate-200/90 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Header (Accordion Toggle) */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-6 sm:p-7 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-cyan-400 font-bold text-sm sm:text-base">
                        0{index + 1}
                      </span>
                      <span className="font-semibold text-slate-400">·</span>
                      <span
                        className={`font-display text-xl sm:text-2xl font-bold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.role}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm sm:text-base text-slate-400">
                      <span className="flex items-center gap-2 font-semibold text-slate-100">
                        <Building2 className="w-4 h-4 text-cyan-400" />
                        {item.company}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="flex items-center gap-1.5 font-mono text-emerald-400 font-medium">
                        <Calendar className="w-4 h-4 text-emerald-400" />
                        {item.dates}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    {item.keyHighlight && (
                      <p className={`text-sm sm:text-base font-medium pt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {item.keyHighlight}
                      </p>
                    )}
                  </div>

                  {/* Right side: Key metric badges + expand arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800/40">
                    {item.metrics && item.metrics.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2">
                        {item.metrics.slice(0, 2).map((m, mIdx) => (
                          <span
                            key={mIdx}
                            className={`text-xs font-mono px-2.5 py-1 rounded-md font-semibold ${
                              isDark
                                ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/40'
                                : 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                            }`}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}

                    <div
                      className={`p-2.5 rounded-xl transition-transform duration-200 ${
                        isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                      } ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Collapsible Content: Verbatim Bullets */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-7 sm:px-7 sm:pb-7 pt-4 border-t ${
                        isDark ? 'border-slate-800/80 bg-slate-950/30' : 'border-slate-200/80 bg-slate-50/50'
                      }`}>
                        <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                          Verified Responsibilities & Key Deliverables ({item.bullets.length} Points)
                        </div>
                        <ul className="space-y-3.5">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3.5 text-sm sm:text-base leading-relaxed">
                              <span className="h-2 w-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.6)]"></span>
                              <span className={isDark ? 'text-slate-200 font-normal' : 'text-slate-700'}>
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
