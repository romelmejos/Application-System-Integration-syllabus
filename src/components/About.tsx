import { useState } from 'react';
import { BookOpen, CheckCircle, HelpCircle, Code, ShieldCheck, Zap } from 'lucide-react';
import { courseInfoData } from '../data/courseData';

export default function About() {
  const [prereqs, setPrereqs] = useState({
    htmlCss: false,
    jsVars: false,
    jsAsync: false,
    oopConcepts: false,
    gitBasics: false,
  });

  const handleToggle = (key: keyof typeof prereqs) => {
    setPrereqs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(prereqs).filter(Boolean).length;
  const totalCount = Object.keys(prereqs).length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  let recommendation = '';
  let recommendColor = 'text-stone-500';
  if (percentage === 100) {
    recommendation = 'Excellent! You are fully prepared to take SYSINTEG101. You meet all baseline prerequisites.';
    recommendColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
  } else if (percentage >= 60) {
    recommendation = 'Good Progress! You possess a solid baseline. We recommend reviewing asynchronous JavaScript (Promises and Async/Await) before Week 4.';
    recommendColor = 'text-amber-700 bg-amber-50 border-amber-200';
  } else if (completedCount > 0) {
    recommendation = 'Prerequisite Alert: You may encounter significant hurdles during this course. We highly recommend reviewing modern JavaScript fundamentals and OOP paradigms immediately.';
    recommendColor = 'text-rose-700 bg-rose-50 border-rose-200';
  } else {
    recommendation = 'Tick the topics below that you have completed in prior coursework to evaluate your readiness for this course.';
    recommendColor = 'text-stone-600 bg-stone-50 border-stone-200';
  }

  return (
    <section id="about" className="py-24 bg-white border-b-8 border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono font-black tracking-widest text-white bg-hau-maroon px-4 py-2 uppercase border-2 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]">
            Course Overview
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight uppercase mt-4">
            About the ReactJS Integration Course
          </h2>
          <div className="w-24 h-2 bg-[#FFD700] mx-auto mt-4 border-2 border-stone-900" />
          <p className="text-stone-700 mt-4 font-semibold text-lg">
            A comprehensive look into the academic architecture, learning methodologies, and core competencies of {courseInfoData.code} at Holy Angel University.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Context Left (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 uppercase tracking-tight">
              Where Front-end Frameworks Meet <span className="underline decoration-hau-maroon decoration-4">Enterprise Systems</span>
            </h3>
            <p className="text-stone-700 leading-relaxed text-base font-medium">
              In modern enterprise software engineering, standalone static pages are obsolete. <strong>SYSINTEG101: Application and System Integration (ReactJS)</strong> acts as the vital bridge between frontend design patterns and backend systems.
            </p>
            <p className="text-stone-700 leading-relaxed text-base font-medium">
              Offered by the Department of Computer Science at Holy Angel University, this 3rd-year course trains students to build highly scalable React applications that integrate natively with asynchronous database services, legacy systems, and external OAuth2 networks.
            </p>

            {/* Core Values / Pillar List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: Code, title: 'Declarative Engineering', desc: 'Harness React’s declarative rendering architecture, state mechanics, and lifecycle hooks.' },
                { icon: Zap, title: 'System Integration', desc: 'Consume and map complex XML/JSON RESTful endpoints and asynchronous request interceptors.' },
                { icon: ShieldCheck, title: 'Enterprise Security', desc: 'Implement strict route protection, JWT token retention, and third-party credential handshakes.' },
                { icon: BookOpen, title: 'Pragmatic Pedagogy', desc: 'A rigorous syllabus blending structured lectures with hands-on, sandbox laboratory exercises.' },
              ].map((value, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-[#F8F9FA] border-3 border-stone-900 shadow-[4px_4px_0px_0px_#800000]">
                  <div className="p-2.5 bg-white border-2 border-stone-900 text-hau-maroon shrink-0 self-start">
                    <value.icon className="h-5 w-5 stroke-[2.5px]" />
                  </div>
                  <div>
                    <h4 className="font-black text-stone-900 text-sm uppercase tracking-wide">{value.title}</h4>
                    <p className="text-xs text-stone-600 font-semibold mt-1.5 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Prerequisite Tool Right (5 Columns) */}
          <div className="lg:col-span-5 bg-white border-4 border-stone-900 p-6 sm:p-8 shadow-[8px_8px_0px_0px_#800000]">
            <div className="flex items-center gap-3 mb-4 border-b-2 border-stone-900 pb-4">
              <span className="p-2 bg-[#FFD700] border-2 border-stone-900 text-stone-900 shrink-0">
                <CheckCircle className="h-5 w-5 stroke-[2.5px]" />
              </span>
              <h3 className="text-xl font-black text-stone-900 uppercase tracking-tight">
                Are you SYSINTEG-Ready?
              </h3>
            </div>
            <p className="text-xs font-bold text-stone-600 mb-6">
              Assess your academic readiness for this course by checking your proficiency in baseline prerequisites below:
            </p>

            {/* Checkbox Checklist */}
            <div className="space-y-4">
              {[
                { key: 'htmlCss', label: 'HTML5 Semantic markup & Tailwind CSS layouts' },
                { key: 'jsVars', label: 'Intermediate JS (Arrow functions, array maps/filters)' },
                { key: 'jsAsync', label: 'Asynchronous JS (Promises, Fetch API, Async/Await)' },
                { key: 'oopConcepts', label: 'Object-Oriented Programming (Classes, inheritance, ES6 Modules)' },
                { key: 'gitBasics', label: 'Git & GitHub Basics (commit, push, branch, pull request)' },
              ].map((item) => {
                const isChecked = prereqs[item.key as keyof typeof prereqs];
                return (
                  <label
                    key={item.key}
                    className={`flex items-start gap-3 p-3 border-2 transition-all duration-150 cursor-pointer ${
                      isChecked
                        ? 'bg-amber-500/5 border-stone-900 shadow-[3px_3px_0px_0px_#FFD700]'
                        : 'bg-white border-stone-300 hover:border-stone-900'
                    }`}
                  >
                    <input
                      type="checkbox"
                      id={`prereq-check-${item.key}`}
                      checked={isChecked}
                      onChange={() => handleToggle(item.key as keyof typeof prereqs)}
                      className="mt-0.5 h-4 w-4 border-2 border-stone-900 rounded text-hau-maroon focus:ring-0 focus:ring-offset-0"
                    />
                    <span className="text-xs font-black text-stone-800 leading-snug">
                      {item.label}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* Score and Recommendation Panel */}
            <div className="mt-6 pt-5 border-t-2 border-stone-900">
              <div className="flex items-center justify-between text-xs font-mono font-black mb-2 text-stone-800">
                <span>REQUISITE PROFICIENCY</span>
                <span className="text-hau-maroon bg-stone-100 px-2 py-0.5 border border-stone-900">{percentage}%</span>
              </div>
              <div className="w-full bg-stone-200 h-4 border-2 border-stone-900 overflow-hidden mb-4">
                <div
                  className="bg-hau-maroon h-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              {/* Dynamic recommendation alert box */}
              <div className={`p-4 border-2 font-bold text-xs leading-relaxed transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${recommendColor}`}>
                <div className="flex gap-2.5">
                  <HelpCircle className="h-4 w-4 shrink-0 mt-0.5 text-stone-900" />
                  <span className="text-stone-900">{recommendation}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
