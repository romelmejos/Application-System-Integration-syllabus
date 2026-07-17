import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Layers, Terminal, Sparkles, FolderKanban } from 'lucide-react';
import { modulesData } from '../data/courseData';

export default function Syllabus() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const expandAll = () => setExpandedId(-1); // -1 triggers custom "show all" logic or we can track list
  const collapseAll = () => setExpandedId(null);

  return (
    <section id="syllabus" className="py-24 bg-white border-b-8 border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-mono font-black tracking-widest text-white bg-hau-maroon px-4 py-2 uppercase border-2 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]">
            Curriculum Path
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight uppercase mt-4">
            Detailed Syllabus & Module Outline
          </h2>
          <div className="w-24 h-2 bg-[#FFD700] mx-auto mt-4 border-2 border-stone-900" />
          <p className="text-stone-700 mt-4 font-semibold text-lg">
            A comprehensive, rigorous timeline built around actual laboratory applications and industry integration protocols. Click a module below to inspect full lectures, labs, and projects.
          </p>
        </div>

        {/* Accordion Controls (Blocky & Heavy) */}
        <div className="flex justify-center sm:justify-end gap-4 mb-8">
          <button
            id="syllabus-expand-all"
            onClick={() => setExpandedId(999)}
            className="px-4 py-2 text-xs font-black font-mono uppercase bg-white text-stone-900 border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#FFD700] transition-all cursor-pointer"
          >
            Expand All Modules
          </button>
          <button
            id="syllabus-collapse-all"
            onClick={collapseAll}
            className="px-4 py-2 text-xs font-black font-mono uppercase bg-white text-stone-900 border-3 border-stone-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
          >
            Collapse All
          </button>
        </div>

        {/* Syllabus Accordion List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {modulesData.map((module) => {
            const isExpanded = expandedId === module.id || expandedId === 999;
            return (
              <div
                key={module.id}
                id={`syllabus-module-${module.id}`}
                className={`border-4 border-stone-900 transition-all duration-200 ${
                  isExpanded
                    ? 'bg-white shadow-[6px_6px_0px_0px_#800000]'
                    : 'bg-[#F8F9FA] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-white'
                }`}
              >
                {/* Accordion Header */}
                <button
                  id={`syllabus-header-btn-${module.id}`}
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <span className="shrink-0 inline-block px-3 py-1.5 text-xs font-mono font-black border-2 border-stone-900 bg-hau-maroon text-white uppercase tracking-widest text-center min-w-[100px] shadow-[2px_2px_0px_0px_#FFD700]">
                      {module.week}
                    </span>
                    <h3 className="text-lg font-black text-stone-900 uppercase tracking-tight leading-none">
                      {module.title}
                    </h3>
                  </div>
                  <div className="ml-4 text-stone-800 p-1.5 bg-stone-100 border border-stone-900">
                    {isExpanded ? <ChevronUp className="h-5 w-5 stroke-[3px]" /> : <ChevronDown className="h-5 w-5 stroke-[3px]" />}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ${
                    isExpanded ? 'border-t-4 border-stone-900 max-h-[1200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="p-6 space-y-6">
                    
                    {/* Description */}
                    <div>
                      <h4 className="text-xs font-mono font-black text-stone-500 uppercase tracking-widest mb-1.5">
                        Module Description
                      </h4>
                      <p className="text-sm text-stone-800 font-semibold leading-relaxed">
                        {module.description}
                      </p>
                    </div>

                    {/* Split Topics & Laboratories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      
                      {/* Lectures / Key Topics */}
                      <div className="p-5 bg-[#F8F9FA] border-3 border-stone-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-2 mb-3 border-b border-stone-200 pb-2">
                          <BookOpen className="h-4 w-4 text-hau-maroon stroke-[2.5px]" />
                          <h5 className="font-black text-xs text-stone-950 uppercase tracking-wider">Key Lecture Topics</h5>
                        </div>
                        <ul className="space-y-2">
                          {module.topics.map((topic, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-stone-850 font-semibold leading-relaxed">
                              <span className="text-hau-maroon shrink-0 font-black">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Laboratory & Hands-on Sandbox */}
                      <div className="p-5 bg-white border-3 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]">
                        <div className="flex items-center gap-2 mb-3 border-b border-stone-200 pb-2">
                          <Terminal className="h-4 w-4 text-hau-maroon stroke-[2.5px]" />
                          <h5 className="font-black text-xs text-stone-950 uppercase tracking-wider">Laboratory Exercises</h5>
                        </div>
                        <ul className="space-y-2">
                          {module.laboratoryExercises.map((lab, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-stone-850 font-bold leading-relaxed">
                              <span className="text-hau-maroon font-black shrink-0 mt-0.5">✔</span>
                              <span>{lab}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Integration Focus Box */}
                    <div className="p-5 bg-stone-900 text-white border-3 border-stone-900 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-[4px_4px_0px_0px_#800000]">
                      <div className="p-2.5 bg-white border-2 border-stone-900 text-hau-maroon shrink-0">
                        <Layers className="h-5 w-5 stroke-[2.5px]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-black text-[#FFD700] uppercase tracking-widest block mb-0.5">
                          SYSTEM INTEGRATION CRITERION
                        </span>
                        <p className="text-xs text-stone-200 leading-relaxed font-semibold">
                          {module.integrationFocus}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Capstone Highlight */}
        <div className="mt-16 max-w-4xl mx-auto p-6 sm:p-8 bg-white border-4 border-stone-900 flex flex-col md:flex-row items-center gap-6 shadow-[8px_8px_0px_0px_#800000]">
          <div className="p-4 bg-[#FFD700] border-3 border-stone-900 text-stone-900 shrink-0 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <FolderKanban className="h-10 w-10 stroke-[2.5px]" />
          </div>
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 text-[10px] font-mono font-black border-2 border-stone-900 bg-hau-maroon text-white uppercase tracking-widest shadow-[2px_2px_0px_0px_#FFD700]">
              Capstone Milestone
            </span>
            <h4 className="text-xl font-black text-stone-900 uppercase tracking-tight">
              Week 18: Integrated React Capstone Defense
            </h4>
            <p className="text-sm text-stone-700 font-semibold leading-relaxed">
              Students defend a fully authenticated, multi-layered enterprise React system dashboard integrating external cloud databases, real-time message feeds, and micro-API proxies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
