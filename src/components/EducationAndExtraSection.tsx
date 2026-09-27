import React from 'react';
import { motion, type Variants } from 'motion/react';
import { GraduationCap, FileCheck, Globe2, BookOpen, Layers, ShieldCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface EducationAndExtraSectionProps {
  isDark: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const EducationAndExtraSection: React.FC<EducationAndExtraSectionProps> = ({ isDark }) => {
  const { education, extra, projects } = resumeData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column: Education & Additional Information (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Education Block */}
            <motion.div
              variants={itemVariants}
              className={`p-6 sm:p-8 rounded-2xl glass-panel ${
                isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-sm font-mono text-cyan-400 uppercase tracking-widest mb-3 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              <h2
                className={`font-display text-2xl sm:text-3xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Education
              </h2>

              <div className="space-y-5">
                {education.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-xl transition-colors ${
                      isDark ? 'bg-slate-950/60 border border-slate-800/80' : 'bg-slate-50 border border-slate-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h3 className={`font-display text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {item.degree}
                      </h3>
                      <span className="font-mono text-xs sm:text-sm text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                        Class of {item.year}
                      </span>
                    </div>
                    <p className={`text-sm sm:text-base font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item.institution}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Additional Information (All lines preserved verbatim) */}
            <motion.div
              variants={itemVariants}
              className={`p-6 sm:p-8 rounded-2xl glass-panel ${
                isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-sm font-mono text-emerald-400 uppercase tracking-widest mb-3 font-semibold">
                <FileCheck className="w-4 h-4" />
                <span>Additional Information & Exposure</span>
              </div>
              <h2
                className={`font-display text-2xl sm:text-3xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Regulatory Knowledge & Languages
              </h2>

              <div className="space-y-4">
                {extra.map((line, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-5 rounded-xl ${
                      isDark ? 'bg-slate-950/60 border border-slate-800/70' : 'bg-slate-50 border border-slate-200/90'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-sm sm:text-base leading-relaxed font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {line}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Strategic Programs / Projects (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl glass-panel h-full flex flex-col justify-between ${
                isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 text-sm font-mono text-sky-400 uppercase tracking-widest mb-3 font-semibold">
                  <Layers className="w-4 h-4" />
                  <span>Strategic Initiatives</span>
                </div>
                <h2
                  className={`font-display text-2xl sm:text-3xl font-bold mb-6 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Key Compliance Initiatives
                </h2>

                <div className="space-y-6">
                  {projects.map((proj, pIdx) => (
                    <div
                      key={pIdx}
                      className={`p-5 rounded-xl ${
                        isDark ? 'bg-slate-950/60 border border-slate-800/80' : 'bg-slate-50 border border-slate-200'
                      }`}
                    >
                      <h3 className={`font-display text-base font-bold mb-2.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {proj.title}
                      </h3>

                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {proj.stack.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className={`text-xs font-mono px-2.5 py-0.5 rounded font-medium ${
                              isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-800'
                            }`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-2.5">
                        {proj.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm leading-relaxed">
                            <span className="text-cyan-400 font-bold text-base">›</span>
                            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Notice */}
              <div className="mt-8 pt-6 border-t border-slate-800/60 text-sm text-slate-400 flex items-center justify-between">
                <span>Verified Resume Content</span>
                <span className="font-mono text-cyan-400 font-semibold">Pune, India</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
