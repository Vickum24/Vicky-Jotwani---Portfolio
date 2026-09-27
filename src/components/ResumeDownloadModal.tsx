import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Linkedin, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ResumeDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ResumeDownloadModal: React.FC<ResumeDownloadModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [copiedText, setCopiedText] = useState(false);
  const { basics, experience, skills, education, extra } = resumeData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generatePlainText = () => {
    let text = `${basics.name.toUpperCase()}\n`;
    text += `${basics.title}\n`;
    text += `${basics.phone} | ${basics.email} | ${basics.location} | linkedin.com/in/vicky-jotwani-552371249\n\n`;
    text += `PROFILE SUMMARY\n${basics.summary}\n\n`;
    text += `KEY SKILLS\n`;
    skills.forEach((g) => {
      g.skills.forEach((s) => {
        text += `● ${s}\n`;
      });
    });
    text += `\nPROFESSIONAL EXPERIENCE\n`;
    experience.forEach((e) => {
      text += `\n${e.role} | ${e.company} | ${e.dates} | ${e.location}\n`;
      e.bullets.forEach((b) => {
        text += `● ${b}\n`;
      });
    });
    text += `\nADDITIONAL INFORMATION\n`;
    extra.forEach((x) => {
      text += `● ${x}\n`;
    });
    text += `\nEDUCATION\n`;
    education.forEach((ed) => {
      text += `● ${ed.degree} — ${ed.institution}, ${ed.year}\n`;
    });
    return text;
  };

  const handleCopyText = () => {
    const text = generatePlainText();
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className={`w-full max-w-4xl max-h-[92vh] rounded-2xl flex flex-col shadow-2xl border overflow-hidden my-auto ${
          isDark
            ? 'bg-slate-950 border-slate-800 text-slate-100'
            : 'bg-white border-slate-300 text-slate-900'
        }`}
      >
        {/* Modal Toolbar (hidden during print) */}
        <div className="print:hidden px-6 py-4 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 bg-slate-900/60">
          <div>
            <h2 className="font-display text-base font-bold flex items-center gap-2">
              <span>Executive Resume Preview</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                ATS Optimized
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Print to PDF or copy exact text for job applications
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                copiedText
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  : 'border-slate-700 hover:bg-slate-800 text-slate-300'
              }`}
            >
              {copiedText ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText ? 'Copied!' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-sm cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Container */}
        <div className="flex-1 overflow-auto p-6 sm:p-10 bg-slate-900 text-slate-100 print:p-0 print:bg-white print:text-black">
          <div className="max-w-3xl mx-auto bg-slate-950 p-8 sm:p-12 rounded-xl border border-slate-800 shadow-xl print:shadow-none print:border-none print:p-0 print:bg-white print:text-black">
            {/* Header */}
            <div className="text-center pb-6 border-b border-slate-800 print:border-black">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display mb-1 text-white print:text-black">
                {basics.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-cyan-400 print:text-slate-800 mb-2">
                {basics.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 print:text-slate-700 font-mono">
                <span>{basics.phone}</span>
                <span>|</span>
                <span>{basics.email}</span>
                <span>|</span>
                <span>{basics.location}</span>
                <span>|</span>
                <span className="text-cyan-400 print:text-black">linkedin.com/in/vicky-jotwani-552371249</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="py-5 border-b border-slate-800/80 print:border-slate-300">
              <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-cyan-400 print:text-black mb-2">
                PROFILE SUMMARY
              </h2>
              <p className="text-xs leading-relaxed text-slate-300 print:text-slate-900 text-justify">
                {basics.summary}
              </p>
            </div>

            {/* Key Skills */}
            <div className="py-5 border-b border-slate-800/80 print:border-slate-300">
              <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-cyan-400 print:text-black mb-2">
                KEY SKILLS
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 print:text-slate-900">
                {skills.flatMap((s) => s.skills).map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 print:text-black font-bold">●</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Experience */}
            <div className="py-5 border-b border-slate-800/80 print:border-slate-300">
              <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-cyan-400 print:text-black mb-4">
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-6">
                {experience.map((e, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black mb-1">
                      <span>{e.role} | <span className="font-semibold text-cyan-300 print:text-black">{e.company}</span></span>
                      <span className="font-mono text-slate-400 print:text-slate-700 text-[11px] font-normal">
                        {e.dates} | {e.location}
                      </span>
                    </div>
                    <ul className="space-y-1.5 mt-1.5">
                      {e.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-slate-300 print:text-slate-900 leading-relaxed">
                          <span className="text-cyan-400 print:text-black font-bold">●</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="py-5 border-b border-slate-800/80 print:border-slate-300">
              <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-cyan-400 print:text-black mb-2">
                ADDITIONAL INFORMATION
              </h2>
              <ul className="space-y-1 text-xs text-slate-300 print:text-slate-900">
                {extra.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 print:text-black font-bold">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="pt-5">
              <h2 className="text-xs font-mono uppercase font-bold tracking-wider text-cyan-400 print:text-black mb-2">
                EDUCATION
              </h2>
              <ul className="space-y-1 text-xs text-slate-300 print:text-slate-900">
                {education.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 print:text-black font-bold">●</span>
                    <span>{item.degree} — {item.institution}, {item.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
