import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, Terminal } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface JsonViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const JsonViewerModal: React.FC<JsonViewerModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [copied, setCopied] = useState(false);
  const jsonString = JSON.stringify(resumeData, null, 2);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Vicky_Jotwani_Resume_Data.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className={`w-full max-w-4xl max-h-[85vh] rounded-2xl flex flex-col shadow-2xl border overflow-hidden ${
          isDark
            ? 'bg-slate-950 border-slate-800 text-slate-100'
            : 'bg-white border-slate-300 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-base font-bold">
                Extracted Resume Schema (JSON)
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                100% Verbatim Line-by-Line Structured Representation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border transition-colors cursor-pointer ${
                copied
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  : isDark
                  ? 'border-slate-800 hover:bg-slate-800 text-slate-300'
                  : 'border-slate-200 hover:bg-slate-100 text-slate-700'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .json</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Schema Summary Pills */}
        <div className="px-6 py-2 bg-slate-900/60 border-b border-slate-800/60 flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400">
          <span>basics: 1</span>
          <span>·</span>
          <span>experience: {resumeData.experience.length}</span>
          <span>·</span>
          <span>achievements: {resumeData.achievements.length}</span>
          <span>·</span>
          <span>projects: {resumeData.projects.length}</span>
          <span>·</span>
          <span>skills: {resumeData.skills.length} categories</span>
          <span>·</span>
          <span>education: {resumeData.education.length}</span>
          <span>·</span>
          <span>extra: {resumeData.extra.length} items</span>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto p-6 font-mono text-xs leading-relaxed bg-slate-950 text-cyan-300">
          <pre className="whitespace-pre overflow-x-auto selection:bg-cyan-500/30">
            {jsonString}
          </pre>
        </div>
      </div>
    </div>
  );
};
