import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Copy, Check, ArrowUp, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface FooterProps {
  isDark: boolean;
  onOpenResumeModal: () => void;
  onOpenJsonModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  isDark,
  onOpenResumeModal,
  onOpenJsonModal,
}) => {
  const { basics } = resumeData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(basics.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t transition-colors ${
        isDark ? 'border-slate-800/80 bg-slate-950/80' : 'border-slate-200 bg-white/90'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          {/* Brand & summary */}
          <div className="md:col-span-6 space-y-3">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              {basics.name}
            </h2>
            <p className="text-sm sm:text-base text-cyan-400 font-semibold">
              {basics.title}
            </p>
            <p className={`text-sm leading-relaxed max-w-md ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Available for leadership opportunities in AML/KYC Client Risk, Operational Controls,
              and Banking Service Delivery.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={copyEmailToClipboard}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono border transition-colors cursor-pointer ${
                  copiedEmail
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-semibold'
                    : isDark
                    ? 'border-slate-800 bg-slate-900 hover:border-slate-700 text-slate-200'
                    : 'border-slate-200 bg-slate-100 hover:border-slate-300 text-slate-700'
                }`}
              >
                {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : basics.email}</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <h3 className="font-mono uppercase text-slate-400 font-semibold tracking-wider text-xs">
              Sections
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#hero"
                  className={`transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'}`}
                >
                  Overview & Top Impact
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'}`}
                >
                  Experience & Roles (6)
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className={`transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'}`}
                >
                  Key Achievements & Metrics
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'}`}
                >
                  Key Skills & Enterprise Tools
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={`transition-colors ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-black'}`}
                >
                  Education & Exposure
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Verified Metadata */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <h3 className="font-mono uppercase text-slate-400 font-semibold tracking-wider text-xs">
              Direct Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${basics.email}`}
                  className="flex items-center gap-2 text-cyan-400 hover:underline font-mono"
                >
                  <Mail className="w-4 h-4" />
                  <span>{basics.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${basics.phone.replace(/\s+/g, '')}`}
                  className={`flex items-center gap-2 font-mono ${isDark ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-black'}`}
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{basics.phone}</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-slate-400 font-mono">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{basics.location}</span>
                </span>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/vicky-jotwani-552371249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:underline font-mono"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-2 font-mono">
              <button
                onClick={onOpenResumeModal}
                className="text-xs sm:text-sm text-slate-400 hover:text-cyan-400 underline cursor-pointer"
              >
                Print / Save PDF
              </button>
              <span className="text-slate-600">·</span>
              <button
                onClick={onOpenJsonModal}
                className="text-xs sm:text-sm text-slate-400 hover:text-cyan-400 underline cursor-pointer"
              >
                Inspect JSON
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {basics.name}. Verbatim executive portfolio.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
