import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, Mail, Phone, MapPin, Linkedin, ShieldCheck, Users, TrendingUp } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface HeroSectionProps {
  isDark: boolean;
  onOpenResumeModal: () => void;
  onOpenJsonModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isDark,
  onOpenResumeModal,
  onOpenJsonModal,
}) => {
  const { basics } = resumeData;

  const topImpacts = [
    {
      metric: '9+ Years',
      label: 'AML/KYC Leadership',
      description: 'Banking & Fund/Investor Services operational risk track record',
      icon: ShieldCheck,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      metric: '12+ Analysts',
      label: 'Direct People Leadership',
      description: 'Workload planning, coaching, objective setting & quality review',
      icon: Users,
      color: 'from-emerald-400 to-teal-500',
    },
    {
      metric: '6 Global Institutions',
      label: 'Multi-Jurisdiction Scope',
      description: 'Standard Chartered, Apex Fund Services, ICICI, IndusInd, SG Analytics, WNS',
      icon: TrendingUp,
      color: 'from-sky-400 to-indigo-500',
    },
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top availability & location micro-bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-sm sm:text-base text-slate-400 font-mono mb-5"
        >
          <span className="flex items-center gap-2 text-emerald-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Operational Risk & Controls Leader
          </span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-slate-500" />
            {basics.location}
          </span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="font-semibold text-slate-300">9+ Years Experience</span>
        </motion.div>

        {/* Main Title & Role */}
        <div className="max-w-4xl space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-[1.05] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {basics.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 leading-snug"
          >
            {basics.title}
          </motion.div>

          {/* High-impact summary directly from resume */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl pt-2 font-normal ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}
          >
            {basics.summary}
          </motion.p>
        </div>

        {/* Quick Contact Line (Direct, Clickable) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base font-mono"
        >
          <a
            href={`mailto:${basics.email}`}
            className={`flex items-center gap-2 transition-colors ${
              isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'
            }`}
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="underline decoration-slate-700 underline-offset-4">{basics.email}</span>
          </a>
          <span className="text-slate-600">·</span>
          <a
            href={`tel:${basics.phone.replace(/\s+/g, '')}`}
            className={`flex items-center gap-2 transition-colors ${
              isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'
            }`}
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{basics.phone}</span>
          </a>
          <span className="text-slate-600">·</span>
          <a
            href="https://linkedin.com/in/vicky-jotwani-552371249"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors ${
              isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'
            }`}
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
            <span>linkedin.com/in/vicky-jotwani-552371249</span>
          </a>
        </motion.div>

        {/* Primary & Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>View Experience</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold border transition-all cursor-pointer ${
              isDark
                ? 'bg-slate-900/80 border-slate-700/80 text-white hover:bg-slate-800 hover:border-slate-600'
                : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 shadow-sm'
            }`}
          >
            <FileText className="w-5 h-5 text-cyan-400" />
            <span>Download ATS Resume</span>
          </button>

          <button
            onClick={onOpenJsonModal}
            className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-mono border transition-all cursor-pointer ${
              isDark
                ? 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40'
                : 'bg-slate-100/80 border-slate-200 text-slate-600 hover:text-cyan-700 hover:border-slate-300'
            }`}
          >
            <span>{'{ }'}</span>
            <span>Raw JSON Spec</span>
          </button>
        </motion.div>

        {/* Top 3 Impact Strip Above The Fold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-slate-800/60"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-slate-400 font-semibold">
              Top 3 Verified Impact Pillars (From Resume)
            </h2>
            <span className="text-xs font-mono text-cyan-400/90 hidden sm:inline font-semibold">
              100% Verbatim Data
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {topImpacts.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-200 ${
                    isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white/70 border-slate-200/90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-display text-3xl lg:text-4xl font-extrabold tracking-tight tabular-nums text-white">
                      {item.metric}
                    </span>
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold mb-1.5 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                    {item.label}
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
